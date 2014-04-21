/**
 * Created by jkalweit on 4/6/2014.
 */



function MainCtrl($scope, $location) {

}

function NavCtrl($scope, $location) {
    $scope.isActive = function (viewLocation) {
        if(viewLocation === '' || viewLocation === '/')
            return $location.path() === '' || $location.path() === '/';
        else
            return $location.path() === viewLocation;
    };
}


