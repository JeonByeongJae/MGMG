import { useRef } from "react";
import Header from "../../components/common/Header";
import TabNav from "../../components/common/TabNav";
import styles from "./AddWithDecklist.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ImportedCardData {
  name: string;
  count: string;
}

export const SearchAsDecklist = () => {
  const textareaDecklist = useRef<HTMLTextAreaElement>(null);

  const addList = () => {
    let importedCardArr: ImportedCardData[] = [];

    const decklist = textareaDecklist.current?.value;
    const decklistArr = decklist?.split("\n");

    decklistArr?.forEach((elem) => {
      if (elem.indexOf("//") && elem.length !== 0) {
        const nameRegExp = /([A-Za-z'\-,\s//]+)\w+/;
        const countRegExp = /([\d]+\s[A-za-z])\w+/;
        const cardName = elem.match(nameRegExp)?.[0].substring(1) as string;
        const cardCount = elem.match(countRegExp)?.[0].split(" ")[0] as string;

        const tempCardItem = { name: cardName, count: cardCount };
        importedCardArr.push(tempCardItem);
      }
    });
    console.log(importedCardArr);
  };

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
          <button className={cx("btn_parse")} onClick={addList}>
            추가하기
          </button>
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  );
};
