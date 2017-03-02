import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import Tab from '../components/tab'
import Tabs,{Tabpane} from '../components/common/Tabs'

export default class Faq extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      accountInfo:[
        {"title":"1.adfadf","content":"asdfadf"},
        {"title":"2.adfadf","content":"asdfadf"},
        {"title":"3.adfadf","content":"asaaaaaaaaaaaaaaaaaaaaaaaa"}
      ]
    };
  }


  tab(index){
    console.log(index)
  }

  render() {
    return (
      <div className='root'>

          <Tab tab1='返回' title='帮助中心' />

          <div className='touch tab faq' >

              <Tabs active={0} >
                <Tabpane name='账户相关'>
                  {
                    this.state.accountInfo.map((obj,index)=>
                      <div style={{borderBottom:'solid 1px #e1e1e1',padding:'1rem 0'}}>
                        <div>{obj.title}</div>
                        <div style={{padding:'1rem 1rem'}} dangerouslySetInnerHTML={{__html: obj.content}} />
                      </div>
                    )
                  }
                </Tabpane>
                <Tabpane name='业务相关'>
                  <Tabs active={0} size={1}>
                    <Tabpane name='a'>
                      {
                        this.state.accountInfo.map((obj,index)=>
                          <div style={{borderBottom:'solid 1px #e1e1e1',padding:'1rem 0'}}>
                            <div>{`${obj.index}. ${obj.title}`}</div>
                            <div style={{padding:'1rem 1rem'}} dangerouslySetInnerHTML={{__html: obj.content}} />
                          </div>
                        )
                      }
                    </Tabpane>
                    <Tabpane name='b'>
                      {
                      this.state.accountInfo.map((obj,index)=>
                          <div style={{borderBottom:'solid 1px #e1e1e1',padding:'1rem 0'}}>
                            <div>{`${obj.index}. ${obj.title}`}</div>
                            <div style={{padding:'1rem 1rem'}} dangerouslySetInnerHTML={{__html: obj.content}} />
                          </div>
                        )
                      }
                    </Tabpane>
                  </Tabs>
                </Tabpane>
                <Tabpane name='费用说明'>
                    
                    <div className="listbox">
                      <table>
                        <thead>
                          <tr>
                            <th width="18%"><span>序号</span></th>
                            <th width="38%"><span>名称</span></th>
                            <th width=""><span class="last">费用</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>提现手续费</td>
                            <td>每月前2次免费<br/>第3次起1元/笔</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>提前赎回手续费</td>
                            <td>投资金额*3%</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="tipsbox">
                        <span className="tips">注：具体的费用支付方式参考业务描述。</span>
                      </div>
                    </div>

                </Tabpane>
              </Tabs>

          </div>
         
      </div>
    )
  }
}

const Styles = {

}
