import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("header")}>
      <h1 className={cx("title")}>
        <Link to="/" className={cx("link_to_home")}>
          MGMG
        </Link>
      </h1>
    </header>
  );
};

export default Header;
