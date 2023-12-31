// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = "🌀";
    this.position = 1; //0
  }

  moveLeft() {
    // Идём влево.
    this.position = 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  fly() {
    this.moveRight();
    setTimeout(() => {
      this.moveLeft();
    }, 2000);
  }
}

module.exports = Boomerang;
