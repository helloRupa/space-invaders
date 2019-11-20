class CrewMember {
  constructor(position) {
    this.position = position;
    this.ship = null;
    this.currentShip = 'Looking for a Rig';
  }

  canPower() {
    return (this.ship) ? 'something' : 'had no effect';
  }

  engageWarpDrive() {
    if (this.currentShip instanceof Spaceship && this.position === 'Pilot') {
      this.currentShip.warpDrive = 'engaged';
      return;
    }
    return this.canPower();
  }

  setsInvisibility() {
    if (this.currentShip instanceof Spaceship && this.position === 'Defender') {
      this.currentShip.cloaked = true;
      return;
    }
    return this.canPower();
  }

  chargePhasers() {
    if (this.currentShip instanceof Spaceship && this.position === 'Gunner') {
      this.currentShip.phasersCharge = 'charged';
      return;
    }
    return this.canPower();
  }
}
