import{
	GET_CODE, 
	DO_LOGIN,
	GET_SCENE,
	SET_SCENE,
} from './mutations-type';
import {
	get_code, 
	do_login,
	get_scene,
	set_scene,
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
	}
};