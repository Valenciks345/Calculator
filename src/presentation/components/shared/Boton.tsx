import React from 'react';
import { Pressable,  Text } from 'react-native';
import { colors, globalStyles } from '../../../theme/app-theme';

interface Props{
    label: string,
    color?: string,
    doubleSize?: boolean,
    blackText?: boolean,
    onPress: () => void;
}

export const Boton = ({label,
    color = colors.darkGray, 
    doubleSize = false,
    blackText = false,
    onPress
}:Props) => {
    return (
        <Pressable 
        onPress={() => onPress()}
        style={({pressed}) => ({
            ...globalStyles.button,
            opacity:(pressed) ? 0.8 : 1,
            backgroundColor: color,
            width: doubleSize ? 180 : 80,
        })}>
            <Text style={{
                ...globalStyles.buttonText,
                color: blackText ? "#000" : "#fff"
            }}>{label}</Text> 
        </Pressable>
    );
}


