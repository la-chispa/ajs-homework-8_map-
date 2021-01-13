export default class Settings {
  constructor() {
    this.default = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.user = new Map();
    this.all = new Map([['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']]]);
  }

  setUserSettings(setting, value) {
    if (this.all.has(setting) && this.all.get(setting).find((item) => item === value)) {
      this.user.set(setting, value);
    } else {
      throw new Error('Unexpected setting');
    }
  }

  settings() {
    const result = new Map();
    this.default.forEach((value, key) => {
      for (const setting of this.user.keys()) {
        result.set(setting, this.user.get(setting));
      }
      if (!this.user.has(key)) {
        result.set(key, value);
      }
    });
    return result;
  }
}
