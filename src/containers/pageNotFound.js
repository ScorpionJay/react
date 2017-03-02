import React, { Component} from 'react'
import { Link } from 'react-router'

export default class PageNotFound extends Component {
  render() {
    return (
      <div style={Styles.container}>
        <div style={Styles.page}>页面不存在</div>
        <Link to="/" style={Styles.link}>返回首页</Link>
      </div>
    )
  }
}

const Styles = {
  container:{
    flex:1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#eee',
    flexDirection: 'column'
  },
  page:{
    color:'#ffa100',
    fontSize:'3rem'
  },
  link:{
    color:'#fff',
    fontSize:'1.2rem',
    backgroundColor:'#fd6b56',
    padding:'.5rem 2rem',
    marginTop:'2rem'
  }
} 
