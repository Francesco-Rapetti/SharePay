import { ScrollView, StyleSheet, useColorScheme } from 'react-native';

import { Stack } from 'expo-router';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import PaletteCard from '@/components/PaletteCard';
import { Spacer } from '@/components/Spacer';

export default function ModalScreen() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  return (
    <ScrollView style={[styles.container , { backgroundColor: colorScheme === 'dark' ? 'black' : 'white'}]}>
      <Stack.Screen options={{ 
          headerStyle: { 
            backgroundColor: theme[colorScheme ?? 'light'].surfaceContainerHigh,
          }, 
          headerTintColor: theme[colorScheme ?? 'light'].onSurface,
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: 'bold',
          }
        }} />
      <PaletteCard materialColor='primary' style={{backgroundColor: theme[colorScheme ?? 'light'].primary}} fontColor={theme[colorScheme ?? 'light'].onPrimary}/>
      <PaletteCard materialColor='onPrimary' style={{backgroundColor: theme[colorScheme ?? 'light'].onPrimary}} fontColor={theme[colorScheme ?? 'light'].primary}/>
      <PaletteCard materialColor='primaryContainer' style={{backgroundColor: theme[colorScheme ?? 'light'].primaryContainer}} fontColor={theme[colorScheme ?? 'light'].onPrimaryContainer}/>
      <PaletteCard materialColor='onPrimaryContainer' style={{backgroundColor: theme[colorScheme ?? 'light'].onPrimaryContainer}} fontColor={theme[colorScheme ?? 'light'].primaryContainer}/>
      <Spacer height={20} />
      <PaletteCard materialColor='secondary' style={{backgroundColor: theme[colorScheme ?? 'light'].secondary}} fontColor={theme[colorScheme ?? 'light'].onSecondary}/>
      <PaletteCard materialColor='onSecondary' style={{backgroundColor: theme[colorScheme ?? 'light'].onSecondary}} fontColor={theme[colorScheme ?? 'light'].secondary}/>
      <PaletteCard materialColor='secondaryContainer' style={{backgroundColor: theme[colorScheme ?? 'light'].secondaryContainer}} fontColor={theme[colorScheme ?? 'light'].onSecondaryContainer}/>
      <PaletteCard materialColor='onSecondaryContainer' style={{backgroundColor: theme[colorScheme ?? 'light'].onSecondaryContainer}} fontColor={theme[colorScheme ?? 'light'].secondaryContainer}/>
      <Spacer height={20} />
      <PaletteCard materialColor='tertiary' style={{backgroundColor: theme[colorScheme ?? 'light'].tertiary}} fontColor={theme[colorScheme ?? 'light'].onTertiary}/>
      <PaletteCard materialColor='onTertiary' style={{backgroundColor: theme[colorScheme ?? 'light'].onTertiary}} fontColor={theme[colorScheme ?? 'light'].tertiary}/>
      <PaletteCard materialColor='tertiaryContainer' style={{backgroundColor: theme[colorScheme ?? 'light'].tertiaryContainer}} fontColor={theme[colorScheme ?? 'light'].onTertiaryContainer}/>
      <PaletteCard materialColor='onTertiaryContainer' style={{backgroundColor: theme[colorScheme ?? 'light'].onTertiaryContainer}} fontColor={theme[colorScheme ?? 'light'].tertiaryContainer}/>
      <Spacer height={20} />
      <PaletteCard materialColor='background' style={{backgroundColor: theme[colorScheme ?? 'light'].background}} fontColor={theme[colorScheme ?? 'light'].onBackground}/>
      <PaletteCard materialColor='onBackground' style={{backgroundColor: theme[colorScheme ?? 'light'].onBackground}} fontColor={theme[colorScheme ?? 'light'].background}/>
      <PaletteCard materialColor='surface' style={{backgroundColor: theme[colorScheme ?? 'light'].surface}} fontColor={theme[colorScheme ?? 'light'].onSurface}/>
      <PaletteCard materialColor='onSurface' style={{backgroundColor: theme[colorScheme ?? 'light'].onSurface}} fontColor={theme[colorScheme ?? 'light'].surface}/>
      <Spacer height={20} />
      <PaletteCard materialColor='surfaceVariant' style={{backgroundColor: theme[colorScheme ?? 'light'].surfaceVariant}} fontColor={theme[colorScheme ?? 'light'].onSurfaceVariant}/>
      <PaletteCard materialColor='onSurfaceVariant' style={{backgroundColor: theme[colorScheme ?? 'light'].onSurfaceVariant}} fontColor={theme[colorScheme ?? 'light'].surfaceVariant}/>
      <PaletteCard materialColor='outline' style={{backgroundColor: theme[colorScheme ?? 'light'].outline}}/>
      <PaletteCard materialColor='outlineVariant' style={{backgroundColor: theme[colorScheme ?? 'light'].outlineVariant}}/>
      <Spacer height={20} />
      <PaletteCard materialColor='surfaceContainerLowest' style={{backgroundColor: theme[colorScheme ?? 'light'].surfaceContainerLowest}} fontColor={theme[colorScheme ?? 'light'].onSurface}/>
      <PaletteCard materialColor='surfaceContainerLow' style={{backgroundColor: theme[colorScheme ?? 'light'].surfaceContainerLow}} fontColor={theme[colorScheme ?? 'light'].onSurface}/>
      <PaletteCard materialColor='surfaceContainer' style={{backgroundColor: theme[colorScheme ?? 'light'].surfaceContainer}} fontColor={theme[colorScheme ?? 'light'].onSurface}/>
      <PaletteCard materialColor='surfaceContainerHigh' style={{backgroundColor: theme[colorScheme ?? 'light'].surfaceContainerHigh}} fontColor={theme[colorScheme ?? 'light'].onSurface}/>
      <PaletteCard materialColor='surfaceContainerHighest' style={{backgroundColor: theme[colorScheme ?? 'light'].surfaceContainerHighest}} fontColor={theme[colorScheme ?? 'light'].onSurface}/>
      <Spacer height={20} />
      <PaletteCard materialColor='inverseSurface' style={{backgroundColor: theme[colorScheme ?? 'light'].inverseSurface}} fontColor={theme[colorScheme ?? 'light'].surface}/>
      <PaletteCard materialColor='inverseOnSurface' style={{backgroundColor: theme[colorScheme ?? 'light'].inverseOnSurface}} fontColor={theme[colorScheme ?? 'light'].onSurface}/>
      <PaletteCard materialColor='inversePrimary' style={{backgroundColor: theme[colorScheme ?? 'light'].inversePrimary}} fontColor={theme[colorScheme ?? 'light'].primary}/>
      <PaletteCard materialColor='shadow' style={{backgroundColor: theme[colorScheme ?? 'light'].shadow}} fontColor={theme[colorScheme ?? 'light'].primary}/>
      <PaletteCard materialColor='surfaceTint' style={{backgroundColor: theme[colorScheme ?? 'light'].surfaceTint}} fontColor={theme[colorScheme ?? 'light'].surface}/>
      <PaletteCard materialColor="surfaceDisabled" style={{backgroundColor: theme[colorScheme ?? 'light'].surfaceDisabled}} fontColor={theme[colorScheme ?? 'light'].onSurfaceDisabled}/>
      <Spacer height={20} />
      <PaletteCard materialColor='error' style={{backgroundColor: theme[colorScheme ?? 'light'].error}} fontColor={theme[colorScheme ?? 'light'].onError}/>
      <PaletteCard materialColor='onError' style={{backgroundColor: theme[colorScheme ?? 'light'].onError}} fontColor={theme[colorScheme ?? 'light'].error}/>
      <PaletteCard materialColor='errorContainer' style={{backgroundColor: theme[colorScheme ?? 'light'].errorContainer}} fontColor={theme[colorScheme ?? 'light'].onErrorContainer}/>
      <PaletteCard materialColor='onErrorContainer' style={{backgroundColor: theme[colorScheme ?? 'light'].onErrorContainer}} fontColor={theme[colorScheme ?? 'light'].errorContainer}/>
      <Spacer height={25} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingBottom: 300,
    // alignItems: 'center',
    // justifyContent: 'center',
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
