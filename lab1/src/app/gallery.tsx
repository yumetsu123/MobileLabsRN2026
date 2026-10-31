import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const photos = [
  "https://picsum.photos/300/300?random=10",
  "https://picsum.photos/300/300?random=11",
  "https://picsum.photos/300/300?random=12",
  "https://picsum.photos/300/300?random=13",
  "https://picsum.photos/300/300?random=14",
  "https://picsum.photos/300/300?random=15",
  "https://picsum.photos/300/300?random=16",
  "https://picsum.photos/300/300?random=17",
];

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logo} />
          <View>
            <Text style={styles.headerTitle}>Лабораторна робота 1</Text>
            <Text style={styles.headerSubtitle}>Грицай І.В., ІПЗ-23-5</Text>
          </View>
        </View>
        <Ionicons name="settings-outline" size={24} color="#333" />
      </View>

      <Text style={styles.title}>Фотогалерея</Text>

      <ScrollView contentContainerStyle={styles.grid}>
        {photos.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.photo} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#1E3A8A",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
    gap: 8,
  },
  photo: {
    width: "48%",
    height: 160,
    borderRadius: 12,
  },
});
