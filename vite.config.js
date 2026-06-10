import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bgmiSetup: resolve(__dirname, 'bgmi-setup.html'),
        disableVbs: resolve(__dirname, 'disable-vbs.html'),
        faq: resolve(__dirname, 'faq.html'),
        glKeymap: resolve(__dirname, 'gl-keymap.html'),
        post: resolve(__dirname, 'post.html'),
        tools: resolve(__dirname, 'tools.html'),
        twitterLogin: resolve(__dirname, 'twitter-login.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  }
});
