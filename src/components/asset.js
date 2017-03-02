import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MeComponent extends Component { 

  render() {
    return (
      <div className='assert'>
        <div style={Styles.nav}>
          <div style={Styles.item1}>
            <a style={Styles.item11}href='#/setting' >
              
            </a>
          </div>
          <div style={Styles.item2}>
              <div>当前资产(元)</div>
              <div style={Styles.item22}>100,000.00元</div>
          </div>
          <div style={Styles.item3}>
            <div style={Styles.item31}>
              <div style={{marginBottom:'5px'}}>昨日收益(元)</div>
              <div style={Styles.item33}>2.00</div>
            </div>
            <div style={Styles.item32}>
              <div style={{marginBottom:'5px'}}>累计收益(元)</div>
              <div  style={Styles.item33}>200.00</div>
            </div>
            <div style={Styles.item31}>
              <div style={{marginBottom:'5px'}}>可用投资券(张)</div>
              <div  style={Styles.item33}>2</div>
            </div>
          </div>
        </div>
        <div style={Styles.btn}>
          <Link style={Styles.btnItem} to='withdraw'>提现</Link>
          <Link style={Styles.btnItem}>充值</Link>
        </div>


        <div style={Styles.list} >
          <div style={Styles.item}>
            <div style={Styles.left}>
              <div className='icon icon1'></div>
              <div>可用余额</div>
            </div>
            <div style={Styles.right}>
              <div style={Styles.icon222}>100元</div>
              <div className='arrow-right'></div>
            </div>
          </div>

          <div style={Styles.item}>
            <div style={Styles.left}>
              <div className='icon icon2'></div>
              <div>冻结余额</div>
            </div>
            <div style={Styles.right}>
              <div style={Styles.icon222}>100元</div>
              <div className='arrow-right'></div>
            </div>
          </div>

          <Link style={Styles.item} to='myInverst'>
            <div style={Styles.left}>
              <div className='icon icon3'></div>
              <div>U优宝</div>
            </div>
            <div style={Styles.right}>
              <div style={Styles.icon222}>100元</div>
              <div className='arrow-right'></div>
            </div>
          </Link>

          <div style={Styles.item}>
            <div style={Styles.left}>
              <div className='icon icon4'></div>
              <div>定期宝</div>
            </div>
            <div style={Styles.right}>
              <div style={Styles.icon222}>100元</div>
              <div className='arrow-right'></div>
            </div>
          </div>



          <div style={Styles.item}>
            <div style={Styles.left}>
              <div className='icon icon7'></div>
              <div>体验宝</div>
            </div>
            <div style={Styles.right}>
              <div style={Styles.icon222}>100元</div>
              <div className='arrow-right'></div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const Styles = {
  nav:{
    backgroundColor: '#FD6B56',
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
    color:'#fff',
    padding:'20px 0',
  },
  item22:{
    marginTop:'15px',
    fontSize:'1.5rem'
  },
  item3: {
    display:'flex',
    justifyContent:'space-around',
    color:'#fff',
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
    margin:'1rem 0'
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
    color:'#FD6B56',
    fontSize:'1.5rem'
  },

  item:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'1rem',
    backgroundColor:'#fff',
    borderBottom:'1px solid #e5e5e5'
  },
  left:{
    display:'flex',
    alignItems:'center',
  },
  right: {
    display:'flex',
    alignItems:'center',
  }
  
}


