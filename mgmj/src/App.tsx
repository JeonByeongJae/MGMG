import React, { useEffect, useRef, useState } from "react";
import "./App.scss";

interface CardData {
  name: string;
  imageUri: string;
  manaCost: string;
}

function App(): JSX.Element {
  let xhr: XMLHttpRequest | null = null;
  const details = useRef<HTMLDivElement>(null);
  const [cardData, setCardData] = useState<CardData[]>([]);

  const getXmlHttpRequestObject = () => {
    if (!xhr) {
      xhr = new XMLHttpRequest();
    }
    return xhr;
  };

  function dataCallback() {
    if (xhr?.readyState === 4 && xhr?.status === 200) {
      console.log("User data received!");
    }
  }

  function getDatas() {
    console.log("Get users...");
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = dataCallback;
    xhr.open("GET", "http://localhost:5000/cards", true);
    xhr.send(null);

    xhr.onload = () => {
      let tempArr: CardData[] = [];
      const jsonData = JSON.parse(xhr?.response);

      jsonData.forEach((el: CardData) => {
        tempArr.push(el);
      });
      setCardData(tempArr);
      console.log("ta-da!!!", jsonData, cardData);
    };
  }

  useEffect(() => {
    console.log("useEffect", cardData);
  }, [cardData]);

  return (
    <div className="wrap">
      <header className="header">
        <h1 className="title">MGMJ</h1>
      </header>
      <div className="content">
        <p>
          결과
          <button className="btn_getdata" onClick={getDatas}>
            가져오기
          </button>
        </p>
        <div className="card_list" ref={details}>
          {cardData.map((item, index) => {
            return (
              <div key={index} className="card_item">
                <img
                  src={item.imageUri}
                  alt="card_image"
                  className="card_img"
                />
                <strong>{item.name}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
