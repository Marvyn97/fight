// dans le constructor:
    // créer les propriétés des personnages avec des valeurs par defauts (instanciation)
    // appel d'une méthode affichage
    //gestionnaire d'événements (...)


// méthode :
    // affichage
    // onClickAttack
    // onClickDefense
    // onClickSpell
    // counter --> lié au dragon


// Pour la méthode affichage:
    // verifier les point de vie, injecter en fonction soit le message de combat soit la victoire ou la défaite

// Pour la méthode attack:
    // c'est un button attention au comportement par défaut
    // faire attaquer le perso
    // le dragon counter
    // mise à jour de l'affichage

import Player from "./Perso.class.js"

class Program {
    constructor(){
        this.joueur = new Player("anakin", 200, 25, 20, 50);
        this.dragon = new Player("obi-wan", 200, 25, 20, 50);
        $("#attack").on("click", () => this.onClickAttack(this));
        $("#defense").on("click", () => this.onClickDefense(this));
        $("#spell").on("click", () => this.onClickSpell(this));
    }

    display(){
        if(this.joueur.healt > 0 && this.dragon.healt > 0){
            $("#player1").text(`${this.joueur.name} : ${this.joueur.healt} HP || attaque : ${this.joueur.attack} || defense : ${this.joueur.defense} || mana : ${this.joueur.mana}`);
            $("#player2").text(`${this.dragon.name} : ${this.dragon.healt} HP || attaque : ${this.dragon.attack} || defense : ${this.dragon.defense} || mana : ${this.dragon.mana}`);
        } else {
            $("#play").css("display", "none");
            if(this.joueur.healt > 0){
                $("#affichage").html(`<p>Victoire de ${this.joueur.name}</p>`)
            }else {
                $("#affichage").html(`<p>Victoire de ${this.dragon.name}</p>`)

            }
        }
    }

    onClickAttack(e){
        e.preventDefault;
        console.log(this.joueur);
        $("#info p").empty();
        this.joueur.attackFight(this.dragon);
        this.counter();
        this.display();
    }

    counter(){
        this.dragon.attackFight(this.joueur);
        console.log("counter");
    }

    onClickDefense(e){
        e.preventDefault;
        this.joueur.defenseFight(this.joueur);
        this.display();
    }
    //onClickDefense()

    //onClickSpell()

}

export default Program;