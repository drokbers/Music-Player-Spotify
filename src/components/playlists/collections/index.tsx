"use client";
import { useEffect, useState } from "react";
import CollectionItem from "../CollectionItem";

const Collections = (props: {
  title: string;
  items: {
    id: number;
    artist: string;
    albumName: string;
    description: string;
    image: string;
    type: string;
    src: string;
    active: boolean;
  }[];
}) => {
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1000) {
        setItemsToShow(4);
      } else if (window.innerWidth >= 800) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 500) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
        console.log("x");
      }
    };

    updateItemsToShow();

    window.addEventListener("resize", updateItemsToShow);
    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  return (
    <div className="mt-4   ">
      <div className="flex  items-center justify-between ">
        <h2 className="text-2xl text-white font-semibold tracking-tight hover:underline">
          {props.title}
        </h2>
        <span
          className={
            "text-xs hover:underline font-semibold uppercase text-link tracking-wider"
          }
        >
          SEE ALL
        </span>
      </div>

      <div className="grid xxs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 ">

        {props.items.slice(-itemsToShow).map((item) => (
          <CollectionItem
            key={item.id}
            id={item.id}
            artist={item.artist}
            albumName={item.albumName}
            image={item.image}
            type={item.type}
            active={item.active}
          />
        ))}
      </div>
    </div>
  );
};
export default Collections;
