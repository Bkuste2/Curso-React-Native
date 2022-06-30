import React, { useState } from 'react';
import estilo from '../estilo';
import { Text } from 'react-native';
import Filho from './Filho'

export default props => {

    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)
    function exibirValor(numero, texto) {
        setNum(numero);
        setTexto(texto);
    }

    return(
        <>
            <Text style={estilo.TxtGrande}>
                {texto}{num}
            </Text>
            <Filho min={1} max={60} funcao={exibirValor}/>
        </>
    )
}