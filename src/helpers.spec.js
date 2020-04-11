import {copyObject} from './helpers';


describe('helpers', () => {
    describe('copyObject', ()=> {
        test('should return a real copy', () => {
            const mockObj = {
                test: 'thisIsATest'
            }
            const result = copyObject(mockObj)
            
            expect(result).toEqual(mockObj)
        })
    })
});