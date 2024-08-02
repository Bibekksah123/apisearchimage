let acceskey='qDapy89A5MJDIDa7QAli7I6lEw1CXPrpIhn-ybFBRfQ';
const formvalue=document.querySelector('form');//form
const inputs=document.querySelector('#inputs');//search
const searchbtn=document.querySelector('#btn');//btn
const resul=document.querySelector('.result');//result
const showmore=document.querySelector('.showmore');//showmore
// searchbtn.addEventListener("click",function(){
  // let url="https://api.unsplash.com/photos/?client_id=qDapy89A5MJDIDa7QAli7I6lEw1CXPrpIhn-ybFBRfQ";
//   async function getdata(){
//  let res= fetch(url)
// let data=res.json()
// console.log(data);
//   }

// })
// let url="https://api.unsplash.com/photos/?client_id=qDapy89A5MJDIDa7QAli7I6lEw1CXPrpIhn-ybFBRfQ";
// async function getdata(){
//   let res=  await fetch(url)
//  let data= res.json()
//  console.log(data);
//    }
//    getdata();
let keyword="";
let page=1;
async function searchimage(){
  keyword=inputs.value;
  let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acceskey}&per_page=12`;
  let res=await fetch(url);
  let data=await res.json();
  // console.log(data);
  if(page==1){
    resul.innerHTML='';
  }
  let results=data.results;
  results.map((result)=>{
    let image=document.createElement('img');
    image.src=result.urls.small;
    let linka=document.createElement('a');
    linka.href=result.links.html;
    linka.target="_blank"
   linka.appendChild(image);
   resul.appendChild(linka);
  })
  showmore.style.display='block';
}
 formvalue.onsubmit=(e)=>{
  e.preventDefault();
  page=1;
  searchimage();
 }
 showmore.addEventListener("click",()=>{
  page++;
  searchimage()
 })