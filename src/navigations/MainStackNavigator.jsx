import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import ModeToogle from "../components/atomes/ModeToogle";
import { MainContext } from "../providers/MainProvider";
import HomeScreen from "../screans/HomeScreen";
import TodoFormScreen from "../screans/TodoFormScreen";
import { primaryColor } from "../utils/color";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () =>{
    
    const {isDark} = useContext(MainContext);

    const {todo, addTodo} = useContext([]);

    return (
        <Stack.Navigator >
            <Stack.Screen 
            name={"Home"} 
            options={{
                headerTitle: "Todos",
                headerShadowVisible: false,
                // headerTitleAlign: "center",
                headerStyle: {backgroundColor: isDark ? "white" : "black"},
                headerRight:()=> (
                    <ModeToogle/>
                ),
                headerTitleStyle: {
                    color: primaryColor,
                    fontSize: 50,
                    fontWeight: "bold"
                }
            }} 
            component={HomeScreen} />
            <Stack.Screen name= "Ajouter une todo"
            options={{
                headerStyle: {backgroundColor: isDark ? "white" : "black"},
                headerShadowVisible: false,
                headerTintColor: isDark ? "black" : "white",
                headerTitleStyle: {
                    color: isDark ? "black" : "white",
                    fontSize: 25,
                    fontWeight: "bold"
                }
            }
            } component={TodoFormScreen} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator