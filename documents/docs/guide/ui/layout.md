# 布局

页面整体布局是一个产品最外层的框架结构，往往会包含导航、页脚、侧边栏、通知栏以及内容等。在页面之中，也有很多区块的布局结构。在真实项目中，页面布局通常统领整个应用的界面，有非常重要的作用。

布局组件存放在 `/layouts` 文件夹中。

## BasicLayout

基础页面布局，包含了头部和底部，当然里面什么也没做，需要你自由发挥。

我们把具备同样功能的页面写在了 frameIn 中，它处于路由的 `/` 根路径下，所有的子页面都处于 BasicLayout 之内。

```typescript {7}
import BasicLayout from '@/layouts/BasicLayout/index.vue';

// 主框架内显示的路由
export const frameIn: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: BasicLayout,
    children: [...],
  },
];
```

## BlankLayout

真正的空白页面，比较适合例如登录这种独立的页面，处于 frameOut 中。
