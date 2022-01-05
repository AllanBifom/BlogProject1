import React, { Component } from "react";
import Slider from "react-slick";
import  Carousel  from "react-elastic-carousel";
import '../App.css';

export default class Slick2 extends Component {
    render() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ]
    return (
        <div>
        
        <Carousel breakPoints={breakPoints}>
            <div>
            <h3>1</h3>
            </div>
            <div>
            <h3>2</h3>
            </div>
            <div>
            <h3>3</h3>
            </div>
            <div>
            <h3>4</h3>
            </div>
            <div>
            <h3>5</h3>
            </div>
            <div>
            <h3>6</h3>
            </div>
        </Carousel>
    </div>
    );
}
}