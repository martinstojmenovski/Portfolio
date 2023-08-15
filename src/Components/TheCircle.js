import jsxToString from "jsx-to-string";
import "./theCircle.css"
import ReactCurvedText from "react-curved-text";

function TheCircle() {
 




  const currentJsx = (
    <ReactCurvedText
    width={300}
    height={300}
    cx={150}
    cy={150}
    rx={100}
    ry={100}
    startOffset={0}
    reversed={true}
    text='react-curved-text'
    textProps={{"style": {"fontSize": 24}}}
    textPathProps={null}
    tspanProps={null}
    ellipseProps={null}
    svgProps={{"className": "rotating-curved-text"}}
    />
  );

  let currentJsxString = jsxToString(currentJsx, {
    displayName: "ReactCurvedText",
    useFunctionCode: true
  });
  currentJsxString =
    "import ReactCurvedText from 'react-curved-text';\n\n" + currentJsxString;
  return (
    
 <div className="exampleWrapperDiv">{currentJsx}</div>
   
     

   
   
    
  );
}

export default TheCircle;
