class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.docked = crew.length === 0;
    this.assignShip(crew);
    this.crew = crew;
  }

  assignShip(crew) {
    crew.forEach(member => {
      member.currentShip = this;
    });
  }
}
