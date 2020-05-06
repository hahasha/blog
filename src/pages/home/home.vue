<template>
    <div class="layout">
        <Layout>
            <Header class="header">
                <div class="bg-wrap">
                  <Menu mode="horizontal" theme="dark" active-name="1">
                      <div class="layout-nav">
                          <MenuItem name="1" to="/">
                              首页
                          </MenuItem>
                          <MenuItem name="2" to="About">
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
            <Content class="content">
                <div class="notice">
                  <p class="notice-content">
                    <Icon type="ios-paper-plane" />
                    Done is better than perfect.
                  </p>
                </div>
                <List class="project-list" :split="false">
                  <template slot="header">
                    <h2 class="list-header">我的项目</h2>
                  </template>
                  <ListItem class="project-wrap" v-for="item in projectList" :key="item.title">
                      <div class="mask">{{item.description}}</div>
                      <div class="title">{{item.title}}</div>
                  </ListItem>
                </List>
                <List item-layout="vertical" class="article-list" :split="false">
                    <template slot="header">
                      <h2 class="list-header">我的文章</h2>
                    </template>
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
      projectList: [
        {
          title: 'snack-vendor',
          description: '零食商城WebApp',
          img_url: '',
          link: ''
        },
        {
          title: 'elm',
          description: '仿饿了么App商家页面',
          img_url: '',
          link: ''
        },
        {
          title: 'elm-manage',
          description: '基于Element-UI的后台管理系统',
          img_url: '',
          link: ''
        },
        {
          title: 'vue-music',
          description: '移动端音乐WebApp',
          img_url: '',
          link: ''
        },
        {
          title: 'todo-list',
          description: '基于vue2.0的TodoList',
          img_url: '',
          link: ''
        },
        {
          title: 'ls-ui',
          description: '我的UI样式库',
          img_url: '',
          link: ''
        }
      ],
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
  position relative
  overflow hidden
  .header
    position relative
    width 100%
    height auto
    padding 0
    .bg-wrap
      width 100%
      height 550px
      background url('../../../public/images/bg.jpg') no-repeat center top
      background-size 100%
      background-attachment fixed
    .slant-left, .slant-right
      background: #fff
      width: 101%
      position: absolute
      bottom: -80px
      right: 48%
      height: 200px
      transform: rotate(6deg)
    .slant-right
      left: 48%
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
        font-size: 14px
        background: rgba(255,255,255,.1)
        height: 34px
        line-height: 34px
        margin-top: 14px
        margin-left: 16px
        border-radius: 2px
  .content
    max-width 800px
    min-height 100vh
    margin 0 auto 50px auto
    .notice
      position relative
      padding 24px 30px
      margin 60px 0
      background #fbfbfb
      border-radius 4px
      .notice-content
        font-size 16px
        color #505050
        letter-spacing 1px
        font-family $font-family-q
      .ivu-icon-ios-paper-plane
        margin-right 10px
        font-size 18px
        color $color-theme
    .project-list
      margin-bottom 60px
      .project-wrap
        position relative
        display inline-block
        width 32%
        height 160px
        line-height 160px
        background #e5e5e5
        margin-left 2%
        margin-top 10px
        padding 0
        border-radius 4px
      .project-wrap:nth-of-type(3n+1)
        margin-left 0
      .project-wrap:hover
        .mask
          opacity 1
        .title
          opacity 0
      .mask, .title
        position absolute
        top 0
        left 0
        width 100%
        height 160px
        line-height 160px
        text-align center
        border-radius 4px
        letter-spacing 1px
        cursor pointer
      .mask
        font-size 16px
        color #fff
        background $color-theme
        opacity 0
        transition opacity .4s ease-out
      .title
        font-size 20px
        color #333
        background $color-gray
        opacity 1
        transition opacity .4s ease-out
    .list-header
      font-size 16px
      font-weight 400
      padding-bottom 15px
      border-bottom 1px dashed $color-line
  .layout-footer-center
    color: #9c9c9c
    text-align: center
    font-family: $font-family-q
  .ivu-menu-dark, .ivu-layout
    background rgba(0, 0, 0, 0)
</style>
