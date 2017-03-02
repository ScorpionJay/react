import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { logoutFetch } from '../actions/login'
import { browserHistory } from 'react-router'

import Collapse,{Panel} from '../components/common/Collapse'

import Tab from '../components/tab'

class Guide extends Component {

  render() {
    const { dispatch,spin,data } = this.props
    return (
      <div className='root'>
          <Tab tab1='返回' title='安全保障' />

          <div className='touch tab' >

                  <Collapse active={0} size={1}>
                    <Panel name='体验宝'>
                      体验宝
                    </Panel>
                    <Panel name='新手项目'>
                      asdfadsdfsdf
                    </Panel>
                    <Panel name='定期宝'>
                      定期宝
                    </Panel>
                  </Collapse>
          </div>
         
      </div>
    )
  }
}

function map(state) {
  return {
    login: state.login.login,
  }
}

const Styles = {

}

export default connect(map)(Guide)
