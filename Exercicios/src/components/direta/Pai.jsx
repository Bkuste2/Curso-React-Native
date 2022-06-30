import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import estilo from '../estilo';
import Filho from './Filho';

export default props => {
    return(
        <Text style={estilo.TxtGrande}>
            <Filho a={12} b={21} />    
        </Text>
    )
}