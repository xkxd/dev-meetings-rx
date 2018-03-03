// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBWkS5VcRUZ9lDYyiFZ69UWxnbZ3kwyh9M',
    authDomain: 'badziewny-projekt.firebaseapp.com',
    databaseURL: 'https://badziewny-projekt.firebaseio.com',
    projectId: 'badziewny-projekt',
    storageBucket: 'badziewny-projekt.appspot.com',
    messagingSenderId: '288634806609'
  }
};
