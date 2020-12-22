<template>
  <div id="app">
    <div class="stage" v-jloading:[setup]="isLoading">
      <span>This is jloading!!!</span>
    </div>
    <button class="btn" @click="click">点我改变状态</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { jloadingSetup } from './lib/type';

@Component({})
export default class App extends Vue {

  public setup:jloadingSetup = {
    background: '#E3F7EBdd',
    color:'#000'
  }

  public isLoading:boolean = false

  public click():void {
    this.isLoading = !this.isLoading
  }

}
</script>

<style lang="less">
#app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.stage {
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  width: 200px;
  height: 80px;
}
</style>
