import React from "react";
import { Button } from "react-native";
import estilo from "./estilo";

export default props => {
    function executar(){
        console.warn("Executando")
    }
    return (
        <>
            <Button 
                title="Executar" 
                onPress={executar}
            />
            <Button 
                title="Executar" 
                onPress={() => console.warn("Exec 2")}
            />
        </>
    )
}