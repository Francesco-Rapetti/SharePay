import { StyleSheet, ScrollView, useColorScheme } from "react-native";

import { View } from "@/components/Themed";
import GroupCard from "@/components/GroupCard";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Spacer } from "@/components/Spacer";
import PrimaryBtn from "@/components/PrimaryBtn";
import React, { useState } from "react";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    console.log(scrollPosition);
    if (scrollPosition > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <>
      <PrimaryBtn
        iconName="plus"
        text="New Group"
        onPress={() => {
          console.log("new group");
        }}
        scrolled={scrolled}
      />
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: theme[colorScheme ?? "light"].background },
        ]}
        onScroll={handleScroll}
      >
        <View style={styles.cardContainer}>
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </View>
        <Spacer height={110} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    padding: 8,
  },
  cardContainer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", // Aggiunto per far sì che i card passino alla riga successiva se necessario
    gap: 8, // Aggiunto per mantenere un po' di spazio tra i card
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 200,
  },
  btnText: {},
});

// function handleScroll(event: any) {

// }
