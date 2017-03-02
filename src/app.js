import React , {Component } from 'react'
import { connect } from 'react-redux'

import Spin from './components/Spin'
import Message from './components/Message'

class App extends Component{
	render(){
		const {spin,message} = this.props
		return (
			<div className="nav">
				<Spin spin={spin}/>
				<Message data={message}/>
				
				<div className="content" >{this.props.children}</div>
			</div>
		)
	}
}

function map(state) {
  return {
    spin: state.spin.spin,
    message:state.message.message
  }
}

export default connect(map)(App)


