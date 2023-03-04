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
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(64,64,115,0.9654236694677871) 35%, rgba(26,103,180,1) 100%)",
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
