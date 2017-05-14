<!-- 登陆 -->
<template>
  <div>
  	<div class="banner">
  			<img :src="logo">
  			<h5 class="banner-word">服务者登录</h5>
  	</div>
   	<group class="weui-cells_form">
      <x-input title="手机号" class="weui-vcode" v-model="mobile" placeholder="请输入手机号" keyboard="number">
        <x-button slot="right" type="primary" :disabled="codeBtnDisabled || codeLoading" mini @click.native="getCode" :show-loading="codeLoading">获取验证码</x-button>
      </x-input>
      <x-input title="验证码" v-model="code" placeholder="请输入验证码" :min="6" :max="6" keyboard="number"></x-input>
    </group>
    <div style="padding:15px;">
      <x-button type="primary" :disabled="loginBtnDisabled" @click.native="doLogin">登 录</x-button>
    </div>
  </div>
</template>

<script>
import vue from 'vue';
import { XInput, Group, XButton, ToastPlugin } from 'vux';
import story from '../../plugins/localstory.js';
import { mapActions } from 'vuex';
import {TOKEN} from '../../store/mutations-type.js';
vue.use(ToastPlugin);
export default {
	data(){
		return {
			codeBtnDisabled: false,
      codeLoading: false,
			loginBtnDisabled: false,
			mobile:"13651898049",
			code: "111111",
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
      let _this = this;
      this.codeLoading = true;
  		this.GET_CODE({mobile: this.mobile}).then(function({status, statusText, data, ...res}){
  			// console.log(res);
        _this.codeLoading = false;
        if(status != 200){
          _this.toast(statusText)
          return;
        }
        if(data.status === 0){
          _this.toast(data.errmsg);
          return;
        }
  		})
  	},
    toast(tip){
      this.$vux.toast.show({text:tip, type:"text"})
    },
  	doLogin(){
      let _this = this;
  		this.DO_LOGIN({mobile:this.mobile, code: this.code}).then(function({status, statusText, data, ...res}){
        if(status != 200){
          _this.toast(statusText)
          return;
        }
        if(data.status === 0){
          _this.toast(data.errmsg);
          return;
        }
        story.set(TOKEN, data.data);
  		})
  	}
  },
  watch: {
  	mobile(newVal, oldVal){
  		this.codeBtnDisabled = !/^1\d{10}$/.test(newVal);
  		this.checkForm();
  	},
  	code(newVal, oldVal){
  		this.checkForm()
  	}
  }
}
</script>

<style lang="less">
	.banner{
		text-align: center;
		color: #10b0c3;
    padding-top: 60px;
		img{
			height: 70px;
		}
		.banner-word{
			font-size: 18px;
			font-weight: normal;
		}
	}
</style>