
module.exports = {
    devServer: {
      proxy: {
        "^/api": {
          target: "http://givesng-staging.herokuapp.com",
          ws:true,
          secure:false
        },
      },
    },
  };