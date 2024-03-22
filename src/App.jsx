import Calculator from "./components/Calculator";
import Values from "./components/Values";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="min-w-[400px] bg-white h-[100%]">
        <Values />
        <Calculator />

      </div>
    </div>
  );
}

export default App;
