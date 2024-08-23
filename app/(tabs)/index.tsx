import { StyleSheet, ScrollView, Button, useColorScheme } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import GroupCard from '@/components/GroupCard';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { Spacer } from '@/components/Spacer';

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  return (
    <ScrollView style={[styles.container, {backgroundColor:  theme[colorScheme ?? 'light'].background}]}>
      {/* <Text style={[styles.title, {color:  theme[colorScheme ?? 'light'].onSurface}]}>Tab One</Text> */}
      {/* <Button title="Go to Details" onPress={() => {console.log("ciao, bottone di prova")}} /> */}
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
      {/* <View style={styles.separator} /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </ScrollView>
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
    flexDirection: 'row',
    flexWrap: 'wrap', // Aggiunto per far sì che i card passino alla riga successiva se necessario
    gap: 8, // Aggiunto per mantenere un po' di spazio tra i card
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
