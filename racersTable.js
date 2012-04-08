google.load('visualization', '1', { packages:['table'] });
function handleQueryResponse(response) {
    if (response.isError()) {
        return;
    }
    var data = response.getDataTable(),
        table = new google.visualization.Table(document.getElementById('racers_table'));
    table.draw(data, { showRowNumber: false, alternatingRowStyle: false });
}
function initialize() {
    var url = 'http://www.google.com/fusiontables/gvizdata?tq=',
        sql = encodeURIComponent('SELECT Name FROM 3368684'),
        urlPlusParams = url + sql,
        query = new google.visualization.Query(urlPlusParams);
    query.send(handleQueryResponse);
}
google.setOnLoadCallback(initialize);