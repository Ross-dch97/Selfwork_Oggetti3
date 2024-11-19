
let bowling = {
    players: [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
    
    random_scores : function () {
        this.players.forEach(player => {
            
            for(let i = 1; i <= 10; i++) {
                player.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1));
                
            }
            console.log(player.scores);
            
        })
    },
    
    final_score : function  () {
        this.players.forEach(player =>{
            let total_score = player.scores.reduce((acc, num ) => acc + num )
            player.total = total_score  
            console.log(player.total);
        })
    },
    
    add_new_player : function (newName) {
        let newPlayer = {name : newName, scores : []};
        for(let i = 1; i <= 10; i++) {
            newPlayer.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
        }
        this.players.push(newPlayer);
        console.log(newPlayer.scores);
    },
    
    winning_player : function () {
        let winner = this.players[0]
        console.log(`IL VINCITORE E' ${winner.name} con ${winner.total} punti`)
            
        }
        
    }
    
    
    
    bowling.random_scores()
    bowling.add_new_player('Giovanni')
    bowling.final_score()
    bowling.winning_player()
    