import './home.css'
import image1 from './images/denver-colorado.jpg'
import image2 from './images/denver-colorado-copy.jpg'
function Home({ home }) {
  return (
    <div ref={home} className="homepage">
      <div className='background'>
        <div className='spine'>
          <div className='brand-statement'>
            <div className='dot'></div>
            <p style={{ fontSize: '1rem' }}>&nbsp;creative</p>
            <h1 className="developer" >DEVELOPER<span style={{ fontSize: '1rem' }}>&</span></h1>
            <h1 className='designer'>DESIGNER</h1>
            <div className='front-layout'>
              <p className='statement'>&emsp;Passionate about simple and robust design.
                I love coffee, architecture, golf.</p>

            </div>
          </div>
        </div>
      </div>





      {/* <div className='logo'>
        <p className='creative'>&nbsp;creative</p>
        <h1 className="developer" >DEVELOPER<span className='and'>&</span></h1>
        <h1 className='designer'>DESIGNER</h1>
      </div>
      <p className='statement'>&emsp;Passionate about simple and robust design.
        I love coffee, architecture, golf.</p>
      <a href="mailto:martinstojmenovskim@gmail.com">
        <p className="email"><button className='contact'>Contact me</button></p>
      </a> */}
    </div>
  );
}


export default Home;
