module.exports = {
    entry: "./index.js",
    externals:[],//库已经引用的依赖,避免重复引入
    output: {
        filename: "./bundle.js",
        library: "module name",//名字
        libraryTarget: "umd",//挂载在什么地方 window global

    }
};
