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
           use:["babel-loader"]
           } ,
           {
               test:/\.css$/,
               use: [
                {
                  loader: 'style-loader',
                  options: { injectType: 'singletonStyleTag' },
                },
                'css-loader',
              ]
           },{
               test:/\.(jpg|jpeg|png|gif)$/,
               use:["file-loader"]
           },
           {
            test:/\.html$/,
            use:["html-loader"]  
           } 
        ]  
    },
    plugins:[new HTMLWEBPACKPLUGIN({
        template:"./src/index.html",
        filename:"index.html"
    })],
    devServer:{
        contentBase:'.',
        port:8000,
        historyApiFallback:true,
        open:true
        
    }
}