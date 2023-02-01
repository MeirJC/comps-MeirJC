import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1001,
      lable: "What is React?",
      content:
        "React is a front end javascript framework such as Angular and Vue. it is used to build single page applications",
    },
    {
      id: 1002,
      lable: "Why use React?",
      content:
        "React is a favorite JS library among engineers, it is easy to learn and has a large community of developers",
    },
    {
      id: 1003,
      lable: "How do you use React?",
      content:
        "You use React by creating components, nesting them and passing props",
    },
  ];
  return (
    <div>
      <h1 className="bg-purple-400 text-center">AccordionPage</h1>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
