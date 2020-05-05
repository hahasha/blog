<template>
    <div class="layout">
        <Layout>
            <Header class="header">
                <div class="bg-wrap">
                  <Menu mode="horizontal" theme="dark" active-name="1">
                      <div class="layout-nav">
                          <MenuItem name="1">
                              首页
                          </MenuItem>
                          <MenuItem name="2">
                              关于
                          </MenuItem>
                      </div>
                  </Menu>
                  <div class="slant-left"></div>
                  <div class="slant-right"></div>
                  <div class="user-box">
                    <div class="avater-wrap">
                      <img src="../../../public/images/avatar.jpg" alt="" class="avatar">
                    </div>
                    <div class="info-wrap">
                      <p class="info">Just do it.</p>
                    </div>
                  </div>
                </div>
            </Header>
            <Content>
                <List item-layout="vertical" class="article-list">
                    <ListItem v-for="item in data" :key="item.title">
                        <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
                        {{ item.content }}
                        <template slot="action">
                            <li>
                                <Icon type="ios-star-outline" /> 123
                            </li>
                            <li>
                                <Icon type="ios-thumbs-up-outline" /> 234
                            </li>
                            <li>
                                <Icon type="ios-chatbubbles-outline" /> 345
                            </li>
                        </template>
                        <template slot="extra">
                            <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
                        </template>
                    </ListItem>
                </List>
            </Content>
            <Footer class="layout-footer-center">Copyright &copy; 2020 by sasa</Footer>
        </Layout>
    </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          title: 'This is title 1',
          description: 'This is description, this is description, this is description.',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          content: 'This is the content, this is the content, this is the content, this is the content.'
        },
        {
          title: 'This is title 2',
          description: 'This is description, this is description, this is description.',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          content: 'This is the content, this is the content, this is the content, this is the content.'
        },
        {
          title: 'This is title 3',
          description: 'This is description, this is description, this is description.',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          content: 'This is the content, this is the content, this is the content, this is the content.'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/stylus/index"
.layout
  border 1px solid #d7dde4
  position relative
  border-radius 4px
  overflow hidden
  .header
    position relative
    width 100%
    height auto
    padding 0
    .bg-wrap
      width 100%
      height 550px
      background url('../../../public/images/bg2.jpg') no-repeat center center
      background-size cover
      background-attachment fixed
    .slant-left
      background: #fff
      width: 101%
      position: absolute
      bottom: -80px
      right: 48%
      height: 200px
      transform: rotate(6deg)
    .slant-right
      background: #fff
      width: 101%
      position: absolute
      bottom: -80px
      left: 48%
      height: 200px
      transform: rotate(-6deg)
    .user-box
      position relative
      width 800px
      top 22%
      left 50%
      transform translate(-50%, -50%)
      text-align center
      .avatar
        width 80px
        height auto
        border-radius 50%
        border 3px solid rgba(255,255,255,.3)
      .info-wrap
        width 60%
        margin auto
        background rgba(0,0,0,.3)
        margin-top 10px
        color #fff
        .info
          letter-spacing 2px
    .layout-nav
      position absolute
      top 0
      right 60px
      .ivu-menu-item
        font-size 16px
        color #333
        padding 0 14px
  .article-list
    max-width 800px
    min-height 500px
    background rgba(0, 0, 0, 0)
    margin 0 auto 50px auto
  .layout-footer-center
    color: #9c9c9c;
    text-align: center
    font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif
  .ivu-menu-dark, .ivu-layout
    background rgba(0, 0, 0, 0)
</style>
