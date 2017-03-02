import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'

import Tab from '../components/tab'
import MyInverstHeader from '../components/myInverstHeader'
import Tabs,{Tabpane} from '../components/common/Tabs'

class Assert extends Component {

  constructor(props) {
    super(props);
  
    this.state = {

    }
  }


  componentDidMount(){
    const { dispatch, data } = this.props
    dispatch(homeAPI())
  }

  render() {
    const { dispatch,spin,data } = this.props
    return (
       <div className='root'>
          <Tab tab1='返回' title='我的U优宝'/>
           
          <div className='touch tab myInverst'>

           <MyInverstHeader />

            <Tabs active={1} >
                <Tabpane name='待生效'>
                  test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/> test<br/>test<br/>test<br/>test<br/>test<br/>
                </Tabpane>
                <Tabpane name='收益中'>
                  test
                </Tabpane>
                <Tabpane name='续投中'>
                  test
                </Tabpane>
                <Tabpane name='已退出'>
                  test
                </Tabpane>
            </Tabs>

          </div>
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
