import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import { Button, Table } from "antd";

const appBox = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "transparent",
  display: "flex",
};

const cameraContainer = {
  margin: "0 auto",
};

function ObjectDetector() {
  const webcamRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
    
  useEffect(() => {
    setLoading(true);
    const runDetection = async () => {
      const net = await cocossd.load();
      console.log("Model loaded successfully.");
      setInterval(() => {
        detect(net);
      }, 1500);
    };
    const detect = async (net) => {
      if (webcamRef.current && webcamRef.current.video.readyState === 4) {
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        const canvas = document.createElement("canvas");
        canvas.width = videoWidth;
        canvas.height = videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
        const img = tf.browser.fromPixels(canvas);
        const predictions = await net.detect(img);
        setData(predictions);
        console.log("Predictions: ", predictions);

      }
    };

    runDetection();
    setLoading(false);
  }, []);

  const columns = [
    {
      // title: "Name",
      dataIndex: "class",
      key: "class",
    },
  ]
  return (
    <div style={appBox}>
      <div style={cameraContainer}>
        <div>
          <Webcam
            style={{
              width: "80%",
              height: "80%",
            }}
            ref={webcamRef}
          />
        </div>
        <div>
          <Table
            dataSource={data}
            columns={columns}
          >

          </Table>
        </div>
      </div>
    </div>
  );
}

export default ObjectDetector;
