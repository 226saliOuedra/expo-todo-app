import react, { useContext } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import CustomButton from "../components/molecules/CustomButtom"
import { Fontisto } from "@expo/vector-icons";
import { secondaryColor } from "../utils/color";
import { MainContext } from "../providers/MainProvider";


const TodoFormScreen = () =>{
    const {isDark} = useContext(MainContext);
    return (
        <View style={[styles.container, {backgroundColor: isDark? "white": "black"}]}>
            <TextInput style= {styles.text}
            multiline={true}
            numberOfLines={10} placeholder="Entrer une Todo"
            />
            <CustomButton 
                label={"Enregistrer"}
                onPress = { () =>
                    alert("Save successful")
                }
                icon= { <Fontisto name="save" size={24} color="white"/>}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: "white"
    },
    text:{
        backgroundColor: secondaryColor,
        borderRadius: 10,
        height: 150,
        paddind: 10,
        marginTop: 15,
        marginBottom: 20,
    },
})

export default TodoFormScreen