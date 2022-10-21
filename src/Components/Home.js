
import './home-model2.css'

function Home({ home}) {

  return (
    <section ref={home} id='HOME' className="HOME">
        <div className='background'>
          <div className='overlay'>
          {/* <div className='bars1' >
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </div> */}
            <div className='text'>
              <h1 style={{ whiteSpace: 'nowrap' }}>Martin Stojmenovski </h1>
              <div style={{ whiteSpace: 'nowrap' }}> Software Engineer</div>
              <br />
              <p>Python and Javasript problem-solver based in Denver.
                Passionate about clean and robust code.
                I love photography, architecture and coffee.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}


export default Home;
