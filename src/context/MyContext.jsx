import {createContext,useReducer,useState } from "react";
import { initialState, reducer } from "../reducer/myReducer";

export const MyContext=createContext({});

function MyProviders({ children }) {
   
    const [state, dispatch]=useReducer(reducer,initialState)

    const value = {
      data: state.data, 
      editIndex: state.editIndex,
      addData: (newData)=> {
          dispatch({type:"ADD_DATA", payload: newData})
      },
      deleteData: (index)=> {
          dispatch({type:"DELETE_DATA", payload: index})
      },
      updateData: (updatedData) => {
        dispatch({ type: "UPDATE_DATA", payload: updatedData });
      },
      makeNull: ()=> {
        dispatch({type:"MAKE_NULL", payload:null})
      },
      makeNotNull: (index)=> {
        dispatch({type:"MAKE_NOT_NULL", payload:index})
      },
     
  }

    return (<MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>);
}

export default MyProviders;