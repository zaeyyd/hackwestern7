
import React, { useRef } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { drawMesh } from "./utilities";
import Unity, { UnityContext } from "react-unity-webgl";


const unityContext = new UnityContext({

  loaderUrl: "cart/build/cart.loader.js",
  dataUrl: "cart/build/cart.data",
  frameworkUrl: "cart/build/cart.framework.js",
  codeUrl: "cart/build/cart.wasm",

});


function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const events = () => {
    let 
  }
  //  Load posenet
  const runFacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });
    //
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const face = await net.estimateFaces(video);
      // console.log(face[0].scaledMesh[187]);
      // console.log(face[0].scaledMesh[127]);

      try{
      if(face[0].scaledMesh[187] < face[0].scaledMesh[127]){
        console.log("looking right")
      }

      else if(face[0].scaledMesh[411] > face[0].scaledMesh[356]){
        console.log("looking left")
      }
    }catch{
      console.log('checked blind spot')
    }

      // Get canvas context
      const ctx = canvasRef.current.getContext("2d");
      drawMesh(face, ctx);
    }
  };

  runFacemesh();

  return (
    <div className="App">
      <header className="App-header">
      

        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>

      <Unity unityContext={unityContext} />
    
          
    </div>
  );
}

export default App;

