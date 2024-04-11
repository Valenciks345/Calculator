import React, { useEffect, useRef, useState } from 'react';

enum Operator {
    add = "+",
    subtract = "-",
    multiply = "*",
    divide = "/"
}

export const UseCalculator = () => {

    const [formula, setFormula] = useState('')

    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    const lastOperation = useRef<Operator>();

    useEffect(() => {
        if(lastOperation.current){
            const firtsFormulaPart = formula.split(' ').at(0);
            setFormula(`${firtsFormulaPart} ${lastOperation.current} ${number}`)
        }else{
            setFormula(number);
        }
    }, [number]);

    useEffect(() => {
    const subResult = calculatedSubResult();
    setPrevNumber(`${subResult}`)
    }, [formula])
    
    

    //Borar todo el numero, limpiar

    const clean = () =>{
        setNumber("0");
        setPrevNumber('0');
        lastOperation.current = undefined;
        setFormula('')
    }

    //Borrar ultimo dijgito de la operacion

    const deleteOperation = () => {
        
        let currentSign = "";
        let temporalNumber = number;

        if(number.includes("-")){
            currentSign = "-";
            temporalNumber = number.substring(1)
        }

        if (temporalNumber.length > 1){
            return setNumber(currentSign + temporalNumber.slice(0,-1));
        }

        setNumber("0")
    }

    //Cambiar signo de la operacion

    const toggleSign = () =>{
        if( number.includes("-")){
            return setNumber(number.replace("-",""))
        }
        setNumber( "-" + number);
    }

    // ir construyendo el numero en tiempo real
    const buildNumber = (numberString: string) => {

        //Si el numero tiene un punto y presionamos nuevamente el punto

        if (number.includes('.') && numberString === '.') return;

        //Si el valor inicia en -0 y queremos conservar el signo minetras esribimos

        if (number === '-0') {
            if (numberString !== '0' && numberString !== '.') {
                return setNumber('-' + numberString);
            }
        }

        if ( number.startsWith("0") || number.startsWith("-0")){

            //Punto decimal
            if(numberString === '.'){
                return setNumber(number + numberString);
            }

            // Evaluar si es otro cero y no hay punto

            if(numberString === '0' && number.includes('.')){
                return setNumber( number + numberString)
            } 

            // Evaluar si es diferente de cero, no hay punto, y es el primer numero

            if(numberString !== '0' && !number.includes('.')){
                return setNumber(numberString)
            }

            //Evitar 000000000

            if(numberString === "0"  && !number.includes(".")){
                return;
            }


            return setNumber( number + numberString)

        }


        setNumber( number + numberString);
    }

    //Establecer ultimo numero antes de la operacion

    const setLastNumber = () => {
        calculateResult();
        if(number.endsWith(".")){
            setPrevNumber(number.slice(0.-1))
        }else{
        setPrevNumber(number);
    }
    setNumber("0")
}

    //Dividir

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    //Multiplicar

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    //Restar

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;

    }

    //Sumar

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const calculateResult = () => {

        const result = calculatedSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');



        setPrevNumber('0')
    }

    const calculatedSubResult = () => {

        const [ firtsValue, operation, secondValue ] = formula.split(' ');

        const num1 = Number(firtsValue);
        const num2 = Number(secondValue);

        if(isNaN(num2)) return num1;

        switch (lastOperation.current){

            case Operator.add:
                return num1 + num2;

            case Operator.subtract:
                return num1 - num2;

            case Operator.divide:
                return num1 / num2 ;
                
            case Operator.multiply:
                return num1 * num2 ;

            default:
                throw new Error ('Operation not implemented');
        }
    }

    
    return{
        //Properties

        number,
        prevNumber,
        formula,

        //methods

        buildNumber,
        toggleSign,
        clean,
        deleteOperation,
        divideOperation,
        addOperation,
        subtractOperation,
        multiplyOperation,
        calculateResult,
        calculatedSubResult
    }
}


