var request = require('request');
const express = require('express')
const app = express();
const port = 3000;


request('https://demo7242716.mockable.io/products', function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var importedJSON = JSON.parse(body);

     app.get('/', (req,res) =>{
      return res.send(importedJSON);
     });


     app.get('/product', (req, res) => {
      let filter = req.query;
   

  var  newArray= importedJSON.products.filter(function(item) {
    for (var key in filter) {
      if (item[key] === undefined || item[key] != filter[key])
        return false;
    }
    return true;
  });
    
      return  res.send(newArray); 
          
         
      });
  }

})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
