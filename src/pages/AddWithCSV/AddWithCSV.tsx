import { useRef, useState } from "react";
import Header from "../../components/common/Header";
import TabNav from "../../components/common/TabNav";
import styles from "./AddWithCSV.module.scss";
import classNames from "classnames/bind";
import { CardListType } from "../../components/decklist/CardList";
import { getCardDataWithName } from "../../api/SearchData";

const cx = classNames.bind(styles);

export const AddWithCSV = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [cardList, setCardList] = useState<CardListType[]>([]);

  const handleInputClick = () => {
    inputRef.current?.click();
  };

  const handleOnChange = (e: React.ChangeEvent) => {
    const inputFiles = (e.target as HTMLInputElement).files as FileList;
    const inputFileArray = Array.from(inputFiles);
    let inputList: CardListType[] = [];

    const reader = new FileReader();
    reader.readAsText(inputFileArray[0]);
    reader.onload = (e) => {
      const res = e.target?.result as string;
      const resArr = res.split("\n");
      resArr.forEach((el) => {
        const tempArr = el.split("\t");
        inputList.push({
          name: tempArr[0],
          count: tempArr[1],
        });
      });
      inputList.shift();
    };

    getData(inputList);
  };

  const getData = (parsedData: CardListType[]) => {
    console.log("getData1", parsedData);
    const promises = parsedData.map((el) => getCardDataWithName(el.name));
    Promise.all(promises).then((data) => {
      console.log("getData2", data);
      data.forEach((el, index) => {
        el.count = parsedData[index].count;
      });
      setCardList(data);
    });
  };

  return (
    <div className="wrap">
      <Header />
      <main className="content">
        <TabNav />
        <div className={cx("input_csv_area")}>
          <input
            type="file"
            ref={inputRef}
            className={cx("input_csv")}
            onChange={handleOnChange}
            accept=".csv"
          />
          <button className={cx("btn_add")} onClick={handleInputClick}>
            CSV 파일 추가
          </button>
          {cardList.map((el) => {
            return <div>{el.name}</div>;
          })}
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  );
};
