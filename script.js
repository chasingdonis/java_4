var article = {
'name': "Winston Churchill",
'year': 1940,
'yearBce': false
};

var article2 = {
'name': "Ghamdi",
'year': 1942,
'yearBce': false
};

var article3 = {
'name': "Demosthenes",
'year': 342,
'yearBce': true
};

var speech = ['article', 'article2', 'article3'];

var yearDistance = article2.year-article.year;

console.log(article2.name + " and " + article.name + "'s speech are " + yearDistance + " years apart.");


document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log("There are " + speech.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
    console.log("This speech was written by " + article.name + " in " + article.year + " it is " + article.yearBce + " that this year is B.C.E");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
   console.log("This speech was written by " + article2.name + " in " + article2.year + " it is " + article2.yearBce + " that this year is B.C.E");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
   console.log("This speech was written by " + article3.name + " in " + article3.year + " it is " + article3.yearBce + " that this year is B.C.E");
});