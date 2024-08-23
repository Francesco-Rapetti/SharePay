import React, { useEffect, useRef } from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable, ViewStyle } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import TabBar from "@/components/TabBar";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
  focused?: boolean;
}) {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  const padding = useSharedValue(5);
  const animatedRef = useRef(null);
  
  useEffect(() => {
    padding.value = withSpring(
      props.focused ? 20 : 5,
      {
        duration: 5000, // Adjust duration as needed
      }
    );
  }, [props.focused]);

  const animatedIconStyle = useAnimatedStyle((): ViewStyle => {
    return {
      paddingHorizontal: padding.value,
    }
  })

  return (
    <Animated.View 
      ref={animatedRef}
      style={[animatedIconStyle, { 
        backgroundColor: props.focused ? theme[colorScheme ?? 'light'].secondaryContainer : theme[colorScheme ?? 'light'].secondaryContainer,
        borderRadius: 50,
        // paddingHorizontal: 20,
        // width: widthValue,
        paddingVertical: 2,
        alignItems: 'center',
      }]}>
      <MaterialCommunityIcons size={28} style={{ marginBottom: 0 }} {...props} />
    </Animated.View>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  return (
    <Tabs
      // tabBar={props => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: theme[colorScheme ?? 'light'].onSurface,
        tabBarInactiveTintColor: theme[colorScheme ?? 'light'].onSurface,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        // headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          backgroundColor: theme[colorScheme ?? 'light'].surfaceContainerHigh,
          borderBottomWidth: 0,
          shadowColor: theme[colorScheme ?? "light"].shadow,
        },
        headerTitleStyle: {
          color: theme[colorScheme ?? 'light'].onSurface,
          fontSize: 26,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 10,
          borderRadius: 25,
          borderCurve: 'continuous',
          shadowColor: theme[colorScheme ?? "light"].shadow,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          backgroundColor: theme[colorScheme ?? 'light'].surfaceContainerHigh,
          height: 80,
          paddingBottom: 15,
          paddingTop: 15,
          borderTopWidth: 0,
        },
        tabBarBadgeStyle: {
          color: theme[colorScheme ?? 'light'].onTertiary,
          backgroundColor: theme[colorScheme ?? 'light'].tertiary
        }
      }}>
        
      <Tabs.Screen
        name="index"
        options={{
          title: 'Groups',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={ focused ? 'account-group' : 'account-group-outline' } color={color} focused={focused} />,
          headerRight: () => (
            <Link href="/Palette" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name={ pressed ? "palette" : "palette-outline" }
                    size={25}
                    color={theme[colorScheme ?? 'light'].onSurface}
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
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={ focused ? 'cog' : 'cog-outline' } color={color} focused={focused} />,
          // tabBarBadge: 3,
          
        }}
      />
    </Tabs>
  );
}
