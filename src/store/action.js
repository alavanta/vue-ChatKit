import chatkit from '../chatkit'

function handleError(commit, error) {
    const message = error.message || error.info.error_description;
    commit('setError', message);
}

export default {
    // async login({ commit, state }, userId) {
       async login({ commit }, userId) {
        try {
            commit('setError', '');
            commit('setLoading', true);
            // Connect user to ChatKit service
            const currentUser = await chatkit.connectUser(userId);
            commit('setUser', {
                username: currentUser.id,
                name: currentUser.name
            });
            commit('setReconnect', false);
            // Test state.user
            // const stateUser = state.user;
            // console.log(stateUser)
        } catch (error) {
            handleError(commit, error)            
        } finally {
            commit('setLoading', false)
        }
    }
}