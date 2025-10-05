import getSum from './sum.js'
// for checking multiple tests use describe
describe("test for fnx",()=>{
    test("adding 2+2 equals to 4",()=>{
    expect(getSum(2,2)).toBe(4)  
    });
    test("adding -5+(-5) equals to -10",()=>{
    expect(getSum(-5,-5)).toBe(-10)  
    });
})
//for single Test
// test("adding 2+2 equals to 4",()=>{
//   expect(getSum(2,2)).toBe(4)  
// })
//In terminal run npm test to excute