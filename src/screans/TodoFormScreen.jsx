import react, { useContext, useState } from "react"
import { View, TextInput, StyleSheet } from "react-native"
import CustomButton from "../components/molecules/CustomButtom"
import { Fontisto } from "@expo/vector-icons";
import { secondaryColor } from "../utils/color";
import { MainContext } from "../providers/MainProvider";


const TodoFormScreen = () =>{
    const {isDark, addTodo} = useContext(MainContext);
    const [todoName, setTodoName] = useState("");


    const handleTodo = () => {
        if (todoName.length > 5){
            const newTodo = {
                name: todoName,
                date: Date.now(),
                isCompleted: false,
            };

            addTodo(newTodo);
            navigation.goBack();
        }
    };

    return (
        <View style={[styles.container, {backgroundColor: isDark? "white": "black"}]}>
            <TextInput style= {styles.text}
            multiline={true}
            numberOfLines={10} placeholder="Entrer une Todo"
            value={todoName} onChangeText={setTodoName}
            />
            <CustomButton 
                label={"Enregistrer"}
                onPress = { handleTodo }
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