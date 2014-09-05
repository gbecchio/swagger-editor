'use strict';

PhonicsApp.config(['$provide', function ($provide) {
  $provide.constant('defaults',

  // BEGIN-DEFAUNTAS-JSON
  {
    downloadZipUrl: 'http://generator.wordnik.com/online/api/gen/download/',
    codegen: {
      servers: 'http://generator.wordnik.com/online/api/gen/servers',
      clients: 'http://generator.wordnik.com/online/api/gen/clients',
      server: 'http://generator.wordnik.com/online/api/gen/servers/{language}',
      client: 'http://generator.wordnik.com/online/api/gen/client/{language}'
    },
    examplesFolder: '/spec-files/',
    exampleFiles: ['default.yaml', 'minimal.yaml', 'heroku-pets.yaml', 'uber.yaml'],
    backendEndpoint: '/editor/spec',
    useBackendForStorage: false,
    backendHelathCheckTimeout: 5000,
    disableFileMenu: false,
    disableCodeGen: false,
    useYamlBackend: false,
    headerBranding: false,
    brandingCssClass: ''
  }
  // END-DEFAULTS-JSON

  );
}]);
