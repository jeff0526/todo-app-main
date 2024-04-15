//insert list of todo
let lm_dm="classfornewaddlist";//for light mode new added list
let x=0;//for items left
let num=0;//for unique id of new added list

const inpt =document.getElementById('inptnew')
inpt.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("chkbx").click();
  }
});

function btnfunction(ev){
    const inptnew=document.getElementById('inptnew').value;
    const cforadd=document.getElementsByClassName(lm_dm);
    const addtodos=document.getElementsByClassName("adtodo");
    const list = document.getElementById("addedlist");
    const itemnum = document.getElementById('itemnum');

    const attr = document.createAttribute("class");
    attr.value = lm_dm;
    const attrad = document.createAttribute("class");
    attrad.value = "adtodo";
    const attrimg = document.createAttribute("class");
    attrimg.value = "imgbtn";
    const attrcomp = document.createAttribute("class");
    attrcomp.value = "complete";
    const onclk = document.createAttribute("onclick");
    onclk.value = "myfunction(event)";
    const radioonclk = document.createAttribute("onclick");
    radioonclk.value = "myradiofunction(event)";
    const crossonclk = document.createAttribute("onclick");
    crossonclk.value = "mycrossfunction(event)";

  
    const drgble = document.createAttribute("draggable");
    drgble.value = "true";
    const drgid = document.createAttribute("id");
    drgid.value = "dragtarget-"+ num;
    const drgstrt = document.createAttribute("ondragstart");
    drgstrt.value = "drag(event)";
    const ondrg = document.createAttribute("ondrop");
    ondrg.value = "return false";
    const ondrgover = document.createAttribute("ondragover");
    ondrgover.value = "return false";

    const node = document.createElement("div");
    const node1 = document.createElement("div");
    const nodecross = document.createElement("div");
    const nodecomp = document.createElement("div");

    const nodeinpt = document.createElement("p");
    const textnodeinpt = document.createTextNode(inptnew);
    nodeinpt.appendChild(textnodeinpt);
   
    list.insertBefore(node, list.children[0]);
    const dv =document.getElementById("addedlist").firstElementChild;
    
    dv.setAttributeNode(attr);
    dv.setAttributeNode(drgble);
    dv.setAttributeNode(drgid);
    dv.setAttributeNode(drgstrt);
    dv.setAttributeNode(ondrg);
    dv.setAttributeNode(ondrgover);

    dv.appendChild(node1);
    cforadd[0].firstElementChild.setAttributeNode(attrad);

    
    cforadd[0].appendChild(nodecross);
    cforadd[0].lastElementChild.setAttributeNode(attrimg);
    cforadd[0].lastElementChild.setAttributeNode(crossonclk);

    addtodos[0].appendChild(nodecomp);
    addtodos[0].firstElementChild.setAttributeNode(attrcomp);
    addtodos[0].firstElementChild.setAttributeNode(radioonclk);
    
    cforadd[0].firstElementChild.appendChild(nodeinpt);
    addtodos[0].lastElementChild.setAttributeNode(onclk);
    
    x=list.children;
    
    itemnum.innerHTML = x.length;
    item=x.length;
    num=x.length;
    if (x.length >= 7){
       list.style.overflow='auto';
    }
   
}

//------------------------

//drag and drop
function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev, el) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    el.appendChild(document.getElementById(data));
  }
//---------------------


//toggle croos button
function myfunction(evt){ 
    var curparent=evt.currentTarget.parentElement;
    var parent =curparent.parentElement;
    var parentlastchild=parent.lastElementChild;
        parentlastchild.classList.toggle('imghide');
}
//-------------------


//check button for completed
function myradiofunction(evt){
    var addclassinput =evt.currentTarget.nextElementSibling;

    evt.currentTarget.classList.toggle('completechck');
    addclassinput.classList.toggle('inpttext');
}
//

//delete single list that completed
function mycrossfunction(evt){
    const itemnum = document.getElementById('itemnum');
    const clsname = evt.currentTarget.classList.value;

    const parent = evt.currentTarget.parentElement;
    if (clsname == 'imgbtn imghide'){
        parent.remove();
    }
    itemnum.innerHTML = x.length;
   
}

//sort active list
function activeFunction(evt){
    const fltrbtn=document.getElementsByClassName('fltrbtn');
    const cforadd=document.getElementsByClassName(lm_dm);
 
    for(let i=0;i<fltrbtn.length;i++){
        fltrbtn[i].className=fltrbtn[i].className.replace(' Active',"");
    }
    evt.currentTarget.className +=' Active';
  
   
        for(let i=0;i<cforadd.length;i++){
            var y= cforadd[i].firstElementChild;
            var z = y.firstElementChild.className

            cforadd[i].style.display='flex';

            if (evt.currentTarget.innerHTML=="All"){
                cforadd[i].style.display='flex';
            }   
            
            if (evt.currentTarget.innerHTML=="Active"){

                if (z=='complete completechck'){
                cforadd[i].style.display='none';
                }
            } 
            if (evt.currentTarget.innerHTML=="Completed"){

                if (z=='complete'){
                cforadd[i].style.display='none';
                }
            }   
          }
          
}
//-----------

//default selected button All list
document.getElementById('defopen').click();
//-------

//clear all completed list
const clearbtn=document.getElementById('clearbtn');

clearbtn.onclick=function(){
    const completechck=document.querySelectorAll(".completechck");
    
    for(var d=0;d<completechck.length;d++){
    
        var z=completechck[d].parentNode;
        var y = z.parentNode
        y.remove();       
    }
    itemnum.innerHTML = x.length;
}
//--------------

//togle ligthmode or darkmode settings
const light= document.getElementById('light');

light.onclick=function(){
    
    const cforadd=document.querySelectorAll(".classfornewaddlist");

    const foradd=document.querySelectorAll(".classfornewaddlist-dm");
   
    
    if (lm_dm=="classfornewaddlist"){
       lm_dm='classfornewaddlist-dm';
       
        for(var i=0;i<cforadd.length;i++){
            cforadd[i].className= cforadd[i].className.replace('classfornewaddlist',"classfornewaddlist-dm");
        }
   
    }
    else if (lm_dm=="classfornewaddlist-dm"){
        lm_dm='classfornewaddlist';
    
        for(var d=0;d<foradd.length;d++){
            foradd[d].className= foradd[d].className.replace('classfornewaddlist-dm',"classfornewaddlist");
        }
 
    }
    const navs =document.getElementsByClassName('navs')
    const clearbtn=document.getElementById('clearbtn');
    const navbtn =document.getElementsByClassName('navbtn')
    const addlist_darkmode=document.getElementsByClassName('addlist')
    const list_darkmode = document.getElementsByClassName("listadded");
    
    var bdy_bg=document.body;
    bdy_bg.classList.toggle('body-darkmode');

    if(light.src.match('images/icon-sun.svg')){
        light.src="images/icon-moon.svg";
    }else{
        light.src="images/icon-sun.svg";
    }
    navs[0].classList.toggle('navs-dm');
    clearbtn.classList.toggle('clearbtn-dm');
    navbtn[0].classList.toggle('navbtn-darkmode');
    addlist_darkmode[0].classList.toggle('addlist-darkmode');
    list_darkmode[0].classList.toggle('addedlist-darkmode');
    
}
//--------------------
