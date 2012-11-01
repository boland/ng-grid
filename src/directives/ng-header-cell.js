﻿ngGridDirectives.directive('ngHeaderCell', function ($compile) {
    var ngHeaderCell = {
        scope: false,
        terminal: true,
        compile: function () {
            return {
                pre: function ($scope, iElement) {
                    var html = $scope.col.headerCellTemplate();
                    iElement.html(html);
                    $compile(iElement.children())($scope);
                }
            };
        }
    };
    return ngHeaderCell;
});