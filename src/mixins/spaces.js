// Player spaces object
var playerSpaces =  generateSpaces(7,13);

// AI spaces object
var AISpaces = generateSpaces(1,7);

function generateSpaces (start, end){
    var spaces = [];
    for (var i = start; i < end; i++) {
        var space = {};
        space.id = `space${i}`;
        space.type = "card";
        space.ElementalType = "";
        space.img = "charBlank.png";
        space.cardSrc = "blank.png";
        space.life = null;
        space.attack = null;
        space.cost = null;
        spaces.push(space);
    }

    return spaces;
}

export default{
    playerSpaces,
    AISpaces
}