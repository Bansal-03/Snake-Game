let canvas= document.querySelector('canvas');
let ctx=canvas.getContext('2d'); // 2d mein draw kr rhe hum

let cellsize=50; // means width
let snakecells=[[0,0],[50,0]]; //x,y co-ordinates of rectangle in 2d arr

let boardWidth=1000;
let boardHeight=600;

setInterval(function(){
    update(); //snake cells ko update krte rehna
    draw();   //snakecells ke arr ko canvas pe draw krte rehna
},100); // hrr 100ms pe yeh function run hoga, iske inside do func. aur hain

document.addEventListener('keydown',function(event){  // keydown, press krne pe chlta
      console.log(event);
})
function update(){
    let headX=snakecells[snakecells.length-1][0];  //x co ordinate from last element of 2d arr
    let headY=snakecells[snakecells.length-1][1];  // y co ordinate 

    let newHeadX=headX+cellsize; // nya cell add krna
    let newHeadY=headY;  // we are moving horizontally, so no change in y

    snakecells.push([newHeadX,newHeadY]);
    snakecells.shift(); // ek cell ko aage shift kr rhe, ek ko remove krke 
}
function draw(){
    ctx.clearRect(0,0,boardWidth,boardHeight); // pehle ke block ko delete krdenge, hrr baar nya draw hoga
    for(let cell of snakecells){
       ctx.fillStyle='plum';
       ctx.fillRect(cell[0],cell[1],cellsize,cellsize); // creating a snake using rectangle
    }
}
