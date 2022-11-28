import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import './Row.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CourseDataContext} from "../../contexts/courseData.context";

const Row = () => {
    const {courseDataProcessed} = useContext(CourseDataContext)
    const[data, setData] = useState([])
    
    useEffect(() => {
       fetch("/CourseData2").then(
         response => response.json()
       ).then(
         data => {
           setData(data)
         }
       )
     }, [])

    const settings = {
        dots: false,
        autoplay: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000
    };


    return (
        <Slider {...settings} >
            {(typeof data.class_names === 'undefined') ? (
                  <p>Loading</p>
                ): (
                    data.class_names?.map((info, index)=> (
                    <div className="big" key={index}>
                        <div className="slick-list">
                            <h5 className="title">{info.course_name}</h5>
                            <Link to={'/Course/' + info.course_id}>
                                <img src = {info.course_image}/>
                            </Link>
                        </div>
                        <div className="subheading">
                            <h6 className="rate">{info.course_rating_overall}%</h6>
                            <h6 className="subject">{info.course_subject}</h6>
                        </div>
                    </div>
                  ))
                )}
    </Slider>
    )}

export default Row;