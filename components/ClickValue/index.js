import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ClickValue = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.value}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center'
    },
    text: {
        fontSize: 70,
    }
});
export default ClickValue;