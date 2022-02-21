const state = {
    isLoggedIn:false,
    user:null
}

const getters = { 
    isLoggedIn: (state:any) => state.isLoggedIn
};

const actions = {
    login({dispatch,commit}:any,{username,password}:any){
        commit('loginRequest',{username});
    },
    logout({commit}:any){
        commit('logout')
    }
}

const mutations = {
    loginRequest(state:any,user:any){
        state.isLoggedIn = true;
    },
    logout(state:any){
        state.isLoggedIn = false
    }
}
export const user = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};