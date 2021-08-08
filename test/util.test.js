describe('Util', () => {

    let util;
    beforeEach(()=>{
        util = require('../util');
    })

    it('return url',()=>{
        expect(util.getUrl()).toContain('http')
    });

})