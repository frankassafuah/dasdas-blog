import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        blogs: [],
        loading: false,
    },
    getters: {
        getBlogs: (state) => state.blogs,
        getLoading: (state) => state.loading,
    },
    mutations: {
        SET_BLOGS(state, payload) {
            state.blogs = payload;
        },
        SET_LOADING(state, payload) {
            state.loading = payload;
        },
    },
    actions: {
        getBlogs: async({ commit }) => {
            commit("SET_LOADING", true);
            const response = await Vue.axios.get("posts");
            if (response) {
                commit("SET_BLOGS", response.data);
                commit("SET_LOADING", false);
            }
        },
    },
});