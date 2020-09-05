## react设置mobx环境

1. creact-react-app project-name 创建react环境
2. yarn eject 暴露配置参数
3. yarn add @babel/plugin-proposal-decorators 
4. 修改package.json， 找到 babel字段， 添加 
"plugins":[
      ["@babel/plugin-proposal-decorators",{"legacy":true}]
    ]

### `yarn start`

开发调试

### `yarn build`

编译代码
