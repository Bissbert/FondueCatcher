const DEFAULT_USER: string = 'default_user';

export default class PointManagement {
  #privateName: string = DEFAULT_USER;
  #privatePointsObject: { string: number } = { default_user: 0 };
  setState: ({ string: number }) => void;

  constructor(setState: ({ string: number }) => void) {
    this.setState = setState;
  }

  set username(name: string) {
    this.#privateName = name;
    if (this.#privatePointsObject[name]) {
      this.#privatePointsObject[name] = 0;
    }
  }

  get points() {
    console.log(this.#privatePointsObject);
    console.log(
      'current user ',
      this.#privateName,
      ' has ',
      this.#privatePointsObject[this.#privateName],
      ' points',
    );
    return this.#privatePointsObject[this.#privateName];
  }

  get username() {
    return this.#privateName;
  }

  incrementPoints(pointsToAdd: number) {
    console.log('adding ', pointsToAdd, ' points to ', this.#privateName);
    this.#privatePointsObject[this.#privateName] += pointsToAdd;
    this.setState({ points: this.points });
  }

  resetPoints() {
    console.log('resetting points for ', this.#privateName);
    this.#privatePointsObject[this.#privateName] = 0;
    this.setState({ points: this.points });
  }
}
