function triangleRombusPentagon(base,height)
{
    let val=0.5*base*height;
    val=val.toFixed(2);
    return val;
}

function rectangleParelleogram(width,length)
{
    let val=width*length;
    val=val.toFixed(2);
    return val;
}

function ellipse(a,b)
{
    let val= Math.PI*a*b;
    val=val.toFixed(2);
    return val;
}

function createList(name,val)
{
    const list=document.createElement('li');
    
    let j=name+" "+val+" ";
    list.innerHTML=j+'cm<sup>2</sup>'+'<button type="submit" class="btn btn-primary w-75">Convert to m<sup>2</sup></button>';
    const element=document.getElementById('Output-list');
    element.appendChild(list);
}
function getInputBase()
{
    let b=document.getElementById('Triangle-b');
    let base=b.value;
    console.log(base);
    base=parseFloat(base);
    if(isNaN(base)) {
        alert("please insert positive integer");
        return 0;

    }
     else {
        
        if(base<=0) {
            alert("please insert positive integer");
            return 0;
        }
        else return base;
     }
}

function getInputHeight()
{
    let h=document.getElementById('Triangle-h');
    let height=h.value;
    height=parseFloat(height);
    if(isNaN(height)) {
        alert("please insert positive integer");
        return 0;

    }
     else {
        
        if(height<=0) {
            alert("please insert positive integer");
            return 0;
        }
        else return height;
     }
}
function getInputWidth()
{
    let w=document.getElementById('width');
    let width=w.value;
    width=parseFloat(width);
    if(isNaN(width)) {
        alert("please insert positive integer");
        return 0;

    }
     else {
        
        if(width<=0) {
            alert("please insert positive integer");
            return 0;
        }
        else return width;
     }
}
function getInputLength()
{
    let l=document.getElementById('length');
    let length=l.value;
    length=parseFloat(length);
    if(isNaN(length)) {
        alert("please insert positive integer");
        return 0;

    }
     else {
        
        if(length<=0) {
            alert("please insert positive integer");
            return 0;
        }
        else return length;
     }
}

function changeColor(id)
{
    id.addEventListener('mouseover', function(){
        let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    

    let color= `#${randColor.toUpperCase()}`;
    id.style.backgroundColor=color;

    });

}

