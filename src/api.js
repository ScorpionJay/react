import async from 'async';
require("babel-polyfill");	

const api = {

	// 请求
	request: async function (url){
		try{
			let response = await fetch(url);
			let data = await response.json();
			return data
		}catch(e){
			console.log('error',e)
		}
	}

};

export default api;



