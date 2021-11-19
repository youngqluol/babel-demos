## babel demos

### 一、How to use

```
npx babel input --out-dir output
```

or

```
npm run babel
```

### 二、配置

#### useBuiltIns 选项

##### 1. 参数为`usage`

Babel 将检查你的所有代码，以便查找目标环境中缺失的功能，然后只把必须的 polyfill 包含进来

下载`core-js`

```shell
npm i core-js -S
```

设置`useBuiltIns`及`corejs`选项

```js
{
  "presets": [
    [
      "@babel/env",
      {
        "useBuiltIns": "usage",
        "corejs": "3"
      }
    ]
  ]
}
```

##### 2. 参数为`entry`

配置同上

需要在 app 入口最顶层引入：

```js
import "core-js/stable";
import "regenerator-runtime/runtime";
```

### 三、插件

#### @babel/plugin-transform-runtime

可以重用 `Babel`注入的辅助代码以节省代码大小

安装插件：

```shell
npm install --save-dev @babel/plugin-transform-runtime
```

安装`@babel/runtime`作为生产依赖

```shell
npm install --save @babel/runtime
```

```js
{
  "presets": [
    [
      "@babel/env",
      {
        "modules": false,
        "targets": "> 1%, last 2 versions, not ie <= 8",
        "useBuiltIns": "usage",
        "corejs": "3.17"
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime"
    ]
  ]
}
```
