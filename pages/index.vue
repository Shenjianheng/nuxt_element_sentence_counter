<template>
  <div>
    <el-container>
      <el-header>
        <inHeader></inHeader>
      </el-header>
      <el-main>
        <mainMain></mainMain>
        <foFooter></foFooter>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import inHeader from '../components/in_header.vue'
import mainMain from '../components/main_main.vue'
import foFooter from '../components/fo_footer.vue'

export default {
  name: 'IndexPage',
  components: {
    inHeader,
    mainMain,
    foFooter,
  },
}
</script>
