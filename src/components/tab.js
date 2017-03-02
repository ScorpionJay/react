import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class Tab extends Component { 

  constructor(props) {
    super(props);
    this.state = {};
  }


  back(){
    if(this.props.tab1){
      browserHistory.goBack()
    }
    
  }

  tab3Fn(){
    if( this.props.tab3Fn )
       this.props.tab3Fn()
  }


  render() {



    return (
      <div style={Styles.nav}>
        <a style={Styles.tab1} onClick={ this.back.bind(this) }>{this.props.tab1 ? <div className="arrow-left"></div> :''}</a>
        <div style={Styles.tab2}>{ this.props.title }</div>
        <div style={Styles.tab3} onClick={ this.tab3Fn.bind(this)}>{this.props.tab3}</div>
      </div>
    )
  }
}

const Styles = {
  nav:{
    display:'flex',
    height:50,
    justifyContent:'space-between',
    borderBottom:'1px solid #e1e1e1',
    fontSize: '20px',
    color: '#fff',
    backgroundColor: '#FF7460'
  },
  tab1:{
    flex:1,
    lineHeight:'50px',
    textDecoration: 'none',
    paddingLeft:10,
    fontSize: '18px',
  },
  tab2:{
    flex:1,
    textAlign:'center',
    lineHeight:'50px',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#FF7460'
  },
  tab3:{
    flex:1,
    textAlign:'right',
    lineHeight:'48px',
    textDecoration: 'none',
    paddingRight:10
  },
  back:{
    width:45,
    marginLeft:-15
  }
}


