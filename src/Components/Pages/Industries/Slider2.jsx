import React from 'react'
import "./Industries.Style/Slider2.Style.css";

import img1 from '../../Assets/IndustriesImages/Slider2IMG/img1.png'
import img2 from '../../Assets/IndustriesImages/Slider2IMG/img2.png'
import img3 from '../../Assets/IndustriesImages/Slider2IMG/img3.png'

const Slider2 = () => {

    return (

        <div className='Slider2box1' >
            <div className='container'>
               
                    <input  className='check1' type="radio" name="slider" id="s1" checked />
                    <input className='check2' type="radio" name="slider" id="s2" />
                    <input className='check3' type="radio" name="slider" id="s3" />
                    <input className='check4' type="radio" name="slider" id="s4" />
                    <input className='check5' type="radio" name="slider" id="s5" />
            

                <div class="cards">
                    <label for="s1" id="slide1">
                        <div class="card">
                            <div class="image">
                                <img src={img1} alt="" />
                            </div>
                        </div>

                    </label>

                    <label for="s2" id="slide2">
                        <div class="card">
                            <div class="image">
                                <img src={img2} alt="" />
                            </div>
                        </div>

                    </label>

                    <label for="s3" id="slide3">
                        <div class="card">
                            <div class="image">
                                <img src={img3} alt="" />
                            </div>
                        </div>

                    </label>

                    <label for="s4" id="slide4">
                        <div class="card">
                            <div class="image">
                                <img src={img2} alt="" />
                            </div>
                        </div>

                    </label>


                    <label for="s5" id="slide5">
                        <div class="card">
                            <div class="image">
                                <img src={img3} alt="" />
                            </div>
                        </div>

                    </label>



                </div>


            </div>
        </div>

    )
}

export default Slider2