<template>
  <div class="introduction">
    <div class="first_div">
      <h2>{{ $t('introduce.title') }}</h2>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;{{ $t('introduce.p1') }}
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;{{ $t('introduce.p2') }}
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;{{ $t('introduce.p3') }}
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;{{ $t('introduce.p4') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.introduction {
  margin-top: 100px;
  .first_div {
    border: 2px solid #DCDFE6; /* Border color */
    border-radius: 10px; /* Border radius for rounded corners */
    padding: 20px; /* Padding inside the border */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle effect */
    h2 {
      text-align: center;
      font-family: 'Lucida Console', 'Courier New', monospace; /* 设置字体样式 */
      color: #d86b11;
    }
    p {
      margin-top: 20px;
      font-family: 'Trebuchet MS', sans-serif;
    }
  }
}
</style>