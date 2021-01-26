# 伺服器回應技術調研

本專案基於 [docker-express-monogo](https://github.com/eastmoon/docker-exporess-monogo)，對相關 WebAPI 伺服器回應技術進行確認

+ [HTTP cookies](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Cookies)
    - [node.js : set-cookies](https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_response_setheader_name_value)
    - [Using HTTPOnly Cookie in GET request (Retrieve user info from server using user_id cookie)](https://stackoverflow.com/questions/51460607)
    - [Android: Understand Cookie and Session in Android’s Context](https://medium.com/cs-random-thoughts-on-tech/understand-cookie-and-session-in-androids-context-e1520718ccba)
    - [How do we handle Cookies in iOS? How do we set Cookies in different version of iOS?](https://medium.com/@ankit7282/how-do-we-handle-cookies-in-ios-how-do-we-set-cookies-in-different-version-of-ios-74425021f0c)
+ [Json Web Token, JWT](https://jwt.io/)
    - [JWT(JSON Web Token) — 原理介紹](https://medium.com/%E4%BC%81%E9%B5%9D%E4%B9%9F%E6%87%82%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88/jwt-json-web-token-%E5%8E%9F%E7%90%86%E4%BB%8B%E7%B4%B9-74abfafad7ba)
    - [Github : jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
    - [JSON Web Tokens (JWTs) in Express.js](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)

#### 操作主機環境

+ 啟動
```
dockerw up
```
> 開啟此專案於背景模式

+ 關閉
```
dockerw down
```
> 關閉啟動中的容器
