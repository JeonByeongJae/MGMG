import { Link, useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./TabNav.module.scss";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

// [D] 선택한 곳에 aria-selected="true" 붙도록 수정
const TabNav = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const tabList = [
    {
      name: "single",
      to: "/single",
      text: "카드 이름으로 추가",
    },
    {
      name: "decklist",
      to: "/decklist",
      text: "덱 리스트로 추가",
    },
    {
      name: "csv",
      to: "/csv",
      text: "CSV로 추가",
    },
  ];

  const curTab = useLocation().pathname.split("/")[1];

  useEffect(() => {
    setSelectedTab(curTab);
  }, [curTab]);

  return (
    <ul role="tablist" className={cx("search_tab_list_area")}>
      {tabList.map((item, index) => {
        return (
          <li className={cx("search_tab_item")} key={`tab_${index}`}>
            <Link
              role="tab"
              className={cx("btn_search_tab")}
              to={item.to}
              aria-current={selectedTab === item.name}
            >
              {item.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TabNav;
