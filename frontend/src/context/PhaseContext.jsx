import { createContext } from "react";
import { tools_list } from "../assets/assets";

export const PhaseContext = createContext(null)
const PhaseContextProvider = (props) => {
    const contextValue = {
        tools_list
    }

    return (
        <PhaseContext.Provider value={contextValue}>
        {props.children}
        </PhaseContext.Provider>
    )
}

export default PhaseContextProvider