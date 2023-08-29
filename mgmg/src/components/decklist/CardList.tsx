import classNames from "classnames/bind";
import styles from "./CardList.module.scss";

const cx = classNames.bind(styles);

export interface CardListType {
  name: string;
  count?: string;
  setName?: string;
  setNum?: Number;
  scryfallUri?: string;
  imageUri?: string;
}

const CardList = (props: { cardInfos: CardListType[] }) => {
  console.log("CardList", props.cardInfos);
  return (
    <ul className={cx("card_list")}>
      {props.cardInfos.map((item, index) => {
        return (
          <li className={cx("card_item")} key={`card_${index}`}>
            <img
              src={item.imageUri}
              alt={`${item.name}`}
              className={cx("card_img")}
            />
            <strong className={cx("card_name")}>{item.name}</strong>
            <p>x {item.count}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
