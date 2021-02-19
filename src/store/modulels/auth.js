import axios from "axios"
const myAxios = axios.create({
    baseURL:'https://givesng-staging.herokuapp.com'
})


export default {
    namespaced:true,
    state:{
        user:null,
        isAuthResolved:false
    },

    getters:{
        authUser(state){
            return state.user || null
        }
    },

    actions:{
        registerUser(context, userData){
            return myAxios.post("/api/v1/users/signup",userData)
            
            
        },
        loginUser({commit}, userData){
            return myAxios.post('/api/v1/users/login', userData)
            .then((res)=>{
                const user = res.data;
                const token = res.data['token']
                localStorage.setItem('auth-token', token)
                commit('setAuthUser', user)
                return user
            })
        }
    },
    mutations:{
        setAuthUser(state,user){
             return (state.user = user)
        }

    }


}