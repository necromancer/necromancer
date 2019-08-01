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
        space.fastAttack = false;
        spaces.push(space);
    }

    return spaces;
}

export default{
    generateSpaces
}