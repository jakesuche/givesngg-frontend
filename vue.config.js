
module.exports = {
    c: {
      proxy: {
        "^/api": {
          target: "https://givesng-staging.herokuapp.com",
          // ws:true,
          // secure:false
          pathRewrite: { "^/api/": "/api/" },
        changeOrigin: true,
        
        },
      },
    },
  };