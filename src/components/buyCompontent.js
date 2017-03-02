import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class Buy extends Component { 

   buy(){
    console.log(this.props.data)
    // logic
    browserHistory.push('/buy/' + this.props.data.id) 

  }


  render() {
     const { displayName ,code,groupInfo,interestRateDisplay,extInvestPeriodDisplay,extCurrentPrice,id,extCollectionModeDisplay } = this.props.data
    return (
      <div style={Styles.container}>
          <div style={Styles.top}>
            <div style={Styles.rate}>8.00<i style={{fontSize:'1.5rem'}}>%</i></div>
            <div style={Styles.rateText}>预期年化收益</div>
          </div> 

          <div style={Styles.second}>
            <div style={Styles.secondItem}>
              <div style={Styles.icon1}></div>
              <div>期限10天</div>
            </div>
            <div style={Styles.secondItem2}>
              <div style={Styles.icon2}></div>
              <div>体验金专享</div>
            </div>
            <div style={Styles.secondItem}>
              <div style={Styles.icon3}></div>
              <div>收益复投</div>
            </div>
          </div>

          <div style={Styles.third}>
            <div style={Styles.thirdItem}>
              <div style={Styles.thirdItemLeft}>起息日期</div>
              <div style={Styles.thirdItemRight}>2017-01-22</div>
            </div>

            <div style={Styles.thirdItem}>
              <div style={Styles.thirdItemLeft}>收益发放</div>
              <div style={Styles.thirdItemRight}>2017-01-22</div>
            </div>

            <div style={Styles.thirdItem}>
              <div style={Styles.thirdItemLeft}>可用体验金</div>
              <div style={Styles.thirdItemRight}>1000元</div>
            </div>

            <div style={Styles.thirdItem}>
              <div style={Styles.thirdItemLeft}>预期总收益</div>
              <div style={Styles.thirdItemRight}>22.36元</div>
            </div>
          </div>

          <div style={Styles.buyBtn} onClick={this.buy.bind(this)}>
            立即购买
          </div>
        
      </div>
    )
  }
}


const Styles = {
  container:{
    height:'100%',
    flex:1,
    flexDirection:'column',
    display:'flex',
    
  },
  top:{
    backgroundColor:'#fff',
    padding:'3rem 1rem',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'column',
    height:'4rem',
  },
  rate: {
    color:'#FF7561',
    fontSize:'3.5rem'
  },
  rateText:{
    fontSize:'1.2rem',
    marginTop:'1.2rem',
    color:'#aaa'
  },
  second:{
    display:'flex',
    justifyContent:'space-between',
    padding:'2rem',
    backgroundColor:'#fff',
    marginTop:'1rem',
  },
  secondItem: {
    backgroundColor:'#fff',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  secondItem2: {
    backgroundColor:'#fff',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    borderLeft: '1px solid #e1e1e1',
    borderRight: '1px solid #e1e1e1',
    paddingLeft:'2rem',
    paddingRight:'2rem',
  },
  icon1: {
    backgroundImage: 'url(../images/features_xsb.png)',
    backgroundPosition: 'center 0px',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'30px auto',
    width: '30px',
    height: '30px',
    marginBottom:'1rem'
  },
  icon2: {
    backgroundImage: 'url(../images/features_xsb.png)',
    backgroundPosition: 'center 0px',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'30px auto',
    width: '30px',
    height: '30px',
    backgroundPosition: 'center -30px',
    marginBottom:'1rem'
  },
  icon3: {
    backgroundImage: 'url(../images/features_xsb.png)',
    backgroundPosition: 'center -60px',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'30px auto',
    width: '30px',
    height: '30px',
    marginBottom:'1rem'
  },
  third: {
    marginTop:'1rem',
    backgroundColor:'#fff',
    padding:'0 1rem'
  },
  thirdItem: {
    display:'flex',
    justifyContent:'space-between',
    borderBottom:'1px solid #e1e1e1',
    padding:'1rem 0'
  },
  thirdItemLeft:{
    color: '#333',
    fontSize:'1rem'
  },
  thirdItemRight:{
    color: '#333',
    fontSize:'1rem'
  },
  buyBtn: {
    marginTop:'1rem',
    backgroundColor:'#fd6b56',
    color:'#fff',
    padding:'.8rem 0',
    textAlign:'center',
    fontSize:'1rem'
  },

  Item:{
    // height:70,
    padding:'20px 30px 10px 30px',
    backgroundColor:'#fff',
    margin:'0 0 15px 0',
    display:'flex',
    flexDirection: 'column',
  },
  con: {
    display:'flex',
    marginTop:'1.1rem',
    alignItems:'center',
  },
  con1: {
    flex:1
  },
  displayName: {
    color: '#fff',
    fontSize: '0.8rem',
  },
  groupInfo:{
    color: '#fff',
    backgroundColor: '#91a7ff',
    display: 'inline-table',
    padding:'2px 4px',
    fontSize:'0.5rem',
    marginTop:'0.5rem'
  },
  text: {
    color: '#B4BCE8',
    fontSize: '0.8rem',
    marginTop: '0.5rem'
  },
  extInvest: {
    color: '#fff',
    fontSize: '0.8rem',
    marginTop: '0.5rem'
  },
  extCurrentPrice: {
    color: '#B4BCE8',
    fontSize: '0.8rem',
    marginTop: '0.9rem'
  },
  inverstBtn:{
    textAlign:'center',
    padding:15,
    backgroundColor:'#FC7946',
    color:'#fff'
  }

}


