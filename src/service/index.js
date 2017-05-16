import {get, post} from '../plugins/fetch';


//编译环境使用真实数据
if (process.env.NODE_ENV == 'development') {

	/**
	 * 获取短信验证码
	 */

	var get_code = mobile => get('/hotel/Home/Tool/sendVertifyCode',  {
		mobile: mobile,
	});

	var do_login = ({mobile, code}) => post('/hotel/Home/Login/doLogin', {
		loginname: mobile,
		code: code
	});

	var get_scene = () => get('/hotel/Home/Login/getQdList');
	
	var set_scene = ({qdcode}) => post('/hotel/Home/Login/doCheckQd', {
		qdcode: qdcode
	});

	var get_userInfo = () => get('/hotel/Home/User/getUserInfo');

	var get_dailyData = () => get('/hotel/Home/Order/dailyData');

	var get_list = ({limit = 15, page=1, ol=1, is_show =1, product_type}) => get('/hotel/Home/Product/getList', {
		limit: limit,
		page: page,
		ol: ol,
		is_show: is_show,
		product_type: product_type,
	});

	var get_productType = () => get('/hotel/Home/Product/getProductType');

}


export {
	get_code, 
	do_login, 
	get_scene, 
	set_scene, 
	get_userInfo, 
	get_list,
	get_productType,
};
