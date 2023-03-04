import Sider from "antd/es/layout/Sider";
import NavigationMenu from "./navigationMenu";
import Logo from "../img/logo.png";
const SideMenu = () => {
  return (
    // <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    <Sider
      style={{
        height: "100vh",
        // position: "fixed",
        left: 0,
        top: 0,
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <div
        style={{
          height: 32,
          marginTop: 10,
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        <img
          style={{
            height: 50,
            width: 185,
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          src={Logo}
          alt="logo"
        />
      </div>
      <hr />
      <NavigationMenu />
    </Sider>
  );
};

export default SideMenu;
