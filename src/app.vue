<template>
	<!-- <router-view></router-view> -->
	<div style="height:100%;">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <transition>
        <router-view class="router-view"></router-view>
      </transition>
  </view-box>
  </div>
</template>
<script>
	import { Actionsheet, TransferDom, ViewBox} from 'vux'
	import { mapState, mapActions } from 'vuex'
  	export default {
    	directives: {
		    TransferDom
	  	},
	  	components: {
	  		ViewBox
	  	}
  	}
</script>

<style lang="less">
	@import './style/reset';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>