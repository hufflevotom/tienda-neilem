import Routes from "../routes/Routes";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
