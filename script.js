var visual;
var canvass=document.getElementById("canvass")
var shownext=document.getElementById("shownext")
var rates=[]

var pairing=document.querySelector(".pairs")
var p1=document.getElementById("p1")
var p2=document.getElementById("p2")
var p3=document.getElementById("p3")
var p4=document.getElementById("p4")
var p5=document.getElementById("p5")
var p6=document.getElementById("p6")
var p7=document.getElementById("p7")


 var url= "https://api.currencyscoop.com/v1/latest?api_key=Your API KEY"

// setInterval(()=>{
async function getData(){


var respObj=await fetch(url)   
var json=await respObj.json() 


 
/*converting USD to Quote*/ 

p1.innerHTML=Math.pow(`${json.response.rates.AUD}`,-1).toFixed(5)
p2.innerHTML =Math.pow(`${json.response.rates.EUR}`,-1).toFixed(5)
 p3.innerHTML=Math.pow(`${json.response.rates.GBP}`,-1).toFixed(5)
p4.innerHTML= Math.pow(`${json.response.rates.CHF}`,-1).toFixed(5)
p5.innerHTML=Math.pow(`${json.response.rates.CAD}`,-1).toFixed(5)

p6.innerHTML= Math.pow( `${json.response.rates.NZD}`,-1).toFixed(5)
p7.innerHTML= Math.pow(`${json.response.rates.JPY}`,-1).toFixed(5)

}  



async function forChart(){
await getData()



var a=p1.innerHTML 
var b=p2.innerHTML 
var c=p3.innerHTML 
var d=p4.innerHTML 
var e=p5.innerHTML 

var f=p6.innerHTML 
var g=p7.innerHTML 

var ctx = document.getElementById('myChart').getContext("2d") 
rates.push(a,b,c,d,e,f,g)

var majors= ['AUD', 'EUR', 'GBP', 'CHF', 'CAD','NZD','JPY']

visual = new Chart(ctx, { 
type: 'bar', 

data: { labels: majors, 

datasets: [{ label: 'USD as Counter Currency' ,data:rates,backgroundColor:[ 'blue', 'blue', 'blue', 'blue', 'blue', 'blue',"blue"],fill:true }] 

} ,

options:{

plugins:{
 title:{
 display:true,
 text:"Prices of 1 Unit of the Currencies relative to USD",
 color:'red'
}
}
}
})   

}
forChart()




/*news section*/ 
 var url2= "https://api.marketaux.com/v1/news/all?symbols=USD,TSLA,CAD,AMZN,EUR&filter_entities=true&language=en&countries=us&api_token=YOUR API TOKEN"


async function getNews(){
var resp=await fetch(url2)
var json=await resp.json()  
var{data}=json
data.forEach((element)=>{
shownext.innerHTML=`
<h2>${element.title}</h2>
<p>${element.published_at}</p>

<p>${element.description}</p>
<p>${element.url}</p>

<p>source:${element.source}</p>

<p>${element.keywords}</p>

`
})


}
    
 getNews()   
    



