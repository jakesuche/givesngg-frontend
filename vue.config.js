
module.exports = {
    devServer: {
      proxy: {
        "^/api": {
          target: "https://givesng-staging.herokuapp.com/",
          ws:true,
          secure:false
        },
      },
    },
  };