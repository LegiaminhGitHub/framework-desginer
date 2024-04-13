import React , {useState} from "react";
import "../index.css"
import {useNavigate} from "react-router-dom"
import { HexColorPicker } from "react-colorful";
function Main_page(){
  const [color, setColor] = useState("#aabbcc");
  const YourComponent = () => {
    return <HexColorPicker color={color} onChange={setColor} />;
  };
    const getcolor = () =>{
      console.log(color)
    }
    let navigate = useNavigate()
    function navigate_desgin(){
        navigate("/desgin")
    }
    return(
        <div id="start_desgin_dialouge">
            <button id="start_design_btn" onClick={navigate_desgin}>Start creating</button>
            <button id="open_design_btn">Open a project</button>
            <YourComponent></YourComponent>
            <button onClick={getcolor}>press here to give color</button>
        </div> 
    );
}

export default Main_page;
