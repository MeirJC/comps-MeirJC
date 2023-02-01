import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expendedIndex, setExpendedIndex] = useState(null);

  const handleClick = (idx) => {
    setExpendedIndex((current) => {
      return current === idx ? null : idx;
    });
    // idx === expendedIndex ? setExpendedIndex(null) : setExpendedIndex(idx);
  };
  const renderdItems = items.map((item, index) => {
    const isExpended = index === expendedIndex;
    const icon = (
      <span className="text-2xl text-slate-400">
        {isExpended ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
          onClick={() => handleClick(index)}
        >
          {item.lable}
          {icon}
        </div>
        {isExpended && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return (
    <div className="border-x border-t rounded">
      <h1 className="bg-sky-600 text-center">Accordion</h1>
      {renderdItems}
    </div>
  );
}

export default Accordion;
