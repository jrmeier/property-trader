import fs, { read } from 'fs';
import { rollDice } from './src/game';
import { v4 as uuidv4 } from 'uuid';
import game_state from './assets/state.json'
import board from './assets/board.json'
import cli from 'cli-interact'

const loadGame = (gameID) => {

    if(!gameID) {
        gameID = uuidv4()
        console.log("making the game")
        const newGame = JSON.stringify({
            gameID,
            ...game_state,
            // board
        }, null, '\t')

        fs.writeFileSync(`./${gameID}.json`, newGame)
    }

    return JSON.parse(fs.readFileSync(`./${gameID}.json`))
    
}

const updateGame = (gameID, game_state) => {

        fs.writeFileSync(`./${gameID}.json`, JSON.stringify(game_state,null,'\t'))
}

const fnMap = {
    "roll": rollDice
}

const play = (gameID = null) => {

    let gameFile = loadGame(gameID)

    // let action = cli.question("Actions")

    while (cli.question("") !== "quit") {
        console.log("\nActions:")

        gameFile.actions.map( (action) => {
            console.log(action)
        })

        const player_action = cli.question("")

        if(!gameFile['actions'].includes(player_action)) {
            gameFile['messages'].push('Action not available.')
        }
        else {

            // state = eval(player_action)(state)
            
            gameFile = eval(fnMap[player_action])
            console.log(gameFile)
            // state = update_actions(state)
        }
    console.log(gameFile)

    }
      
    console.log(gameFile)
}
const gameID = null
const action = ""
play(gameID, action)

//         print("\nActions:")
//         for action in state['actions']:
//             print(f"\t{action}")
        
//         player_action = input("")

//         if player_action not in state['actions']:
//             state['messages'].append('Action not available.')
        
//         else:
//             state = eval(player_action)(state)
//             state = update_actions(state)

//         for na in state['next_actions']:
//             state = eval(na)(state)
//             state = update_actions(state)
//             # for m in state['messages']:
//             #     print(m)

        
//         for m in state['messages']:
//             print(m)

//         state['next_actions'] = []
//         state['messages'] = []

//         with open(game_filename,'w') as game_file:
//             game_file.write(json.dumps(state, indent=3))
