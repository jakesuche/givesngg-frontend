// import axios from "axios";
// const myAxios = axios.create({
//   baseURL: "https://givesng-staging.herokuapp.com",
// });
import axiosInstance from "@/services/axios";

export default {
  namespaced: true,
  state: {
    user: null,
    isAuthResolved: false,
  },
  actions:{
      createProject(context, createData){
          return axiosInstance.post('/api/v1/projects/', createData)
      }
  }

}