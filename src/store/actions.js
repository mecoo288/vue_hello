import {
	GET_CODE, 
	DO_LOGIN
} from './mutations-type'
import {
	get_code, 
	do_login
} from '../service/'
export default {
	[GET_CODE](state, {mobile}){
		return get_code(mobile)
	},
	[DO_LOGIN](state, parma){
		return do_login(parma)
	}
}