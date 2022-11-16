import { createContext, useState } from "react";

const DefaultValue = {
    isDark: false,
    todos: [],
};



export const MainContext = createContext(DefaultValue);

export const MainProvider = ({children, isDark = false}) =>{
    const [currentMode, setCurrentMode]= useState(isDark);
    const [ todos, setTodo ] = useContext(todos);
    const toggleMode = () => {
        setCurrentMode(!currentMode);
    };

    const addTodo = (todo)=>{
        const newTodos = [...todo, todo]
        setTodo(newTodos);
    }

    return (
        <MainContext.Provider value= {{ isDark: currentMode, toggleMode: toggleMode, todos, addTodo}}>
           {children}
        </MainContext.Provider>

    );
}