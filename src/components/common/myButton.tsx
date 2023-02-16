import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import { Spinner } from './spinner';


const MyButton = ({ spinner, title, onPress, color }) => {
    const content = spinner ? (
        <Spinner />
    ) : (
        <Button onPress={onPress} color={color} title={title} />
    )

    return (
        <View style={styles.buttonWrapper}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 49,
        justifyContent: 'center',
        fontSize: 17,
      }
});

export { MyButton };