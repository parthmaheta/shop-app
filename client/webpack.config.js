const HTMLWEBPACKPLUGIN=require('html-webpack-plugin')

module.exports={
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:require('path').resolve("public")        
    },
    module:{
       rules:[
           {
           test:/\.js$/,
           exclude:/node_modules/,
           use:{
               loader:"babel-loader"
           }  }
        ]  
    },
    plugins:[new HTMLWEBPACKPLUGIN({
        template:"./src/index.html",
        filename:"index.html"
    })]
    
}