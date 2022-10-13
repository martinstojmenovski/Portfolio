// import './home.css'
import './home-model2.css'
function Home({ home }) {
  return (
    <section ref={home} className="HOME">
      <div id='homepage'>
        <div className='background'>
          <div className='overlay'>
            <div className='text'>
              <h1 style={{ whiteSpace: 'nowrap' }}>Martin Stojmenovski </h1>
              <div style={{ whiteSpace: 'nowrap' }}> Software Engineer</div>
              <br />
              <br />
              <p> I am a Python and Javasript developer based in Denver.
                Passionate about clean and robust code.
                I love photography, architecture and coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Home;
