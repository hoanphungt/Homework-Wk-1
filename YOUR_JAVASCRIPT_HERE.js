// Write your JS here

let hero = {
    name: 'Hoan',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'dagger',
        damage: 2
    }
};

newWeapon = hero.weapon;

function rest(hero) {
    hero.health = 10;
    return hero;
};

function pickUpItem(hero, newWeapon) {
    hero.inventory.push(newWeapon)
};

function equipWeapon(hero) {
    if(hero.inventory.length === 0) {
                
    } else {
        hero.weapon = hero.inventory[0];
    };
};
