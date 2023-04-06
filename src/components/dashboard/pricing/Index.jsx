import React from "react";
import Package from "./material/Package";
import Title from "./material/Title";
import List from "./material/List";

export default function Index() {
  return (
    <section id="pricing" className="bg-white pb-20 transition-all duration-500 dark:bg-dark">
      <div className="container mx-auto px-5">
        <h3 className="pt-5 text-center text-4xl font-semibold transition-all duration-500 dark:text-white md:pt-5">
          PRICI<span className="text-red-600">NG</span>
        </h3>
        <div className="red-line-h"></div>
        <div className="pt-5">
          <div className="mt-[-25px] grid grid-cols-2 items-center justify-center gap-x-5 lg:mt-0 lg:flex lg:flex-row lg:gap-x-5 xl:gap-x-10 2xl:gap-x-16">
            <Package
              pack="A"
              ttl={<Title ttl1="PHOTO" ttl2="PRE-WEDDING" />}
              lst={[
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
              ]}
            />
            <Package
              pack="A"
              ttl={<Title ttl1="PHOTO" ttl2="PRE-WEDDING" />}
              lst={[
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
              ]}
            />
            <Package
              pack="A"
              ttl={<Title ttl1="PHOTO" ttl2="PRE-WEDDING" />}
              lst={[
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
              ]}
            />
            <Package
              pack="A"
              ttl={<Title ttl1="PHOTO" ttl2="PRE-WEDDING" />}
              lst={[
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
                <List qty="1" value="CONCEPT PHOTO" />,
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
