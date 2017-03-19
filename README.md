# reactjs demo

# introduce
使用了react-router作为路由，redux管理数据，sass写css，webpack管理项目

# lib
- react
- react-dom
- react-router
- redux
- react-redux
- redux-log
- redux-thunk


# how to run

~~~
// 安装依赖
npm install

安装node-sass可能会有问题，从新安装
npm install node-sass@3.13.0 --save-dev

// 运行开发环境 
npm strat

// 打包生产环境
npm run build 
~~~


# 问题
react-router路由模式

但是，这种情况需要对[服务器改造](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#configuring-your-server)。否则用户直接向服务器请求某个子路由，会显示网页找不到的404错误。
如果开发服务器使用的是webpack-dev-server，加上--history-api-fallback参数就可以了。


使用nginx的话，需要如下
~~~
server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

		gzip  on;
		
        location / {
            root   html;
            index  index.html index.htm;
			try_files $uri /index.html; // here
        }
	}
~~~

如果使用了代理，需要这么配置（需要检验）
~~~
server {
    listen       9999;
    server_name  localhost;

    proxy_set_header X-Forwarded-Host $host;
	proxy_set_header X-Forwarded-Server $host;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    location / {
		try_files $uri  /index.html
				  @mongrel;
	}

	location @mongrel {
		proxy_pass http://127.0.0.1:9999;
	}

	
	location ^~/api/{
		rewrite ^/api/(.*)$ /$1 break;
		proxy_pass http://www.api.com/;
	}
	

}
~~~

webpack2 css不能压缩 使用下面插件解决
https://www.npmjs.com/package/optimize-css-assets-webpack-plugin

# REF
[webpack升级](https://webpack.js.org/guides/migrating/)

[入门webpack](http://web.jobbole.com/87408/)



## es7
 npm install --save-dev babel-preset-stage-3 --save-dev

使用es7的async await  需要引入 babel-polyfill （太大？？？）

压缩怎么没之前小了？？？