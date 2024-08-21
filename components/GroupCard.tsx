import React from "react";
import { Text, View } from './Themed';
import { StyleSheet, Dimensions, useColorScheme } from 'react-native';
import Colors from "@/constants/Colors";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";

// type GroupCardProps = {
//     icon: string;
// }

export default function GroupCard() {
    const colorScheme = useColorScheme();

    const { theme } = useMaterial3Theme();
    return (
        <View style={[styles.container, {backgroundColor:  theme[colorScheme ?? 'light'].surfaceContainerHigh}]}>
            <Text style={[styles.title, {color:  theme[colorScheme ?? 'light'].onSurface}]}>Group Card</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width / 2) - 12,
        aspectRatio: 3/4,
        alignSelf: "flex-start",
        borderRadius: 16,
        padding: 8,
    },
    title: {

    },
    separator: {

    },
})