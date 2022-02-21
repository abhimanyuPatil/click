import {createStore} from 'vuex'
import {user} from "./user.module"

export const store = createStore({
    modules:{
        user
    }
})