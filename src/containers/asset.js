import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'

import Nav from '../components/nav'
import AssetComponent from '../components/asset'

class Assert extends Component {

  componentDidMount(){
    const { dispatch, data } = this.props
    dispatch(homeAPI())
  }

  render() {
    const { dispatch,spin,data } = this.props
    return (
       <div className='root'>
        <div style={{display:'flex',flexDirection:'column',overflowY: 'auto',flex:1,height:'100%',
      overflowX: 'hidden',}} className='touch'>
          <AssetComponent/>
        </div>
          <Nav/>
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.home.home,
    login: state.login.login,
  }
}



export default connect(map)(Assert)
