import{
	GET_CODE, 
	DO_LOGIN,
	GET_SCENE,
	SET_SCENE,
	GET_USERINFO,
} from './mutations-type';
import {
	get_code, 
	do_login,
	get_scene,
	set_scene,
	get_userInfo,
} from '../service/';
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
	}
};