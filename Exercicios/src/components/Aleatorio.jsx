import { Text } from "react-native";
import React from "react";

import estilo from "./estilo";


export default ({ max, min }) => {
    let { v1, v2 } = 0

    const v1Maior = v1 > v2
    v1Maior ? (v1 = max, v2 = min) : (v2 = max, v1 = min)

    const aleatorio = Math.floor(Math.random() * (v1 - v2) + v2)
     
    return(
        <Text style={estilo.TxtGrande}>
            O valor aleatório é: {aleatorio}
        </Text>
    )
}