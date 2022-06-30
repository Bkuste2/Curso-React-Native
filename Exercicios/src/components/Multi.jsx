import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

const Comp = () =>{
    return <Text style={estilo.TxtGrande}>Comp #OFC</Text>
}

const Comp1 = () =>{
    return <Text style={estilo.TxtGrande}>Comp #01</Text>
}

export const Comp2 = () =>{
    return <Text style={estilo.TxtGrande}>Comp #02</Text>
}

export { Comp1 }
export default Comp;