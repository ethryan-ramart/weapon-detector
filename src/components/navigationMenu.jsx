import { Menu } from "antd";
import { Link } from "react-router-dom";


function NavigationMenu() {
    return (
      <Menu theme="dark" mode="inline">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    );
  }

export default NavigationMenu;