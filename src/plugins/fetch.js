import axios from 'axios';
import qs from 'qs';

axios.defaults.responseType = 'json';
axios.defaults.timeou = '5000';

const get = (url = '', data = {}) =>{
	return axios.get(url, {params: data});
};

const post = (url = '', data = {}) =>{
	return axios.post(url, qs.stringify(data), {
		// responseType: 'json',
		transformResponse: function(data){
			return data;
		}
	});
};



export {
	get, 
	post,
};