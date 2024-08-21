import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={28} style={{ marginBottom: 0 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme[colorScheme ?? 'light'].onSecondaryContainer,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          backgroundColor: theme[colorScheme ?? 'light'].surfaceContainer,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          color: theme[colorScheme ?? 'light'].onSurface
        },
        tabBarStyle: {
          backgroundColor: theme[colorScheme ?? 'light'].surfaceContainer,
          height: 80,
          paddingBottom: 15,
          paddingTop: 10,
          borderTopWidth: 0,
        },
        tabBarBadgeStyle: {
          color: theme[colorScheme ?? 'light'].onTertiary,
          backgroundColor: theme[colorScheme ?? 'light'].tertiary
        }
      }}>
      <Tabs.Screen
        name="groups"
        options={{
          title: 'Groups',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={ focused ? 'account-group' : 'account-group-outline' } color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="information-outline"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={ focused ? 'cog' : 'cog-outline' } color={color} />,
          tabBarBadge: 3,
          
        }}
      />
    </Tabs>
  );
}
