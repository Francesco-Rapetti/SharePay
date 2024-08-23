import { StyleSheet, useColorScheme } from "react-native";
import { Text, View } from "@/components/Themed";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme[colorScheme ?? "light"].background },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: theme[colorScheme ?? "light"].onBackground },
        ]}
      >
        Profile tab
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
