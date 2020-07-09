describe('createMonster', () => {
    it('should create monster object', () => {
        const monster = {
            id: 1,
            userId: 1,
            name:'Khultu',
            superPower: 'Oops',
            area: 'Cave',
        };
        expect(createMonster(1, 'Khultu', 'Oops', 'Cave')).to.deep.equal(monster);
    });
});

describe('Math', () => {
    it('should do pow', () => {
        expect(1).to.equal(1);
    });
});