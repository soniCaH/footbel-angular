/**
 * @file
 * Angular directives and filters.
 */

base_url = 'http://footbel.van-ransbeeck.be/api';

angular.module('footbel', [])
  // Filter on object property. Default sort expects an Array instead of a list of Objects.
  .filter('orderObjectBy', function () {
    return function (items, field, reverse) {
      var filtered = [];
      angular.forEach(items, function (item) {
        filtered.push(item);
      });
      filtered.sort(function (a, b) {
        return (
          parseInt(a[field]) > parseInt(b[field]) ? 1 : -1
        );
      });
      if (reverse) {
        filtered.reverse();
      }
      return filtered;
    };
  })

  // General ranking for a complete division.
  .directive('ranking', function ($http) {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
        division: '@division',
        season: '@season',
        province: '@province'
      },
      templateUrl: 'ranking.tpl.html',
      link: function ($scope, element) {

      },
      controller: function ($scope) {
        $scope.ready = false;
        $scope.rankings = [];

        $scope.base_url = base_url;

        $http.get(base_url + '/ranking/' + $scope.province + '/' +
        $scope.season + '/' + $scope.division)
          .then(function (response) {
            $scope.rankings = response.data;
            $scope.ready = true;
          });
      }
    }
  })

  // Short ranking with [teamname] highlighted and [number]/2 teams above and below the highlighted team.
  .directive('rankingShort', function ($http) {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
        division: '@division',
        season: '@season',
        province: '@province',
        teamname: '@teamname',
        number: '@number'
      },
      templateUrl: 'ranking-short.tpl.html',
      link: function ($scope, element) {

      },
      controller: function ($scope) {
        $scope.ready = false;
        $scope.rankings = [];

        $scope.base_url = base_url;

        $http.get(base_url + '/ranking/short/' + $scope.province + '/' +
        $scope.season + '/' + $scope.division + '/' + $scope.teamname +
        '/' + $scope.number)
          .then(function (response) {
            $scope.rankings = response.data;
            $scope.ready = true;
          });
      }
    }
  })

  // Overview of matches for a division. Optional parameters are logo and specific matchday.
  .directive('matches', function ($http) {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
        division: '@division',
        season: '@season',
        province: '@province',
        logo: '@logo',
        matchday: '@matchday'
      },
      templateUrl: 'matches_overview.tpl.html',
      link: function ($scope, element) {

      },
      controller: function ($scope) {
        $scope.ready = false;
        $scope.matches = [];

        $scope.base_url = base_url;

        $http.get(base_url + '/matches/' + $scope.province + '/' +
        $scope.season + '/' + $scope.division + '/' + $scope.matchday)
          .then(function (response) {
            $scope.matchesPerDay = [];

            angular.forEach(response.data, function (match) {
              if (!$scope.matchesPerDay[match.matchday]) {
                $scope.matchesPerDay[match.matchday] = [];
              }
              $scope.matchesPerDay[match.matchday].push(match);
            });

            $scope.ready = true;
          });
      }
    }
  })

  // Display next matches for all teams of a specified reg number.
  .directive('matchesnext', function ($http) {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
        season: '@season',
        regnumber: '@regnumber'
      },
      templateUrl: 'matches_next.tpl.html',
      link: function ($scope, element) {

      },
      controller: function ($scope) {
        $scope.ready = false;
        $scope.matches = [];

        $scope.base_url = base_url;

        $http.get(base_url + '/matches/next/' + $scope.season + '/' +
        $scope.regnumber)
          .then(function (response) {
            $scope.matches = response.data;
            $scope.ready = true;
          });
      }
    }
  })

  // Display previous matches for all teams of a specified reg number.
  .directive('matchesprev', function ($http) {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
        season: '@season',
        regnumber: '@regnumber'
      },
      templateUrl: 'matches_next.tpl.html',
      link: function ($scope, element) {

      },
      controller: function ($scope) {
        $scope.ready = false;
        $scope.matches = [];

        $scope.base_url = base_url;

        $http.get(base_url + '/matches/prev/' + $scope.season + '/' +
        $scope.regnumber)
          .then(function (response) {
            $scope.matches = response.data;
            $scope.ready = true;
          });
      }
    }
  })

  // Display next match(es) for a specific team in a specific division.
  .directive('matchnext', function ($http) {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
        season: '@season',
        regnumber: '@regnumber',
        division: '@division',
        number: '@number'
      },
      templateUrl: 'match_next.tpl.html',
      link: function ($scope, element) {

      },
      controller: function ($scope) {
        $scope.ready = false;
        $scope.matches = [];

        $scope.base_url = base_url;

        $http.get(base_url + '/matches/next/' + $scope.season + '/' +
        $scope.regnumber + '/' + $scope.division + '/' + $scope.number)
          .then(function (response) {
            $scope.matches = response.data;
            $scope.ready = true;
          });
      }
    }
  })

  // Display previous match(es) for a specific team in a specific division.
  .directive('matchprev', function ($http) {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
        season: '@season',
        regnumber: '@regnumber',
        division: '@division',
        number: '@number'
      },
      templateUrl: 'match_next.tpl.html',
      link: function ($scope, element) {

      },
      controller: function ($scope) {
        $scope.ready = false;
        $scope.matches = [];

        $scope.base_url = base_url;

        $http.get(base_url + '/matches/prev/' + $scope.season + '/' +
        $scope.regnumber + '/' + $scope.division + '/' + $scope.number)
          .then(function (response) {
            $scope.matches = response.data;
            $scope.ready = true;
          });
      }
    }
  })

  // Display next match(es) for a specific team in a specific division with logo.
  .directive('matchnextfull', function ($http) {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
        season: '@season',
        regnumber: '@regnumber',
        division: '@division',
        number: '@number'
      },
      templateUrl: 'match_next_full.tpl.html',
      link: function ($scope, element) {

      },
      controller: function ($scope) {
        $scope.ready = false;
        $scope.matches = [];

        $scope.base_url = base_url;

        $http.get(base_url + '/matches/next/' + $scope.season + '/' +
        $scope.regnumber + '/' + $scope.division + '/' + $scope.number)
          .then(function (response) {
            $scope.matches = response.data;
            $scope.ready = true;
          });
      }
    }
  })

  // Display previous match(es) for a specific team in a specific division with logo.
  .directive('matchprevfull', function ($http) {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
        season: '@season',
        regnumber: '@regnumber',
        division: '@division',
        number: '@number'
      },
      templateUrl: 'match_next_full.tpl.html',
      link: function ($scope, element) {

      },
      controller: function ($scope) {
        $scope.ready = false;
        $scope.matches = [];

        $scope.base_url = base_url;

        $http.get(base_url + '/matches/prev/' + $scope.season + '/' +
        $scope.regnumber + '/' + $scope.division + '/' + $scope.number)
          .then(function (response) {
            $scope.matches = response.data;
            $scope.ready = true;
          });
      }
    }
  });
