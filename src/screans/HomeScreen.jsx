import react, { useContext } from "react"
import { View, StyleSheet, ScrollView} from "react-native"
import CustomButton from "../components/molecules/CustomButtom"
import { primaryColor } from "../utils/color"
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/molecules/Header";
import TodoItems from "../components/molecules/TodoItems";
import { MainContext } from "../providers/MainProvider";

const HomeScreen = ({navigation}) => {
    const {isDark} = useContext(MainContext);
    
    return (
    <View style={[styles.container,{backgroundColor:isDark ? "white": "black"}]}>
        <View style={styles.searchContainer}>
            <Header/>
        </View>
        <View style={styles.todoContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TodoItems/>
                <TodoItems/>
                <TodoItems/>
                <TodoItems/>
                <TodoItems/>
                <TodoItems/>
                <TodoItems/>
                <TodoItems/>
                <TodoItems/>
            </ScrollView>
        </View>
       
        <View style={styles.buttomContainer}>
            <CustomButton
                onPress={() => {
                    navigation.push("Ajouter une todo");
                }}
                label={"Ajouter"}
                icon= { <AntDesign name="pluscircleo" size={20} color="white"/>}/>
        </View>
    </View>

    )

}

const styles= StyleSheet.create ({
    container:{
        flex: 1,
        padding: 10,
    },
    searchContainer: {
        height: 90,
        
    },
    todoContainer: {
        marginTop: 10,
        flex: 1,
    },

    buttomContainer:{
        marginTop: 10,
        backgroundColor: primaryColor,
        height: 50,
        borderRadius: 10,
    }
})

export default HomeScreen