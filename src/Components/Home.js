// import './home.css'
import './home-model2.css'
function Home({ home }) {
  return (
    <div ref={home} className="homepage">
      <div className='background'>
        <div className='overlay'>
          <div className='text'><h1 style={{fontWeight: '900', fontSize: '45px'}}>Martin Stojmenovski 
          <span style={{fontWeight: '500', fontSize: '20px', wordBreak: 'keep-all'}}> Software Engineer</span></h1>
          <br/> 
            <p style={{fontWeight: '500', fontSize: '20px'}}> I am a Python and Javasript developer based in Denver.
                Passionate about simple and robust code.
                I love photography, architecture and coffee.
                 </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;


// -------------------------------------------------------------------------------old style
// import './home.css'
// function Home({ home }) {
//   return (
//     <div ref={home} className="homepage">
//       <div className='background'>
//         <div className='spine'>
//           <div className='brand-statement'>
//             <div className='dot'></div>
//             <p style={{ fontSize: '1rem', fontWeight:'600px' }}>&nbsp;creative</p>
//             <h1 className="developer" > Developer<span style={{ fontSize: '1rem' }}>&</span></h1>
//             <h1 className='designer' style={{position:"relative", top:"-20px"}}>Designer</h1>
           
//           </div>
//           <div className='front-layout'>
//               <p className='statement'>&emsp;I am a developer and UX/UI
//                 designer based in Denver. Passionate about simple and robust design.
//                 I love photography, architecture and coffee.</p>

//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default Home;