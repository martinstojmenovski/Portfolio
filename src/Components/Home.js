// import './home.css'
import './home-model2.css'
function Home({ home }) {
  return (
    <div ref={home} className="homepage">
      <div className='background'>
        <div className='overlay'>
          <div className='text'>
            <h1 style={{ whiteSpace:'nowrap'}}>Martin Stojmenovski </h1>
            <p style={{ whiteSpace:'nowrap'}}> Software Engineer</p>
          <br/> 
          <br/> 

            <p> I am a Python and Javasript developer based in Denver.
                Passionate about clean and robust code.
                I love photography, architecture and coffee.
                 </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
