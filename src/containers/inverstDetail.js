import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { inverstItemApi } from '../actions/inverst'

import Tab from '../components/tab'
import Nav from '../components/nav'
import InverstDetailComponent from '../components/tyb'
import Hqb from '../components/hqb'

class InverstDetail extends Component {


  constructor(props) {

    super(props);

    this.state = {
      id: this.props.params.id
    };
  }

  componentDidMount(){
    const { dispatch } = this.props

    // 判断调用哪个api
    dispatch(inverstItemApi(this.props.params.id))
    
  }

  render() {
    const { dispatch,spin,data } = this.props
    console.log(data)
    return (
      <div className='root'>
        <Tab  tab1='返回' title={data.productType}/>
        <div style={{display:'flex',flexDirection:'column',overflowY: 'auto',flex:1,height:'100%',
          overflowX: 'hidden','overflowScrolling':'touch'}} className='touch'>
          
          {
            this.props.params.id === '活期宝' ? 
              <Hqb data={data} /> : 
              <InverstDetailComponent data={data} />
          }
          </div>
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.inverst.inverstItem,
  }
}

// 样式
const Styles = {
}

export default connect(map)(InverstDetail)
