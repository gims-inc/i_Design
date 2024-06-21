import React from 'react';

import rectangle from './images/Rectangle.png';
import elipse from './images/ellipse.png';
import digitalProducts  from './images/digital_products.png';

import '../../../css/sub/services.css';


const SectionOne = () =>{
    return(
        
        <section className="branding-startegy">

            <div className='row' id="div-one">
                <div className='col'>
                    <h1>
                    Your one-stop destination for digital innovation
                    </h1>

                    <h5>
                    Our design and technology acumen is the key to delivering top brands and digital experiences
                    </h5>

                    <div className='form-div'>     
                        <form className='form-one'>
                            <input className="email-input" type="text" name='name' placeholder="Enter yoyr email..." />
                           
                            <input className="btn-input" type="submit" value="Get started now" />
                        </form>
                    </div>
                </div>

                <div className='col' id="img-one">
                   <img src={rectangle}></img>
                   {/* <button>play</button> */}
                   {/* <button id='btn-three'>Join today</button> */}
                </div>

            </div>

            <div className='row' id='branding-row-two'>

                <div className='col' id='branding-header-div'>
                    <h2>
                    Branding and Strategy
                    </h2>
                </div>
                <div className='col' id='branding-hr-div'>
                    <hr></hr>
                </div>

            </div>

            <div className='row' id='branding-row-four'>
                <h5>
                Our core approach unifies brand and UX, seamlessly crafting digital brand identities across channels with strategic guidance for consistency.
                </h5>

            </div>

            <div className='row'  id='branding-row-three'>

                <div className='col'>
                    <ul>
                        <li>Research and Insights</li>
                        <li>Brand Strategy</li>
                        <li>Brand Identity</li>
                        <li>Naming </li>
                    </ul>

                </div>
            
                <div className='col'>
                    <ul>
                        <li>Journey Mapping and Testing</li>
                        <li>Logo Design</li>
                        <li>Design Systems</li>
                        <li>Visual Identity</li>

                    </ul>
                    
                </div>

            </div>


        </section>

        
    )
        
}

const SectionTwo = () =>{
    return(
        <section className="digital-products">

            <div className='row' id='dg-row-one'>

                <div className='col' id="img-two">
                    <img src={digitalProducts}></img>
                </div>

                <div className='col' id='dg-col-two'>

                    <h2>Digital Products</h2>

                    <h5>
                        At iDesign, we're dedicated to delivering exceptional user experiences for all, be it in work or leisure.
                        We craft memorable enterprise and consumer products and offer robust design systems for effortless product enhancement
                    </h5>

                        <div className='row'>

                                <div className='col'>
                                    <ul>
                                        <li>Website Design</li>
                                        <li>UX Design</li>
                                        <li>Animation</li>
                                        <li>Innovation Sprints</li>
                                    </ul>

                                </div>

                                <div className='col'>
                                    <ul>
                                        <li>Prototyping</li>
                                        <li>WordPress Development</li>
                                        <li>WebFlow Development</li>
                                        <li>CMS Implementation</li>

                                    </ul>
                                    
                                </div>

                        </div>
                </div>
            </div>

        </section>
    )
}

const SectionThree = () =>{
    return(
        <section className="websites">

            <div className='row'>
                <div className='col' id='wb-col-one'>
                    <h2>Websites</h2>
                </div>

                <div className='col'>
                    <hr></hr>
                </div>
            </div>

            <div className='row' id='wb-row-two'>
                <h5>
                A website is your paramount brand showcase to engage customers.
                Our portfolio boasts award-winning websites designed for optimal user experience and business success.
                </h5>
            </div>


            <div className='row'>

                                <div className='col'>
                                    <ul>
                                        <li>Content Strategy</li>
                                        <li>Web Design</li>
                                        <li>Interactive Experiences</li>
                                    </ul>

                                </div>

                                <div className='col'>
                                    <ul>
                                        <li>Content Production</li>
                                        <li>Frontend & Backend Development</li>
                                        <li>CMS Implementation</li>

                                    </ul>
                                    
                                </div>

             </div>

        </section>
    )
}

const SectionFour = () =>{
    return(
        <section className="development">

        <div className='row'>
                <div className='col' id="dev-img-col">
                    <img></img>
                </div>

                <div className='col' id='dev-col-two'>
                    <h2>Development</h2>
                    <h5>
                    Our designers and developers collaborate to craft websites and products that offer superb user experiences and functionality.
                    We prioritize search engine visibility, accessibility, and peak performance
                    </h5>

                        <div className='row'>

                                <div className='col'>
                                    <ul>
                                        <li>Technology Consulting</li>
                                        <li>Architecture Planning</li>
                                        <li>Mobile App Developmen</li>
                                    </ul>

                                </div>

                                <div className='col'>
                                    <ul>
                                        <li>Frontend Web Development</li>
                                        <li>Backend Development & API Integration</li>
                                        <li>Emerging Tech (AI, AR/VR, Wearables, Web3)</li>

                                    </ul>
                                    
                                </div>

                        </div>
                </div>
            </div>


        </section>
    )
}

const SectionFive = () =>{
    return(
        <section className="content">

            <div className='row'>
                <div className='col' id='content-col-one'>
                    <h2>Content</h2>
                </div>

                <div className='col'>
                    <hr></hr>
                </div>
            </div>

            <div className='row' id="content-row-two">
                <h5>
                In the digital realm, authentic content is paramount. We partner with brands to discern their distinct content requirements
                and deliver tailor-made assets of the utmost quality, meticulously crafted to perfection.
                </h5>
            </div>


            <div className='row'>

                                <div className='col'>
                                    <ul>
                                        <li>Art Direction</li>
                                        <li>Illustration & Graphic Design</li>
                                        <li>Iconography</li>
                                    </ul>

                                </div>

                                <div className='col'>
                                    <ul>
                                        <li>Animation</li>
                                        <li>Photo & Video</li>
                                        <li>3D</li>

                                    </ul>
                                    
                                </div>

             </div>

        </section>
    )
}
const SectionSix = () =>{
    return(
        <section className="marketing">
            <div className='row'>
                <div className='col' id='img-four'>
                    <img src={elipse}></img>
                </div>

                <div className='col' id='mk-col-two'>
                    <h2>Marketing</h2>
                    <h5>
                    Genuine content is a digital imperative. We collaborate with brands to pinpoint their exclusive content demands and deliver meticulously crafted,
                    high-quality assets tailored to every detail
                    </h5>

                        <div className='row'>

                                <div className='col'>
                                    <ul>
                                        <li>Growth strategy</li>
                                        <li>Campaign strategy and creation</li>
                                        <li>Sales funnel design</li>
                                        <li>SEO</li>
                                    </ul>

                                </div>

                                <div className='col'>
                                    <ul>
                                        <li>Content strategy</li>
                                        <li>Conversion rate optimization</li>
                                        <li>Content production</li>
                                        <li>Packaging design</li>

                                    </ul>
                                    
                                </div>

                        </div>
                </div>
            </div>


        </section>
    )
}
const Services = () => {
    return (
        <div className="serviceContainer">

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />

        </div> 
        )
}

export default Services

