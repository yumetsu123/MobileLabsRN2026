import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";

export default function ProfileScreen() {
  const [notifications, setNotifications] = useState(true);

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

      <View style={styles.avatarSection}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={50} color="#fff" />
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>ПІБ</Text>
        <TextInput
          style={styles.input}
          value="Грицай Іван Вікторович"
          editable={false}
        />

        <Text style={styles.sectionTitle}>КОНТАКТИ</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value="ipz235_giv@student.ztu.edu.ua"
          editable={false}
        />

        <Text style={styles.label}>Група</Text>
        <TextInput style={styles.input} value="ІПЗ-23-5" editable={false} />

        <Text style={styles.sectionTitle}>НАЛАШТУВАННЯ</Text>

        <View style={styles.switchRow}>
          <View style={styles.switchLeft}>
            <Ionicons name="notifications-outline" size={20} color="#333" />
            <Text style={styles.switchText}>Сповіщення</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ true: "#1E3A8A" }}
          />
        </View>
      </View>
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
    marginBottom: 20,
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
  avatarSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#1E3A8A",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
  },
  label: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 44,
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#888",
    marginTop: 20,
    marginBottom: 4,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  switchLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  switchText: {
    fontSize: 15,
  },
});
