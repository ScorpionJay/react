import { combineReducers } from 'redux'
import { HOME } from '../actions/home'

let homeVo = {
  slider:[
    {
      link:'https://github.com',
      img:'https://static.lufaxcdn.com/wcm-images/5GbQZmvn0OKbrgQ80IeMqA.png'
    }
  ],
  product:{
    name:''
  }
}


function home(state = homeVo, action) {
  switch (action.type) {
    case HOME:
      return action.obj
    default:
      return state
  }
}

const Reducers = combineReducers({
  home
})

export default Reducers