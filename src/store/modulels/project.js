// import axios from "axios";
// const myAxios = axios.create({
//   baseURL: "https://givesng-staging.herokuapp.com",
// });
import axiosInstance from "@/services/axios";

export default {
  namespaced: true,
  state: {
    projects: null,
    isAuthResolved: false,
  },
  getters:{
      ProjectsExist(state){
        return !!state.projects
      }
  },
  actions:{
      createProject(context, createData){
          return axiosInstance.post('/api/v1/projects/', createData)
      },
      getProjects(context){
          return axiosInstance.get('/api/v1/projects/')
          .then(res=>{
              const projects = res['data']['data']['docs']
            context.commit('setProject',projects)
          })
          .catch(err=>{
              console.log(err.response)
          })
      }
  },
 mutations:{
    setProject(state,projects){
        state.projects = projects
    }
 }

}