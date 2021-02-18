
module.exports = {
    devServer: {
      proxy: {
        "^/api": {
          target: "https://givesng-staging.herokuapp.com/api",
          ws:true,
          secure:false
        },
      },
    },
  };