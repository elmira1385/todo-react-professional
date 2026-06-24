import Container from "./components/Container";
import InputSearchAndFilter from "./components/InputSearchAndFilter";
import InputsTodos from "./components/InputsTodos";
import SortAndDelete from "./components/SortAndDelete";
import StatusList from "./components/StatusList";
import TableTodo from "./components/TableTodo";
import { useFilter } from "./store/useFilter";
import { useSearch } from "./store/useSearch";
import { useSort } from "./store/useSort";
import { useTodo } from "./store/useTodo";

function App() {
  const { todo } = useTodo();
  const { search } = useSearch();
  const { filter } = useFilter();
  const { sort } = useSort();
  const allFeatureAndTodo = [...todo]
    .filter((item) =>
      item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    )
    .filter((item) => {
      if (filter === "pending") return item.status === "pending";
      else if (filter === "completed") return item.status === "completed";
      else return true;
    })
    .sort((a, b) =>
      sort === "asc"
        ? a.title.localeCompare(b.title, "fa")
        : b.title.localeCompare(a.title, "fa"),
    );
  return (
    <Container>
      <StatusList allFeatureAndTodo={allFeatureAndTodo} />
      <InputsTodos />
      <InputSearchAndFilter />
      <SortAndDelete />
      <TableTodo allFeatureAndTodo={allFeatureAndTodo} />
    </Container>
  );
}

export default App;
