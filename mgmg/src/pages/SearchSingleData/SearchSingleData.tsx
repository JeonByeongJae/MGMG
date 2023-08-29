import { useState } from "react";
import { getCardDataWithName } from "../../api/SearchData";
import Header from "../../components/common/Header";
import TabNav from "../../components/common/TabNav";
import styles from "./SearchSingleData.module.scss";
import classNames from "classnames/bind";
import { CardListType } from "../../components/decklist/CardList";

const cx = classNames.bind(styles);

export const SearchSingleData = () => {
  const [cardData, setCardData] = useState<CardListType>();

  const searchSingleData = () => {
    getCardDataWithName("Craterhoof Behemoth").then((data) => {
      setCardData(data);
    });
  };

  return (
    // [D] 레이아웃으로 빼고 싶다
    <div className="wrap">
      <Header />
      <main className="content">
        <TabNav />
        <div className={cx("get_data_area")}>
          결과
          <button className={cx("btn_getdata")} onClick={searchSingleData}>
            가져오기
          </button>
        </div>
        {/* [D] 카드리스트 대신 결과 화면 보여줄 예정 */}
        <div className={cx("card_list")}>
          <div className={cx("card_item")}>
            <img
              src={cardData?.imageUri}
              alt="card_image"
              className={cx("card_img")}
            />
            <strong>{cardData?.name}</strong>
          </div>
        </div>
      </main>
      {/* [D] 개발 예정(powerd by 정도) */}
      {/* <Footer/> */}
    </div>
  );
};
