var SEPARADOR_URL = "&";
var balancoApp = angular.module('BalancoApp', []);

var colors = {};
var SEPARADOR_URL = "|"

// básico para começar, ainda não aprendi os módulos
balancoApp.controller('BalancoController',
    ['$scope', '$http', function($scope, $http) {
        $scope.showAbout = function() {
        $scope.showHowItWorks = function() {
        $http.get("data/municipios.json").success(
            function(data) {
                $scope.municipios = data;
                var urlId = recuperaMapaUrl()['id'];
                if(urlId) {
                        if(m.id === urlId) {
        });

        $scope.loadApp = function(){
            var params = {};
            params['id'] = munId;
            salvaMapaUrl(params);
            $scope.revenue = null;
            $scope.expenses = null;
            $http.get("data/receitas/" + munId + ".json").success(
            function(data) {
            });
            $http.get("data/despesas/" + munId + ".json").success(
            function(data) {
                loadExpenses(data);
            });
            $('html, body').animate({
				scrollTop: $("#cmbMunicipios").offset().top - 70
			}, 1000);
}]);
// making global for debug
var detailsMap = {};
function loadExpenses(data) {
    var categories = [];
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
    detailsMap = {};
    // extracting chart information from the data
    for(var i = 0; i < data.length; i++) {
        var year = data[i].ano;
        if(!serie) {
        if(categories.indexOf(cat) === -1) {
        }
        if(!serie.mapCategories[cat]) {
        // sum all the values for this category
        serie.mapCategories[cat] += data[i].valor;
        // totals for the pie chart
        if(!totals[year]) totals[year] = 0;
        totals[year] += data[i].valor;
        // let's build the drilldown data now
        // the ID is the key
        var key = buildDetailsKey(cat, year);
        if(!detailsMap[key]) {
            detailsMap[key] = [];
        detailsMap[key].push({ "name" : data[i].subFuncao, "value" : data[i].valor });
    }
    // build the data for each category of each series(it might come in a random order, must organize)
    for(var i = 0; i < series.length; i++) {
            series[i].data.push({
            });
    // add the data for the small pie chart
    for(var year in totals) {
            name: year,
            y: totals[year],
            color: colors[year]          
    series.push(pieSerie);
    $('#expensesChart').highcharts({
        chart: {
            type: 'column'
        },
        title: { text: "Despesas" },
        xAxis: {
            categories: categories,
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
                if(!this.x) {
                    output += "<span style=\"color: red\">R$: " + this.y.toLocaleString() + "</span>";
                    console.log(key);
                    var details = detailsMap[key]; 
                    if(details) { 
                        output += "<br /> <br /><em>Detalhes:</em><br/>";
                        console.log(details)
                        for(var d in details) {
                    }                                       
                    return output;
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
function buildDetailsKey(cat, year) {
function searchSeries(series, year) {
    return serie;

function recuperaMapaUrl() {
	var todos = window.location.hash.replace('#', '');
	var params = {};
	$.each(todos.split(SEPARADOR_URL), function(i, v) {
		var campos = v.split('=');
		params[campos[0]] = campos[1];
	});
	return params;
}

function salvaMapaUrl(params) {
	var novaUrl = '';
	$.each(params, function(i, v) {
		novaUrl += i + '=' + v + SEPARADOR_URL;
	});
	window.location.hash = novaUrl.substring(0, novaUrl.length - 1);
}