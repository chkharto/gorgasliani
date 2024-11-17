import React, { useState, useEffect } from "react";
import Abiturienticomp from "../../components/abPages/abiturienticomp";
import items from "./abiturientiob";
import "./abiturienti.css";
import Giorgimexute from "../../components/abPages/giorgimexute";
import Makedoneli from "../../components/abPages/makedoneli";
import Karlosdidi from "../../components/abPages/karlosdidi";
import Atila from "../../components/abPages/atila";
import Vikingebi from "../../components/abPages/vikingebi";
import Stiuarti from "../../components/abPages/stiuarti";

const Abiturienti = ({ onReset }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [index, setIndex] = useState(null);

  const handleLearnMoreClick = (item, index) => {
    setSelectedItem(item);
    setIndex(index);
  };

  const componentMap = {
    0: <Giorgimexute />,
    1: <Makedoneli />,
    2: <Karlosdidi />,
    3: <Atila />,
    4: <Vikingebi />,
    5: <Stiuarti />,
  };

  // Reset state when `onReset` changes
  useEffect(() => {
    if (onReset) {
      setSelectedItem(null);
      setIndex(null);
    }
  }, [onReset]);

  return (
    <div className="abiturienti">
      {!selectedItem ? (
        items.items.map((item, index) => (
          <Abiturienticomp
            key={index}
            title={item.title}
            img={item.img}
            text={item.text}
            onLearnMoreClick={() => handleLearnMoreClick(item, index)}
          />
        ))
      ) : (
        componentMap[index]
      )}
    </div>
  );
};

export default Abiturienti;
