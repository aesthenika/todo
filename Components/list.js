import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity   onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
    text: {
        padding: 20,
        backgroundColor: "rgba(241, 237, 255, 0.50)",
        marginTop: 20,
        width: "90%",
        alignSelf: "center",
        color: '#3F385A',
    },


});
