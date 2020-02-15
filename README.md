# html-webpack-script-attribute-plugin 文档

## 给script添加自定义attr

> 版本：1.0.2+
> webpack版本：4+

tip:
如果你使用htmlwebpackplugin，那么使用此插件，可以给你的script标签添加自定义字段，比如 crossorigin


**用法：**

```typescript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackScriptAttrPlugin = require('html-webpack-script-attribute-plugin');

const htmlWebpackScriptAttrPlugin = new HtmlWebpackScriptAttrPlugin(HtmlWebpackPlugin,{
  crossorigin: 'anonymous'
});

// 将 htmlWebpackScriptAttrPlugin 放入webpack config文件的plugins中。


```
