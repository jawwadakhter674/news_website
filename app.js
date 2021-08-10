// 16a4159429954d79be3467188ca26058
// https://newsapi.org/v2/everything?q=tesla&from=2021-07-10&sortBy=publishedAt&apiKey=16a4159429954d79be3467188ca26058


var computer=document.getElementById('computer')
var mobile=document.getElementById('mobile')
var weather=document.getElementById('weather')
var cricket=document.getElementById('cricket')
var btn=document.getElementById('btn')


const news_data=document.querySelector('.news_card')
const news=document.querySelector('#news_card')


// var url= "'https://newsapi.org/v2/everything?q=weather&apiKey=16a4159429954d79be3467188ca26058'"



window.addEventListener('load',()=>{

async function loadEvent(){
  const dataLoad= await fetch('https://newsapi.org/v2/everything?q=pollution&from=2021-08-09&to=2021-08-09&sortBy=popularity&apiKey=16a4159429954d79be3467188ca26058')
  const jsonData= await dataLoad.json()
  const mainLoad=jsonData.articles.splice(11)
  mainLoad.forEach((element)=>{
    
      
    news.innerHTML +=`
      
    <div class="card_main">
    <div class="card_top" style="background-image: url(${element.urlToImage});">
    
    
    <h3>${element.source.name}</h3>
    </div>
    <div class="card_bottom">
    <h3>${element.title}</h3>
    
    <p>${element.content.substring(0,120)}...</p>
    
    </div>
    </div>
    
    `
    
    

  })
 
}

loadEvent()

})


btn.addEventListener('click',()=>{

  news.innerHTML=""
  async function fetchData(){
    
    var search=document.getElementById('search')

    
    const fetching= await fetch(`https://newsapi.org/v2/everything?q=${search.value}&apiKey=16a4159429954d79be3467188ca26058`)
    
    
    const data =  await fetching.json()
    
    const main_data=data.articles.splice(11)
    console.log(main_data)
    
  
    main_data.forEach(element => {
      console.log(element)
      
      news_data.innerHTML +=`
      
      <div class="card_main">
      <div class="card_top" style="background-image: url(${element.urlToImage});">
      
      
      <h3>${element.source.name}</h3>
      </div>
      <div class="card_bottom">
      <h3>${element.title}</h3>
      
      <p>${element.content.substring(0,120)}...</p>
      
      </div>
      </div>
      
      `
      
      
      
      
      
    });
    
    
    
    
    
    
    
    
    
    
    
    
  }
  
  fetchData()
  
})



// fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-07-10&sortBy=publishedAt&apiKey=16a4159429954d79be3467188ca26058')
//   .then(response => response.json())
//   .then(json => console.log(json.articles))



