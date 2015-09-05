angular.module('home', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'pages/home.html',
      controller: 'HomeCtrl as hc',
      resolve: {
        version: ['homeService', function (homeService) {
          return homeService.getVersion()
        }]
      }
    })
  }])
  .factory('homeService', ['$q', function ($q) {
    return {
      functionList: [{
        title: 'Partner',
        icon: 'fa-group',
        content: 'Create local partner and trading partner.Manage contact information for partners.Unified and convenient information management.'
      }, {
        title: 'Agreement',
        icon: 'fa-check-square-o',
        content: 'Professional EDI X12 Standard configuration.Partnership management.Transmission channel setup and management.'
      }, {
        title: 'Monitor',
        icon: 'fa-laptop',
        content: 'Powerful GUI for data processing statistics.Interactive monitoring and analysising.System log summary and management'
      }],
      cooperativeCorporation: [{
        name: 'amazon',
        url: 'http://z.cn',
        alt: ''
      }, {
        name: 'ebay',
        url: '',
        alt: ''
      }, {
        name: 'rosewill',
        url: '',
        alt: ''
      }, {
        name: 'ingram',
        url: '',
        alt: ''
      }, {
        name: 'fedex',
        url: '',
        alt: ''
      }, {
        name: 'techdata',
        url: '',
        alt: ''
      }],
      getVersion: function () {
        var deferred = $q.defer();
        setTimeout(function () {
          deferred.resolve('1.0.0');
        }, 1000);
        return deferred.promise;
      }
    }
  }])
  .controller('HomeCtrl', ['$scope', 'homeService', 'version', function ($scope, homeService, version) {
    var self = this;
    this.name = 'Home';
    this.functionList = homeService.functionList;
    this.cooperativeCorporation = homeService.cooperativeCorporation;
    this.version = version;
    // homeService.getVersion().then(function (data) {
    //   console.log(data);
    //   self.version = data;
    // });
  }]);