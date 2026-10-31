import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SECTIONS = [
  {
    title: "Навчання",
    data: [
      {
        id: "s1",
        q: "Де можна переглянути розклад занять?",
        a: "Актуальний розклад публікується на сайті університету в розділі «Студентам» та в корпоративному застосунку.",
      },
      {
        id: "s2",
        q: "Як отримати довідку з місця навчання?",
        a: "Довідку можна замовити у деканаті факультету або через електронний кабінет студента.",
      },
      {
        id: "s3",
        q: "Коли відбувається сесія?",
        a: "Терміни екзаменаційної сесії вказані в графіку навчального процесу, який затверджується на початку семестру.",
      },
    ],
  },
  {
    title: "Застосунок",
    data: [
      {
        id: "a1",
        q: "Як оновити стрічку новин?",
        a: "Потягніть список вниз (Pull-to-Refresh), і новини буде завантажено з початку.",
      },
      {
        id: "a2",
        q: "Чому новини підвантажуються по частинах?",
        a: "Список використовує Infinite Scroll: нові елементи додаються, коли ви наближаєтесь до кінця списку.",
      },
      {
        id: "a3",
        q: "Як відкрити бічне меню?",
        a: "Натисніть іконку меню в заголовку або проведіть пальцем від лівого краю екрана.",
      },
    ],
  },
  {
    title: "Акаунт",
    data: [
      {
        id: "k1",
        q: "Як вийти з акаунта?",
        a: "Відкрийте бічне меню та натисніть кнопку «Вийти» внизу.",
      },
      {
        id: "k2",
        q: "Що робити, якщо не вдається увійти?",
        a: "Перевірте логін і пароль. Для тестового входу використовуйте admin / 1234.",
      },
      {
        id: "k3",
        q: "Чи зберігаються мої дані після виходу?",
        a: "У цій навчальній версії стан авторизації зберігається лише під час роботи застосунку.",
      },
    ],
  },
];

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <Pressable style={styles.item} onPress={() => setOpen((v) => !v)}>
      <View style={styles.row}>
        <Text style={styles.question}>{item.q}</Text>
        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={18}
          color="#666"
        />
      </View>
      {open ? <Text style={styles.answer}>{item.a}</Text> : null}
    </Pressable>
  );
}

export default function FaqScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SectionList
      style={styles.container}
      sections={SECTIONS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FaqItem item={item} />}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      stickySectionHeadersEnabled
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: insets.bottom + 16,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E3A8A",
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    textTransform: "uppercase",
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  question: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },
  answer: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: "#444",
  },
});