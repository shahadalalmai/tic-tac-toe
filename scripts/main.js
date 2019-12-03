
$(function(){ // when the document is ready, plz do the following 3la 6ol

let counter = 1// to give X the odd turn and O the even turn
let steps = 0// count how many steps of the game so far
let play  = true // to stop the game is the cases of win, lose or tie (nine steps without winning)
$('button').hide() // hide the (Play Again?) button 


function playAgain(){ // reseting needed variables
    counter = 1
    steps = 0
    play  = true
    $('button').hide()
    $('#turn').text("1st Player Turn")
    $('#turn').css('color','#2CB6B7')
    $('.square').text("")
    $('.square').css('color','white')  
}



function divClick(event){ // sent the div I clicked on as a parameter which excuted the event

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

                   // $(".square").eq(0).text() meaning I get the content of the child#0 of the div with class square
                    if ($(".square").eq(0).text() !== "" && $(".square").eq(0).text() == $(".square").eq(1).text() && $(".square").eq(0).text() == $(".square").eq(2).text()){ // first winning possibility
                        winner(0,1,2,$(".square").eq(1).text())// Winning poissibilities are: [0,1,2]
                        play = false
                    } 
                    else if ($(".square").eq(3).text() !== "" && $(".square").eq(3).text() == $(".square").eq(4).text() && $(".square").eq(3).text() == $(".square").eq(5).text()) {
                        winner(3,4,5,$(".square").eq(3).text())//[3,4,5]
                        play = false
                    }
                    else if($(".square").eq(6).text() !== "" && $(".square").eq(6).text() == $(".square").eq(7).text() && $(".square").eq(6).text() == $(".square").eq(8).text()){
                        winner(6,7,8,$(".square").eq(6).text())//[6,7,8]
                        play = false
                    }
                    else if ($(".square").eq(0).text() !== "" && $(".square").eq(0).text() == $(".square").eq(3).text() && $(".square").eq(0).text() == $(".square").eq(6).text()){
                        winner(0,3,6,$(".square").eq(0).text())//[0,3,6]
                        play = false
                    }
                    else if ($(".square").eq(1).text() !== "" && $(".square").eq(1).text() == $(".square").eq(4).text() && $(".square").eq(1).text() == $(".square").eq(7).text()){
                        winner(1,4,7,$(".square").eq(1).text())//[1,4,7]
                        play = false
                    }
                    else if ($(".square").eq(2).text() !== "" && $(".square").eq(2).text() == $(".square").eq(5).text() && $(".square").eq(2).text() == $(".square").eq(8).text()){
                        winner(2,5,8,$(".square").eq(2).text())//[2,5,8]
                        play = false
                    }
                    else if($(".square").eq(0).text() !== "" && $(".square").eq(0).text() == $(".square").eq(4).text() && $(".square").eq(0).text() == $(".square").eq(8).text()){
                        winner(0,4,8,$(".square").eq(0).text())//[0,4,8]
                        play = false
                    }
                    else if($(".square").eq(2).text() !== "" && $(".square").eq(2).text() == $(".square").eq(4).text() && $(".square").eq(2).text() == $(".square").eq(6).text()){
                        winner(2,4,6,$(".square").eq(2).text())//[2,4,6]
                        play = false 
                    }
                    
                    else if (steps == 9) {
                        endGame()
                        play = false
                    }
                    
                }

    } // end if content if empty
            else {
                $(event).off('click')   // off listening, cannot change the value of any div    
            }    

    function winner(num1,num2,num3,text){
        
            $(".square").eq(num1).css('color','#F85056') // trying to change the color of the winning items
            $(".square").eq(num2).css('color','#F85056')
            $(".square").eq(num3).css('color','#F85056')
        
        $('#again').show(800) // show play again button
    
        if (text == 'X'){
            $('#turn').html("1st Player WON! &#9786") // change the heading with id #turn
            $('#turn').css('color','#F85056')
        }
        else {
            $('#turn').html("2nd Player WON! &#9786")
            $('#turn').css('color','#F85056')
        }
    
    }

    function endGame(){
        $('#turn').html("Tie, none of you have won &#9785")
        $('#turn').css('color','#F85056')
        $('#again').show(800)
    }

        
} // end divClick func


$('.square').on('click', divClick) // I'm listening to a click event on any of the divs with the class square

$('#again').on('click', playAgain) 


})

