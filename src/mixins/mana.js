/*
  __  __                              _                  _ _   _               
 |  \/  |                       /\   | |                (_) | | |              
 | \  / | __ _ _ __   __ _     /  \  | | __ _  ___  _ __ _| |_| |__  _ __ ___  
 | |\/| |/ _` | '_ \ / _` |   / /\ \ | |/ _` |/ _ \| '__| | __| '_ \| '_ ` _ \ 
 | |  | | (_| | | | | (_| |  / ____ \| | (_| | (_) | |  | | |_| | | | | | | | |
 |_|  |_|\__,_|_| |_|\__,_| /_/    \_\_|\__, |\___/|_|  |_|\__|_| |_|_| |_| |_|
                                         __/ |                                 
                                        |___/                                  
*/

// Mana object
var mana = 
    [
        {
            name:"fire",
            value: 0,
        },
        {
            name:"water",
            value: 0,
        },
        {
            name:"air",
            value: 0,
        },
        {
            name:"earth",
            value: 0,
        },
        {
            name:"death",
            value: 0,
        }
    ];

// Generate initial mana object based on player's turn
function generateInitalMana (turn) {

    // Set overall mana (19 for starting turn and 18 for second)
    let overall;
    if(turn == false){
        overall = 19;
    }else{
        overall = 18;
    }

    // Distribute mana (4 elementals powers go from 3 to 6. The 5th is always 2 )

    // Set the 5th elementals
    mana[4].value = 2;

    // Set basic elementals
    
    // Player
    let msgTotal = 0;
    while (msgTotal != overall) { // Generate random values until sum of them equal overall
        mana[0].value = Math.floor(Math.random() * (6 - 3 + 1) + 3);
        mana[1].value = Math.floor(Math.random() * (6 - 3 + 1) + 3);
        mana[2].value = Math.floor(Math.random() * (6 - 3 + 1) + 3);
        mana[3].value = Math.floor(Math.random() * (6 - 3 + 1) + 3);

        msgTotal = (mana.reduce(function(prev, cur) {
        return prev + cur.value;
        }, 0))-2;
    }

    return mana;
}

export default {
    mana,
    generateInitalMana
}


    
    

    


