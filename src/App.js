import { Container } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  // const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);
  // Redux
  const entries = useSelector((state) => state.entries);
  const isOpen = useSelector((state) => state.modals.isOpen);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      //setEntries(newEntries);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      } else {
        return (totalIncome += Number(entry.value));
      }
    });
    setTotal(totalIncome - totalExpense);
    setTotalIncome(totalIncome);
    setTotalExpense(totalExpense);
    //console.log(`total income is ${totalIncome} and ${totalExpense}`);
  }, [entries]);

  function editEntry(id) {
    console.log(`edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      //setIsOpen(true);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
    }
  }

  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    //console.log(`result`, result);
    //console.log(`entries`, entries);

    // setEntries(result);
    resetEntry();
  }

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />

      <DisplayBalance title="Your Balance:" value={total} size="small" />

      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />

      <MainHeader title="Hystory" type="h3" />

      <EntryLines
        entries={entries}
        // setIsOpen={setIsOpen}
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        // setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
