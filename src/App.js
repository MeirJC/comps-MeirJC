import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
//! To be removed later
import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    { label: "The color red", value: "red" },
    { label: "The color green", value: "green" },
    { label: "A shade of blue", value: "blue" },
  ];

  return (
    <div>
      <h1 className="bg-green-400 text-center">App.js</h1>
      <Dropdown options={options} />
      <AccordionPage />
      <ButtonPage />
    </div>
  );
}

export default App;
