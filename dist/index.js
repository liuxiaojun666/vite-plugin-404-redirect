"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function vitePlugin404Redirect() {
    const script = `
  <script>
    (function(){
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect && redirect != location.href) {
        history.replaceState(null, null, redirect);
      }
    })();
  </script>`;
    let config;
    return {
        name: 'vite-plugin-404-redirect',
        configResolved(resolveConfig) {
            config = resolveConfig;
        },
        buildEnd() {
            this.emitFile({
                type: 'asset',
                fileName: '404.html',
                source: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=${config.base}">
  <script>sessionStorage.redirect = location.href;</script>
</head>
<body></body>
</html>`,
            });
        },
        transformIndexHtml(html) {
            return html.replace('<body>', `<body>
        ${script}`);
        },
    };
}
exports.default = vitePlugin404Redirect;
