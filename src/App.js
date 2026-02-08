import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccItem
          key={faq.title}
          num={index + 1}
          faq={faq}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}

function AccItem({ faq: { title, text }, num, selected, setSelected }) {
  let isOpen = selected === num;

  // const [isOpenState, setIsOpenState] = useState(false);

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => {
        // setter function of useState in parent component to lift the state up
        // if the clicked item is already selected, then close it (set to null)
        // , otherwise open it (set to num)
        setSelected(num === selected ? null : num);
      }}
    >
      <span className="number">{num < 9 ? `0${num}` : `${num}`}</span>
      <p className="title">{title}</p>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen && <div className="content-box ">{text}</div>}
    </div>
  );
}
