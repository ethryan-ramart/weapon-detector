import { Layout } from "antd";
import SideMenu from "./sideMenu";

const CustomLayout = ({ children }) => {
  return (
    <Layout
      style={{
        background: "transparent",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <SideMenu />
        </div>
        <div
          style={{
            marginLeft: "30px",
            background: "white",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            width: "82vw",
          }}
        >
          {children}
        </div>
      </div>
    </Layout>
  );
};
export default CustomLayout;
