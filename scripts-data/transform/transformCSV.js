/*
var csv = require("fast-csv"), util = require('../util.js');


/*
var PATH_MUNICIPIOS = 'app/data/municipios.json';
var PATH_DESPESAS = 'app/data/despesas/';
var PATH_RECEITAS = 'app/data/receitas/';
var PATH_TODAS_RECEITAS = 'app/data/receitas.json';

var PATH_DESPESAS_POR_CATEGORIA = PATH_RECEITAS + 'por_categoria';

var DELIMITER = ';';

/*
var municipiosMapa = {};
var expenses = [], revenues = [];
var lastId = '';

var retrieveExpenses = function(data) {
    var years = ['2012', '2013', '2014']    
    for(i in years) {
                funcao: data[5],
                subFuncao: data[6],
                ano: years[i],
                valor: util.toFloat(data[yearIndex])  
            expenses.push(expense);
}
/*
csv
 .fromPath("./data/despesa-funcao-subfunc.csv", {delimiter: DELIMITER })
 .on("data", function(data){
        municipiosMapa[id] = cityName;
        if(lastId == '') {
        if(id == lastId) {
            expenses = [];
            lastId = id;
    }
  .on("end", function(){
    util.writeJSON(PATH_DESPESAS + lastId + '.json', expenses);
              nome: municipiosMapa[m]
    util.writeJSON(PATH_MUNICIPIOS, municipios);
 });

/*
var pRevenueId = '';
csv
 .fromPath("./data/receitas_resultantes_de_impostos.csv", {delimiter: DELIMITER })
 .on("data", function(data){
        if(pRevenueId == '') pRevenueId = id;
        if(id != pRevenueId) {
             revenues = [];
             pRevenueId = id;         
        revenues.push({
            nome: cityName,
            ano: data[2],
            impostosProprios: util.toFloat(data[3]),
            impostosEstado: util.toFloat(data[4]),
            impostosUniao: util.toFloat(data[5]),
            total: util.toFloat(data[6])
        })
    }
  .on("end", function(){
    util.writeJSON(PATH_RECEITAS + pRevenueId + '.json', revenues);
 });
