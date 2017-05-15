<!-- 场景选择 -->
<template>
  <div>
    <div class="bar bar-header">
      <div class="im_customer_info">
        <b><img :src="avatar"></b>
        <span class="name">{{nickname}}</span>
        <span class="status">
          <span><i :class="{active: online}"></i></span>
        </span>
        <div class="row" >
          <div class="col"><a class="light" href="#/search"><i class="icon-dialogue-square"></i><br><tt>会话</tt></a></div>
          <div class="col"><a class="light" href="#/QRcode"><i class="icon-qr"></i><br><tt>扫码</tt></a></div>
          <div class="col"><a class="light" href="#/sale/list"><i class="icon-shop-b"></i><br><tt>优惠</tt></a></div>
          <div class="col"><a class="light" href="#/message/list"><i class="icon-message-b"></i><br><tt>消息</tt></a></div>
          <div class="col" ng-if="vm.user.city_code==='450300'"><a class="light" href="#/account/render"><i class="icon-book-a"></i><br><tt>报账</tt></a></div>
          <div class="col" ng-if="vm.user.city_code==='450300'"><a class="light" href="#/account/spot"><i class="icon-time-b"></i><br><tt>预定</tt></a></div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default{
  data(){
    return {
      avatar: '',
      nickname: '',
      avatar: '',
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
        let {avatar, name, online} = data.data;
        _this.avatar = avatar;
        _this.nickname = name;
        _this.online = online;
      })
    }
  }
}
</script>

<style lang="less">
@import '../../style/icomoon.css';
	.im_customer_info {
    height: 98px;
    padding: 5px 10px;
    display: border-box;
    background:-webkit-gradient(linear,0 50%,100% 50%,from(#10b0c3),to(#0d8998));/*Old gradient for webkit*/
    background:-webkit-linear-gradient(left,#10b0c3,#0d8998);/*new gradient for Webkit*/
    b, span{
      display: inline-block;
    }
    b{
      width: 45px; 
      height: 45px;
      img{
        width: 100%;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .name{
      color:#fff;
      font-size: 18px;
      padding: 0 10px;
    }
    .status{
      i{
        font-style: inherit;
        &:before{
          content: "";
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
          border-radius: 2px;
          width: 10px;
          height: 10px;
          background: #c4c4c4;
        }
        &:after{
          font-size: 14px;
          content: "离线";
          color: #fff;
          vertical-align: middle;
        }
        &.active{
          &:before{
            background: #b8ea86;
          }
          &:after{
            content: "在线"
          }
        }
      }
    }
    .row{
      padding-top: 8px;
      display: -webkit-flex;
      display: flex;
      .col{
        border-left: 1px #fff solid;
        text-align: center;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        width: 100%;
        &:first-child{
          border:0
        }
        a{
          display: block;
          line-height: 14px;
          color: #fff;
          i{
            font-size: 18px;
          }
          tt{
            font-size: 10px;
          }
        }
      }
    }
  }
  .im_home_bar .bar-data {
      position: relative;
      top: 98px;
      padding: 3px 0;
  }
</style>