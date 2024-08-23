import React from "react";
import { Link, Tabs } from "expo-router";
import { Pressable, Text } from "react-native";

import { useColorScheme } from "@/components/useColorScheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import TabBar from "@/components/TabBar";
import Constants from "expo-constants";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme[colorScheme ?? "light"].surfaceContainer,
          borderBottomWidth: 0,
          shadowColor: theme[colorScheme ?? "light"].shadow,
        },
        headerTitleStyle: {
          color: theme[colorScheme ?? "light"].onSurface,
          fontSize: 26,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Groups",
          headerRight: () => (
            <Link href="/Palette" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name={pressed ? "palette" : "palette-outline"}
                    size={25}
                    color={theme[colorScheme ?? "light"].onSurface}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerRight: () => {
            return (
              <Text
                style={[
                  { color: theme[colorScheme ?? "light"].onSurface },
                  { fontWeight: "bold" },
                  { marginRight: 15 },
                ]}
              >
                v{Constants.expoConfig?.version}
              </Text>
            );
          },
        }}
      />
    </Tabs>
  );
}
