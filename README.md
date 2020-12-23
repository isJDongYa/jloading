# jloading

一个基于vue的“菊花转”组件

## 安装

```shell
npm install @jdorg/jloading --save
```

## 使用

引入：

```ts
import JLoading from '@jdorg/jloading'
import '@jdorg/jloading/dist/jloading.css'

Vue.use(JLoading)
```
然后使用vue指令:

```ts
/**
 * @directive
 * @name jloading
 * @arg{ jloadingSetup } setup 配置jloading
 * @value{ boolean } isLoading jloading是否显示
 * @modifiers full 是否全屏显示
*/
v-jloading:[setup].full="isLoading" 
```
## 说明

接口：
```ts
interface jloadingSetup {
  background?: string; // 与css一致
  color?:string; // 与css一致
}
```

## example

```html
<div id="app">
  <div class="stage" v-jloading:[setup]="isLoading">
    <span>This is jloading!!!</span>
  </div>
  <button class="btn" @click="click">点我改变状态</button>
</div>
```

```ts
public setup:jloadingSetup = {
  background: '#E3F7EBdd',
  color:'#000'
}

public isLoading:boolean = false

public click():void {
  this.isLoading = !this.isLoading
}
```

```less
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
```
![example](https://raw.githubusercontent.com/isJDongYa/jloading/master/src/assets/example.gif)

## others

@jdorg是一个开源前端组件的社区，如果你有开源组件的想法，欢迎加入我们

![qqgroup](https://raw.githubusercontent.com/isJDongYa/jloading/master/src/assets/@jdorg_z_rs.jpg)