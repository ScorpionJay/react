import React, { Component, PropTypes } from 'react'

import Tab from '../components/tab'

export default class Guide extends Component {

  render() {
    const { dispatch,spin,data } = this.props
    return (
      <div className='root'>
          <Tab tab1='返回' title='新手指引' />
          <div className='touch tab' >
            {
               [1,2,3,4,5,6].map( (item, index) =>
                <img key={index} src={require('../images/guide/guide0'+ item +'.jpg')} width='100%' height='auto' />
                )
            }
          </div>
      </div>
    )
  }
}


