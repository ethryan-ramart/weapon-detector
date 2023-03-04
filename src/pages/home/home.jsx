//Imports
import { Typography } from "antd";

//css
import "../../css/clashFont.css";

//styles
const titleStyle = {
  fontFamily: "Clash of Clans",
  color: "white",
  fontSize: "4rem",
  textShadow: "4px 2px 4px #000000",
};
const textStyle = {
  fontFamily: "Clash of Clans",
  color: "white",
  fontSize: "2rem",
  textShadow: "4px 2px 4px #000000",
};

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={titleStyle}>WEAPON DETECTOR</h1>
      <p style={textStyle}>
        This project would help to reduce costs from buying security stuff and software and replace <br />
        it with a webcam that decreases the price a lot, but the most important thing from this app <br />
        is the function of security that use artificial inteligence to detect a weapon.
      </p>
    </div>
  );
}

export default Home;
