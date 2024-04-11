import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, estilosGlobales } from '../../../theme/app-myTheme';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    label: string,
    background?: string,
    doubleSize?: boolean,
    whiteText?:boolean,
    onPress: () => void,
    onLongPress?: () => void,
}

const BotonCalculator = ({label, 
    background = colors.ligthGray,
    doubleSize = false,
    whiteText = false,
    onPress,
    onLongPress
}: Props) => {
    return (
        <Pressable 
        onPress={onPress}
        onLongPress={onLongPress}
        style = {({pressed}) => ({
        ...estilosGlobales.boton,
        opacity: pressed ? 0.5 : 1,
        backgroundColor:background,
        width: doubleSize ? 170 : 80,
        transform: pressed ? [{scale:0.9}] : [{scale:1}]
        })}>
            <Text style={{
            ...estilosGlobales.botonText,
            color: whiteText ? "#FFFFFF" : colors.black
            }}>{label}</Text>
        </Pressable>

    );
}


export default BotonCalculator;
