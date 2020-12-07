import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { icons } from '../global';

const Icons = ({ name, size, color, ...rest }) => {
    return (
        <Image
            source={icons[name]}
            style={{ height: size, width: size, tintColor: color }}
            {...rest}
        />
    )
}

export default Icons;

Icons.defaultProps = {
    size: 40,
    color: 'black'
}

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30
    }
})
