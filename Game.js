
class Game {
    constructor(start$) {
        this.pocket = new Pocket(start$);
        this.stats = new Stats();

        document.getElementById('spin').addEventListener('click', this.startGame.bind(this));
        this.cards = document.querySelectorAll('div.card');
        this.input = document.getElementById('bid');
        this.spanPocket = document.querySelector('.cash span.pocket');
        this.spanScore = document.querySelector('.statistics span.score');
        this.spanGames = document.querySelector('.statistics span.number');
        this.spanWins = document.querySelector('.statistics span.win');
        this.spanLosses = document.querySelector('.statistics span.loss');

        this.render();
    }

    render(colors=['#1ff', '#1ff', '#1ff'], money=this.pocket.getPocketValue(), wonMoney=0, bid=0, score='', stats=[0,0,0]) {
        this.cards.forEach((card,i)=> {
             card.style.backgroundColor = colors[i];
        })
        this.spanPocket.textContent = money;
        if(score) {
            score = `WIN ${wonMoney}$!`;
        } else if(!score && score!=='') {
            score = `LOST ${bid}$!`;
        }
        this.spanScore.textContent = score;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
    }

    startGame() {
        if(this.input.value <1) return alert('Zbyt niska kwota!');
        const bid = Math.floor(this.input.value);
        if(!this.pocket.checkCanPlay(bid)) return alert('Nie masz tyle gotówki!')
        this.pocket.changePocket(bid, '-');
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Score.checkWinner(colors);
        const wonMoney = Score.wonMoney(win, bid);
        this.pocket.changePocket(wonMoney);
        this.stats.addGameToStats(win, bid);

        this.render(colors, this.pocket.getPocketValue(), wonMoney, bid, win, this.stats.showGameStats()) 

        this.input.value = "";
    }
}
        


