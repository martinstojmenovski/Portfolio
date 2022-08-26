import './Home.css'
function Home({ home }) {
    return (
      <div ref={home} className="home">
            <h1 className="brand" ><span>Creative</span><br/>DEVELOPER<span className='and'>&</span><br/>DESIGNER</h1>
            <p className='statement'>I bring my passion for humor and travel into each project, work environment.</p>
            <button className='contact'>Contact me</button>
      </div>
    );
  }
  
  export default Home;
  