import { useEffect, useRef, useState } from "react";
import "./scss/base.scss";
import "./App.scss";
import { searchData, CardData } from "./api/SearchData";

interface ImportedCardData {
  name: string;
  count: string;
}

export default function App(): JSX.Element {
  const textareaDecklist = useRef<HTMLTextAreaElement>(null);
  const [cardData, setCardData] = useState<CardData[]>([]);

  const searchSingleData = () => {
    searchData().then((data) => {
      setCardData(data);
    });
  };

  const addList = () => {
    let importedCardArr: ImportedCardData[] = [];

    const decklist = textareaDecklist.current?.value;
    const decklistArr = decklist?.split("\n");

    decklistArr?.forEach((elem) => {
      if (elem.indexOf("//") && elem.length !== 0) {
        const nameRegExp = /([A-Za-z',\s//]+)\w+/;
        const countRegExp = /([\d]+\s[A-za-z])\w+/;
        const cardName = elem.match(nameRegExp)?.[0].substring(1) as string;
        const cardCount = elem.match(countRegExp)?.[0].split(" ")[0] as string;

        const tempCardItem = { name: cardName, count: cardCount };
        importedCardArr.push(tempCardItem);
      }
    });
    console.log(importedCardArr);
  };

  useEffect(() => {}, [cardData]);

  return (
    <div className="wrap">
      <header className="header">
        <h1 className="title">MGMG</h1>
      </header>
      <div className="content">
        <ul role="tablist" className="search_tab_list_area">
          <li className="search_tab_item">
            <a
              role="tab"
              href="/"
              className="btn_search_tab"
              aria-selected="true"
            >
              카드 이름으로 추가
            </a>
          </li>
          <li className="search_tab_item">
            <a role="tab" href="/" className="btn_search_tab">
              덱리로 추가
            </a>
          </li>
          <li className="search_tab_item">
            <a role="tab" href="/" className="btn_search_tab">
              카드 코드로 추가
            </a>
          </li>
        </ul>

        <div className="get_data_area">
          결과
          <button className="btn_getdata" onClick={searchSingleData}>
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
        <div className="card_list">
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
