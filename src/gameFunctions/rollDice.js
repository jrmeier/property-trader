import Chance from 'chance';
const chance = Chance();

import { copyObject } from '../helpers';

// def roll(state):
//     new_state = deepcopy(state)
//     die1 = random.randint(1, 6)
//     die2 = random.randint(1, 6)
//     is_double = True if die1 == die2 else False

//     new_state['current']['roll'] = {
//         'has_rolled': True,
//         "die1": die1,
//         "die2": die2,
//         "is_double": is_double,
//         "double_count": new_state['current']['roll']['double_count']+1 if is_double else 0
//     }

//     new_state['messages'].append(f"{new_state['current']['player']['name']} rolled a {die1+die2}.")

//     new_state['next_actions'].append("new_position")
    
//     return new_state

export const rollDice = (state) => {
    const newState = copyObject(state);
    const die1 = chance.d6();
    const die2 = chance.d6();
    const isDouble = die1 == die2
    const doubleCount = isDouble ? newState.current.roll.doubleCount + 1 : 0

    newState.nextActions.push('newPosition');

    return {
        ...newState,
        current: {
            roll: {
                hasRolled: true,
                "die1": die1,
                "die2": die2,
                isDouble: isDouble,
                doubleCount,
            }
        },
        
    }
}
