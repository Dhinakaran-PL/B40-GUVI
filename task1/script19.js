var res =fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// //console.log(res)
res.then((data)=>data.json())
.then((data1)=>{
    for (var i=0;i<data1.length;i++){
    console.log(data1[i].name)
    }

})



// var res =fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// res.then((data)=>data.json())
// .then((data1)=>foo(data1))

// function foo(arr){
//     for (var i=0;i<arr.length;i++){
//         var ele=document.createElement("div")
//         ele.style.color="green";
//         ele.style.fontSize="32px";
//         ele.innerHTML=arr[i].name
//         document.body.append(ele)

//         }
// }



// var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// res.then((data) => data.json())
//     .then((data1) => foo(data1))

// function foo(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var div = document.createElement("div")
//         div.style.color="green";
//         div.style.fontSize="32px";
//         div.innerHTML = `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">${arr[i].name}</h5> 
//           <h6 class="card-subtitle mb-2 text-muted">${arr[i].capital}</h6>
//           <a href="${arr[i].flag}" class="card-link">click for flag</a>


//         </div>
//       </div>`

//         document.body.append(div)

//     }
// }



// var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// res.then((data) => data.json())
//     .then((data1) => foo(data1))

// function foo(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var div = document.createElement("div")
//         // div.style.color="green";
//         // div.style.fontSize="32px";
//         div.innerHTML = `<div class="row">
//         <div class="col-sm-6">
//           <div class="card">    
//             <div class="card-body">
//               <h5 class="card-title">${arr[i].name}</h5>
//             </div>
//           </div>
//         </div>
//         <div class="col-sm-6">
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">${arr[i].flag}</h5>
//             </div>
//           </div>
//         </div>
//       </div>`

//         document.body.append(div)

//     }
// }






// var res = fetch("https://data.covid19india.org/v4/min/data.min.json")
// res.then((data) => data.json())
//   .then((data1) => foo(data1))
// function foo(data1) {
//   for (var a in data1) {
//     console.log(a, data1[a])
//     var div = document.createElement("div")
//     div.style.color = "green";
//     div.style.fontSize = "32px";
//     div.innerHTML = `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">${a}</h5> 
//           <h6 class="card-subtitle mb-2 text-muted">${data1[a].total.confirmed}</h6>
         
         
//         </div>
//       </div>`

//     document.body.append(div)

//   }
// }

var b ="guveek"
var a =b.split("").join();
// for(var i=0;i<a.length;i++){
// console.log(a[i]);
// }
console.log(a)