google.load 'visualization', '1', (packages:['table'])
google.setOnLoadCallback () ->
    tableDiv = document.getElementById 'racers_table'
    if (tableDiv == null)
        return
    sql = encodeURIComponent "SELECT Name, Value FROM 3433619 WHERE Event = 'race' ORDER BY Value ASC"
    url = "http://www.google.com/fusiontables/gvizdata?tq=#{sql}"
    query = new google.visualization.Query(url)
    query.send (response) ->
        if response.isError()
            return
        data = response.getDataTable()
        table = new google.visualization.Table(tableDiv)
        table.draw data, (showRowNumber: false, alternatingRowStyle: false)