import{
	GET_CODE, 
	DO_LOGIN,
	GET_SCENE,
	SET_SCENE,
	GET_USERINFO,
	GET_LIST,
	GET_MAIN,
	GET_PRODUCTTYPE,
} from './mutations-type';
import {
	get_code, 
	do_login,
	get_scene,
	set_scene,
	get_userInfo,
	get_list,
	get_productType,
} from '../service/';

async function ajaxDataFormat(ajax, parma = {}){
	let  res ajax()
	return await 
}

export default {
	[GET_CODE](state, {mobile}){
		return get_code(mobile);
	},
	[DO_LOGIN](state, parma){
		return do_login(parma);
	},
	[GET_SCENE](state, parma){
		return  get_scene(parma);
	},
	[SET_SCENE](state, parma){
		return set_scene(parma);
	},
	[GET_USERINFO](state){
		return get_userInfo();
	},
	[GET_LIST](state){
		return get_list();
	},
	[GET_PRODUCTTYPE](state){
		return get_productType();
	},
	async [GET_MAIN](state){
		let userInfo = await ajaxDataFormat(get_userInfo);
		let productType = await ajaxDataFormat(get_productType);
		console.log(productType)
		// return userInfo;
	}
};