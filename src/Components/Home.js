import './home.css'
function Home({ home }) {
  return (
    <div ref={home} className="homepage">
      <div className='background'>
        <div className='spine'>
          <div className='brand-statement'>
            <div className='dot'></div>
            {/* <p style={{ fontSize: '1rem', paddingTop: '20px' }}>&nbsp;creative</p> */}
            <h1 className="developer" >DEVELOPER    <span style={{ fontSize: '1rem' }}>&</span>      <br/>DESIGNER</h1>
            {/* <h1 className='designer'></h1> */}
           
          </div>
          <div className='front-layout'>
              <p className='statement'>&emsp;I am a developer and UX/UI
                designer based in Denver. Passionate about simple and robust design.
                I love photography, architecture and coffee.</p>

            </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
