//New note creation button
document.body.onload=startUp;
var lastEle={
    element:document.body,
    children: 0
};
var mousePos={
    x:0,
    y:0
};
var held=false;
var currentHeld= document;
//document.onmousemove = MouseTracking;
//document.onmousemove= MouseTracking;

var globalId=0;
function startUp(){
creatMainButton();


//newNoteButton.id="main-button";
console.log("done");
}

function creatMainButton(){
     newNoteButton= document.createElement("button");
    newNoteButton.innerText="+";
    newNoteButton.id="main-button";
    document.getElementById("main").appendChild(newNoteButton);
    console.log(document.getElementById("main"));
    lastEle.element=newNoteButton;
    lastEle.children=0;
    newNoteButton.onclick= function(){
        globalId++;
        createNote(globalId.toString());
        console.log(document)
    }
}

function createNote(name){
    //document.getElementById("noteDiv").ondragover=allow;
    
    
    let thisNote=document.createElement("div");
    thisNote.id=globalId;
    thisNote.className="note";
    


    document.getElementById("noteDiv").appendChild(thisNote);
    let header=document.createElement("ul");
    let dragButton=document.createElement("li");
    dragButton.id="dragger";
    let headerText= document.createElement("li");
    dragButton.innerText="...";
    header.className="noteHeader";
    headerText.innerText=`New note ${thisNote.id}`;
    header.appendChild(headerText);
    header.appendChild(dragButton);
    thisNote.appendChild(header);
    let body=document.createElement("div");
    body.className="noteBody";
    thisNote.appendChild(body);
    /////in Box/////
    let inBox= document.createElement("form");
    let input=document.createElement("input");
    input.className="input";
    inBox.appendChild(input);
    body.appendChild(inBox);
    thisNote.style.top;
    ///Draging functionality///

    thisNote.ondragstart = function (){
        return false;
    }
    thisNote.onmousedown= startDragging;
    thisNote.onmouseup=stopDragging;
    
    ////////////

}
function startDragging(event){
    console.log(`pressed ${event.target.id}`);
    
    note=event.target;
    moveNote(event);
    document.addEventListener('mousemove', moveNote);
}

function moveNote(event){
    note=document.getElementById(event.target.id);
    if(!(note==null)){
    note.style.top=event.clientY-(note.offsetHeight/1.70)+"px";
    note.style.left=event.clientX-(note.offsetWidth/2)+"px";
    console.log(`moving to ${event.pageX} but actual is ${note.style.left} because
    note is ${note.outerHTML}`);
    
    }
}
function stopDragging(event){
 document.removeEventListener('mousemove', moveNote);
 note=document.getElementById(event.target.id);
 note.onmouseup=null;
}


function MouseTracking(event){
        try{
        mousePos.x=event.pageX;
        mousePos.y=event.pageY;

        currentHeld.style.left=mousePos.x;
        currentHeld.style.right=mousePos.y;
        }catch(e){
            console.log(e);
            
        }
        

}

