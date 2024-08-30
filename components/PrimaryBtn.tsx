import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

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
    const paddingRight = interpolate(containerScale.value, [0, 1], [110, 15]);
    const borderRadius = interpolate(containerScale.value, [0, 1], [50, 15]);

    return {
      paddingHorizontal: 15,
      paddingRight,
      borderRadius,
    };
  });

  const sizeValue = useSharedValue<number>(0);
  const opacityValue = useSharedValue<number>(1);
  let isAnimating = false;
  const handlePressAnimation = () => {
    if (isAnimating) return;
    isAnimating = true;
    sizeValue.value = withTiming(1, { duration: 300 }, () => {
      sizeValue.value = withTiming(0, { duration: 300 });
    });
    opacityValue.value = withTiming(0, { duration: 600 }, () => {
      opacityValue.value = withTiming(1, { duration: 0 });
    });
    setTimeout(() => {
      isAnimating = false;
    }, 600);
  };

  const animatedOverlayStyle = useAnimatedStyle(() => {
    const opacity = interpolate(opacityValue.value, [1, 0], [1, 0]);
    const size = interpolate(sizeValue.value, [0, 1], [1, 10]);
    return {
      opacity,
      transform: [{ scale: size }],
    };
  });

  return (
    <Pressable
      onPressIn={handlePressAnimation}
      onPress={onPress}
      style={[styles.button]}
      {...props}
    >
      <Animated.View
        style={[
          animatedContainerStyle,
          styles.container,
          { backgroundColor: theme[colorScheme ?? "light"].primary },
        ]}
      >
        <Animated.View
          style={[
            animatedOverlayStyle,
            {
              backgroundColor: theme[colorScheme ?? "light"].onPrimary,
            },
            {
              borderRadius: 50,
              aspectRatio: 1,
              opacity: 1,
              width: 60,
              position: "absolute",
              left: -60,
              justifyContent: "center",
              alignItems: "center",
              height: 60,
            },
          ]}
        ></Animated.View>
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
    paddingVertical: 15,
  },
  button: {
    position: "absolute",
    zIndex: 999,
    bottom: 100,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 20,
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
