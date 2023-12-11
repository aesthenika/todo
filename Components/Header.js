import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "rgba(241, 237, 255, 0.50)",
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        padding: 25,
    },
    text: {
        alignSelf: 'center',
        fontWeight: 500,
        fontSize: 28,
        color: '#3F385A',
    },
})