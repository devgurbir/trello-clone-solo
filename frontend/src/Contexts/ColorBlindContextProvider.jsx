import React from 'react'

// Context for color blind mode
export const ColorBlindContext = React.createContext(false)

function ColorBlindContextProvider({children}){
    const [colorBlindMode, setColorBlindMode] = React.useState(false);
    return (
      <ColorBlindContext.Provider value={[colorBlindMode, setColorBlindMode]}>
        {children}
      </ColorBlindContext.Provider>
    )
}

export default ColorBlindContextProvider

