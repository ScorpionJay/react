import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { logoutFetch } from '../actions/login'
import { browserHistory } from 'react-router'

import Collapse,{Panel} from '../components/common/Collapse'

import Tab from '../components/tab'

class Guide extends Component {

  render() {
    const { dispatch,spin,data } = this.props
    return (
      <div className='root'>
          <Tab tab1='返回' title='安全保障' />

          <div className='touch tab' >

            <div className="safepage">
                <div className="img"><img src={require('../images/safe/safe01.jpg')}  width='100%' height='auto' /></div>
                <div className="img"><img src={require('../images/safe/safe02.jpg')} width='100%' height='auto' /></div>
                <div className="text">
                  <h3>严格的项目准入标准</h3>
                  <p>严格准入资产来源，准确甄选低风险资产，确保每个项目的全流程资金监控。</p>
                </div>
                <div className="text">
                  <h3>完善的项目调查制度</h3>
                  <p>对借款方的收入、资产、负债、征信以及其他关键性指标数据进行严密的筛查和分析，全方位掌握借款方的真实情况及还款意愿。确保抵押物真实有效且不存在法律处置风险，相关风险保证资金足够覆盖项目日常风险敞口。</p>
                </div>
                <div className="text">
                  <h3>日常的贷后检测措施</h3>
                  <p>不定期抽查借款方的征信、流水、水电费单据等日常检测指标,确保借款方的正常还款进度。如有异常情况立即采取相关资产处置手段，提前覆盖项目风险，保障投资者的本息不受损失。</p>
                </div>
                <div className="img"><img src={require('../images/safe/safe03.jpg')} width='100%' height='auto' /></div>
                <div className="text">
                  <p>自主研发：全程自主研发，技术体系先进，保障系统正确、稳定运行。</p>
                  <p>系统安全：防护体系先进，提供主机入侵检测、安全检查、SQL注入、拖库窃密等防护，联动动态分析，实时记录并拦截攻击行为，可个性化配置防护策略。</p>
                  <p>分布式部署：访问端、服务端、数据端分离部署，每个端口部署多台服务器，采用nginx、haproxy进行请求分发，支持无缝发布，保证系统的安全性、稳定性，数据的完整性。</p>
                  <p>数据安全：SSL加密传输数据，用户隐私数据加密处理并永久保存。设立严格的权限管理体系保障用户敏感信息。</p>
                  <p>灾备管理：异地机房数据库灾备机制，保证数据一致性与数据库的安全。</p>
                  <p>DDOS防护：采用智能攻击识别引擎，超大流量防护能力，DNS攻击防护、cc防护、流量攻击防护等恶意流量清洗。</p>
                </div>
                <div className="img"><img src={require('../images/safe/safe04.jpg')} width='100%' height='auto' /></div>
                <div className="text">
                  <p>《中华人民共和国合同法》第一百九十六条规定：借款合同是借款人向贷款人借款，到期返还借款并支付利息的合同。</p>
                  <p>《中华人民共和国合同法》第四百二十四条规定：居间合同是居间人向委托人报告订立合同的机会或者提供订立合同的媒介服务，委托人支付报酬的合同。</p>
                  <p>《最高人民法院关于审理民间借贷案件适用法律若干问题的规定》第二十六条规定：借贷双方约定的利率未超过年利率的24%，出借人请求借款人按照约定的利率支付利息的，人民法院应予支持。借贷双方约定的利率超过年利率的36%，超过部分的利息约定无效。借款人请求出借人返还已支付的超过年利率36%部分的利息的，人民法院应予支持。</p>
                  <p>《中华人民共和国合同法》第十条规定：当事人订立合同，有书面形式、口头形式和其他形式。第十一条规定：书面形式是指合同书、信件和数据电文（包括电报、电传、传真、电子数据交换和电子邮件）等可以有形地变现所载内容的形式。</p>
                </div>
              </div>
          </div>
         
      </div>
    )
  }
}

function map(state) {
  return {
    login: state.login.login,
  }
}

const Styles = {

}

export default connect(map)(Guide)
