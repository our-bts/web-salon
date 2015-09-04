angular.module('app', [])
  .directive('modalBox', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function ($scope, iElement, iAttrs) {
        var valName = iAttrs.modalBox;
        iElement.on('hidden.bs.modal', function () {
          $parse(valName).assign($scope, false);
          if (!$scope.$$phase) {
            $scope.$apply();
          }
        });
        $scope.$watch(valName, function (to, from) {
          iElement.modal(to ? 'show' : 'hide');
        });

      }
    }
  }])
  .controller('FrameworkCtrl', ['$scope', function ($scope) {
    this.__hasLogged = false;
    this.isModalOpen = false;
    this.user = {
      UserName: 'jay',
      Password: '111',
      rememberMe: false
    };

    this.openModal = function () {
      this.isModalOpen = true;
    };
    this.doLogin = function () {
      if (this.user.UserName === 'jay' && this.user.Password === '111') {
        this.__hasLogged = true;
        this.user.Password = '';
        this.isModalOpen = false;
      }
    };
    this.doLogout = function () {
      this.__hasLogged = false;
    };
  }]);

angular.bootstrap(document, ['app']);