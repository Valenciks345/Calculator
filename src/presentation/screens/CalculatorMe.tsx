import React from 'react';
import {Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { estilosGlobales } from '../../theme/app-myTheme';
import BotonCalculator from '../components/shared/BotonCalculator';
import { colors } from '../../theme/app-myTheme';
import UseCalculatorMe from '../hooks/UseCalculatorMe';


const CalculatorMe = () => {

    const {
        mainNumber,
        subNumber,
        operation,
        buildingNumber,
        clean,
        toggleSign, 
        deleteLastNumber,
        addOperation,
        substractOperation,
        divideOperation,
        multiplyOperation,
        calcular
    } = UseCalculatorMe();


    return (
            <View style={estilosGlobales.container}>
                <View style={estilosGlobales.degreeContainer}>
                    <LinearGradient
                    colors={['#006BFF', '#0191FE', '#11AEFF']}
                    style={estilosGlobales.backgroundDegree}>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={{...estilosGlobales.subResult,
                            alignSelf:"center"}}>{operation}</Text>
                            <Text
                            adjustsFontSizeToFit
                            numberOfLines={1} 
                            style={{...estilosGlobales.result,
                            fontSize: (subNumber === "0") ? 100 : 70}}>{mainNumber}
                            </Text>
                        </View>
                        
                        {
                            (subNumber !== "0") &&  <Text style={estilosGlobales.subResult}>{subNumber}</Text>
                        }
                    </LinearGradient>
                    
                    <View style={estilosGlobales.keyboardContainer}>

                        <View style={estilosGlobales.row}>
                            <BotonCalculator label='AC' onPress={clean}/>
                            <BotonCalculator label='+/-'onPress={toggleSign}/>
                            <BotonCalculator label='del' onPress={deleteLastNumber} onLongPress={clean}/>
                            <BotonCalculator label='/' background={colors.ligthAquaBlue} whiteText onPress={divideOperation}/>
                        </View>

                        <View style={estilosGlobales.row}>
                            <BotonCalculator label = '7' onPress={() => buildingNumber('7')}/>
                            <BotonCalculator label = '8' onPress={() => buildingNumber('8')}/>
                            <BotonCalculator label = '9' onPress={() => buildingNumber('9')}/>
                            <BotonCalculator label = 'x' onPress={multiplyOperation} background={colors.ligthAquaBlue} whiteText/>
                        </View>

                        <View style={estilosGlobales.row}>
                            <BotonCalculator label = '4' onPress={() => buildingNumber('4')}/>
                            <BotonCalculator label = '5' onPress={() => buildingNumber('5')}/>
                            <BotonCalculator label='6' onPress={() => buildingNumber('6')}/>
                            <BotonCalculator label='+' onPress={addOperation} background={colors.ligthAquaBlue} whiteText/>
                        </View>

                        <View style={estilosGlobales.row}>
                            <BotonCalculator label='1' onPress={() => buildingNumber('1')}/>
                            <BotonCalculator label='2' onPress={() => buildingNumber('2')}/>
                            <BotonCalculator label='3' onPress={() => buildingNumber('3')}/>
                            <BotonCalculator label='-' onPress={substractOperation} background={colors.ligthAquaBlue} whiteText/>
                        </View>

                        <View style={estilosGlobales.row}>
                            <BotonCalculator label='0' doubleSize onPress={() => buildingNumber('0')}/>
                            <BotonCalculator label='.' onPress={() => buildingNumber('.')}/>
                            <BotonCalculator label='=' onPress={calcular} background={colors.ligthAquaBlue} whiteText/>
                        </View>

                    </View>  


                </View>
            </View>
    );
}

export default CalculatorMe;
