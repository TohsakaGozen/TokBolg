<template>
  <div class="introduce">
    <div class="introduceContent">
      <div class="headPortrait">
        <img src="../../public/images/user.jpg" alt="" />
      </div>
      <table>
        <tr>
          <th>昵称：</th>
          <td>TohsakaGozen</td>
        </tr>
        <tr>
          <th>身份：</th>
          <td>在读学生</td>
        </tr>
        <tr>
          <th>星座：</th>
          <td>天秤座</td>
        </tr>
        <tr>
          <th>生日：</th>
          <td>10.18</td>
        </tr>
        <tr>
          <th>来自：</th>
          <td>四川捏</td>
        </tr>
        <tr>
          <th>血型：</th>
          <td>未知捏</td>
        </tr>
        <tr>
          <th>邮箱：</th>
          <td>l1679124358@gmail.com</td>
        </tr>
        <tr>
          <th>最喜欢的歌手：</th>
          <td>reol</td>
        </tr>
        <tr>
          <th>最喜欢的人之一：</th>
          <td>桶口円香</td>
        </tr>
        <tr>
          <th>目前最常用的语言：</th>
          <td>JavaScript</td>
        </tr>
        <tr>
          <th>目前最常用的框架：</th>
          <td>Vue.js</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.introduce {
  width: 99.7vw;
  min-height: 60rem;
  display: flex;
  justify-content: center;
  padding: 3rem;
}
.introduceContent {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  width: 40rem;
  min-height: 30rem;
  box-shadow: 0 0 15px silver;
}
table {
  margin-left: 5rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.headPortrait {
  width: 30%;
  height: 18%;
}
.headPortrait img {
  border-radius: 100%;
  width: 100%;
}
</style>