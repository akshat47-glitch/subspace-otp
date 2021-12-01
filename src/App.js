import logo from "./logo.svg";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="body">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
