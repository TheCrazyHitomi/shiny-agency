import { formatJobList, formatQueryParams } from './results'
import { describe, it, expect } from 'vitest'
 
describe('La fonction formatJobList', () => {
    it('ajoute une virgule à un item', () => { 
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    it('ne met pas de virgule pour le dernier élément', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})


describe('La fonction formatQueryParams', () => {
    it('utilise le bont format pour les paramètres', () => {  
        const expectedState = 'a1=answer1'
        expect(formatQueryParams({1: 'answer1'})).toEqual(expectedState)
    })
    it('concate les paramètres avec un &',() => {
        const expectedState = 'a1=answer1&a2=answer2'
        expect(formatQueryParams({1: 'answer1', 2: 'answer2'})).toEqual(expectedState)
    }
)
})



// it = test  *** utiliser it ou test
// describe = groupe de tests
// expect = assertion  
// toEqual = matcher                
// toBeDefined = matcher
// toBeNull = matcher
// toBeUndefined = matcher
// toBeTruthy = matcher
// toBeFalsy = matcher
// toBe = matcher
// toContainEqual = matcher
// toMatchObject = matcher
// toMatchInlineSnapshot = matcher
// toMatchSnapshot = matcher
// toBeCalled = matcher
// toBeCalledTimes = matcher
// toBeCalledWith = matcher
// toHaveBeenCalled = matcher
// toHaveBeenCalledTimes = matcher
// toHaveBeenCalledWith = matcher
// toHaveBeenLastCalledWith = matcher
// toHaveBeenNthCalledWith = matcher
// toMatch = matcher
// toContain = matcher
// toThrow = matcher
// toThrowError = matcher
// toHaveLength = matcher
// toHaveProperty = matcher
// toBeGreaterThan = matcher
// toBeGreaterThanOrEqual = matcher
// toBeLessThan = matcher
// toBeLessThanOrEqual = matcher
// toBeCloseTo = matcher
// toBeInstanceOf = matcher 