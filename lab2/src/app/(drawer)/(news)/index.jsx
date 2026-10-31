import { useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NewsCard, { ITEM_LENGTH } from "../../../components/NewsCard";
import { getNewsPage, PAGE_SIZE, TOTAL_NEWS } from "../../../data/news";

const getItemLayout = (_, index) => ({
  length: ITEM_LENGTH,
  offset: ITEM_LENGTH * index,
  index,
});

const keyExtractor = (item) => item.id;

function formatTime(date) {
  const p = (n) => String(n).padStart(2, "0");
  return `${p(date.getHours())}:${p(date.getMinutes())}:${p(date.getSeconds())}`;
}

export default function NewsListScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [news, setNews] = useState(() => getNewsPage(0, PAGE_SIZE));
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [updatedAt, setUpdatedAt] = useState(() => new Date());
  const busyRef = useRef(false);

  const allLoaded = news.length >= TOTAL_NEWS;

  const handlePress = useCallback(
    (id) => router.push(`/${id}`),
    [router]
  );

  const renderItem = useCallback(
    ({ item }) => <NewsCard item={item} onPress={handlePress} />,
    [handlePress]
  );

  const handleRefresh = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    setRefreshing(true);
    setTimeout(() => {
      setNews(getNewsPage(0, PAGE_SIZE));
      setUpdatedAt(new Date());
      setRefreshing(false);
      busyRef.current = false;
    }, 1000);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    setLoadingMore(true);
    setTimeout(() => {
      setNews((prev) => [...prev, ...getNewsPage(prev.length, PAGE_SIZE)]);
      setLoadingMore(false);
      busyRef.current = false;
    }, 800);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.updated}>
        Оновлено: {formatTime(updatedAt)} · Завантажено {news.length} з{" "}
        {TOTAL_NEWS}
      </Text>

      <FlatList
        data={news}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={allLoaded ? undefined : handleLoadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={7}
        removeClippedSubviews
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 4,
          paddingBottom: insets.bottom + 16,
        }}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator style={styles.footer} />
          ) : allLoaded ? (
            <Text style={styles.footerText}>Це всі новини</Text>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  updated: {
    fontSize: 12,
    color: "#888",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  footer: {
    paddingVertical: 16,
  },
  footerText: {
    textAlign: "center",
    color: "#888",
    paddingVertical: 16,
  },
});