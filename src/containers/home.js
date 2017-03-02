import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'

import Slider from '../components/homeSlider'
import Nav from '../components/nav'
import Product from '../components/homeProduct'
import Tip from '../components/homeTip'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(homeAPI())
  }

  render() {
    const { dispatch,data } = this.props
    return (
      <div className='root'>

          <div className='main'>
            <Slider data={data.slider} />
            <Tip/>
            <Product data={data.product} />
          </div>

          <Nav/>

      </div>
    )
  }
}

function map(state) {
  return {
    data: state.home.home
  }
}

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}

export default connect(map)(App)
