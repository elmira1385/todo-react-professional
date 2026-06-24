import Container from "./components/Container";
import InputSearchAndFilter from "./components/InputSearchAndFilter";
import InputsTodos from "./components/InputsTodos";
import SortAndDelete from "./components/SortAndDelete";
import StatusList from "./components/StatusList";
import TableTodo from "./components/TableTodo";

function App() {
  return (
    <Container>
      <StatusList />
      <InputsTodos />
      <InputSearchAndFilter />
      <SortAndDelete />
      <TableTodo />
    </Container>
  );
}

export default App;
