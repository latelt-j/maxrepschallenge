module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/variables.scss";
          @import "@/assets/scss/root.scss";
        `
      }
    }
  }
}
