(function() {

  google.load('visualization', '1', {
    packages: ['table']
  });

  google.load('jquery', '1.7.1');

  google.setOnLoadCallback(function() {
    var query, raceData, sql, tableDiv, tables, url, _i, _len;
    tables = document.getElementsByClassName('blackfalcon-top10');
    for (_i = 0, _len = tables.length; _i < _len; _i++) {
      tableDiv = tables[_i];
      raceData = $(tableDiv).data('blackfalcon');
      if (tableDiv === null) return;
      sql = "SELECT Value as Place, Name FROM 3433619 WHERE Event = '" + raceData.eventType + "' AND RaceNum = " + raceData.race + " ORDER BY Value ASC";
      console.log(sql);
      sql = encodeURIComponent(sql);
      url = "http://www.google.com/fusiontables/gvizdata?tq=" + sql;
      query = new google.visualization.Query(url);
      query.send(function(response) {
        var data, table;
        if (response.isError()) return;
        data = response.getDataTable();
        table = new google.visualization.Table(tableDiv);
        return table.draw(data, {
          showRowNumber: false,
          alternatingRowStyle: false
        });
      });
    }
  });

}).call(this);
