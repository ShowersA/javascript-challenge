


          var tbody = d3.select("tbody");
          var tableData = data;

        // Building Table
          function buildTable(data){
          tbody.html("");
          data.forEach((dataRow) => {
          var row = tbody.append("tr");
          Object.values(dataRow).forEach((val) => {
          var cell = row.append("td");
          cell.text(val);
        });
    })
}
          // Handleclick function 
          function handleClick(){
          d3.event.preventDefault();
          var specificdate = d3.select("#datetime").property("value");
          var filteredData = tableData;

    
          if(specificdate) {
          filteredData = filteredData.filter((row) => row.datetime === specificdate);
          }
          //Build table with filtered data
          buildTable(filteredData);
          } 
          d3.selectAll("#filter-btn").on("click", handleClick);
          buildTable(tableData);

          