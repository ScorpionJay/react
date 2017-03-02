import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { inverstListApi } from '../actions/inverst'

import Tab from '../components/tab'
import Nav from '../components/nav'
import Spin from '../components/Spin'
import InverstList from '../components/inverstList'

class Inverst extends Component {

  componentDidMount(){
    const { dispatch, data } = this.props
    dispatch(inverstListApi(1))
  }

  render() {
    const { inversList } = this.props
    return (
      <div className='root'>
        <Tab title='投资'/>
        <div style={{display:'flex',flexDirection:'column',overflowY: 'auto',flex:1,height:'100%',
      overflowX: 'hidden',}} className='touch'>
         
          <InverstList data={inversList}/>
          </div>
          <Nav/>
      </div>
    )
  }
}

function map(state) {
  return {
    inversList: state.inverst.inverstList,
  }
}

// 样式
const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}

export default connect(map)(Inverst)
