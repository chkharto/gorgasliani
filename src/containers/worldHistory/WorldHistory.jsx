import React, { useState } from "react";
import { FaHome, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./worldHistory.css";
import WorldHistoryPages from "../../components/whPages/WorldHistoryPages";
import ww1 from "../../components/images/ww1.png";
import ww11 from "../../components/images/ww1-1.png";
import ww12 from "../../components/images/ww1-2.png";
import ww13 from "../../components/images/ww13.png";
import rome from "../../components/images/rome.png";
import rome1 from "../../components/images/rome-1.png";
import rome2 from "../../components/images/rome-2.png";
import rome3 from "../../components/images/rome3.png";
import revolution from "../../components/images/revolution.png";
import revolution1 from "../../components/images/revolution-1.png";
import revolution2 from "../../components/images/revolution-2.png";
import revolution3 from "../../components/images/revolution3.png";
import napoleon from "../../components/images/napoleon.png";
import napoleon1 from "../../components/images/napoleon-1.png";
import napoleon2 from "../../components/images/napoleon-2.png";
import napoleon3 from "../../components/images/napoleon3.png";

const pages = [
  {
    title: "მსოფლიო ომი",
    description:
      "პირველი მსოფლიო ომი (1914-1918) იყო დიდი კონფლიქტი, რომელშიც მრავალი ქვეყანა ჩაერთო, იწვევს ევროპის პოლიტიკური რუკის გადანაწილებას.",
    images: [ww11, ww12, ww13],
    backgroundImage: ww1,
  },
  {
    title: "რომის იმპერია",
    description:
      "რომის იმპერია ათასწლეულზე მეტი ხნის განმავლობაში მართავდა ევროპას და საბოლოოდ დაეცა 476 წელს.",
    images: [rome1, rome2, rome3],
    backgroundImage: rome,
  },
  {
    title: "ინდუსტრიული რევოლუცია",
    description:
      "ინდუსტრიული რევოლუცია XVIII-XIX საუკუნეებში გარდაქმნა მსოფლიო ეკონომიკა, წარმოება და ტრანსპორტი, გამოიწვია ურბანიზაცია და ტექნოლოგიური პროგრესი.",
    images: [revolution1, revolution2, revolution3],
    backgroundImage: revolution,
  },
  {
    title: "ნაპოლეონი",
    description:
      "ნაპოლეონ ბონაპარტი საფრანგეთის რევოლუციის შემდეგ აღზევდა და გახდა იმპერატორი, თუმცა დამარცხდა ვატერლოოს ბრძოლაში.",
    images: [napoleon1, napoleon2, napoleon3],
    backgroundImage: napoleon,
  },
];

const WorldHistory = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div
      className="world-history-container"
      style={{
        backgroundImage: `url(${pages[currentPage].backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay"></div>
      <button className="home-btn" onClick={() => navigate("/")}>
        <FaHome />
      </button>
      <button className="nav-btn left" onClick={prevPage}>
        <FaArrowLeft />
      </button>
      <button className="nav-btn right" onClick={nextPage}>
        <FaArrowRight />
      </button>
      <WorldHistoryPages
        title={pages[currentPage].title}
        description={pages[currentPage].description}
        images={pages[currentPage].images}
      />
    </div>
  );
};

export default WorldHistory;
