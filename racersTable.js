(function() {

  google.load('visualization', '1', {
    packages: ['table']
  });

  google.setOnLoadCallback(function() {
    var query, sql, url;
    sql = encodeURIComponent("SELECT Name, Value FROM 3433619 WHERE Event = 'race' ORDER BY Value ASC");
    url = "http://www.google.com/fusiontables/gvizdata?tq=" + sql;
    query = new google.visualization.Query(url);
    return query.send(function(response) {
      var data, table;
      if (response.isError()) return;
      data = response.getDataTable();
      table = new google.visualization.Table(document.getElementById('racers_table'));
      return table.draw(data, {
        showRowNumber: false,
        alternatingRowStyle: false
      });
    });
  });

}).call(this);
