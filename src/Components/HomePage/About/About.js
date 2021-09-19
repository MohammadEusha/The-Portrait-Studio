import React from 'react';
import img from '../../../Images/offset_comp_772626-opt 1.png'

const About = () => {
    return (
        <div style={{ height: "80vh" }} className="container d-flex align-items-center">
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex">
                        <img style={{ height: "300px" }} src={img} alt="" className="img-fluid" />
                        <img style={{ height: "300px" }} src={img} alt="" className="mt-5 mx-3" />
                        <img style={{ height: "300px", marginTop: "100px" }} src={img} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="text-center display-3 fw-bold">About Us</h1>
                    <p className="mt-5 pt-2">Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit</p>
                </div>

            </div>
        </div>
    );
};

export default About;