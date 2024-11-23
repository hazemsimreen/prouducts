var prouducts=document.querySelector(".prouducts");
var jsname=document.querySelector("#name");
var jsdescription=document.querySelector("#description");
var jsprice=document.querySelector("#price");
 
var arrProducts=[];

prouducts.onsubmit=function(e){
    e.preventDefault();
    var product ={
    name2:jsname.value,
    description2:jsdescription.value,
    price2:jsprice.value,
    }
    arrProducts.push(product);
    print();
}
function print(){
    var data=``;
    for(var i=0;i<arrProducts.length;i++){
        data+=`
        <tr>
<td>${arrProducts[i].name2}</td>
<td>${arrProducts[i].description2}</td>
<td>${arrProducts[i].price2}</td>
        </tr>`;

    }
document.querySelector("tbody").innerHTML=data;
}