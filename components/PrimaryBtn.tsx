import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, useColorScheme } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function PrimaryBtn({
  iconName,
  text,
  onPress,
  scrolled = false,
  ...props
}: {
  iconName: any;
  text: string;
  onPress: any;
  scrolled?: boolean;
}) {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  const [textWidth, setTextWidth] = useState(200);

  const scale = useSharedValue(0);
  const containerScale = useSharedValue(0);
  // console.log(scrolled);

  useEffect(() => {
    scale.value = withSpring(scrolled ? 1 : 0, { duration: 600 });
  }, [scale, scrolled]);

  useEffect(() => {
    containerScale.value = withSpring(scrolled ? 1 : 0, { duration: 350 });
  }, [containerScale, scrolled]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const rotate = interpolate(scale.value, [0, 1], [0, 180]);
    const transformScale = interpolate(scale.value, [0, 1], [1, 1.5]);

    return {
      transform: [{ rotate: `${rotate}deg` }, { scale: transformScale }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    const transformX = interpolate(scale.value, [0, 1], [0, 30]);
    return {
      opacity,
      transform: [{ translateX: transformX }],
    };
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    const padding = interpolate(containerScale.value, [0, 1], [20, 15]);
    const paddingRight = interpolate(containerScale.value, [0, 1], [110, 15]);

    return {
      paddingHorizontal: 15,
      paddingRight,
    };
  });

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: theme[colorScheme ?? "light"].primary },
      ]}
      {...props}
    >
      <Animated.View style={[animatedContainerStyle, styles.container]}>
        <Animated.View style={animatedIconStyle}>
          <MaterialCommunityIcons
            name={iconName}
            size={24}
            color={theme[colorScheme ?? "light"].onPrimary}
          />
        </Animated.View>
        <Animated.Text
          id="Pressable"
          onLayout={(event) => {
            const { width } = event.nativeEvent.layout;
            setTextWidth(width);
          }}
          style={[
            styles.btnText,
            animatedTextStyle,
            { color: theme[colorScheme ?? "light"].onPrimary },
          ]}
        >
          {text}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  button: {
    position: "absolute",
    zIndex: 999,
    bottom: 100,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    // paddingHorizontal: 20,
    borderRadius: 50,
    flexDirection: "row",
    margin: 15,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    left: 45,
  },
});
