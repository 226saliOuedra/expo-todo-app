import React from "react"
import Box from "./Box"
import { View } from "react-native"

const BoxContainer=() =>{

    return (
       <View style={{
        backgroundColor: "white",
        width: "90%",
        height: 100,
        justifyContent: "space-evenly",
        flexDirection: "row",
        paddingTop: 20
      }}>
       
       <Box color={"red"}/>
       <Box color={"black"}/>
       <Box color={"green"}/>
       
      </View>
    )
}

export default BoxContainer