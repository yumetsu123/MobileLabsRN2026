import { memo } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export const CARD_HEIGHT = 112;
export const CARD_MARGIN = 12;
export const ITEM_LENGTH = CARD_HEIGHT + CARD_MARGIN;

function NewsCard({ item, onPress }) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(item.id)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.summary} numberOfLines={2}>
          {item.summary}
        </Text>
      </View>
    </Pressable>
  );
}

export default memo(NewsCard);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    height: CARD_HEIGHT,
    marginBottom: CARD_MARGIN,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: "100%",
  },
  body: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
  },
  date: {
    fontSize: 11,
    color: "#888",
  },
  summary: {
    fontSize: 12,
    color: "#444",
  },
});