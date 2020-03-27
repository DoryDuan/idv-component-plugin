## 安装
```
$ npm install my-idv-components -S
```

## 使用
在 main.js 文件中引入插件并注册
```
//全局注册
import myComponents from 'my-idv-components'
import myComponents from 'my-idv-components/lib/my-idv-components.css'
Vue.use(myComponents)
```

```
//局部注册
import {LoadMore} from '../packages/index'
import myComponents from 'my-idv-components/lib/my-idv-components.css'
Vue.use(LoadMore)
```

## 在项目中使用
```
<template>
  <load-more />
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
```

## 组件
### LoadMore
|  参数   | 说明  |  类型  |  默认值  |
|  ----  | ----  | ----  |  ----  |
| currentPage  | 页码 | Number | 1 |
| pageSizes  | 页长 | Number | 10 |
| scrollEle  | 滚动元素 | String | 'body' |
| total  | 数据总条数 | Number | 无 |
| dataLength  | 取到的数据长度 | Number | '无' |

### Pagination
|  参数   | 说明  |  类型  |  默认值  |
|  ----  | ----  | ----  |  ----  |
| total  | 数据总条数 | Number | 无 |
| currentPage  | 页码 | Number | 1 |
| pageSize  | 页长 | Array | [10, 20, 30, 50] |
| layout  | 布局 | String | 'total, sizes, prev, pager, next, jumper' |
| background  | 是否有背景 | Boolean | true |
| autoScroll  | 是否滚动 | Boolean | true |
| hidden  | 是否隐藏 | Boolean | false |

### TableMoveX
|  参数   | 说明  |  类型  |  默认值  |
|  ----  | ----  | ----  |  ----  |
| left  | 距离页码左边的距离 | Number | 20 |
| right  | 距离页码左边的距离 | Number | 20 |

### TableSearchBtn
|  参数   | 说明  |  类型  |  默认值  |
|  ----  | ----  | ----  |  ----  |
| handleFilter  | 搜索的函数 | Function | 无 |
| fuzzySearch  | 模糊搜索 | Object | {} |
| exactSearch  | 精确搜索 | Object | {} |
| compareSearch  | 比较搜索 | Object | {} |
| timeSearch  | 时间区间搜索 | Object | {} |

### TimeSearch
|  参数   | 说明  |  类型  |  默认值  |
|  ----  | ----  | ----  |  ----  |
| label  | 搜索字段对应中文名 | String | "" |
| boundary  | 搜索的值 | Array | [] |
