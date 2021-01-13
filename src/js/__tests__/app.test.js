import Settings from '../app';

test('create right object', () => {
  const newSettings = new Settings();
  expect(newSettings.default).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
  expect(newSettings.user).toEqual(new Map([]));
  expect(newSettings.all).toEqual(new Map([['theme', ['dark', 'light', 'gray']],
    ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
    ['difficulty', ['easy', 'normal', 'hard', 'nightmare']]]));
});

test('setUserSettings, right key and value', () => {
  const newSettings = new Settings();
  newSettings.setUserSettings('theme', 'gray');
  expect(newSettings.user).toEqual(new Map([['theme', 'gray']]));
});

test('setUserSettings, wrong key', () => {
  function wrongSetting() {
    const newSettings = new Settings();
    newSettings.setUserSettings('color', 'gray');
  }
  expect(wrongSetting).toThrowError(new Error('Unexpected setting'));
});

test('setUserSettings, wrong value', () => {
  function wrongSetting() {
    const newSettings = new Settings();
    newSettings.setUserSettings('theme', 'red');
  }
  expect(wrongSetting).toThrowError(new Error('Unexpected setting'));
});

test('settings, user settings setted', () => {
  const newSettings = new Settings();
  newSettings.setUserSettings('theme', 'gray');
  expect(newSettings.settings()).toEqual(new Map([['theme', 'gray'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test('settings, user settings are empty', () => {
  const newSettings = new Settings();
  expect(newSettings.settings()).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});
