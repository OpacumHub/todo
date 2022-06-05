const state = {
    todos: [
        {
            title: 'Задача №1',
            completed: true
        },
        {
            title: 'Задача №2',
            completed: false
        }
    ]
}

const actions = {
    addNewTodo({commit}, todoItem) {
        commit('new_todo', todoItem)
    },
    deleteTodo({commit}, todoItem) {
        commit('detele_doto', todoItem)
    }
}

const mutations = {
    new_todo(state, todoItem) {
        state.todos.push({
            title: todoItem,
            completed: false
        })
    },
    detele_doto(state, todoItem) {
        let index = state.todos.indexOf(todoItem)
        state.todos.splice(index, 1)
    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
