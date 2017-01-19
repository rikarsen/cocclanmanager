'use strict';

angular.module('coc')
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ])
    .config(['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
        function ($stateProvider, $urlRouterProvider, JQ_CONFIG) {
            $urlRouterProvider.otherwise('/app/dashboard');

            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'tpl/app.html'
                })
                .state('app.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'tpl/dashboard.html'
                })
                .state('app.clan', {
                    url: '/clan',
                    template: '<div ui-view class="fade-in-up"></div>'
                })
                .state('app.clan.members', {
                    url: '/members',
                    templateUrl: 'tpl/members.html'
                })

        }]
    );
