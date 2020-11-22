
import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { drawMesh } from "./utilities";
import Unity, { UnityContext } from "react-unity-webgl";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const unityContext = new UnityContext({

    loaderUrl: "game/build/game.loader.js",
    dataUrl: "game/build/game.data",
    frameworkUrl: "game/build/game.framework.js",
    codeUrl: "game/build/game.wasm",
  
  });
  

export const DriveTest = () => {

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    
    const [looking, setLooking] = useState('')
  
    const events = () => {
      
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
          setLooking('Checked Right Side/Mirror')
        }
  
        else if(face[0].scaledMesh[411] > face[0].scaledMesh[356]){
          console.log("looking left")
          setLooking('Checked Left Side/Mirror')
        }
        else{
            setLooking('')
        }
      }catch{
        console.log('checked blind spot')
        setLooking('Checked Blind Spot')
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
              
              right: 0,
              textAlign: "center",
              zindex: 0,
              width: 300,
            
            }}
          />
  
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              right: 0,
              top: 185,
              textAlign: "center",
              zindex: 0,
              width: 300,
           
            }}
          />

          <p style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              right: 0,
              top: 450,
              textAlign: "center",
              zindex: 0,
              width: 300,}}
            > { looking } </p>
        </header>
  
        <Unity unityContext={unityContext} />


        {/* <TableContainer style={{top: 100}}component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        */}
      
            
      </div>
    );
  }