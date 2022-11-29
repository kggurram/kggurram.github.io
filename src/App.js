import "./App.css";
import Header from "./components/Header";
import Scroller from "./components/Scroller";

function App() {
  return (
    <div className="md:flex md:h-screen justify-center space-x-24">
      <div className="xl:w-1/4 md:w-1/3 w-fit">
        <Header />
      </div>
      <div className="xl:w-1/4 md:w-1/3 w-fit md:flex md:overflow-hidden">
        <Scroller />
      </div>
    </div>
  );
}

export default App;
