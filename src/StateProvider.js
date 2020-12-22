import React, {createContext, useContext, useReducer} from 'react';


//prep the datalayer
export const StateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//Pull info from datalayer
export const useStateValue = () => useContext(StateContext);