export default {
    state: {
        cafes: [],
    },
    getters: {
        allCafes(state) {
            return state.cafes
        }
    },
    mutations: {
        updateCafes(state, cafes) {
            state.cafes = cafes
        }
    },
    actions: {
        fetchCafes(ctx) {
            console.log('Hello')
            fetch("https://bandaumnikov.ru/api/test/site/get-index")
                .then((response) => response.json())
                .then((json) => {
                    console.log('JSIN123', json.data)
                    const cafes = json.data;
                    ctx.commit('updateCafes', cafes)
                })
                .catch(() => {
                    console.log('Error')
                })
        }
    },
}