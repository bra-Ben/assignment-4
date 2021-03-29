import React, { createContext, useContext } from 'react';


const ThisStoreContext = createContext();



const DataStoreProvider = (props) => {

    return (

        <ThisStoreContext.Provider value={{name: 'hellooo'}}>

            {props.children}

        </ThisStoreContext.Provider>

    )
}

const useThisStoreContext = () => useContext(ThisStoreContext);

export { DataStoreProvider, useThisStoreContext }



