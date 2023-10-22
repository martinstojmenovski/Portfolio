

import ReactCurvedText from "react-curved-text";
import { useMediaQuery } from 'react-responsive'


function TheCircle() {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })

  const currentJsx = (
    <ReactCurvedText
      
      width={600}
      height={600}
      cx={300}
      cy={300}
      rx={173}
      ry={173}
      startOffset={0}
      reversed={isDesktopOrLaptop ? true : false}
      text='Development  -  Research  -  UI Design  -  UX Design  -  Creative Ideas  -  Amazing Photo  -  '
      textProps={{ "style": { "fontSize": 26 } }}
      textPathProps={{"fill": "#E1E2E2"}}
      tspanProps={null}
      ellipseProps={null}
      svgProps={{ "className": "rotating-curved-text" }}
    />
  );

 
  return (


<div className="circleAnimation">
<div  className="exampleWrapperDiv">{currentJsx}</div>
</div>


 






  );
}

export default TheCircle;
