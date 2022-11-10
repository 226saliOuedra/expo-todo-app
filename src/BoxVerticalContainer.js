import React from "react"
import Box from "./Box"
import { View } from "react-native"

const BoxVerticalContainer=() =>{

    return (
       <View style={{
        backgroundColor: "white",
        width: "20%",
        height: 300,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
        // /paddingTop: 20
      }}>
       
       <Box color={"red"}/>
       <Box color={"black"}/>
       <Box color={"green"}/>
       
      </View>
    )
}

export default BoxVerticalContainer