class player{
    constructor(dress = "", eyelashes = "", hairstyle = "", footwear = "") {
        this.dress = dress;
        this.eyelashes = eyelashes;
        this.hairstyle = hairstyle;
        this.footwear = footwear;
    }

}
const veeran = new player( "jacket", "persian", "spike", "sneeker");  
console.log(veeran);
class SpecialPlayer extends player{
    constructor(tendency = "") {
        super();
        this.tendency = tendency;
    }
}
const SpecialPlayerone = new SpecialPlayer("fast gun firing frequency");
console.log(SpecialPlayerone.changeDress(""));