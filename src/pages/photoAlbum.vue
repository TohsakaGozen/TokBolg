<template>
  <div class="AlbumContent">
    <div v-if="isWatch" @click="exitWatch()" class="watchImage">
      <img :src="watchImageUrl" alt="" />
    </div>
    <div v-if="imgaesUrlList.length == 0" class="loading">
      <img src="@/assets/loading.gif" alt="" />
    </div>
    <div id="waterfall" ref="waterfall">
      <div
        class="img-box default-card-animation"
        v-for="(item, index) in imgsArr_c"
        :key="index"
        :style="{ width: imgWidth + 'px', height: item._height + 'px' }"
        ref="imgBox"
      >
        <img @click="watch(item.src)" :data-src="item.src" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "waterfall",
  data() {
    return {
      isWatch: 0,
      watchImageUrl: "",
      imgsArr: [],
      imgsArr_c: [], // 渲染的图片
      imgCol: 5, // 图片列数
      imgGap: 5, // 图片间间隔
      loadedCount: 0,
      newCounts: 20,
      theFirst: 0,
      cNumber: 0,
      imgBoxEls: [], // 所有 img-box 元素
      beginIndex: 0,
      colsHeightArr: [], // 保存当前每一列的高度
      reachBottomDistance: -500, // 滚动触底距离，触发加载新图片
      viewHeight: 0, // 窗口视图大小
    };
  },
  computed: {
    // 容器 waterfall 的宽度
    ...mapState("image", ["imgaesUrlList"]),
    waterfallWidth() {
      return this.$refs["waterfall"].clientWidth - 9;
    },
    // 图片宽度
    imgWidth() {
      return this.colWidth - 2 * this.imgGap;
    },
    // 列宽度
    colWidth() {
      return this.waterfallWidth / this.colNum;
    },
    // 列数
    colNum() {
      return this.isMobile ? 2 : this.imgCol;
    },
  },
  watch: {
    imgsArr(newVal, oldVal) {
      if (
        this.imgsArr_c.length > newVal.length ||
        (this.imgsArr_c.left > 0 && newVal[0] && !newVal[0]._height)
      )
        this.reset();
      this.preLoad();
    },
  },
  methods: {
    exitWatch() {
      this.isWatch = 0;
      this.watchImageUrl = "";
    },
    watch(Imageurl) {
      this.isWatch = 1;
      this.watchImageUrl = Imageurl;
    },
    // 预加载 设置图片宽高
    preLoad() {
      //
      // forEach 无法通过 item 直接修改数组元素，需用数组下标修改
      this.imgsArr.forEach((item, index) => {
        if (index < this.loadedCount) return;
        // 无图则把高度设置为0
        if (!item.src) {
          // 图片的高度
          this.imgsArr[index]._height = "0";
          ++this.loadedCount;
          // 当前图片都与处理完，则加载图片
          if (this.imgsArr.length === this.loadedCount) {
            this.preloaded();
          }
        } else {
          let img = new Image();
          img.src = item.src;
          img.onload = img.onerror = (e) => {
            // 若加载失败则设置图片高度与宽度一致，加载成功则动态计算图片高度
            this.imgsArr[index]._height =
              e.type === "load"
                ? Math.round(this.imgWidth * (img.height / img.width))
                : this.imgWidth;
            if (e.type === "error") {
              this.imgsArr[index]._error = true;
            }
            ++this.loadedCount;
            // 当前图片都与处理完，则加载图片
            if (this.imgsArr.length === this.loadedCount) {
              this.preloaded(this.cNumber);
            }
          };
        }
      });
    },
    preloaded(cNumber) {
      if (this.theFirst == 0) {
        for (let i = 0; i < 20; i++) {
          this.imgsArr_c.push(this.imgsArr[i]);
        }
        this.$nextTick(() => {
          this.waterfall();
        });
      } else {
        this.cNumber += 20;
        for (let i = cNumber; i < this.cNumber; i++) {
          this.imgsArr_c.push(this.imgsArr[i]);
        }
        this.$nextTick(() => {
          this.waterfall();
        });
      }
    },
    // waterfall 布局
    waterfall() {
      // 等到整个视图都渲染完毕再执行

      this.imgBoxEls = this.$refs["imgBox"];
      if (!this.imgBoxEls) return;
      let top, left, height;
      if (this.beginIndex === 0) this.colsHeightArr = [];
      for (let i = this.beginIndex; i < this.imgBoxEls.length; ++i) {
        if (!this.imgBoxEls[i]) return;
        height = this.imgBoxEls[i].offsetHeight;
        // 第一行
        if (i < this.colNum) {
          this.colsHeightArr.push(height);
          top = 0;
          left = i * this.colWidth;
        } else {
          // 找到最低的高度和其索引
          let minHeight = Math.min.apply(null, this.colsHeightArr);
          let minIdx = this.colsHeightArr.indexOf(minHeight);
          top = minHeight;
          left = minIdx * this.colWidth;
          this.colsHeightArr[minIdx] += height;
        }
        // 设置 img-box 位置
        this.imgBoxEls[i].style.top = top + "px";
        this.imgBoxEls[i].style.left = left + "px";
        // 当前图片在窗口内，则加载
        if (top < this.viewHeight) {
          let imgEl = this.imgBoxEls[i].children[0];
          imgEl.src = imgEl.getAttribute("data-src");
          imgEl.style.opacity = 1;
          imgEl.style.transform = "scale(1)";
        }
      }
      this.beginIndex = this.imgBoxEls.length;
    },
    reset() {
      this.imgsArr_c = [];
      this.beginIndex = [];
      this.loadedCount = 0;
    },
    // 滚动触底事件
    scrollFn() {
      let minHeight = Math.min.apply(null, this.colsHeightArr);
      // 滚动条滚动的高度
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 到达最底层的高度最低的一列，则触发 handleReachBottom 方法
      if (scrollTop + this.viewHeight > minHeight - this.reachBottomDistance) {
        this.handleReachBottom();
      }
      // 图片懒加载
      this.imgBoxEls.forEach((imgBoxEl, index) => {
        let imgEl = imgBoxEl.children[0];
        // 若已加载，则跳过
        if (imgEl.src) return;
        // 当前图片所处的高度
        let top = imgBoxEl.style.top;
        top = Number.parseFloat(top.slice(0, top.length - 2));

        // 图片已到达可视范围，则加载
        if (scrollTop + this.viewHeight >= top) {
          imgEl.src = imgEl.getAttribute("data-src");
          imgEl.style.opacity = 1;

          imgEl.style.transform = "scale(1)";
        }
      });
    },
    scroll() {
      window.onscroll = this.throttle(this.scrollFn, 500);
    },
    handleReachBottom() {
      setTimeout(() => {
        this.loadImages(this.newCounts);
      }, 500);
    },
    // 节流函数
    throttle(fn, time) {
      let canRun = true;

      return function () {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
          fn.apply(this);

          canRun = true;
        }, time);
      };
    },
    loadImages(newCounts) {
      this.$store.dispatch("image/getImagesList");
      this.newCounts += 20;
      for (let i = newCounts; i < this.newCounts; i++) {
        let img = {
          src: "",
          href: "",
          info: "",
        };
        img.src = this.imgaesUrlList[i];
        img.href = i;
        img.info = i;
        this.imgsArr.push(img);
      }
    },
  },
  created() {
    this.$store.dispatch("image/getImagesList");
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        let img = {
          src: "",
          href: "",
          info: "",
        };
        img.src = this.imgaesUrlList[i];
        img.href = i;
        img.info = i;
        this.imgsArr.push(img);
      }
      this.theFirst = 1;
    }, 300);
  },
  mounted() {
    this.viewHeight =
      document.documentElement.clientHeight == 0
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
    this.preLoad();
    this.scroll();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.watchImage {
  top: 0;
  position: fixed;
  background-color: rgba(126, 126, 126, 0.6);
  width: 100%;
  height: 100vh;
  z-index: 99999999;
  display: flex;
  justify-content: center;
}
.watchImage img {
  top: 5%;
  height: 90vh;
  border-radius: 5px;
  z-index: 9999999999999999999;
  position: fixed;
  box-shadow: 0 0 15px rgb(67, 66, 66);
}
.AlbumContent {
  display: inline;
  width: 100%;
  user-select: none;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.loading img {
  height: 45vh;
}
#waterfall {
  width: 100%;
  margin-top: 5rem;
  position: relative;
}
@keyframes show-card {
  0% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1);
  }
}

.img-box {
  position: absolute;
  border-radius: 10px;
  padding: 5px;
  padding-left: 0;
}
.img-box img {
  position: relative;
  padding-left: 10px;
  width: 100%;
  border-radius: 15px;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.3s;
  cursor: pointer;
}
.img-box img:hover {
  scale: 1.05;
  opacity: 0.8;
}
.default-card-animation {
  animation: show-card 0.4s;
  transition: left 0.6s top 0.6s;
  transition-delay: 0.1s;
}
</style>