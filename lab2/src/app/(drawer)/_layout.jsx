import { Ionicons } from "@expo/vector-icons";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../../context/AuthContext";

const ACTIVE = "#1E3A8A";

function CustomDrawerContent({ state, descriptors, navigation }) {
  const { logout } = useAuth();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top + 8 }}>
      <ScrollView>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const focused = state.index === index;
          const color = focused ? ACTIVE : "#444";
          const label = options.drawerLabel ?? options.title ?? route.name;

          return (
            <Pressable
              key={route.key}
              style={[styles.item, focused && styles.itemActive]}
              onPress={() => navigation.navigate(route.name)}
            >
              {options.drawerIcon
                ? options.drawerIcon({ color, size: 22, focused })
                : null}
              <Text style={[styles.itemText, { color }]}>{label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <Pressable
        style={[styles.logout, { marginBottom: insets.bottom + 12 }]}
        onPress={logout}
      >
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Вийти</Text>
      </Pressable>
    </View>
  );
}

export default function DrawerLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: ACTIVE,
        headerTintColor: ACTIVE,
      }}
    >
      <Drawer.Screen
        name="(news)"
        options={{
          title: "Новини",
          drawerLabel: "Новини",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="faq"
        options={{
          title: "Довідковий центр",
          drawerLabel: "Довідковий центр",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginHorizontal: 12,
    marginBottom: 4,
    paddingHorizontal: 12,
    height: 48,
    borderRadius: 10,
  },
  itemActive: {
    backgroundColor: "#E0E7FF",
  },
  itemText: {
    fontSize: 15,
    fontWeight: "600",
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#DC2626",
    marginHorizontal: 16,
    height: 44,
    borderRadius: 10,
  },
  logoutText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});