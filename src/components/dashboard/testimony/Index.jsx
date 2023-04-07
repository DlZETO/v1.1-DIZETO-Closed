import React, { useState, useEffect } from "react";
import { BsFillCircleFill, BsQuote } from "react-icons/bs";
import Person from "./material/Person";
import personImage from "../../../assets/images/testimony/person.jpg";

export default function Index() {
  const persons = [
    { name: "Name 1", status: "Status 1", comment: "Comment 1", source: personImage },
    { name: "Name 2", status: "Status 2", comment: "Comment 2", source: personImage },
    { name: "Name 3", status: "Status 3", comment: "Comment 3", source: personImage },
    { name: "Name 4", status: "Status 4", comment: "Comment 4", source: personImage },
  ];

  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPersonIndex((currentPersonIndex + 1) % persons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentPersonIndex, persons.length]);

  return (
    <section id="testimony" className="transition-all duration-500 dark:text-white">
      <div className="container mx-auto flex h-[500px] flex-col items-center justify-center px-5">
        <i className="mb-3 text-5xl">
          <BsQuote />
        </i>
        <Person {...persons[currentPersonIndex]} />
        <div className="mt-10 flex items-center justify-center">
          {persons.map((person, index) => (
            <i key={index}>
              <BsFillCircleFill className={`mx-2 ${currentPersonIndex === index ? "active" : ""} text-red-600/30`} size={"12px"} />
            </i>
          ))}
        </div>
      </div>
    </section>
  );
}
