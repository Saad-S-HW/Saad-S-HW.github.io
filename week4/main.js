var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://saad-s-hw.github.io/week4/cities.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
renderHTML(ourData);
};
ourRequest.send();
});
function renderHTML(data){
var htmlString =
"";
for (i=0; i<data.length; i++){
htmlString += "<p>" + data[i].name + " is a city in " + data[i].country + ".</p>"
;
}
cityContainer.insertAdjacentHTML('beforeend' , htmlString);
}
