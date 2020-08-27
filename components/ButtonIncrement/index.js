import React from 'react';
import { Button } from 'react-native';

const ButtonDecrement = props => (
    <Button
        onPress={props.onPress}
        title="INCREMENT"
    />
);

export default ButtonDecrement;