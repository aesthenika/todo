import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("g");
    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                onChangeText={onChange} 
                placeholder="Впишите задачу..."
            />
            <Button
                color="rgba(54, 44, 97, 0.50)"

                onPress={() => addHandler(text)}
                title="Добавить задачу"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        marginTop: 40,
        alignItems: "center",
        
        
    },
    input: {
        backgroundColor: "rgba(241, 237, 255, 0.50)",
        width: '90%',
        padding: 10,
        margin: 10,
        color: '#3F385A',

        
    },
})

