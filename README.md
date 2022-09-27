# TokBlog开发说明

#### 1.promise解决回调地狱
一种是利用`then((value)=>{})`函数的第一个参数(第二个参数是rejecte的)直接获取promise内`resolved`.
promise内部直接return即可代表resolved状态，rejecte则需要`return Promise.rejecte(new Error('xxx')))`返回的值

第二种是利用`async`与`await`联合使用，async代表异步函数，能够用await的只能是异步函数，所以要在使用await的函数外加上async使之变为异步，不影响整体同步执行。因为await能够阻塞一个promise，只有被添加的promise变为resolve，await后面的语句才能够继续向下执行，若为rejecte，则会一直阻塞一下，通常会配合try
catch联合使用

#### 2.获取父组件的dom元素
给父组件添加`ref`，再在子组件中调`this.$parent.$refs.xxx`即可获取到父组件的ref，从而调用dom节点

#### 3.关于无限加载瀑布流
目前使用的是网上找的代码，自己根据想实现的效果进行修改，变成了我的嘿嘿（不要脸
但如果不需要实现滚轮到底懒加载的话可以使用：给需要使用的图片添加一个盒子包裹，再在需要瀑布流的容器中添加`flex`，并设置固定的`height`，主轴为`colum`并设置允许换行，便可以简单的实现瀑布流，但这种瀑布流不能够实现无限滚动懒加载，因此适合图片数量少的情况，具体代码如下：
```
<template>
<div :style="{ height: scrollerHeight }" class="scrollBox" ref="cont">
    <div
      class="item"
      v-for="(image, index) in showImage"
      ref="water"
      :key="index"
    >
      <img :src="image" alt="" />
    </div>
  </div>
</template>
<style> 
  .scrollBox {
  display: flex;
  flex-direction: column;
  height: 130rem;
  width: 100%;
  flex-wrap: wrap;
  padding: 2rem;
}
.scrollBox ul {
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  counter-increment: itemCount;
}
.item::after {
  position: absolute;
  height: 30px;
  line-height: 30px;
  width: 30px;
  z-index: -1;
  text-align: center;
  background-color: #000;
  color: #fff;
  top: 10px;
  left: 10px;
  content: counter(itemCount);
}
.scrollBox img {
  width: 29rem;
  position: relative;
  z-index: -1;
  display: block;
  margin: 0.4rem;
  border-radius: 5px;
}
</style> 
```