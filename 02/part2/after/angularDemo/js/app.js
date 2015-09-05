angular.module('app', ['home'])
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
  .directive('scrollToTop', [function () {
    return {
      restrict: 'A',
      link: function ($scope, iElement, iAttrs) {
        iElement.on('click', function (evt) {
          evt.preventDefault();
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        });
      }
    }
  }])
  .controller('FrameworkCtrl', ['$scope', function ($scope) {
    var self = this;
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
        this.isModalOpen = false;
        this.user.Password = '';
      }
    };
    this.doLogout = function () {
      this.__hasLogged = false;
    };

    this.doSearch = function () {
      if (this.searchValue !== '') {
        location.search = 'key=' + self.searchValue;
      }
    };
  }]);

angular.bootstrap(document, ['app']);