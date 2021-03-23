import React, {useState} from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    const [userInput, setUserInput] = useState('')
    const [redInput, setRedInput] = useState(false)


    return (
        <Context.Provider 
            value={{
                toggleMenu, setMenuOpen, menuOpen, 
                userInput, redInput
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}           

