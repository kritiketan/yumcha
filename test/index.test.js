describe('Index', () => {

    let index;
    beforeEach(()=>{
        index = require('../index');
    })

    it('return url',()=>{
        expect(index.sip()).toContain('http')
    });

})