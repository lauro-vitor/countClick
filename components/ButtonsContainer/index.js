import React from 'react';
import {StyleSheet, View} from 'react-native';
const ButtonsContainer = props => {
    return(
        <View style={styles.container}>
            {props.children}
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
export default ButtonsContainer;