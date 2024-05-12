import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Img } from "../Img";
import { Heading } from "../Heading";
interface Props {
  className?: string;
}
export default function Sidebar1({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);
  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)  //}

  return (
    <Sidebar
      {...props}
      width="347px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 90 } }}
      className={`${props.className} flex flex-col h-screen pt-[49px] gap-[90px] top-0 md:gap-[67px] md:pt-5 md:p-5 sm:gap-[45px] bg-white-A700 !sticky overflow-auto md:hidden`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "13px",
            gap: "24px",
            alignSelf: "start",
            color: "#737791",
            fontWeight: 400,
            fontSize: "18px",
            [`&:hover, &.ps-active`]: {
              color: "#1814f3",
            },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "0.37px" } }}
        className="flex w-full flex-col self-stretch"
      >
        <MenuItem
          icon={
            <Img
              src="images/img_home.svg"
              alt="home"
              className="w-[25px] h-[25px]"
            />
          }
        >
          Dashboard
        </MenuItem>{" "}
        <MenuItem
          icon={
            <Img
              src="images/img_download.svg"
              alt="download"
              className="w-[32px] h-[32px]"
            />
          }
        >
          {" "}
          Bảng xếp hạng{" "}
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_icon_outline_shopping_cart.svg"
              alt="iconoutline"
              className="w-[32px] h-[32px]"
            />
          }
        >
          Đơn đặt dịch vụ{" "}
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_mdi_shopping_outline.svg"
              alt="mdishopping"
              className="w-[32px] h-[32px]"
            />
          }
        >
          {" "}
          Dịch vụ{" "}
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_interface_chart_line.svg"
              alt="interfacechart"
              className="w-[32px] h-[32px]"
            />
          }
        >
          {" "}
          Báo cáo doanh thu{" "}
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_mdi_message_pro.svg"
              alt="mdimessagepro"
              className="w-[32px] h-[32px]"
            />
          }
        >
          {" "}
          Nội dung{" "}
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_mdi_cog_outline.svg"
              alt="mdicogoutline"
              className="w-[32px] h-[32px]"
            />
          }
        >
          {" "}
          Cài đặt{" "}
        </MenuItem>{" "}
        <MenuItem
          icon={
            <Img
              src="images/img_television.svg"
              alt="television"
              className="w-[32px] h-[32px]"
            />
          }
        >
          {" "}
          Đăng xuất{" "}
        </MenuItem>
      </Menu>{" "}
    </Sidebar>
  );
}
