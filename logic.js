$(document).ready(function () {

  // var newTerm = $(this).text().trim()
  var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=Spider-Man&apikey=73169315c6ab8e42dd20c443b95f53d5";


  $.getJSON("spiderman.json", function(json) {
    console.log(json.data.results[0].description); // this will show the info it in firebug console
});
//   $.ajax(
//     {
//       method: "GET",
//       url: queryURL,
//     }).then(function (response) {
//       console.log(response.data.results[0].description)

//     })

 });



 $.ajax({url: 'apikey:70WBd9op95LmhjMEAse2ZNfSVDvvWN8QS9TdKupqRI7c@gateway.watsonplatform.net/personality-insights/api/v2/profile', method:"POST", data: 
 "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people."
, processData: false, headers:{"Authorization": "Basic " + btoa('70WBd9op95LmhjMEAse2ZNfSVDvvWN8QS9TdKupqRI7c'), "Content-Type": "text/plain;charset=utf-8", "Accept": "application/json"} }).then(function(response){console.log(response)})