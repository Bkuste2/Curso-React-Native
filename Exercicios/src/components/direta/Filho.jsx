import React, { useState } from 'react';
import estilo from '../estilo';
import { Text } from 'react-native';

export default ({a, b}) => {

    return(
        <>
            <Text style={estilo.TxtGrande}>
                {a}
            </Text>
            <Text style={estilo.TxtGrande}>
                 {" " + b}
            </Text>
        </>
    )
}