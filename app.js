let boxes=document.querySelectorAll(".box");            // to acess asll the boxes
let resetbtn=document.querySelector("#reset-btn") ;       // to acess the reset button
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO  = true;     //playerX, playerO

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const resetGame  = () => {
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");   // again hide the msg container for a new game is reseted
}


boxes.forEach((box) => {    // using for each we cann acess each inmdivial boxes and we can add event listners for each boxes
            box.addEventListener("click", () => { // Corrected spelling here
                     console.log("box was clicked");
                     if(turnO===true){     // playerO
                        box.innerText="O";
                        turnO=false;
                     } else{          // playerX
                        box.innerText="X";
                        turnO=true
                     } // to add text in the box when we click on it

                     box.disabled=true;   // to disable the box once after clicking it, so next it should not change

                      checkWinner();  // to check the winner

            })  ;   
});

const disableboxes =() => {
      for(let box of boxes){
        box.disabled=true
      }
};

const enableboxes =() => {    // after getting the winner we have to enable the boxes for new game, so we can click on the boxes and play the game
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
     
    }
}

const showWinner = (winner) => {          // to show the winner and hide the game container
    msg.innerText=`Congratulations, Winner is ${winner}`;  // to show the winner in the msg container
    msgContainer.classList.remove("hide");  // to show the msg container  which was hideen
    disableboxes();  // to disable the boxes once after getting the winner
    
} 

const checkWinner = () => {              // to print the winning pattern using arrow functions 
    for (let pattern of winPatterns){
        // to print the vALUES of the boxes using their indices in the boxes  , innerText is use get tht value 

       let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;

        // winning condition is that all the three values should be same and should not be empty
       if (pos1val!=="" && pos2val!=="" && pos3val!=="") {
          if(pos1val===pos2val && pos2val===pos3val)  {
            console.log("winner",pos1val);

            showWinner(pos1val);
          }
       }

    }
};



// to trigger thye reset game function when we click on the reset button

resetbtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

