用 node + express 模拟后台接口



How to use
---

使用**npm**  
``` bash
$ npm i
```

``` bash
$ npm start
```

或者使用**yarn**  
``` bash
$ yarn install
```

``` bash
$ yarn start
```

打开 `index.html` 即可看到效果



关于传参
---

get：直接用 `req.query` 就可取到，[点击跳转API](http://www.expressjs.com.cn/4x/api.html#req.query)  

post：放在 `req.body` 中，需要引入 `body-parser`，[点击跳转API](http://www.expressjs.com.cn/4x/api.html#req.body)  

更多关于[express API](http://www.expressjs.com.cn/4x/api.html)