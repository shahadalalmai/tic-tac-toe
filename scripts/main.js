


$(function(){
let counter = 1
let tmp = []

function divClick(event){
    //console.log(event)
    
    const content = event.target // getting the details of what div I clicked on

// for (let i = 0 ; i < 9 ; i++){}

    if(counter % 2 !== 0){ // this is the first click of an odd counter, the value is X
    //    console.log("Player 1 turn")
        content.innerHTML = '<h1 style="color: #ffffff ;"> X </h1>'
        tmp.push("X")
        console.log(counter)
        
    }
    
    else {
        // console.log("Player 2 turn")
        content.innerHTML = '<h1 style="color: #6D7B83 ;"> O </h1>'
        tmp.push("O")
        console.log(counter)
        
    }
    
    counter++
    console.log(tmp)
    // $('.square').off('click', divClick)  where to find it?
    
        
}

$('.square').on('click', divClick)


})