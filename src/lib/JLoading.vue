<template>
  <div class="jloading-contain">
    <span class="jloading-icon ri-loader-2-fill"></span>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { jloadingSetup } from './type'

@Component({
  name: 'JLoading'
})
export default class JLoading extends Vue {

  
}
</script>
<style lang="less" scoped>
@import './assets/remixicon.css';

@keyframes loading {
  0% {
    transform: rotateZ(0);
  }
  25% {
    transform: rotateZ(90deg);
  }
  50% {
    transform: rotateZ(180deg);
  }
  75% {
    transform: rotateZ(270deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.jloading-contain {
  position: absolute;
  justify-content: center;
  align-items: center;
  display: none;
}
.jloading-icon {
  animation: loading 2s linear infinite;
}
</style>