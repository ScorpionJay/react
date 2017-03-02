import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { logoutFetch } from '../actions/login'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'

import Tab from '../components/tab'
import Nav from '../components/nav'
import MeComponent from '../components/me'

class More extends Component {

  logout(){
    const { dispatch } = this.props
    dispatch(logoutFetch(function(){
      browserHistory.push('/')
    }))
  }

  render() {
    const { dispatch,spin,data } = this.props
    return (
      <div className='root'>
          <Tab tab1='返回' title='更多' />

          <div style={{display:'flex',flexDirection:'column',overflowY: 'auto',flex:1,height:'100%',
      overflowX: 'hidden',}} className='touch more'>

            <Link className='item' to='guide'>
              <div className='left'>
                <div className={'icon icon0'}></div>
                <div className='text'>新手指引</div>
              </div>
              <div className={'arrow-right'}></div>
            </Link>

            <Link className='item' to='safe'>
              <div className='left'>
                <div className={'icon icon6'}></div>
                <div className='text'>安全保障</div>
              </div>
              <div className={'arrow-right'}></div>
            </Link>

            <Link className='item' to='faq'>
              <div className='left'>
                <div className={'icon icon2'}></div>
                <div className='text'>帮助中心</div>
              </div>
              <div className={'arrow-right'}></div>
            </Link>

            <a href="tel:123456789" className='item'>
              <div className='left'>
                <div className={'icon icon3'}></div>
                <div className='text'>客服电话</div>
              </div>
              <div className='tel'>123456789</div>
            </a>

            <div className='item'>
              <div className='left'>
                <div className={'icon icon5'}></div>
                <div className='text'>意见反馈</div>
              </div>
              <div className={'arrow-right'}></div>
            </div>
            
            {
              this.props.login ? <div className='btn' onClick={this.logout.bind(this)}>退出</div> :
              <div className='btn' onClick={()=>{ browserHistory.push('login')  }}>登录</div>
            }
            

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
  more:{
    flex:1,
  },
  item: {
    padding:'10px',
    backgroundColor:'#eee',
    color:'#787878',
  },
  btn:{
    textAlign:'center',
    backgroundColor:'#ff6600',
    lineHeight:'45px',
    margin:'10px',
    borderRadius:'25px',
    color:'#fff',
    fontSize:'16px',
  }
}

export default connect(map)(More)