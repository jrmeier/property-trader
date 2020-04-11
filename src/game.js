// def play():
//     # check the game state for available actions
//     date_string =datetime.datetime.now().strftime("%m_%d_%Y_%H_%M_%S")
//     game_filename = f"../games/{date_string}.json"
//     with open("../assets/state.json","r") as state_file:
//         state = json.load(state_file)
    
//     with open("../assets/board.json",'r') as board_file:
//         state['board'] = json.load(board_file)


//     player_action = ""
//     while player_action != "quit":

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

