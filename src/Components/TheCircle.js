
function TheCircle() {
  let keyframes = 
    `@-webkit-keyframes rotating {
      from {
          -webkit-transform: rotate(0deg);
      }
      to {
          -webkit-transform: rotate(360deg);
      }
  }`
  const styleMajor = {
    backgroundColor: "#0f0",
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    position: "relative",
    webkitAnimation: `${keyframes} 1s linear infinite`,
  }

  const styleMinor ={
    backgroundColor: "#0ff",
    width: "50px",
    height: "50px",
    borderRadius:" 25px",
    position: "absolute",
    top: "0",
    left: "25px",
  }

  
  return (

    <div class="major" style={styleMajor}>
      <div class="minor">yes
      </div>
    </div>

  );
}

export default TheCircle;
