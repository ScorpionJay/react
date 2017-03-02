import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MeComponent extends Component { 

  render() {
    return (
      <div style={Styles.container}>
          <div>
           	<div>在投本金(元)</div>
           	<div style={Styles.money}>100.00</div>
          </div>
          <div style={Styles.center}>
           	<div>预期收益(元)</div>
           	<div style={Styles.money}>100.00</div>
          </div>
          <div>
           	<div>累计收益(元)</div>
           	<div style={Styles.money}>100.00</div>
          </div>
      </div>
    )
  }
}

const Styles = {
	container:{
		display:'flex',
		justifyContent:'space-around',
		padding:'2rem 0',
		backgroundColor:'#fff'
	},
	center:{
		borderLeft:'1px solid #e1e1e1',
		borderRight:'1px solid #e1e1e1',
		padding:'0 2rem'
	},
	money:{
		color:'red',
		paddingTop:'2rem'
	}
  
}


