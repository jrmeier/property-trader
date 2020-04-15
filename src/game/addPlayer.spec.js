import { addPlayer } from './addPlayer';

describe('addPlayer', () => {
    test('should add new player', () => {
        const mockState = {
            players: []
        }
        const name = "bob";

        const result = addPlayer(mockState, name);

        expect(result.players.length).toEqual(1);
    })
})