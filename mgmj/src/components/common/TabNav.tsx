const TabNav = () => {
  return (
    <ul role="tablist" className="search_tab_list_area">
      <li className="search_tab_item">
        <a role="tab" href="/" className="btn_search_tab" aria-selected="true">
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
  );
};

export default TabNav;
