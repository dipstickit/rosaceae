import Typography from "@mui/material/Typography";
import styles from "./navbar-item.module.scss";

const NavbarItem = (): JSX.Element => {
  return (
    <>
      {/* use styles.label instead of 'label' */}
      <div className={styles.label}>
        {/* use styles["navbar-item"] */}
        <Typography variant="body1" className={styles["navbar-item"]}>
          {/* use styles["text-wrapper"] */}
          <span className={styles["text-wrapper"]}>Giới Thiệu</span>
          <span className={styles["text-wrapper"]}>Dịch Vụ</span>
          <span className={styles["text-wrapper"]}>Spa</span>
          <span className={styles["text-wrapper"]}>Đặt Lịch</span>
          <span className={styles["text-wrapper"]}>Blog</span>
          <span className={styles["text-wrapper"]}>Sự Kiện</span>
          <span className={styles["text-wrapper"]}>Thông Tin</span>
          <span className={styles["text-wrapper"]}>Liên Hệ </span>
        </Typography>
      </div>
    </>
  );
};

export default NavbarItem;
