angular.module('worrycure', ['ionic','ionic.service.core', 'worrycure.controllers', 'worrycure.services' ,'ngCordova'])

.run(function($ionicPlatform, $location, $rootScope, $cordovaSplashscreen) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    $location.path('/tab/strategivelger/start');
    $rootScope.$apply();

    $cordovaSplashscreen.hide();
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {



  $ionicConfigProvider.tabs.position('bottom');

  $stateProvider

  .state('loading', {
    url: '/loading',
    templateUrl: 'templates/loading.html'
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.strategivelger' , {
    url: '/strategivelger/:questionId',
    views: {
      'tab-strategivelger' : {
        templateUrl: 'templates/tab-strategivelger.html',
        controller: 'StrategivelgerCtrl'
      }
    }
  })

  .state('tab.strategi1', {
    url: '/strategivelger/strategi/:strategi',
    views: {
      'tab-strategivelger': {
        templateUrl: function($stateParams) {
          return 'templates/strategier/' + $stateParams.strategi + '.html';
        },
        controller: 'StrategierCtrl'
      }
    }
  })

  .state('tab.strategier', {
    url: '/strategier',
    views: {
      'tab-strategier': {
        templateUrl: 'templates/tab-strategier.html',
        controller: 'StrategierCtrl'
      }
    }
  })

  .state('tab.strategi2', {
    url: '/strategier/:strategi',
    views: {
      'tab-strategier': {
        templateUrl: function($stateParams) {
          return 'templates/strategier/' + $stateParams.strategi + '.html';
        },
        controller: 'StrategierCtrl'
      }
    }
  })

  .state('tab.appen' , {
    url: '/appen',
    views: {
      'tab-appen' : {
        templateUrl: 'templates/tab-appen.html',
        controller: 'AppenCtrl'
      }
    }
  })

  .state('tab.kurset' , {
    url: '/kurset',
    views: {
      'tab-kurset' : {
        templateUrl: 'templates/tab-kurset.html',
        controller: 'KursetCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/loading');

});
