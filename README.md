# vite-plugin-404-redirect

解决 vite 项目单页面 history 路由中 404 页面跳转问题。

可以用于 github pages 或者 netlify、gitee 等静态托管平台。

## Install

```bash
npm i vite-plugin-404-redirect -D
```

## Usage

```js
// vite.config.js
import { defineConfig } from 'vite'
import redirect404page from 'vite-plugin-404-redirect'

export default defineConfig({
  plugins: [
    redirect404page(),
  ],
})
```

## Usage vite2

vite2 ts 校验可能会冲突，不影响正常使用。

``` ts
// vite.config.js
import { defineConfig } from 'vite'
import redirect404page from 'vite-plugin-404-redirect'

export default defineConfig({
  plugins: [
    redirect404page() as unknown as PluginOption,
  ],
})
```

## Demo

[https://github.com/liuxiaojun666/vite-vue3-admin](https://github.com/liuxiaojun666/vite-vue3-admin)

## Result

[https://liuxiaojun666.github.io/vite-vue3-admin/](https://liuxiaojun666.github.io/vite-vue3-admin/)
