import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";

type PaletteCardProps = {
  materialColor: string;
  style?: any;
  fontColor?: any;
};

export default function PaletteCard({
  materialColor,
  style,
  fontColor,
}: PaletteCardProps) {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme[colorScheme ?? "light"].surfaceContainerHigh },
        style,
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: fontColor ?? theme[colorScheme ?? "light"].onSurface },
        ]}
      >
        {materialColor}
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    alignSelf: "center",
    borderRadius: 16,
    padding: 8,
    marginBottom: 8,
  },
  title: {},
  separator: {},
});
