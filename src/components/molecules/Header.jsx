import react, { useContext } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View  } from "react-native"
import { TextInput} from "react-native"
import { secondaryColor } from "../../utils/color"
import {Feather} from "@expo/vector-icons";
import { MainContext } from "../../providers/MainProvider";

const Header = () =>{
    const {isDark} = useContext(MainContext);
    return (
        
        <View style={styles.searchContainer}>
            <View style={styles.container}>
            <TextInput style={styles.input} placeholder={"rechercher"} />
            <Feather
                name="search"
                size={20}
                color={"black"}
                style={{ opacity: 0.5 }}
            />
            </View>
            <TouchableOpacity onPress={() => alert("filter")}>
                <Image
                    source={require("../../../assets/icons/filter-icon.png")}
                    style={{ height: 28, width: 28 , tintColor: isDark ? "black" : "white"
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    searchContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        justifyContent: "space-between",
    },

    container:{
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: secondaryColor,
        height: 52,
        padding: 10,
        borderRadius: 10,
    }
})

export default Header