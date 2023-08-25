import React, { useEffect, useRef, useState } from "react";
import "./App.scss";

interface CardData {
  name: string;
  imageUri: string;
  manaCost: string;
}

interface ImportedCardData {
  name: string;
  count: string;
}

function App(): JSX.Element {
  let xhr: XMLHttpRequest | null = null;
  const details = useRef<HTMLDivElement>(null);
  const textareaDecklist = useRef<HTMLTextAreaElement>(null);
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
    };
  }

  const addList = () => {
    let importedCardArr: ImportedCardData[] = [];

    const decklist = textareaDecklist.current?.value;
    const decklistArr = decklist?.split("\n");

    decklistArr?.forEach((elem) => {
      if (elem.indexOf("//") && elem.length !== 0) {
        const nameRegExp = /([A-Za-z\'\,\s\//]+)\w+/;
        const countRegExp = /([\d]+\s[A-za-z])\w+/;
        const cardName = elem.match(nameRegExp)?.[0].substring(1) as string;
        const cardCount = elem.match(countRegExp)?.[0].split(" ")[0] as string;

        const tempCardItem = { name: cardName, count: cardCount };
        importedCardArr.push(tempCardItem);
      }
    });
    console.log(importedCardArr);
  };

  useEffect(() => {
    console.log("useEffect", cardData);
  }, [cardData]);

  return (
    <div className="wrap">
      <header className="header">
        <h1 className="title">MGMJ</h1>
      </header>
      <div className="content">
        <div className="get_data_area">
          결과
          <button className="btn_getdata" onClick={getDatas}>
            가져오기
          </button>
        </div>
        <div className="input_decklist_area">
          <textarea
            className="textarea_decklist"
            placeholder="카드 리스트 복붙"
            ref={textareaDecklist}
          ></textarea>
          <button className="btn_parse" onClick={addList}>
            추가하기
          </button>
        </div>
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
