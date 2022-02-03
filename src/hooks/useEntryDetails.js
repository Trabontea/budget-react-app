import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from "uuid";

function useEntryDetails() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch();

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    setDescription("");
    setValue("");
    setIsExpense("");
  }

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  };
}

export default useEntryDetails;
