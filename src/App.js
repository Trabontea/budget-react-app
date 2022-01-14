import { Container } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />

      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" />

      <DisplayBalances />

      <MainHeader title="Hystory" type="h3" />

      <EntryLine description="income" value="$10.00" />
      <EntryLine description="expense" value="$50.00" isExpense />
      <EntryLine description="income" value="$20.00" />
      <EntryLine description="expense" value="$5.00" isExpense />

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />
    </Container>
  );
}

export default App;
