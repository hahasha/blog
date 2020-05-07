<template>
    <div class="layout">
        <Layout>
            <Header class="header">
              <Menu mode="horizontal" theme="dark" active-name="2">
                  <div class="layout-nav">
                      <MenuItem name="1" to="/">
                          首页
                      </MenuItem>
                      <MenuItem name="2" to="About">
                          关于
                      </MenuItem>
                  </div>
              </Menu>
            </Header>
            <Content class="content">
              <Card class="info-wrap" :bordered="false">
                  <p slot="title"><Icon type="md-pricetags" />Introduction</p>
                  <ul class="list">
                    <li>Name : SaSa</li>
                    <li>Age : 24</li>
                    <li>Gender : </li>
                    <li>Birthday : 1995-08-25</li>
                    <li>Profession : web前端工程师</li>
                    <li>Hobby : 阅读、跑步、音乐</li>
                  </ul>
              </Card>
              <Card class="contact-wrap" :bordered="false">
                  <p slot="title"><Icon type="md-pricetags" />Contact</p>
                  <ul class="list">
                    <li>Email : 1007892941@qq.com</li>
                    <li>Github : <a href="https://github.com/hahasha" target="_blank">https://github.com/hahasha</a></li>
                  </ul>
              </Card>
              <Card class="skill-wrap" :bordered="false">
                  <p slot="title"><Icon type="md-pricetags" />Learning</p>
                  <Steps direction="vertical" size="small">
                    <Step status="finish">
                      <span slot="title">前端基础</span>
                      <ul slot="content">
                        <li>HTML/HTML5、CSS/CSS3、JavaScript、ES6/7、jQuery、BootStrap</li>
                        <li>CSS预编译：Less、Sass、Stylus</li>
                        <li>移动基础：Flex布局</li>
                      </ul>
                    </Step>
                    <Step status="process">
                      <span slot="title">前端进阶</span>
                      <ul slot="content">
                        <li>Vue.js、React.js、Node.js、小程序、TypeScript</li>
                        <li>HTTP</li>
                        <li>构建工具：Webpack</li>
                        <li>性能优化：SSR</li>
                        <li>设计模式：工厂模式、观察者模式、单例模式</li>
                      </ul>
                    </Step>
                    <Step status="process">
                      <span slot="title">框架</span>
                      <ul slot="content">
                        <li>Node相关：Express、Koa</li>
                        <li>React相关：Flux、Redux</li>
                        <li>UI框架：Element-UI、View-UI、Cube-UI</li>
                        <li>数据可视化：Echarts.js、D3.js</li>
                      </ul>
                    </Step>
                    <Step status="process">
                      <span slot="title">大前端/跨平台</span>
                      <ul slot="content">
                        <li>H5+原生：微信小程序</li>
                        <li>JavaScript开发+原生渲染：React Native、Weex</li>
                        <li>自绘UI+原生：Flutter</li>
                        <li>桌面应用：Electron</li>
                      </ul>
                    </Step>
                    <Step status="process">
                      <span slot="title">服务器端</span>
                      <ul slot="content">
                        <li>PHP / Python / Java</li>
                        <li>Linux、Nginx</li>
                        <li>MySQL、MongoDB</li>
                      </ul>
                    </Step>
                    <Step status="process">
                      <span slot="title">算法与数据结构</span>
                      <ul slot="content">
                        <li>数组、栈、队列、树</li>
                      </ul>
                    </Step>
                  </Steps>
              </Card>
            </Content>
            <Footer class="layout-footer-center">Copyright &copy; 2020 by sasa</Footer>
        </Layout>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>>

<style lang="stylus" scoped>
@import "~assets/stylus/index"
.layout
  .ivu-layout-header, .ivu-menu-dark
    background #fff
  .ivu-layout-header
    padding 0
  .header
    .layout-nav
      position absolute
      top 0
      right 60px
      .ivu-menu-item
        font-size: 14px
        background: $color-background
        height: 34px
        line-height: 34px
        margin-top: 14px
        margin-left: 16px
        border-radius: 2px
        color #666
  .content
    max-width 800px
    min-height 100vh
    margin 0 auto 50px auto
    >>>.ivu-card-body
      background $color-background
    >>>.ivu-card-head p
      font-size 18px
      font-family $font-family-q
      font-weight 600
      color #333
    .ivu-icon-md-pricetags
      margin-right 10px
    .info-wrap, .skill-wrap, .contact-wrap
      margin 40px 0
      width 800px
      .list li
        margin 6px 0
        font-family $font-family-q
      >>>.ivu-steps .ivu-steps-head
        background rgba(255,255,255,0)
      >>>.ivu-steps .ivu-steps-title
        background rgba(255,255,255,0)
  .ivu-layout
    background #fff
  .layout-footer-center
    color: #9c9c9c
    text-align: center
    font-family: $font-family-q
</style>
