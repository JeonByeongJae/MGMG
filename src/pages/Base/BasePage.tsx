import Header from "../../components/common/Header";
import TabNav from "../../components/common/TabNav";

export const BasePage = () => {
  return (
    <div className="wrap">
      <Header />
      <main className="content">
        <TabNav />
        {/* [D] 있는 카드 추가 순서대로 보여줄 예정 */}
        {/* <CardList/> */}
      </main>
      {/* <Footer/> */}
    </div>
  );
};
