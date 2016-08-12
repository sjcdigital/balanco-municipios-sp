var colors = {};

// básico para começar, ainda não aprendi os módulos
(function() {
    angular
        .module('BalancoApp')
        .controller('BalancoController', ['$scope', '$http', 'expense', 'urlUtils', function($scope, $http, expense, urlUtils) {
            // set defaul colors
            $scope.showAbout = function() {
            $scope.showHowItWorks = function() {
            $http.get("data/municipios.json").success(
                function(data) {
                    $scope.municipios = data;
                    var urlId = urlUtils.getUrlMap()['id'];
                    if(urlId) {
                            if(m.id === urlId) {
            });

            $scope.loadApp = function(){
                var params = {};
                params['id'] = munId;
                console.log(urlUtils);
                urlUtils.saveUrlMap(params);
                $scope.revenue = null;
                $scope.expenses = null;
                $http.get("data/receitas/" + munId + ".json").success(
                function(data) {
                });
                $http.get("data/despesas/" + munId + ".json").success(
                function(data) {
                    var expenseChartData = expense.loadData(data);
                    buildChart(expenseChartData);
                });
                $('html, body').animate({
    				scrollTop: $("#cmbMunicipios").offset().top - 70
    			}, 1000);
    }]);
}());
function buildChart(data) {
    var chart = $('#expensesChart').highcharts({
        chart: {
            type: 'column'
        },
        title: { text: "Despesas por área" },
        xAxis: {
            categories: data.categories,
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Valor (R$)',
                align: 'high'
            },
		    labels: {
                overflow: 'justify',
			    formatter: function() {
				    return 'R$ ' + this.value.toLocaleString();
			    }
		    }
        },
        tooltip: {
			pointFormat: 'Total R$ {point.y:,.3f}',
            formatter: function() {
                console.log(this);
                if(!this.x) {
                    return "<b> Total de despesas em " + this.key + "</b>: R$ " + this.y.toLocaleString();
                } else {
                    var area = this.x.split("-")[1];
                    var output = "<b>Despesas com " + area + " em " + this.series.name + ": ";
                    output += "<span style=\"color: red\">R$: " + this.y.toLocaleString() + "</span>";
                    var key = buildDetailsKey(this.x, this.series.name);
                    console.log(key);
                    var details = detailsMap[key];
                    if(details) {
                        output += "<br /> <br /><em>Detalhes:</em><br/>";
                        for(var d in details) {
                            var detail = details[d];
                            output += "<b>" + detail.name + "</b>" + ": R$ " + detail.value.toLocaleString() + "<br />";
                        }
                    }
                    return output;
                }
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return 'R$ ' + this.y.toLocaleString();
                    }
                }
            }
        },
        series: data.series
    });
    chart.reflow();
}

    function loadRevenue(data) {
        var totals = {};
        var pieSerie = {
            name: 'Total',
            data: [],
            center: [30, 0],
            size: 50,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        for(var i = 0; i< data.length; i++) {
            series[i].name = year;
            series[i].data = [
                { type: "column", y: data[i].impostosEstado },
                { type: "column", y: data[i].impostosUniao },
            ];
            if(!totals[year]) totals[year] = 0;
            totals[year] += data[i].impostosProprios + data[i].impostosEstado + data[i].impostosUniao;
        // add the data for the small pie chart
        for(var year in totals) {
                name: year,
                y: totals[year],
                color: colors[year]
        series.push(pieSerie);
        chart: {
            type: 'column'
        },
        title: { text: "Receita de impostos" },
        xAxis: {
            categories: ['Impostos Próprios', 'Impostos do Estado', 'Impostos da União'],

        },
        yAxis: {
            min: 0,
            title: {
                text: 'Valor (R$)',
                align: 'high'
            },
		    labels: {
                overflow: 'justify',
			    formatter: function() {
				    return 'R$ ' + this.value.toLocaleString();
			    }
		    }
        },
        tooltip: {
            valuePrefix: ' R$ ',
            formatter: function() {
                if(!this.x) {
                    return "<b>Arrecadação com impostos em " + this.key + "</b>: R$ " + this.y.toLocaleString();
                } else {
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                }
            }
        },
        series: series
    });
    chart.reflow();
function buildDetailsKey(cat, year) {
function searchSeries(series, year) {
    return serie;