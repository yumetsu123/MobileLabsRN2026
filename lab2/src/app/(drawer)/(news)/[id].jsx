import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getNewsById } from "../../../data/news";

export default function NewsDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const item = getNewsById(id);

  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
    >
      <Pressable style={styles.back} onPress={goBack}>
        <Text style={styles.backText}>← До списку новин</Text>
      </Pressable>

      {item ? (
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.body}>
            <Text style={styles.idText}>Новина #{id}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.text}>{item.summary}</Text>
            <Text style={styles.text}>{item.content}</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.notFound}>Новину з id «{id}» не знайдено</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  back: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backText: {
    color: "#1E3A8A",
    fontSize: 15,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 220,
  },
  body: {
    padding: 16,
  },
  idText: {
    fontSize: 12,
    color: "#1E3A8A",
    fontWeight: "700",
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  date: {
    fontSize: 12,
    color: "#888",
    marginTop: 6,
    marginBottom: 12,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    marginBottom: 12,
  },
  notFound: {
    textAlign: "center",
    marginTop: 40,
    color: "#888",
  },
});