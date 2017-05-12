<template>
  <div>
  	<div class="banner">
  			<img :src="logo">
  			<h5 class="banner-word">服务者登录</h5>
  	</div>
   	<group class="weui-cells_form">
      <x-input title="手机号" class="weui-vcode" v-model="mobile" placeholder="请输入手机号" keyboard="number">
        <x-button slot="right" type="primary" :disabled="codeBtnDisabled" mini @click.native="getCode">获取验证码</x-button>
      </x-input>
      <x-input title="验证码" v-model="code" placeholder="请输入验证码" :min="6" :max="6" keyboard="number"></x-input>
    </group>
    <div style="padding:15px;">
      <x-button type="primary" :disabled="loginBtnDisabled" @click.native="doLogin">登 录</x-button>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton } from 'vux'
import { mapActions } from 'vuex'
export default {
	data(){
		return {
			codeBtnDisabled: true,
			loginBtnDisabled: true,
			mobile:"",
			code: "",
			logo: require('../../images/tuzuu.png')
		}
	},
  components: {
    XInput,
    XButton,
    Group,
  },
  methods: {
  	...mapActions([
  		'GET_CODE',
  		'DO_LOGIN'
  	]),
  	checkForm(){
  		this.loginBtnDisabled = !(/^1\d{10}$/.test(this.mobile) && /^\d{6}$/.test(this.code))
  	},
  	getCode(){
  		this.GET_CODE({mobile: this.mobile}).then(function(res){
  			console.log(res);
  		})
  	},
  	doLogin(){
  		this.DO_LOGIN({mobile:this.mobile, code: this.code}).then(function(res){
  			console.log(res);
  		})
  	}
  },
  watch: {
  	mobile: function(newVal, oldVal){
  		this.codeBtnDisabled = !/^1\d{10}$/.test(newVal);
  		this.checkForm();
  	},
  	code: function(newVal, oldVal){
  		this.checkForm()
  	}
  }
}
</script>

<style lang="less">
	.banner{
		text-align: center;
		color: #10b0c3;
		img{
			height: 60px;
		}
		.banner-word{
			font-size: 18px;
			font-weight: normal;
		}
	}
</style>