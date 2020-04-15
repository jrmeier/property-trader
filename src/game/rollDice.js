import Chance from 'chance';
const chance = Chance();

import { copyObject } from '../helpers';

export const rollDice = (state) => {
    const newState = copyObject(state);
    const die1 = chance.d6();
    const die2 = chance.d6();
    const isDouble = die1 == die2
    const doubleCount = isDouble ? newState.current.roll.doubleCount + 1 : 0
    const message = `${newState.current.player.name} has rolled a ${die1 + die2}.`
    newState.nextActions.push('newPosition');
    newState.messages.push(message)
    return {
        ...newState,
        current: {
            roll: {
                hasRolled: true,
                die1,
                die2,
                isDouble,
                doubleCount,
            }
        },
        
    }
}
