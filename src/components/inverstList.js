import React, { Component } from 'react'
import { Link } from 'react-router'

export default class InverstList extends Component { 

  render() {
      return (
        <div >
          {
              this.props.data.map((item, index) =>
                    <Item data={item}  key={index}/>
                    )
          }
        </div>
      )
     
    
  }
}

class Item extends Component { 

  render() {
    const { productType ,productDesc,yearRate,hasAward,typeTerm,id } = this.props.data
    return (
      <Link to={`/inverstDetail/${productType}`}  className={'inverstItem'}>
        <div className={'up'}>
          <div className={'name'}>{productType}</div>
          <div className={'desc'}>{productDesc}</div>
        </div>
        <div className={'down'}>
          <div className={'left'}>
            <div className={'icon'+' '+productType}></div>
            <div>
              <div className={'rate'}>{yearRate}%</div>
              <div className={'text'}>预期年化收益</div>
            </div>
          </div>
          <div className={'right'}>
            <div className={'left'}>
              <div className={'term'}>{typeTerm}</div>
              <div className={'text'}>预期年化收益</div>
            </div>
            <div className={'arrow-right'}></div>
          </div>
        </div>
      </Link>
    )
  }
}



const Styles = {


}


