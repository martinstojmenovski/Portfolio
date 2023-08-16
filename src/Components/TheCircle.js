import jsxToString from "jsx-to-string";
import "./theCircle.css"
import ReactCurvedText from "react-curved-text";


function TheCircle() {


  const currentJsx = (
    <ReactCurvedText
      
      width={600}
      height={600}
      cx={300}
      cy={300}
      rx={173}
      ry={173}
      startOffset={0}
      reversed={false}
      text='Development  -  Research  -  UI Design  -  UX Design  -  Creative Ideas  -  Amazing Photo  -  '
      textProps={{ "style": { "fontSize": 26 } }}
      textPathProps={{"fill": "#e4e4e45d"}}
      tspanProps={null}
      ellipseProps={null}
      svgProps={{ "className": "rotating-curved-text" }}
    />
  );

  let currentJsxString = jsxToString(currentJsx, {
    displayName: "ReactCurvedText",
    useFunctionCode: true
  });
  currentJsxString =
    "import ReactCurvedText from 'react-curved-text';\n\n" + currentJsxString;
  return (

<div  className="exampleWrapperDiv">{currentJsx}</div>

 






  );
}

export default TheCircle;
