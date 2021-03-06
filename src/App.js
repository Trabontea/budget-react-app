import { Container } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllEntries } from "./actions/entries.actions";

function App() {
  // State Local
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry]  = useState();

  // State from Redux cu useSelector
  const entries = useSelector((state) => state.entries);
  const {isOpen, id } = useSelector((state) => state.modals);
  

  // pentru a se completa cu datele inregistrate, edit
  useEffect(() => {
    const index = entries.findIndex(entry => { 
      //console.log('entry - APP.js:', entry);
     return entry.id === id
    });
    //console.log('index - App.js:', index)
    setEntry(entries[index])
    
  }, [isOpen, id, entries]);

  // ruleaza de fiecare data cand se introduce/sterge o intrare
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

  
  const dispatch = useDispatch()
  // get the data with request
  useEffect(()=> {
    dispatch(getAllEntries())
  }, [dispatch])

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />

      <DisplayBalance title="Your Balance:" value={total} size="small" />

      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />

      <MainHeader title="Hystory" type="h3" />

      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {... entry}/>
    </Container>
  );
}

export default App;
