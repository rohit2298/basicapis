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



    var newArray = importedJSON.products.filter(function (el)
{
  return el.brand == "Roadster";
}
    );
    
    app.get('/Roadster', (req, res) => {
        return res.send(newArray);
          
         
      });
     
  }

})





app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
