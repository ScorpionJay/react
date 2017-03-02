import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { inverstItemApi } from '../actions/inverst'

import Tab from '../components/tab'
import Nav from '../components/nav'
import InverstDetailComponent from '../components/tyb'
import Hqb from '../components/hqb'

import Dialog from '../components/Dialog'
import {dialogShow,dialogHidden} from '../actions/dialog'

class Buy extends Component {

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

  buy(){
    const { dispatch } = this.props

    // logic TODO
    console.log(this.refs.money.value)
    console.log(this.props.data)
   

    // dialog
    dispatch(dialogShow('确认购买？'))

  }

  render() {
    const { dispatch,spin,data,dialog } = this.props
    console.log(data)
    return (
      <div className='root'>
        <Tab  tab1='返回' title={data.productType}/>
        <div style={{display:'flex',flexDirection:'column',overflowY: 'auto',flex:1,height:'100%',
          overflowX: 'hidden','overflowScrolling':'touch'}} className='touch'>
           <div>
              <input placeholder='请输入购买金额' ref='money'/>
            </div>

            <button onClick={(e)=>this.buy(e)}>购买</button>
            <Dialog data={dialog} fnConfirm={()=>{ console.log('确认购买') }} fnCancle={()=>dispatch(dialogHidden())} />
          </div>
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.inverst.inverstItem,
    dialog:state.dialog.dialog
  }
}

// 样式
const Styles = {
}

export default connect(map)(Buy)
