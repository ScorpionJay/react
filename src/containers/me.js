import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { homeAPI } from '../actions/home'

import Nav from '../components/nav'
import Tab from '../components/tab'
import MeComponent from '../components/me'



class Me extends Component {

  componentDidMount(){
    const { dispatch, data } = this.props
    dispatch(homeAPI())
  }

  more(){
    browserHistory.push('/more') 
  }

  render() {
    const { dispatch,spin,data,login } = this.props
    return (
       <div className='root'>
        <Tab title='我' tab3='更多' tab3Fn={()=>this.more()  }/>
        <div style={{display:'flex',flexDirection:'column',overflowY: 'auto',flex:1,height:'100%',
      overflowX: 'hidden',}} className='touch'>
         
          <MeComponent login={login} fnLogin={()=>{ location.href= '/login/me' }}/>
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



export default connect(map)(Me)
