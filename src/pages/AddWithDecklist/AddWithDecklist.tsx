import { useEffect, useRef, useState } from "react";
import Header from "../../components/common/Header";
import TabNav from "../../components/common/TabNav";
import styles from "./AddWithDecklist.module.scss";
import classNames from "classnames/bind";
import CardList, { CardListType } from "../../components/decklist/CardList";
import { getCardDataWithName } from "../../api/SearchData";

const cx = classNames.bind(styles);

export const AddWithDecklist = () => {
  const textareaDecklist = useRef<HTMLTextAreaElement>(null);
  const [cardList, setCardList] = useState<CardListType[]>([]);

  const getData = async (parsedData: CardListType[]) => {
    const promises = parsedData.map((el) => getCardDataWithName(el.name));
    await Promise.all(promises).then((data) => {
      data.forEach((el, index) => {
        el.count = parsedData[index].count;
      });
      setCardList(data);
    });
  };

  const addList = () => {
    let parsedArr: CardListType[] = [];

    const decklist = textareaDecklist.current?.value;
    const decklistArr = decklist?.split("\n");

    decklistArr?.forEach((elem) => {
      if (elem.indexOf("//") && elem.length !== 0) {
        const nameRegExp = /([A-Za-z'\-,\s//]+)\w+/;
        const countRegExp = /([\d]+\s[A-za-z])\w+/;
        const cardName = elem.match(nameRegExp)?.[0].substring(1) as string;
        const cardCount = elem.match(countRegExp)?.[0].split(" ")[0] as string;

        parsedArr.push({ name: cardName, count: cardCount });
      }
    });
    getData(parsedArr);
  };

  useEffect(() => {
    addList();
  }, []);

  return (
    <div className="wrap">
      <Header />
      <main className="content">
        <TabNav />
        <div className={cx("input_decklist_area")}>
          <textarea
            className={cx("textarea_decklist")}
            placeholder="카드 리스트 복붙"
            ref={textareaDecklist}
          ></textarea>
          <button className={cx("btn_add")} onClick={addList}>
            추가하기
          </button>
        </div>
        <CardList cardInfos={cardList} />
      </main>
      {/* <Footer/> */}
    </div>
  );
};
