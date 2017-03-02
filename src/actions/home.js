// import 'whatwg-fetch'
import Config from '../config'
import { spin,spinHidden } from './spin'

export const HOME = 'HOME'

export const home = (obj) =>{
	return {
		type: HOME,
		obj
	}
}

export function homeAPI(){
	 return dispatch => {
	 	dispatch(spin())

	 	fetch(Config.homeAPI,{
			}).then(function(response) {
				return response.json()
			}).then(function(json) {
			 	dispatch(home(json))
			 	dispatch(spinHidden())
			}).catch(function(ex) {
				console.log('parsing failed', ex)
				dispatch(spinHidden())
			}
		)}
}


