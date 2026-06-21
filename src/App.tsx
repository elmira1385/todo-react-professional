import Container from "./components/Container";
import InputSearchAndFilter from "./components/InputSearchAndFilter";
import InputsTodos from "./components/InputsTodos";
import StatusList from "./components/StatusList";

function App() {
  return (
    <Container>
      <StatusList/>
      <InputsTodos/>
      <InputSearchAndFilter/>
    </Container>
  );
}

export default App;
