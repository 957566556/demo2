// 引入组件
// import 文件名字 from 地址
import VueRouter from 'vue-router'
import first from '../../components/first.vue'
import first1 from '../../components/first1.vue'
import index from '../../components/index.vue'
import sort from '../../components/sort.vue'
import detail from '../../components/detail.vue'
import sign from '../../components/sign.vue'
import shopcart from '../../components/shopcart.vue'
import search from '../../components/search.vue'
import my from '../../components/my.vue'
// export default 导出文件
var router= new VueRouter({
  routes:[
      {
          path:'/',
          component:first,
          children:[
              {
                  path:'/index',
                  component:index
              },
              {
                  path:'/sort',
                  component:sort
              },
              {
                    path:'/search',
                    component:search, 
             
              },
              {
                path:'/shopcart',
                component:shopcart
              },
              {
                path:'/my',
                component:my
              }
          ],
          redirect:'/index'
      },
      {
        path:'/',
        component:first1,
        children:[
            {
                path:'/detail',
                component:detail
            }
        ]
      },
      {
        path:'/sign',
        component:sign

      },
      {
        path:'/sign',
        component:sign
      },
      {
          path:"/*",
          redirect:'/index'
      }
      
  ]
})
// 导出
export default router;