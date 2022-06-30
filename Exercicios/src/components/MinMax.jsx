import { Text } from "react-native";
import React from "react";

import estilo from "./estilo";


export default props => {
    const maior = props.v1 > props.v2
    const v1 = props.v1
    const v2 = props.v2
    return (
        <Text style={estilo.TxtGrande}>
            O valor {(maior ?  v1 : v2) + " é maior que o " + (maior ?  v2 : v1)}
        </Text>
    )
}