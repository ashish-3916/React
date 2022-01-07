import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar name="TextAnalyser" />
      <div className ="container my-3">
        <TextForm heading="Enter the text below" />
      </div>
    </>
  );
} 

export default App;
