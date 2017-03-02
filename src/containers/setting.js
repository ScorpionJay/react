import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { logoutFetch } from '../actions/login'

import Tab from '../components/tab'
import Nav from '../components/nav'
import MeComponent from '../components/me'

class Setting extends Component {

  logout(){
    const { dispatch } = this.props
    dispatch(logoutFetch(function(){
      location.replace('#home')
    }))
  }

  render() {
    const { dispatch,spin,data } = this.props
    return (
      <div>
          <Tab tab1='返回' title='设置' />
          <div >
            <div  style={{ height:15 }}></div>
            <div style={Styles.line}>实名认证</div>
            <div style={Styles.line}>手机认证</div>
            <div style={Styles.line}>绑定邮箱</div>
          </div>
          <div style={Styles.btn} onClick={this.logout.bind(this)}>安全退出</div>
      </div>
    )
  }
}

function map(state) {
  return {
    // data: state.home.fetchList,
    // spin: state.spin.spin
  }
}

// 样式
const Styles = {
  line: {
    padding:'10px',
    marginBottom:'10px',
    backgroundColor:'#eee',
    color:'#787878',
  },
  btn:{
    textAlign:'center',
    backgroundColor:'#FF7460',
    lineHeight:'45px',
    margin:'10px',
    borderRadius:'25px',
    color:'#fff',
    fontSize:'16px',
  }
}

export default connect(map)(Setting)
