import React, { Component, PropTypes } from 'react'

export default class HomeProduct extends Component { 

  render() {
    const { data } = this.props
      return (
        <div style={styles.container}>
            <div style={styles.name}>
              <div style={styles.text}>{data.name}</div>
            </div>
            <div  style={styles.item}>
              <div style={styles.expect}>预期年化收益</div>
            </div>
            <div  style={styles.item}>
              <div style={styles.rate}>{data.rate}<span style={styles.rate2}>%</span></div>
            </div>
            <div  style={styles.item}>
              <div style={styles.term}>投资期限{data.term}</div>
            </div>
            <div style={{display:'flex',flexDirection: 'row',justifyContent:'center',margin:10}}>
              <div style={styles.circle}>
                <div style={styles.buy}>购买</div>
              </div>
            </div>
        </div>
      )
  }
}

const styles = {
  container: {
    margin:8,
    borderRadius:10,
    flexDirection: 'column',
    padding:2,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#fff',
    borderBottomColor:'#eee',
    borderBottomWidth:1,
  },
  name:{
     borderBottom:'1px #bbb dashed',
    // borderBottomWidth:1,
    // borderBottomColor:'#eee',
    // // borderStyle:'dashed'
    paddingBottom:8,
  },
  item: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
  },
  img: {
    width:60/1.5,
    height:66/1.5
  },
  text:{
    margin:4,
    color:'#333',
    fontSize:19,
    textAlign:'center'
  },
  expect: {
    marginTop:10,
    color:'#787878',
    fontSize:14,
    textAlign:'center'
  },
  rate:{
    color:'#ff6601',
    fontSize:57,
    textAlign:'center'
  },
  rate2:{
    fontSize:37,
  },
  term: {
    fontSize:14,
    color:'#787878',
    textAlign:'center',
    lineHeight:'25px'
  },
  circle: {
    height:90,
    width:90,
    borderRadius:80,
    backgroundColor:'#ff6601',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
  },
  buy:{
    fontSize:23,
    color:'#fff'
  }
}




