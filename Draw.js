
class Draw {
    constructor() {
        this.allColors = ['red', 'green', 'blue'];
        let _result = this.drawResult();
        this.getDrawResult = ()=> _result;
    }

    drawResult() {
        const colors = [];
        for(let i=0; i<this.allColors.length; i++) {
            const index = Math.floor(Math.random()*this.allColors.length);
            const color = this.allColors[index];
            colors.push(color);
        }
        return colors;
    }
}
