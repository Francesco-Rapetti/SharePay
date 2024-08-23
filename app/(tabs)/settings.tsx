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
      <View style={{ backgroundColor: "transparent" }}>
        <Text style={styles.title}>Settings</Text>
      </View>
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
});
