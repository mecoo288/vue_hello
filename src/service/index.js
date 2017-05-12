import fetch from '../config/fetch'


/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

//编译环境使用真实数据
if (process.env.NODE_ENV == 'development') {

	/**
	 * 获取短信验证码
	 */

	var get_code = mobile => fetch('GET', '/hotel/Home/Tool/sendVertifyCode', {
		mobile: mobile,
		scene: 'login',
		type: 'sms'
	});

	var do_login = ({mobile, code}) => fetch('post', '/hotel/Home/Login/doLogin', {
		loginname: mobile,
		code: code
	})

}


/**
 * 以下Api接口不需要进行反向代理
 */

export {get_code, do_login}
