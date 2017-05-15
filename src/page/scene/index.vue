<!-- 场景选择 -->
<template>
  <div>
    <x-header :left-options="{showBack: false}">选择场景</x-header>
  	<group>
      <cell :title="scene.name" v-for="scene in scenes" @click.native="selScene(scene)" is-link></cell>
    </group>
  </div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellBox, Group, XHeader, ToastPlugin } from 'vux';
import {mapActions } from 'vuex';
import {GET_SCENE, SET_SCENE} from '../../store/'

Vue.use(ToastPlugin);
  export default {
    data(){
      return {
        scenes: []
      }
    },
  	components: {
      Cell, 
      CellBox, 
      Group,
      XHeader
    },
    created(){
      this.getScene();
    },
    methods: {
      ...mapActions([
        'GET_SCENE',
        'SET_SCENE',
      ]),
      getScene(){
        let _this = this;
        this.GET_SCENE().then(function({status, statusText, data}){
          if(status !== 200){
            _this.$vux.toast.show({text:statusText, type:"text"})
            return;
          }
          if(data.status !== 1){
            _this.$vux.toast.show({text:data.errmsg, type:"text"});
            return;
          }
          _this.scenes = data.data.list;
        });
      },
      selScene(scene){
        let _this = this;
        this.SET_SCENE(scene).then(function({status, statusText, data}){
          if(status !== 200){
            _this.$vux.toast.show({text:statusText, type:"text"})
            return;
          }
          if(data.status !== 1){
            _this.$vux.toast.show({text:data.errmsg, type:"text"});
            return;
          }
          _this.$router.push('/main')
        })
      }

    }
  }
</script>

<style lang="less">
	
</style>