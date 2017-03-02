import React, { Component } from 'react'

export default class MeComponent extends Component { 


  constructor(props) {
    super(props);
    console.log('login',this.props.login)
    this.state = {};
  }

  render() {
    return (
      <div className={'me'}>
        <div className='item'>
          
               {

                this.props.login ? <div style={Styles.picLine}><img src='https://avatars0.githubusercontent.com/u/5726089' style={Styles.pic}/><span style={Styles.name} >jay</span></div> : 
                <div><span className={'leftText'} onClick={this.props.fnLogin}>马上登录</span></div>
               } 
            
          
          <div className={'right'}>
            <span></span>        
            <span className='arrow-right'></span>
          </div>
        </div>

        <div className='item'>
          <div className={'left'}>
            <div className={'icon icon0'}></div>        
            <div className={'leftText'}>我的优惠券</div>
          </div>
          <div className={'right'}>
            <span>0</span>        
            <span className='arrow-right'></span>
          </div>
        </div>

        <div className='item'>
          <div>
            <span className={'icon icon1'}></span>        
            <span className={'leftText'}>我的资产</span>
          </div>
          <div className={'right'}>
            <span>0.00</span>        
            <span className='arrow-right'></span>
          </div>
        </div>

        <div className='item'>
          <div>
            <span className={'icon icon2'}></span>        
            <span className={'leftText'}>我的消息</span>
          </div>
          <div className={'right'}>
            <span></span>        
            <span className='arrow-right'></span>
          </div>
        </div>

        <div className='item'>
          <div>
            <span className={'icon icon3'}></span>        
            <span className={'leftText'}>推荐有奖</span>
          </div>
          <div className={'right'}>
            <span>一个好友=22元</span>        
            <span className='arrow-right'></span>
          </div>
        </div>


      </div>
    )
  }
}

const Styles = {
  picLine:{
    display: 'flex',
    height: '3rem',
    alignItems: 'center'
  },
  name: {
    marginLeft:'1rem'
  },
  nav:{
    backgroundColor: '#5B6AC1',
  },
  item1: {
    display:'flex',
    flex:1,
    padding:'10px 10px 10px 0',
    color:'#EDEEF8'
  },
  item11:{
    flex:1
  },
  item12:{
    fontSize:'1.5rem'
  },
  pic:{
    width:'35px',
    borderRadius:'100%',
    marginLeft:'10px'
  },
  item2:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    color:'#EDEEF8',
    padding:'20px 0',
  },
  item22:{
    marginTop:'15px'
  },
  item3: {
    display:'flex',
    justifyContent:'space-around',
    color:'#DADDF1',
    padding:'0 0 10px 0'
  },
  item33: {
   textAlign:'center',
    fontSize: '1rem',
    flex:1,
  },
  item31: {
    textAlign:'center',
    fontSize: '1rem',
    flex:1,
  },
  item32: {
    textAlign:'center',
    borderLeft:'1px solid #DADDF1',
    borderRight:'1px solid #DADDF1',
    padding:'0 1rem',
    fontSize: '1rem',
    flex:1
  },
  list:{
    marginTop:20
  },
  btn: {
    display:'flex',
    backgroundColor:'#fff',
    padding:'10px'
  },
  btnItem: {
    flex:1,
    display:'flex',
    justifyContent:'center',
    color:'#49A6ED',
    fontSize:'1.5rem'
  }
}


