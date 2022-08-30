import './home.css'
function Home({ home }) {
  return (
    <div ref={home} className="home">
      <div className='logo'>
        <p className='creative'>&nbsp;creative</p>
        <h1 className="developer" >DEVELOPER<span className='and'>&</span></h1>
        <h1 className='designer'>DESIGNER</h1>
      </div>
      <p className='statement'>&emsp;Passionate about simple and functional design. I love coffee, architecture and golf.</p>

      <button className='contact'>Contact me</button>
    </div>
  );
}


export default Home;
