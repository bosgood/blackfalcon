google.load 'visualization', '1', (packages:['table'])
google.setOnLoadCallback () ->
    sql = 'SELECT Name FROM 3368684'
    sqlE = encodeURIComponent(sql)
    url = 'http://www.google.com/fusiontables/gvizdata?tq='
    urlPlusParams = url + sqlE
    query = new google.visualization.Query(urlPlusParams)
    query.send (response) ->
        if response.isError()
            return
        data = response.getDataTable()
        table = new google.visualization.Table(document.getElementById('racers_table'))
        table.draw data, (showRowNumber: false, alternatingRowStyle: false)