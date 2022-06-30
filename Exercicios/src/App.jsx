import React from "react";
import globalStyles from './globalStyles'

import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

// import Primeiro from "./components/Primeiro";
// import CompPadrao, { Comp1, Comp2 } from "./components/multi";
// import MinMax from "./components/MinMax";
// import Aleatorio from "./components/Aleatorio";
// import Titulo from "./components/Titulo";
// import Botao from "./components/Botao";
// import Contador from "./components/Contador";
// import Pai from "./components/direta/Pai";
import Pai from "./components/indireta/Pai";

export default () => (
    <SafeAreaView style={style.AndroidSafeArea}>
        {/* 
        <CompPadrao/>
        <Comp1 />
        <Comp2 />
        <Primeiro />
        <MinMax v1={62} v2={70}/> 
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Titulo principal="Titulo principal" secundario="Titulo Secundario"/>
        <Botao />
        <Contador inicial={0} passo={4} />
        <Contador />
        */}
        <Pai />
    </SafeAreaView>
)

const style = StyleSheet.create({
    AndroidSafeArea: {
        flexGrow: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent:"center",
        alignItems:"center",
        padding:20,

    }
})