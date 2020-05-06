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
            </Content>
            <Footer class="layout-footer-center">Copyright &copy; 2020 by sasa</Footer>
        </Layout>
    </div>
</template>

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
        background: #f5f7f9
        height: 34px
        line-height: 34px
        margin-top: 14px
        margin-left: 16px
        border-radius: 2px
        color #666
  .content
    max-width 800px
    min-height 100vh
    margin 0 auto
  .ivu-layout
    background #fff
  .layout-footer-center
    color: #9c9c9c
    text-align: center
    font-family: $font-family-q
</style>
