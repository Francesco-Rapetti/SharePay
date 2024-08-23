import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import React, { useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function TabBarButton({
  onPress,
  onLongPress,
  routeName,
  isFocused,
  label,
  icon,
}: {
  onPress: any;
  onLongPress: any;
  routeName: string;
  isFocused: boolean;
  label: string;
  icon: any;
}) {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 300 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const padding = interpolate(scale.value, [0, 1], [0, 20]);

    return {
      paddingHorizontal: padding,
    };
  });

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItem}
    >
      <Animated.View
        style={[
          animatedIconStyle,
          styles.tabbarIconContainer,
          {
            backgroundColor: isFocused
              ? theme[colorScheme ?? "light"].secondaryContainer
              : "transparent",
          },
        ]}
      >
        {icon[routeName]({
          isFocused: isFocused,
          size: 26,
          style: [
            styles.tabbarIcon,
            { color: theme[colorScheme ?? "light"].onSurface },
            { opacity: isFocused ? 1 : 0.8 },
          ],
        })}
      </Animated.View>
      <Animated.Text
        style={[
          // animatedTextStyle,
          styles.tabbarText,
          { color: theme[colorScheme ?? "light"].onSurface },
          { opacity: isFocused ? 1 : 0.8 },
        ]}
      >
        {label.toString()}
      </Animated.Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    backgroundColor: "transparent",
  },
  tabbarText: {
    fontSize: 12,
    fontWeight: 700,
  },
  tabbarIcon: {
    paddingVertical: 2,
  },
  tabbarIconContainer: {
    borderRadius: 50,
    paddingHorizontal: 20,
    // overflow: "hidden",
  },
});
