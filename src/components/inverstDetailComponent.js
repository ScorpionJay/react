import React, { Component } from 'react'

export default class InverstDetailComponent extends Component { 


  buy(){
    console.log(this.props.data)
  }


  render() {
     const { displayName ,code,groupInfo,interestRateDisplay,extInvestPeriodDisplay,extCurrentPrice,id,extCollectionModeDisplay } = this.props.data
    return (
      <div style={Styles.container}>
        <div style={Styles.container}>
          <div style={Styles.top}>
            <div style={Styles.displayName}>{displayName}  {code}</div>
            <div style={Styles.con}>
                <div style={Styles.con1}>
                  <div style={Styles.rate}>{interestRateDisplay}</div>
                  <div style={Styles.text}>期望年化收益率</div>
                </div>
                <div style={Styles.con1}>  
                  <div style={Styles.extInvest}>{extCollectionModeDisplay}</div>
                  <div style={Styles.extCurrentPrice}>收益方式</div>
                </div>
            </div>
          </div>

          

        </div>
        <div style={Styles.inverstBtn} ngClick={()=>this.buy.bind(this)}>立即投资</div>
      </div>
    )
  }
}


const Styles = {
  container:{
    height:'100%',
    flex:1,
    display:'flex',
    flexDirection:'column'
  },
  top:{
    backgroundColor:'#6474D0',
    padding:'1.5rem 1rem',
    display:'flex',
    flexDirection:'column'
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
  rate: {
    fontSize: '1.8rem',
    color: '#fff'
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


