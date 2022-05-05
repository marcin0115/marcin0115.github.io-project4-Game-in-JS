
class Stats {
    constructor() {
        this.gameResults = []
    }

    addGameToStats(win, bid) {
        const oneGame = {
            win,
            bid,
        }
        this.gameResults.push(oneGame)
    }

    showGameStats() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result=> result.win).length;
        let losses = games - wins;
        return[games, wins, losses];
    }
}

