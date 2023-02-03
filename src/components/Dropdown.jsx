import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
function Dropdown({ options, value, onChange }) {
  // console.log(options);
  const [isOpen, setIsOpen] = useState(false);
  //
  const divElement = useRef();
  //
  useEffect(() => {
    const handler = (event) => {
      console.log(divElement.current);
      // making sure the div using the ref is mounted
      if (!divElement.current) return;
      // making sure the click is outside the div is handled
      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  //
  const handleClick = () => {
    setIsOpen((current) => !current);
  };
  //
  const handleOptionClick = (option) => {
    // console.log(option);
    onChange(option);
    setIsOpen(false);
  };
  const renderdOptions = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        key={option.value}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {option.label}
      </div>
    );
  });

  // let content = value ? value.label : "Select...";
  return (
    <div ref={divElement} className="w-48 relative">
      <h1 className="bg-orange-400 text-center">Dropdown</h1>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderdOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
