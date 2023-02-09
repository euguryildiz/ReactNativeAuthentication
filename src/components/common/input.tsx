import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const Input = ({ text, inputPlaceHolder }) => {
    const { inputWrapper, textStyle, inputStyle } = styles;
    return (
        <View styles={inputWrapper}>
            <Text style={textStyle}>{text}</Text>
            <TextInput styles={inputStyle}
                placeholder={inputPlaceHolder} 
                />
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {

    },
    textStyle: {

    },
    inputStyle: {

    }
})
export { Input };
