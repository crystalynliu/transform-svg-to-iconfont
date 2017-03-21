### little tools -- Covert svg to iconfont

小工具： 将 svg 图片转成单色 iconfont，目前支持 ie9 以上浏览器

---

 1. 使用命令 `npm install` 或者 `yarn install` 安装依赖
 2. 在 package.json 文件中，`font-prefix` 属性可以自定义 font 前缀
 3. 把需要编译的 svg 图片放置到 src/icon 文件夹下
 4. 命令 `npm run server` 编译 svg 图片变成 iconfont 以及启动 server
 5. 浏览器中就可以预览 svg 图片并可以看到对应的 codepoint 和 class-name
 6. 使用 `<i class={class-name}></i>`标签在 html 中加入 svg 图片
 
---

 ####注意：
 
 1. 如果只想编译 svg 文件，并不想启动 server， 使用`npm run icon` 命令，在 dist 文件夹下可以找到编译后的 font 和 CSS 文件。
 2. 运行 `./packagefile.sh` 脚本文件，压缩打包编译后的 font 以及 CSS 文件。