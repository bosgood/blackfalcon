(function() {

  google.load('visualization', '1', {
    packages: ['table']
  });

  google.setOnLoadCallback(function() {
    var query, sql, sqlE, url, urlPlusParams;
    sql = 'SELECT Name FROM 3368684';
    sqlE = encodeURIComponent(sql);
    url = 'http://www.google.com/fusiontables/gvizdata?tq=';
    urlPlusParams = url + sqlE;
    query = new google.visualization.Query(urlPlusParams);
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
