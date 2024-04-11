import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { estilosGlobales } from '../../../theme/app-myTheme';
import UseSwitch from '../../hooks/useSwitch';
import LinearGradient from 'react-native-linear-gradient';

export const BotonDarkMode = () => {

    return (
        <LinearGradient
        colors={['#006BFF', '#0191FE', '#11AEFF']}
        style={{width:100, height:100, borderRadius:6}}>
            <Pressable style={{flex:1, justifyContent:"center"}}>
                <Text style={{textAlign:"center", color:"#FFF", fontSize:30}}>Hola</Text>
            </Pressable>
        </LinearGradient>
    );
}


