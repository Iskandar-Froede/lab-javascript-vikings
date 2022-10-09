// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
return this.strength;
  };

  receiveDamage(damage) {
    this.health -= damage;
  };

};
  
// const player1 = new Soldier(100,50);
// const player2 = new Soldier(40,20);


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  

receiveDamage(vikingDamage) {
this.health -= vikingDamage;
  if (this.health > 0) {
    return (`${this.name} has received ${vikingDamage} points of damage`);
  } else {
    return (`${this.name} has died in act of combat`);
  }
};

battleCry() {
  return (`Odin Owns You All!`);
};
};

// Saxon

class Saxon extends Soldier {
  attack() {
    return this.strength;
  }
  receiveDamage (damage) {
    this.health -= damage;
  
  if (this.health > 0) {
return (`A Saxon has received ${damage} points of damage`);
  } else {
    return (`A Saxon has died in combat`);
  }
}
}
// War

class War { 
constructor () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

  
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }


  vikingAttack() {
 const chooseRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
 const randomSaxon = saxonArmy[chooseRandomSaxon];

 const chooseRandomViking = Math.floor(Math.random() * this.VikingArmy.length);
  const randomViking = this.vikingArmy[chooseRandomViking];

  randomSaxon.(receiveDamage()) {

  }

  }


  saxonAttack() {}


  showStatus() {

    if (Saxon[i] === 0) {
      return (`"Vikings have won the war of the century!"`)
    } else if (Viking[i] === 0) {
return (`"Saxons have fought for their lives and survived another day..`)
    } else {
      return (`"Vikings and Saxons are still in the thick of battle."`)
    }


  }

}
