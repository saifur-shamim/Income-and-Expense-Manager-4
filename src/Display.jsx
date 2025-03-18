import React, { useContext, useState } from 'react'
import {MyContext} from "./context/MyContext";
import "./Display.css";

export default function Display() {
  
  const {data, deleteData, makeNotNull}=useContext(MyContext);

  function handleDelete(index) {
    deleteData(index);
  }

  function handleEdit(index) {
    makeNotNull(index);
    
  }


  return (
    <>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Details</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          { data.map((d, i) => (
            <tr key={i} className={d.type === "Income" ? "income-row" : "expense-row"}>
              <td>{d.details}</td>
              <td>{d.amount}</td>
              <td>{d.type}</td>
              <td>
                
                <button className="edit" onClick={() => handleEdit(i)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          )) }

        </tbody>
      </table>
    </>
  );
}


  