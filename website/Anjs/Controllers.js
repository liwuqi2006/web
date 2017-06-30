angular.module('DetailsModule', ['services', 'ngTable', 'chart.js', 'ngDialog']);


angular.module('DetailsModule').controller('DetailsController', function ($scope, apiFactory, $q, $filter, NgTableParams, ngDialog) {
    var resultsdata = [];

    $scope.$watch('selectedDriver + selectedHostMachine + selectedAsic + selectedTest', function () {
        $scope.tableParams.filter({
            driver_type: $scope.selectedDriver,
            hostMachine: $scope.selectedHostMachine,
            asic: $scope.selectedAsic,
            test: $scope.selectedTest
        });

        if ($scope.selectedAsic && $scope.selectedHostMachine && $scope.selectedTest && $scope.selectedDriver) {
            $scope.drawactive = true;
        }

    });

    $scope.$watch('tableParams.data', function () {
        if ($scope.drawactive) {
            console.log($scope.tableParams.data);
            $scope.chartlabels = [];
            $scope.chartdata = [[]];
            $scope.tableParams.data.forEach(function (data) {
                $scope.chartlabels.push(data.driver_date);
                $scope.chartdata[0].push(data.score);
            });
        }
    });


    $scope.tableParams = new NgTableParams({}, {dataset: resultsdata});

    $scope.cols = [
        {field: "asic", title: "Asic", sortable: "asic", show: true},
        {field: "driver_type", title: "Driver", sortable: "driver_type ", show: true},
        {field: "driver_date", title: "Date", sortable: "driver_date", show: true},
        {field: "test", title: "Test", sortable: "test", show: true},
        {field: "score", title: "Score", sortable: "score", show: true},

    ];


    $scope.drawactive = false;


    $scope.chartseries = ['Series A'];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{yAxisID: 'y-axis-1'}];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }
            ]
        }
    };


    var chain = $q.when();

    chain = chain.then(function () {
        return apiFactory.getResults().then(function (response) {
            resultsdata = response.data;

            $scope.tableParams.settings({dataset: resultsdata});

        });
    });

    chain = chain.then(function () {
        return apiFactory.getOptions().then(function (response) {

            $scope.listOfDriver = response.data.driver;
            $scope.listOfHostMachine = response.data.host;
            $scope.listOfAsic = response.data.asic;
            $scope.listOfTest = response.data.test;

        });
    });


    $scope.clickrow = function (id) {
        console.log(id);
        chain = chain.then(function () {
            return apiFactory.getRun(id).then(function (response) {

                $scope.runDetailData = response.data;

                ngDialog.open({
                    template: 'templateId',
                    resolve:{
                        DetailData:function(){
                            return $scope.runDetailData;
                        }
                    },
                    className: 'ngdialog-theme-default',
                    controller: function($scope, DetailData, NgTableParams){
                        $scope.runDetailData = DetailData;
                        $scope.tableParams = new NgTableParams({},{counts: [], dataset: $scope.runDetailData});
                    }
                });
            });
        });
    }


});


angular.module('teacherModule', ['smart-table', 'services']);

angular.module('teacherModule').controller('teacherController', function ($scope, $q, apiFactory) {

    var chain = $q.when();

    chain = chain.then(function () {
        return apiFactory.getResults().then(function (response) {

        });
    });


    $scope.rowCollection = [
        {Name: 'Laurent', lastName: 'Renard',  balance: 102, email: 'whatever@gmail.com'},
        {Name: 'Blandine', lastName: 'Faivre',  balance: -2323.22, email: 'oufblandou@gmail.com'},
        {Name: 'Francoise', lastName: 'Frere',  balance: 42343, email: 'raymondef@gmail.com'}
    ];

});






