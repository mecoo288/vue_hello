<!-- 场景选择 -->
<template>
  <div>
    <header>
      <summary class="user">
        <span class="user-face"></span>
        <span class="user-nickname">{{nickname}}</span>
        <i class="user-status" v-bind:class='{active: online}'></i>
      </summary>
    </header>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default{
  data(){
    return {
      userInfo: {},
      nickname: '',
      online: false
    }
  },
  created(){
    this.getUserInfo();
  },
  methods:{
    ...mapActions([
      'GET_USERINFO'
    ]),
    getUserInfo(){
      let _this = this;
      this.GET_USERINFO().then(function({status, statusText, data}){
        if(status !== 200){
          _this.$vux.toast.show({text:statusText, type:"text"})
          return;
        }
        if(data.status !== 1){
          _this.$vux.toast.show({text:data.errmsg, type:"text"});
          return;
        }
        _this.userInfo = data.data;
        _this.nickname = data.data.name;
        _this.online = data.data.online == 1;

      })
    }
  }
}
</script>

<style lang="less">
	header{
    background-image: -webkit-linear-gradient(left,#10b0c3,#0d8998);
  }
</style>