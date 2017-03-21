### little tools -- Covert svg to iconfont

小工具： 将 svg 图片转成单色 iconfont，目前支持 ie9 以上浏览器

---

 1. 使用命令 `npm install` 或者 `yarn install` 安装依赖
 2. 在 package.json 文件中，`font-prefix` 属性可以自定义 font 前缀
 3. 把需要编译的 svg 图片放置到 src/icon 文件夹下
 4. 命令 `npm run server` 编译 svg 图片变成 iconfont 以及启动 server
 5. 浏览器中就可以预览 svg 图片并可以看到对应的 codepoint 和 class-name
 6. 使用 `<i class={class-name}></i>`标签在 html 中加入 svg 图片
 
