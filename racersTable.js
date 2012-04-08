google.load('visualization', '1', { packages:['table'] });
google.setOnLoadCallback(function () {
    var url = 'http://www.google.com/fusiontables/gvizdata?tq=',
        sql = encodeURIComponent('SELECT Name FROM 3368684'),
        urlPlusParams = url + sql,
        query = new google.visualization.Query(urlPlusParams);
    query.send(function(response) {
        if (response.isError()) {
            return;
        }
        var data = response.getDataTable(),
            table = new google.visualization.Table(document.getElementById('racers_table'));
        table.draw(data, { showRowNumber: false, alternatingRowStyle: false });
    });
});