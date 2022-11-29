import "./App.css";
import Header from "./components/Header";
import Scroller from "./components/Scroller";

function App() {
  return (
    <div className="lg:flex lg:justify-center lg:w-5/6 lg:h-screen mx-auto">
      <div className="2xl:w-full lg:w-full">
        <Header />
      </div>
      <div className="lg:flex lg:overflow-hidden 2xl:w-4/5 lg:w-full">
        <Scroller />
      </div>
    </div>
  );
}

export default App;
