let team = {
  _players: [
    {_firstName: "Teddy",
    _lastName: "Stanowski",
    _age: 31,
    get players(){
    	return this._players;
  	},
    }
  ],

  _games: [{
    _opponent: 'Rangers',
    _teamPoints: 3,
    _opponentPoints: 2,
    get games(){
      return this._games;
    },
  }],

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
  };

    this.players.push(player);
    },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };

    this.games.push(game);
  }

};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame('Blues', 2, 4);
team.addGame('Sabres', 5, 2);
team.addGame('Devils', 3, 1);
