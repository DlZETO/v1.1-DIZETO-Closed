import React from "react";
import Package from "./material/Package";
import Title from "./material/Title";
import List from "./material/List";

export default function Index() {
  return (
    <section id="pricing" className="bg-white transition-all duration-500 dark:bg-dark">
      <h3 className="pt-2 text-center text-4xl font-semibold transition-all duration-500 dark:text-white md:pt-5">
        PRICI<span className="text-red-600">NG</span>
      </h3>
      <div className="red-line-h"></div>
      <div className="container mx-auto grid px-5 pb-8 pt-5 sm:grid-cols-2 md:pb-16 xl:grid-cols-4">
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
    </section>
  );
}
