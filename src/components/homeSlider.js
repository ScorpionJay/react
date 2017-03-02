import React, { Component } from 'react'
import Slider from 'react-slick'

export default class SimpleSlider extends Component { 

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      arrows:false,
      //adaptiveHeight:true
    }
      
    const { data } = this.props
    return (
      <Slider {...settings}>
        {
          data.map((item) => <div><SliderItem url={item.img}/></div>)
        }
      </Slider>
    )
  }
}


class SliderItem extends Component { 
  render() {
    return (
      <a href='https://github.com'>
        <img src={this.props.url} />
      </a>
    )
  }
}