import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./TabNav.module.scss";

const cx = classNames.bind(styles);

// [D] 선택한 곳에 aria-selected="true" 붙도록 수정
const TabNav = () => {
  return (
    <ul role="tablist" className={cx("search_tab_list_area")}>
      <li className={cx("search_tab_item")}>
        <Link
          role="tab"
          className={cx("btn_search_tab")}
          aria-selected="true"
          to={"/single"}
        >
          카드 이름으로 추가
        </Link>
      </li>
      <li className={cx("search_tab_item")}>
        <Link role="tab" to={"/decklist"} className={cx("btn_search_tab")}>
          덱리로 추가
        </Link>
      </li>
      <li className={cx("search_tab_item")}>
        <Link role="tab" to={"/code"} className={cx("btn_search_tab")}>
          카드 코드로 추가
        </Link>
      </li>
    </ul>
  );
};

export default TabNav;
