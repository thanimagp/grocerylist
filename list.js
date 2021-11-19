function item() {
    var  xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
          if(this.readyState==4&& this.status==200){
       var response = JSON.parse(this.responseText);
     var list = response.list;
     var output="";
     for(  var i=0; i<list.length; i++)
     {
         output+=`<tr>
                     <td>${list[i].Serialnumber}</td>
                     <td>${list[i].Name}</td>
                     <td>${list[i].Quantity}</td>
                     <td>${list[i].Unit}</td>
                     <td>${list[i].Department}</td>
                     <td>${list[i].Note}</td>
                 </tr>`
      
     }
     document.getElementById("tdata").innerHTML = output;
      }
     }
    xhttp.open("GET", "list.json", true);
    xhttp.send();
  }