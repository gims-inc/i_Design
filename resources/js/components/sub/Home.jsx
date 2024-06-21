import React from 'react'
// import Video from './Video';


// import '../../../css/sub/home.css';

function Home(){
    return(
        <>

        <main className='mainContainer'>
        <div className='contain'>
            <div className='brand'>
            <h1>Empowering businesses with impactful apps, branding, and websites.</h1>
            </div>
            <div className='liny'></div>
            <div className='paras'>
            <p>We build powerful brands with a clear vision of the future. It begins with inspired insights that become the foundation of our work. Through advanced analytics, collaborative innovation and creativity, we spark growth strategies and help clients create imaginative experiences that delight customers.</p>
            </div>
            <div className='layer'>
            </div>
        </div>
        <div className='video'>
            <div>
                <h2>Elevate experiences and activate growth</h2>
            </div>
            {/* <Video /> */}
            <p>From bold new ideas to innovative platforms and branding solutions, we’ve got you covered. Our team works closely with you to strategize the next move and build custom solutions that unlock your full potential.</p>
            </div>
            <div className="contet">
            <div className='dash'>
                <h3>Designed to push new limits </h3>
                    <div className='liny'></div>
                <p>Through website design and branding, we help you strengthen your market position strategically, purposefully, and measurably.</p>
            </div>
            
            <div className="row row-cols-3 g-3">
        <div className="col">
            <div className="card text-white" style={{backgroundColor:  '#561F1F'}}>
            
            <div className="card-body">
            <h5 className="card-title">Branding & Strategy</h5>
                <ul className="list-group">
            <li className="list-group-item">Branding & Strategy</li>
            <li className="list-group-item">Brand Audit</li>
            <li className="list-group-item">Naming</li>
            <li className="list-group-item">Logo Design</li>
            <li className="list-group-item">Visual Identity</li>
            <li className="list-group-item">Graphic & Illustrations</li>
        </ul>
                
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-white" style={{backgroundColor:  '#393323'}}>
            
            <div className="card-body">
            <h5 className="card-title">Website and App Design</h5>
                <ul className="list-group ">
            <li className="list-group-item">Website Design</li>
            <li className="list-group-item">UI/UX Design</li>
            <li className="list-group-item">UX Audit</li>
            <li className="list-group-item">Mobile App Design</li>
            <li className="list-group-item">Animation</li>
            <li className="list-group-item">Design System</li>
        </ul>
            
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-white" style={{backgroundColor:  '#3B1939'}}>
            <div className="card-body">
                <h5 className="card-title">Website Development</h5>
                <ul className="list-group bg-primary">
            <li className="list-group-item">WordPress Development</li>
            <li className="list-group-item">Webflow Development</li>
            <li className="list-group-item">Shopify Development</li>
            <li className="list-group-item">Custom Web Development</li>
            <li className="list-group-item">Conversion Rate Optimization</li>
            <li className="list-group-item">SEO Strategy</li>
        </ul>
            </div>
            </div>
        </div>
        
        
        
        </div>
        <div className="imag">
        <h2>We transform companies through design innovation</h2>


        <div className='image'>
        {/* <Video /> */}
        <img src='https://mdbcdn.b-cdn.net/img/new/standard/city/050.webp' alt='Peter' />
        </div>
        </div>
        <div className='button'>
        <button className='button btn bg-warning m-4'>View Our Services</button>
        </div>
        </div>
        <div className='lettr'>
        <h2 className='text-warning'>Let's enhance your brand's reach collaboratively</h2>
        <div className='liny'></div>
        <div className='gets'>
        <button className='button btn bg-white'>Get started now</button>
        </div>
        </div>
       {/* footer was here */}
        </main>

      </>
    )
}

export default  Home