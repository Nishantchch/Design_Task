import React from 'react'
import '../home/HomeStyle/Slider.css'


import EastIcon from '@mui/icons-material/East';


import img1 from '../../Assets/Slider2img/home2slide2.png'

 

const Slider = () => {
    return (
        <div > 
            <div className="general-container">

                <input className="radio" type="radio" name="card" id="card-1" checked />

                <label className="content" for="card-1">
                    <p className='p'>01 </p>

                    <img className='img1' src={img1} alt='' />

                    <h3 className="card-title">
 
                        Tech Spotlight <br></br><br></br>
 
                        <span className="subtitle">mosphe leads the Nation’s strategic and unified
                            work to strengthen the security, <br></br><br></br> resilience, and workforce of the cyber
                            ecosystem to protect critical services and <br></br><br></br> American way of life.</span>
                        
                        <button className='button1' variant="contained" disableElevation >
                            Read more &nbsp;<EastIcon fontSize='medium' />
                        </button>


                    </h3>




                </label>

                <input className="radio" type="radio" name="card" id="card-2" />

                <label className="content" for="card-2">

                    <p className='p'>02</p>

                    <img className='img1' src={img1} alt=''/>

                    <h3 className="card-title">

                        Tech Spotlight <br></br><br></br>

                        <span className="subtitle">mosphe leads the Nation’s strategic and unified
                            work to strengthen the security, <br></br><br></br> resilience, and workforce of the cyber
                            ecosystem to protect critical services and <br></br><br></br> American way of life.</span>
                        
                        <button className='button1' variant="contained" disableElevation >
                            Read more &nbsp;<EastIcon fontSize='medium' />
                        </button>
                    </h3>



                </label>

                <input className="radio" type="radio" name="card" id="card-3" />

                <label className="content" for="card-3">

                    <p className='p'>03</p>

                    <img className='img1' src={img1} alt=''/>
                    <h3 className="card-title">

                        Tech Spotlight <br></br><br></br>

                        <span className="subtitle">mosphe leads the Nation’s strategic and unified
                            work to strengthen the security, <br></br><br></br> resilience, and workforce of the cyber
                            ecosystem to protect critical services and <br></br><br></br> American way of life.</span>
                        
                        <button className='button1' variant="contained" disableElevation >
                            Read more &nbsp;<EastIcon fontSize='medium' />
                        </button>

                    </h3>



                </label>

                <input className="radio" type="radio" name="card" id="card-4" />

                <label className="content" for="card-4">

                    <p className='p'>04</p>

                    <img className='img1' src={img1} alt=''/>
                    <h3 className="card-title">

                        Tech Spotlight <br></br><br></br>

                        <span className="subtitle">mosphe leads the Nation’s strategic and unified
                            work to strengthen the security, <br></br><br></br> resilience, and workforce of the cyber
                            ecosystem to protect critical services and <br></br><br></br> American way of life.</span>
                        
                        <button className='button1' variant="contained" disableElevation >
                            Read more &nbsp;<EastIcon fontSize='medium' />
                        </button>

                    </h3>




                </label>

                <input className="radio" type="radio" name="card" id="card-5" />

                <label className="content" for="card-5">

                    <p className='p'>05</p>

                    <img className='img1' src={img1} alt='' />

                    <h3 className="card-title">

                        Tech Spotlight <br></br><br></br>

                        <span className="subtitle">mosphe leads the Nation’s strategic and unified
                            work to strengthen the security, <br></br><br></br> resilience, and workforce of the cyber
                            ecosystem to protect critical services and <br></br><br></br> American way of life.</span>
                        
                        <button className='button1' variant="contained" disableElevation >
                            Read more &nbsp;<EastIcon fontSize='medium' />
                        </button>

                    </h3>


                </label>

            </div>
        </div>
    )
}

export default Slider
