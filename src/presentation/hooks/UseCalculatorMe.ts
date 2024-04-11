import { useRef, useState } from "react";

enum Operator {
    add,
    substract,
    divide,
    multiply
}


const UseCalculatorMe = () => {

    const [mainNumber, setMainNumber] = useState('0')
    const [subNumber, setSubNumber] = useState('0')
    const [operation, setOperation] = useState('')

    const lastOperation = useRef<Operator>();

    console.log(operation)

    const clean = () => {
        setMainNumber('0')
        setSubNumber('0')
        setOperation('')
    }

    const deleteLastNumber = () => {

        let currentSign = "";
        let temporalNumber = mainNumber;

        if(mainNumber.includes("-")){
            currentSign = "-";
            temporalNumber = mainNumber.substring(1)
        }

        if (temporalNumber.length > 1){
            return setMainNumber(currentSign + temporalNumber.slice(0,-1));
        }

        setMainNumber("0")
    }

    const toggleSign = () =>{
        if( mainNumber.includes("-")){
            return setMainNumber(mainNumber.replace("-",""))
        }
        setMainNumber( "-" + mainNumber);
    }

    const buildingNumber = ( numberPressed : string) => {

        if (mainNumber === '-0') {
            if (numberPressed !== '0' && numberPressed !== '.') {
                return setMainNumber('-' + numberPressed );
            }
        }

        if(mainNumber.includes('.') && numberPressed === '.') return;

        if(mainNumber.startsWith('0') || mainNumber.startsWith('-0')){

            if(numberPressed === '.'){
                return setMainNumber( mainNumber + numberPressed)
            }

            if(numberPressed === "0" && !mainNumber.includes('.')) return;

            if(numberPressed !== '0' && !mainNumber.includes('.')){
                return setMainNumber(numberPressed)
            }
        }

        setMainNumber(mainNumber + numberPressed)
    }

    const setLastNumber = () => {
        if(mainNumber.endsWith('.')){
            setSubNumber(mainNumber.slice(0,-1))
        }else{
            setSubNumber(mainNumber)
        }
        setMainNumber('0')
    };


    // const addOperation = () => {
    //     setOperation('+')
    //     if((setLastNumber) === "+" || "-" || "/" || "x" ){
    //         return;
    //     }
    //     setLastNumber();
    //     lastOperation.current = Operator.add;
    // }

    const addOperation = () => {
        if(mainNumber !== '0'){
            setOperation('+')
        }
        if (operation === '+' || operation === '-' || operation === '/' || operation === 'x') {
            return;
        }
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const substractOperation = () => {
        if(mainNumber !== '0'){
            setOperation('-')
        }
        if (operation === '+' || operation === '-' || operation === '/' || operation === 'x') {
            return;
        }
        setLastNumber();
        lastOperation.current = Operator.substract;
    }

    const divideOperation = () => {
        if(mainNumber !== '0'){
            setOperation('/')
        }
        if (operation === '+' || operation === '-' || operation === '/' || operation === 'x') {
            return;
        }
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        if(mainNumber !== '0'){
            setOperation('*')
        }
        if (operation === '+' || operation === '-' || operation === '/' || operation === 'x') {
            return;
        }
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }


    const calcular = () => {
        const num1 = Number(mainNumber);
        const num2 = Number(subNumber);

        switch (lastOperation.current) {
            case Operator.add:
                setMainNumber(`${num1 + num2}`)
            break;

            case Operator.substract:
                setMainNumber(`${num2 - num1}`)
                break;

            case Operator.divide:
                if(num1 !== 0){
                    setMainNumber(`${num2 / num1}`)
                }else{
                    setMainNumber("Error: divison por cero");
                }
                break;


            case Operator.multiply:
                setMainNumber(`${num1 * num2}`)
                break;


            default:
                return "Operación no reconocida";

        }
        setSubNumber('0')
        setOperation('')
    }




    return {
        //Properties
        mainNumber,
        subNumber,
        operation,

        //Methods
        buildingNumber,
        clean,
        toggleSign,
        deleteLastNumber,
        addOperation,
        substractOperation,
        divideOperation,
        multiplyOperation,
        calcular
    }

}


export default UseCalculatorMe;
