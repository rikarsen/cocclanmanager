'use strict';

angular.module('coc')
    .controller('COCCtrl', ['$scope', '$localStorage', '$window', '$http',
        function ($scope, $localStorage, $window, $http) {
            var isIE = !!navigator.userAgent.match(/MSIE/i);
            isIE && angular.element($window.document.body).addClass('ie');
            isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

            // config
            $scope.app = {
                name: 'COC CMT',
                version: '1.0.0',
                settings: {
                    themeID: 1,
                    navbarHeaderColor: 'bg-black',
                    navbarCollapseColor: 'bg-white-only',
                    asideColor: 'bg-black',
                    headerFixed: true,
                    asideFixed: true,
                    asideFolded: false,
                    asideDock: false,
                    container: false
                }
            };

            // if(angular.isDefined($localStorage.settings)) {
            //     $scope.app.settings = $localStorage.settings;
            // } else {
            //     $localStorage.settings = $scope.app.settings;
            // }

            $scope.$watch('app.settings', function () {
                if ($scope.app.settings.asideDock && $scope.app.settings.asideFixed) {
                    $scope.app.settings.headerFixed = true;
                }
                $localStorage.settings = $scope.app.settings;
            }, true);

            function isSmartDevice($window) {
                var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
                return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
            }

            $http({
                uri : 'https://api.clashofclans.com/v1/clans/%23' + req.params.id,
                method : 'GET',
                auth : {
                    bearer: process.env.COC_KEY
                }
            })
        }]);