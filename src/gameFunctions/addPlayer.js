import Chance from 'chance';
import tokens from '../../assets/tokens';
import { copyObject } from '../helpers';

const chance = Chance();

export const addPlayer = (state, name) => {
    const new_state = copyObject(state);

    const token = chance.pickone(tokens)
    const player = {
        "name": name,
        "token": token,
        "balance": 1500,
        "pos": 0,
    }
    new_state['players'].push(player)
    return new_state
}