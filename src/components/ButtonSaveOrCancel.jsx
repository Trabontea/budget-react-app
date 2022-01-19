import React from 'react';


const ButtonSaveOrCancel = ({addEntry, description, value, isExpense}) => {
  return (
    <div style={{marginTop: 20}}>
      <button className="ui button">Cancel</button>
      <button className="ui primary button" onClick={()=>addEntry(description, value, isExpense)}>OK</button>
    </div>
  )
}

export default ButtonSaveOrCancel
