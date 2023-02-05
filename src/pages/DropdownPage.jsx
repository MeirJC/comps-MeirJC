import { useState } from "react";
// import ButtonPage from "./pages/ButtonPage";
// import AccordionPage from "./pages/AccordionPage";
//! To be removed later
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "The color red", value: "red" },
    { label: "The color green", value: "green" },
    { label: "A shade of blue", value: "blue" },
  ];

  return (
    <div className="flex">
      <h1 className="bg-pink-400 text-center">Dropdown Page</h1>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
