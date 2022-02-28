import {createStore} from 'vuex'
import {user} from "./user.module"
import {layout} from "./layout.module"

export const store = createStore({
    modules:{
        user,
        layout
    }
})