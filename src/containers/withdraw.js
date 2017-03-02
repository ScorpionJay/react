import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'

import Nav from '../components/nav'
import Tab from '../components/tab'
import AssetComponent from '../components/asset'

class Withdraw extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      message:''
    }
  }

  componentDidMount(){
    const { dispatch, data } = this.props
    dispatch(homeAPI())
  }

  handleChange(){
     this.setState({message: event.target.value})
  }

  render() {
    const { dispatch,spin,data } = this.props
    return (
       <div className='root'>
        <Tab tab1='返回' title='提现' />
        <div style={{display:'flex',flexDirection:'column',overflowY: 'auto',flex:1,height:'100%',
      overflowX: 'hidden'}} className='touch'>
          <input value={this.state.message} onChange={this.handleChange.bind(this)} placeholder='请输入金额'/>
          {this.state.message}
        </div>
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.home.home,
    login: state.login.login
  }
}

export default connect(map)(Withdraw)
