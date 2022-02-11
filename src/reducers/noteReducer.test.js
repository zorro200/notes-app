import deepFreeze from 'deep-freeze';
import { reducer } from './noteReducer.js';

describe('noteReducer', () => {
    test('returns new state after action with toggle important', () => {
        const state = [
            {
                id: 1,
                content: 'note1',
                important: false
            },
            {
                id: 2,
                content: 'note2',
                important: false
            }
        ]

        const action = {
            type: '@notes/toggle_important',
            payload: {
                id: 2
            }
        }

        deepFreeze(state)
        console.log(state);
        const newState = reducer(state, action);
        console.log(newState);
        expect(newState).toHaveLength(2);
        expect(newState).toContainEqual(state[0])
        expect(newState).toContainEqual({
            content: 'note2',
            id: 2,
            important: true
        })

    })
})
