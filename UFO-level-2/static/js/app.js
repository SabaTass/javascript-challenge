// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
tableData.forEach(function(data_js){                    //Loop through data file.
    var row = tbody.append("tr");                       //Appending rows in table. 
    
    Object.entries(data_js).forEach(function([key, value]){
        var cell = row.append("td").text(value);        //Appending data in each row. 
    });
});

var button = d3.select("#filter-btn");                  //Defining/selecting button. 
var button2= d3.select("#clear-btn");                   //Defining/Selecting button 2(clear button)

button.on("click", function(){                          //Adding button functionality. 
    
    var input_element = d3.select(".form-control");      //Selecting the input element upon click. 
    var input_date = input_element.property("value");     //Getting input value entered. 
  
    var filtered_Data = tableData.filter(data_js => data_js.datetime === input_date);

    var tbody = d3.select("tbody")
    tbody.html("");                                        //Clear the result after every search

    filtered_Data.forEach(function(data_js){
        var row = tbody.append("tr");
       Object.entries(data_js).forEach(function([key, value]){
       var cell = row.append("td").text(value);
    })
  })
});

button2.on("click", function(){                          //Clear button clears out the table everytime we press it. 
   
    tbody.html("");
    
})