((function(){google.load("visualization","1",{packages:["table"]});google.setOnLoadCallback(function(){var a,b,c,d;c=document.getElementById("racers_table");if(c===null)return;b=encodeURIComponent("SELECT Value as Place, Name FROM 3433619 WHERE Event = 'race' ORDER BY Value ASC");d="http://www.google.com/fusiontables/gvizdata?tq="+b;a=new google.visualization.Query(d);return a.send(function(a){var b,d;if(a.isError())return;b=a.getDataTable();d=new google.visualization.Table(c);return d.draw(b,{showRowNumber:!1,alternatingRowStyle:!1})})})})).call(this);