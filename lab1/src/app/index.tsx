import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
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

      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          placeholder="Пошук..."
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Image
            source={{ uri: "https://picsum.photos/400/200?random=1" }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>
            Житомирська політехніка – учасник міжнародного проєкту
          </Text>
          <Text style={styles.cardDate}>17 вересня 2025 р.</Text>
          <Text style={styles.cardText}>
            Житомирська політехніка долучається до міжнародного освітнього
            проєкту Pilot Program for Enhancing Cybersecurity Skills Gaps in
            Ukraine.
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: "https://picsum.photos/400/200?random=2" }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>
            VII Всеукраїнська науково-практична конференція
          </Text>
          <Text style={styles.cardDate}>22 жовтня 2025 р. 10:00</Text>
          <Text style={styles.cardText}>
            Запрошуємо до участі у VII Всеукраїнській науково-практичній
            конференції «Правова політика України».
          </Text>
        </View>
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
    marginBottom: 12,
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
    color: "#111",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    paddingHorizontal: 12,
    height: 42,
    borderRadius: 12,
    marginBottom: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
  },
  feed: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 16,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 160,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    paddingHorizontal: 12,
    paddingTop: 10,
    color: "#111",
  },
  cardDate: {
    fontSize: 12,
    color: "#888",
    paddingHorizontal: 12,
    marginTop: 4,
  },
  cardText: {
    fontSize: 13,
    color: "#444",
    paddingHorizontal: 12,
    paddingBottom: 12,
    marginTop: 6,
  },
});
