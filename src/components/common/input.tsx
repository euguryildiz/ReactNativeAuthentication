import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const Input = ({ text, inputPlaceHolder, onChangeText, value, secureTextEntry }) => {
    const { inputWrapper, textStyle, inputStyle } = styles;
    return (
        <View style={inputWrapper}>
            <Text style={textStyle}>{text}</Text>
            <TextInput style={inputStyle}
                secureTextEntry={secureTextEntry}
                placeholder={inputPlaceHolder} 
                onChangeText={onChangeText}
                value={value}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        height: 50,
        width: 'auto',
        borderColor: '#E5E5E8',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    textStyle: {
        paddingLeft: 20,
        flexGrow: 1, 
        fontSize: 15,
    },
    inputStyle: {
        flexGrow: 2,
        fontSize: 13
    }   
});

export { Input };
