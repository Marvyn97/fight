//Perso -> 
// constructor prends des arguments lié aux instances créées dans la class Program, les initialisé



// méthode:
    // attack
    // defense
    // spell

class Player {
    constructor(name, healt, attack, defense, mana){
        this.name = name;
        this.healt = healt;
        this.attack = attack;
        this.defense = defense;
        this.mana = mana;
    }


    attackFight(opponent){
        console.log("opponent", opponent);
        let dmg = this.attack - opponent.defense;
        if (dmg < 10){
            $("#info p").text(`${this.name} ne sent pas les dmg`);
        }
        opponent.healt -= dmg;
        console.log(dmg);

    }

    defenseFight(joueur){
        console.log("defense");
        let armor = joueur.defense + getRandomInteger(1, 8);
        joueur.defense = armor;
        console.log(armor);
    }


}

export default Player;