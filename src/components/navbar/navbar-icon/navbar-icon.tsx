import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import Tooltip from '@mui/material/Tooltip';
import styles from "./navbar-icon.module.scss";

const iconComponents = [
  { icon: <AiOutlineSearch />, name: "search", tooltip: "Tìm kiếm" },
  { icon: <AiOutlineShopping />, name: "shopping", tooltip: "Mua hàng" }
];

const NavbarIcons = (): JSX.Element => {
  return (
    <div className={styles["btn-icons"]}>
      {iconComponents.map(({ icon, name, tooltip }) => (
        <Tooltip title={tooltip} key={name}>
          <div className={styles.icon}>
            {icon}
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default NavbarIcons;
