import React, { useState } from "react";
import estilo from "./estilo";
import { Text,Button } from "react-native";

export default ({inicial = 0, passo = 1}) => {
    const [numero, setNumero] = useState(inicial)

    const incremento = () =>setNumero(numero + passo)
    const decremento = () => setNumero(numero - passo)

    return(
        <>
            <Text style={estilo.TxtGrande}>{numero}</Text>
            <Button title="+" onPress={incremento}/>
            <Button title="-" onPress={decremento}/>
        </>
    )
}