<template>
  <div id="about">
    <el-image class="streamer" :src="streamerUrl" fit="scale-down"></el-image>
    <div class="aboutTop">
      <h2>如有疑问或者想咨询乐喜力丝产品，请联系我们</h2>
      <p>If you have any questions or want to consult Lexillis products, please contact us.</p>
    </div>
    <div class="aboutBottom">
      <div class="l">
        <ul>
            <h2>联系方式</h2>
          <li v-for="(item,index) in aboutData" :key="index">
            <a :href="item.url" >
              <p>
                <img :src="item.imgUrl" />
              </p>
              <h2>{{item.title}}</h2>
              <span>{{item.text}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="r">
          <h2>官方微信号</h2>
          <p class="weimg"><img :src="weimg" alt=""></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articles",
  data() {
    return {
      streamerUrl: require("@/assets/images/streamer_about.png"),
      aboutData:[
          {
              url:'tel:17512840813',
              imgUrl:require("@/assets/images/icon_phone.png"),
              text:'17512840813',
              title:'热线电话'
          },{
              url:'mailto:lexilisi@sina.com',
              imgUrl:require("@/assets/images/icon_email.png"),
              text:'lexilisi@sina.com',
              title:'电子邮箱'
          },{
              url:'javascript:',
              imgUrl:require("@/assets/images/icon_wx.png"),
              text:'微信：llxls2016',
              title:'微信咨询'
          },
      ],
      weimg: require("@/assets/images/code.png"),
    };
  },
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/about.less"></style>
