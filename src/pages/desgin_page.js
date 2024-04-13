import React, { useState , useRef} from "react";
import { HexColorPicker } from "react-colorful";
import hyperlinkimage from "../images/link.png" 
import insertimage from "../images/insert-img.png"
import colorimage from "../images/color-img.png"
import backgroundcolorimg from "../images/backgroundcolor-img.png"
import borderstyleimg from "../images/border-style-img.png"
import borderradiusimg from "../images/borderradius-img.png"
import widthimg from "../images/size-img.png"
import borderwidthimg from "../images/border-width-img.png"
import bordercolorimg from "../images/bordercolor-img.png"
import locationimg from "../images/location-img.png"
function Desgin_page() {
  const [elements, setElements] = useState([]);
  const [activeElement, setActiveElement] = useState(null);
  const [taskBarOpen , settaskBarOpen] = useState(false)
  const [maintasktab , setmaintasktab] = useState(true)
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [popupName , setpopupname] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const elementRef = useRef(null);
  const [opencolorbar , setopencolorbar] = useState(false)
  //for the set color popup
  const [color, setColor] = useState("#aabbcc");
  const [coloredit , setcoloredit] = useState(false)
  var all_element = {}
  //

  const Setcolorpopup = () => {
    return <HexColorPicker color={color} onChange={setColor} />;
  };
  const createDiv = (elid) => {
    // const id = var;
    setpopupname(true)
    setElements([...elements, { id: elid, top: 0, left: 0, color: "#fafafa" , backgroundColor:"fafafa"}]);
  };
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Input value:", inputValue);
    createDiv(inputValue)
    setInputValue("")
    setpopupname(false)
  };

  const handleMouseDown = (e, el) => {
    setmaintasktab(false)
    if (e.target === e.currentTarget) {
      setActiveElement({ ...el, initialX: e.clientX, initialY: e.clientY });
      setSelectedElementId(el.id);
    }
  };

  const handleMouseMove = (e) => {
    if (!activeElement) return;

    const deltaX = Math.min(Math.max(e.clientX - activeElement.initialX, -5), 5) * 0.9;
    const deltaY = Math.min(Math.max(e.clientY - activeElement.initialY, -5), 5) * 0.9;

    const newElements = [...elements];
    const draggingElementIndex = elements.findIndex((item) => item.id === activeElement.id);
    newElements[draggingElementIndex] = {
      ...newElements[draggingElementIndex],
      top: activeElement.top + deltaY,
      left: activeElement.left + deltaX,
    };
    console.log(draggingElementIndex.top)
    setActiveElement({ ...activeElement, top: newElements[draggingElementIndex].top, left: newElements[draggingElementIndex].left });
    setElements(newElements);
  };

  const handleMouseUp = () => {
    setActiveElement(null);
    setmaintasktab(true)
  };

  const updateColor = (id, color) => {
    if (selectedElementId === id) {
      const updatedElements = elements.map((el) =>
        el.id === id ? { ...el, color } : el
      );
      setElements(updatedElements);
    }
    console.log(`Changed color for ${selectedElementId}` )
  };
  const updatebackgroundcolor = (id, bgcolor ) => {
    if (selectedElementId === id) {
      const updatedElements = elements.map((el) =>
        el.id === id ? { ...el, backgroundColor : bgcolor } : el
      );
      setElements(updatedElements);
      setcoloredit(false)
    }
    console.log(`Changed color for ${selectedElementId} with the color ${color}`)
  };
  //clicking to get the id
  const getId = () =>{
    console.log(selectedElementId)
  }
  //defaul style after create
  const getStyles = (el) => ({
    position: "absolute",
    top: el.top,
    left: el.left,
    backgroundColor: selectedElementId ? el.backgroundColor : "#c83f49",
    color: el.color,
    padding: selectedElementId ? el.borderRadius : "10px",
    borderRadius:selectedElementId ? el.borderRadius : "5px",
    cursor: "move",
    userSelect: "none", // Disable text selection
  });
  return (
    <div
      style={{
        height: "100vh",
        background: "#fafafa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {elements.map((el) => (
        <div
          key={el.id}
          onMouseDown={(e) => handleMouseDown(e, el)}
          onClick={getId}
          style={getStyles(el)}
        >
          Item {elements.indexOf(el) + 1}
        </div>
      ))}
      {maintasktab && (
        <div id="popupMainTab">
          <div id="Text-Img-Anchor">
            <img id="insert-pic"src={insertimage}></img>
            <img id="hyper-link"src={hyperlinkimage}></img>
          </div>
            <div id="editpoperty">
                      <div id="bigedit" style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <img src={insertimage} alt="Insert Image" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
            <div className="div-edit-class" style={{ fontSize: "12px" }}>Insert Image</div>
          </div>
          <div className="div-edit-class" style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <img src={colorimage} alt="Color" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
            <div style={{ fontSize: "12px" }}>Color</div>
          </div>
          <div className="div-edit-class" style={{ display: "flex", alignItems: "center", margin: "5px" }} onClick={() => {setcoloredit(true)}}>
            <img src={backgroundcolorimg} alt="Background Color" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
            <div style={{ fontSize: "12px" }}>Background Color</div>
          </div>
          <div className="div-edit-class" style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <img src={borderstyleimg} alt="Border Style" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
            <div style={{ fontSize: "12px" }}>Border Style</div>
          </div>
          <div className="div-edit-class" style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <img src={borderradiusimg} alt="Border Radius" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
            <div style={{ fontSize: "12px" }}>Border Radius</div>
          </div>
          <div className="div-edit-class" style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <img src={locationimg} alt="Location" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
            <div style={{ fontSize: "12px" }}>Location</div>
          </div>
          <div className="div-edit-class" style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <img src={borderwidthimg} alt="Border Width" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
            <div style={{ fontSize: "12px" }}>Border Width</div>
          </div>
          <div className="div-edit-class" style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <img src={bordercolorimg} alt="Border Color" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
            <div style={{ fontSize: "12px" }}>Border Color</div>
          </div>
          <div className="div-edit-class" style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <img src={widthimg} alt="Size" style={{ width: "30px", height: "30px", marginRight: "5px" }} />
            <div style={{ fontSize: "12px" }}>Size</div>
          </div>

          </div>
          <div>
            <h3>--insert element--</h3>
          </div>
          <div id="biginsert">
            <button onClick={() => {setpopupname(true)}}>Create button</button>
          </div>
        </div>
      )}
      {popupName && (
        <div id="insertnamewindow">
              <h1>Element id</h1>
              <form onSubmit={handleFormSubmit}>

      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button id="submit-name-btn" type="submit">Submit</button>
    </form>

        </div>
      )}
      {coloredit && (
        <div id="coloreditpopup">
          <Setcolorpopup></Setcolorpopup>
          <button id="submit-color" onClick={() => {updatebackgroundcolor(selectedElementId , color)}}>Change color</button>
          
        </div>
      )}
    </div>
  );
      }

export default Desgin_page;