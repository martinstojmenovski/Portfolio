import './Home.css'
function Home({ home }) {
    return (
      <div ref={home} className="home">
            <h1 className="brand" >DESIGNER<span className='and'>&</span><br/>DEVELOPER</h1>
            <h2>Hello world</h2>
      </div>
    );
  }
  
  export default Home;
  