import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginFetch } from '../actions/login'
import { browserHistory } from 'react-router'

import Tab from '../components/tab'
import {alert} from '../actions/message'


class Login extends Component {

  login(e){
    const { dispatch } = this.props
    // validate
    if(  !this.refs.username.value ){
      dispatch(alert('请输入用户名'))
      return
    }else if(  !this.refs.password.value ){
      dispatch(alert('请输入密码'))
      return
    }
    
    const page = this.props.params.page
    dispatch(loginFetch(this.refs.username.value,this.refs.password.value,()=>{
      browserHistory.push(page || '/')
    }))
  }

  render() {
    const { dispatch,data,message } = this.props
    return (
      <div>
          <Tab tab1='返回' title='登录'/>
      
          <div style={{marginTop:50}}>
            <div style={Styles.logo}>
              <img style={Styles.logoImg} src={require('../images/logo.png')} />
            </div>
            <div style={{display:'flex',flexDirection: 'column'}}>
              <input placeholder='请输入您的手机号' ref='username' style={Styles.ipt}/>
              <input type='password' placeholder='请输入您的登录密码' ref='password' style={Styles.ipt}/>
            </div>
            <div style={Styles.btn} onClick= {(e) => this.login(e)}>登录</div>
          </div>
      
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.home.fetchList,
    message:state.message.message
  }
}

const Styles = {
  content:{
    marginTop:50,
  },
  logo:{
    textAlign:'center',
    marginTop:'4rem',
    marginBottom:'4rem'
  },
  logoImg:{
    height:'80px'
  },
  ipt: {
    display:'flex',
    flex:1,
    height:'30px',
    border:'1px solid #333',
    padding:'5PX 5px',
    fontSize:'13px',
    margin:'2px 1rem'
  },
  btn: {
    display:'flex',
    flex:1,
    borderRadius:'25px',
    backgroundColor:'#FF7460',
    color:'#fff',
    fontSize:'16px',
    border:0,
    fontSize:'1.5rem',
    margin:'2rem 1rem',
    padding:'.8rem',
    justifyContent: 'center',
  }
}

export default connect(map)(Login)
