import React from "react";
import Package from "./material/Package";
import Title from "./material/Title";
import List from "./material/List";

const packages = [
  {
    pack: "A",
    title: <Title title1="PHOTO" title2="PRE-WEDDING" />,
    list: [
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
    ],
  },
  {
    pack: "A",
    title: <Title title1="PHOTO" title2="PRE-WEDDING" />,
    list: [
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
    ],
  },
  {
    pack: "A",
    title: <Title title1="PHOTO" title2="PRE-WEDDING" />,
    list: [
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
    ],
  },
  {
    pack: "A",
    title: <Title title1="PHOTO" title2="PRE-WEDDING" />,
    list: [
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        value: "CONCEPT PHOTO",
      },
    ],
  },
];

export default function Index() {
  return (
    <section id="pricing" className="bg-white pb-20 transition-all duration-500 dark:bg-dark">
      <div className="container mx-auto px-5">
        <h3 className="pt-5 text-center text-4xl font-semibold transition-all duration-500 dark:text-white">
          PRICI<span className="text-red-600">NG</span>
        </h3>
        <div className="red-line-h"></div>
        <div className="pt-5">
          <div className="mt-[-25px] grid grid-cols-2 items-center justify-center gap-x-5 lg:mt-0 lg:flex lg:flex-row lg:gap-x-5 xl:gap-x-10 2xl:gap-x-16">
            {packages.map(({ pack, title, list }, index) => (
              <Package
                key={index}
                pack={pack}
                title={title}
                list={list.map(({ qty, value }, index) => (
                  <List key={index} qty={qty} value={value} />
                ))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
