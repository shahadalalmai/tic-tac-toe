
$(function(){
let counter = 1 // to give X the odd turn and O the even turn
// let tmp = []
let p1SelectedDiv // to store the index of the child Player 1 selected
let p2SelectedDiv // to store the index of the child Player 2 selected
let steps = 0 // count how many steps of the game so far
let player1Choices = [] // array of player 1 choices
let player2Choices = [] // array of player 2 choices
let winner
let play = true
$('button').hide()
// let won = true
//let turn = $('#turn').text()

// console.log("Player 1 turn")

function divClick(event){
    //console.log(event)
    
    const content = event.target // getting the details of what div I clicked on
    
    if (content.innerHTML == "" && steps < 9 && play == true){ // if the div is empty, continue the game, stop the game when the steps are = 9
   
            if(counter % 2 !== 0){ // this is the first click of an odd counter, the value is X
                
                content.innerHTML = '<h1>X</h1>'
                steps++
                counter++
                $('#turn').text("2nd Player Turn")
            }
            
            else {
            
                content.innerHTML = '<h1>O</h1>' 
                steps++
                counter++
                $('#turn').text("1st Player Turn")    
            }
                if (steps >= 5 && steps <= 9){ // one of the players could be winning now
                    //checkWinning() // I would call a function, I might be sending parameters
                    if ($(".square").eq(0).text() !== "" && $(".square").eq(0).text() == $(".square").eq(1).text() && $(".square").eq(0).text() == $(".square").eq(2).text()){ // first winning possibility
                        winner(0,1,2,$(".square").eq(1).text())
                        winner = $(".square").eq(1).text()
                        play = false
                        console.log("We have a winner matching the first row" + winner ) // Winning poissibilities are: [0,1,2]
                    } 
                    else if ($(".square").eq(3).text() !== "" && $(".square").eq(3).text() == $(".square").eq(4).text() && $(".square").eq(3).text() == $(".square").eq(5).text()) {
                        //winner(3,4,5)
                        winner(3,4,5,$(".square").eq(3).text())
                        winner = $(".square").eq(3).text()
                        play = false
                        console.log("We have a winner matching the second row" + winner) //[3,4,5]
                    }
                    else if($(".square").eq(6).text() !== "" && $(".square").eq(6).text() == $(".square").eq(7).text() && $(".square").eq(6).text() == $(".square").eq(8).text()){
                        winner(6,7,8,$(".square").eq(6).text())
                        winner = $(".square").eq(6).text()
                        play = false
                        console.log("We have a winner matching the third row" + winner) //[6,7,8]
                    }
                    else if ($(".square").eq(0).text() !== "" && $(".square").eq(0).text() == $(".square").eq(3).text() && $(".square").eq(0).text() == $(".square").eq(6).text()){
                        winner(0,3,6,$(".square").eq(0).text())
                        winner = $(".square").eq(0).text()
                        play = false
                        console.log("We have a winner matching the first column" + winner)//[0,3,6]
                    }
                    else if ($(".square").eq(1).text() !== "" && $(".square").eq(1).text() == $(".square").eq(4).text() && $(".square").eq(1).text() == $(".square").eq(7).text()){
                        winner(1,4,7,$(".square").eq(1).text())
                        winner = $(".square").eq(1).text()
                        play = false
                        console.log("We have a winner matching the second column" + winner)//[1,4,7]
                    }
                    else if ($(".square").eq(2).text() !== "" && $(".square").eq(2).text() == $(".square").eq(5).text() && $(".square").eq(2).text() == $(".square").eq(8).text()){
                        winner(2,5,8,$(".square").eq(2).text())
                        winner = $(".square").eq(2).text()
                        play = false
                        console.log("We have a winner matching the third column" + winner)//[2,5,8]
                    }
                    else if($(".square").eq(0).text() !== "" && $(".square").eq(0).text() == $(".square").eq(4).text() && $(".square").eq(0).text() == $(".square").eq(8).text()){
                        winner(0,4,8,$(".square").eq(0).text())
                        winner = $(".square").eq(0).text()
                        play = false
                        console.log("We have a winner matching the left diagonal" + winner)//[0,4,8]
                    }
                    else if($(".square").eq(2).text() !== "" && $(".square").eq(2).text() == $(".square").eq(4).text() && $(".square").eq(2).text() == $(".square").eq(6).text()){
                        winner(2,4,6,$(".square").eq(2).text())
                        winner = $(".square").eq(2).text()
                        play = false
                        console.log("We have a winner matching the right diagonal" + winner)//[2,4,6]
                    }
                    
                    else if (steps == 9) {
                        endGame()
                        play = false
                        console.log("tie")
                        console.log("end of game")
                    }
                    
                }
                // else {
                //     console.log("Tie") //end the game , the tie is one of the cases in checkWinning
                // }

    } // end if content if empty
            else {
                $(event).off('click')   // off listening, cannot change the value of any div
                
            }
    //console.log($(".square").eq(0).text()) // I get the content of the child#0 of the div with class square
    

    function winner(num1,num2,num3,text){
            
            //$('#turn').slideUp(1000) // I might call another func for reseting? or play again?
            // might be adding sound
            $(".square").eq(num1).css('color','#F85056') // trying to change the color of the winning items
            $(".square").eq(num2).css('color','#F85056')
            $(".square").eq(num3).css('color','#F85056')
        
        $('#again').show(800)
    
        if (text == 'X'){
            $('#turn').html("1st Player WON! &#9786")
            $('#turn').css('color','#F85056')
            //console.log("1st Player WON!")
        }
        else {
            $('#turn').html("2nd Player WON! &#9786")
            $('#turn').css('color','#F85056')
            //console.log("2nd Player WON!")
        }
    
    }

    function endGame(){
        $('#turn').html("Tie, none of you have won &#9785")
        $('#turn').css('color','#F85056')
        $('#again').show(800)
    }
    
    // console.log(tmp)
    // $('.square').off('click', divClick)  where to find it?
    
        
} // end divClick func


$('.square').on('click', divClick) // I'm listening to a click event on any of the divs with the class square
$('#again').on('click', divClick) // Double check this one


})

