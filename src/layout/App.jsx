import Routes from "../routes/Routes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
