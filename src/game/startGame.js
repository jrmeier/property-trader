// def start(state):
//     new_state = deepcopy(state)
//     new_state['has_started'] = True
//     new_state['current']['player'] = new_state['players'].pop(0)

//     return new_state

export const startGame = (state) => ({
    ...state,
    has_started: true,
    current: {
        player: state.players.pop(0)
    }
})