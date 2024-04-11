import React from 'react';
import { Text, View } from 'react-native';
import { colors, globalStyles } from '../../theme/app-theme';
import { Boton } from '../components/shared/Boton';
import { UseCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {

    const {
        number,
        prevNumber,
        formula,
        buildNumber,
        toggleSign,
        clean,
        deleteOperation,
        multiplyOperation,
        addOperation,
        divideOperation,
        subtractOperation,
        calculateResult
    } = UseCalculator();


    return (
        <View style={globalStyles.calculatorContainer}>
            <View style={{paddingHorizontal:25, paddingBottom:20}}>
                <Text
                adjustsFontSizeToFit
                numberOfLines={1} 
                style={globalStyles.mainResults}
                >
                {formula}
                </Text>
                {
                    formula === prevNumber
                    ? <Text style={globalStyles.subResult}></Text>
                    :<Text
                        adjustsFontSizeToFit
                        numberOfLines={1} 
                        style={globalStyles.subResult}>
                        {prevNumber}
                    </Text>
                }
                
            </View>

            <View style={globalStyles.row}>
                <Boton onPress={clean} label='C' color={colors.ligthGray} blackText/>
                <Boton onPress={toggleSign} label='+/-' color={colors.ligthGray} blackText/>
                <Boton onPress={deleteOperation} label='del' color={colors.ligthGray} blackText/>
                <Boton onPress={divideOperation} label='/' color={colors.orange}/>
            </View>

            <View style={globalStyles.row}>
                <Boton onPress={() => buildNumber('7')} label='7' color={colors.darkGray}/>
                <Boton onPress={() => buildNumber('8')} label='8' color={colors.darkGray}/>
                <Boton onPress={() => buildNumber('9')} label='9' color={colors.darkGray}/>
                <Boton onPress={multiplyOperation} label='x' color={colors.orange}/>
            </View>

            <View style={globalStyles.row}>
                <Boton onPress={() => buildNumber('4')} label='4' color={colors.darkGray}/>
                <Boton onPress={() => buildNumber('5')} label='5' color={colors.darkGray}/>
                <Boton onPress={() => buildNumber('6')} label='6' color={colors.darkGray}/>
                <Boton onPress={subtractOperation} label='-' color={colors.orange}/>
            </View>

            <View style={globalStyles.row}>
                <Boton onPress={() => buildNumber('1')} label='1' color={colors.darkGray}/>
                <Boton onPress={() => buildNumber('2')} label='2' color={colors.darkGray}/>
                <Boton onPress={() => buildNumber('3')} label='3' color={colors.darkGray}/>
                <Boton onPress={addOperation} label='+' color={colors.orange}/>
            </View>

            <View style={globalStyles.row}>
                <Boton onPress={() => buildNumber('0')} label='0' color={colors.darkGray} doubleSize/>
                <Boton onPress={() => buildNumber('.')} label='.' color={colors.darkGray}/>
                <Boton onPress={calculateResult} label='=' color={colors.orange}/>
            </View>
            
        </View>
    );
}


export default CalculatorScreen;
