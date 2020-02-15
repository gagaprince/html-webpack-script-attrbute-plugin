class HtmlWebpackScriptAttributePlugin {
  constructor(HtmlWebpackPlugin,options) {
    this.HtmlWebpackPlugin = HtmlWebpackPlugin;
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('TestPlugin', (compilation) => {
      const hooks = this.HtmlWebpackPlugin.getHooks(compilation);
      hooks.alterAssetTagGroups.tap('TestPlugin', (assets) => {
        if (assets && assets.bodyTags) {
          assets.bodyTags.forEach((bodyTag) => {
            if (bodyTag.tagName === 'script' && !bodyTag.innerHTML) {
                bodyTag.attributes = Object.assign({}, this.options, bodyTag.attributes);
            }
          });
        }
      });
    });
  }
}


module.exports = HtmlWebpackScriptAttributePlugin;
