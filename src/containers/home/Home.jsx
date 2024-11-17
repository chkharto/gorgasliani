import React, { useState } from "react";
import "./home.css";
import zviadi from "../../components/images/zviadi.png";
import texts from "../../info";
import Damoukidebloba from "../../components/homePages/Damoukidebloba";
import Tamarmefe from "../../components/homePages/Tamarmefe";
import Afxazetisomi from "../../components/homePages/Afxazetisomi";
import Balduin from "../../components/homePages/Balduin";
import Davit from "../../components/homePages/Davit";

const Home = ({ onReset }) => {
  const [check, setCheck] = useState(true);
  const [index, setIndex] = useState(null);

  const learnMore = (index) => {
    setIndex(index);
    setCheck(false);
  };

  const components = {
    0: <Tamarmefe />,
    1: <Afxazetisomi />,
    2: <Balduin />,
    3: <Davit />,
    damoukidebloba: <Damoukidebloba />,
  };

  React.useEffect(() => {
    if (onReset) {
      // Reset state when `onReset` is triggered
      setCheck(true);
      setIndex(null);
    }
  }, [onReset]);

  return (
    <>
      {check ? (
        <div className="home">
          <div className="head">
            <h1>Lorem ipsum</h1>
            <div className="head-ln">
              <img src={zviadi} alt="Zviadi" />
              <div className="head-ln-tx">
                <p className="head-in-tx-txt">
                  საქართველოს დამოუკიდებლობის დღე — საქართველოს ეროვნული
                  დღესასწაული, რომელიც აღინიშნება ყოველი წლის 26 მაისს, ნიშნად
                  საქართველოს სახელმწიფოებრივი დამოუკიდებლობის აღდგენისა რუსეთის
                  იმპერიისგან.
                </p>
                <p
                  className="learn-more"
                  onClick={() => {
                    setIndex("damoukidebloba");
                    setCheck(false);
                  }}
                >
                  იხილეთ მეტი
                </p>
              </div>
            </div>
            <div className="head-infos">
              {Object.values(texts).map((item, index) => (
                <div className="head-info-item" key={index}>
                  <p>{item}</p>
                  <p className="learn-more" onClick={() => learnMore(index)}>
                    იხილეთ მეტი
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        components[index]
      )}
    </>
  );
};

export default Home;
