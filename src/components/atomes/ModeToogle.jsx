import react from "react"
import { MainContext } from "../../providers/MainProvider";
import { useContext } from "react";
import { Switch } from "react-native";

const ModeToogle = () => {
    
    const {isDark, toggleMode} = useContext(MainContext)
    
    return (
        <Switch value={isDark} onValueChange={toggleMode} />
    )
}

export default ModeToogle