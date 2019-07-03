<template>
  <div id="footers">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
            {{msg}}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "footers",
  data() {
    return {
        msg:'test'
    };
  },
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/footer.less"></style>
