import './home.css'
function Home({ home }) {
    return (
      <div ref={home} className="home">
        
            <p className='creative'>Creative</p>
            <h1 className="developer" >DEVELOPER<span className='and'>&</span></h1>
            <h1 className='designer'>DESIGNER</h1>
            <p className='statement'>I bring my passion for humor and travel into each project, work environment.</p>
            
            <button className='contact'>Contact me</button>
      </div>
    );
  }
  
  export default Home;
  