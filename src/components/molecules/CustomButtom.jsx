import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { primaryColor } from "../../utils/color";

const CustomButton = ({icon, label, onPress}) =>{
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
           {icon}
            <Text style={styles.title}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: primaryColor,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        fontWeight: "500",
        fontSize: 20,
        color: "white",
        marginLeft: 20,

    }
})

export default CustomButton