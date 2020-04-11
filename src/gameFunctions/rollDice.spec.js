import { rollDice } from './rollDice';
import { copyObject } from '../helpers';
import state from '../../assets/state.json';
import Chance from 'chance'
const chance = Chance();


describe('rollDice', () => {
    test('should rollDice and update the state', () => {
        const mockState = copyObject(state);

        mockState.current.player = {
                "name": chance.first(),
                "token": chance.string(),
                "balance": 1500,
                "pos": 0
            }
        const result = rollDice(mockState);

        expect(result.nextActions).toEqual(['newPosition'])
        expect(result.current.roll.hasRolled).toBe(true)
    })
})