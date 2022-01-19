import { Container } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useState, useEffect } from "react";

function App() {
  const initialEntries = [
    {
      id: 1,
      description: "work income",
      value: 1000,
      isExpense: false,
    },
    {
      id: 2,
      description: "water bill",
      value: 20,
      isExpense: true,
    },
    {
      id: 3,
      description: "power bill",
      value: 40,
      isExpense: false,
    },
  ];

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [entries, setEntries] = useState(initialEntries);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
    }
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
    console.log(`total income is ${totalIncome} and ${totalExpense}`);
  }, [entries]);

  // const deleteEntry =(id) => {}
  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    // console.log(`entries`, entries);
    // console.log(`result`, result);
    setEntries(result);
  }

  function editEntry(id) {
    console.log(`edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setIsOpen(true);
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

    setEntries(result);
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
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
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
        setIsOpen={setIsOpen}
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
