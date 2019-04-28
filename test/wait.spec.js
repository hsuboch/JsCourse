const { describe, it } = require('mocha')
const {assert} = require('chai');
const logger = require('../util/log.util')
const Wait = require('../util/wait.util')

describe('Wait Test', ()=>{
    it('should wait for true', ()=>{
        const  wait = new Wait();
        wait.forTrue(()=> true, 5, 1000, 0, (result)=> assert.isTrue(result))
    })
})

describe('Wait Test', ()=>{
    it('should wait for false', ()=>{
        const  wait = new Wait();
        wait.forTrue(()=> false, 5, 1000, 0, (result)=> assert.isTrue(result))
    })
})