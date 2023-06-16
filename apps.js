let mainBoard = document.querySelector('.game');
let btn = document.querySelector('#btnz');
let topText = document.querySelector('#topText');
let boxes = document.querySelectorAll('.squares');
let box0 = document.querySelector('#b0');
let box1 = document.querySelector('#b1');
let box2 = document.querySelector('#b2');
let box3 = document.querySelector('#b3');
let box4 = document.querySelector('#b4');
let box5 = document.querySelector('#b5');
let box6 = document.querySelector('#b6');
let box7 = document.querySelector('#b7');
let box8 = document.querySelector('#b8');
let xPoints = document.querySelector('#sc1');
let tie = document.querySelector('#sc2');
let oPoints = document.querySelector('#sc3');
let gratz = document.querySelector('.gz');
let winner = document.querySelector('.sign');
let nextRound = document.querySelector('.next')
let modal = document.querySelector('.winningModal')


pOne = 0
pTwo = 0

boxesClicked = 0
xScore = 0
oScore = 0
tScore = 0
let functionTrue = true

let winningCombos = [
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6'],
];

let gameBoard = ["","","","","","","","",""];

function render(){
    btn.remove();

    topText.textContent = 'X, make your move'

    boxes.forEach((box) =>{ 

        box.addEventListener('click', addGo, {once: true})
        
    })
}
    


    function addGo (e) {
        if(functionTrue === false){
            return
        }
        if(pOne <= pTwo){
            pOne++
            boxesClicked++
            console.log(boxesClicked)
            let goDisplay = ('✖')
            //goDisplay.classList.add('luffy')
            e.target.append(goDisplay)
            topText.textContent = 'O, make your move'
            checkWinner(goDisplay)

        } else {
            pTwo++
            boxesClicked++
            console.log(boxesClicked)
            let displayGo = ('〇')
           // displayGo.classList.add('zoro')
            e.target.append(displayGo)
            topText.textContent = 'X, make your move'
            checkWinner(displayGo)
        
        }
    }



    function checkWinner(lastClicked){
        
        if (box0.innerHTML === lastClicked && box1.innerHTML === lastClicked && box2.innerHTML === lastClicked){
            foundWinner(lastClicked)
            gameDoneModal(lastClicked)
        } else if (box3.innerHTML == lastClicked && box4.innerHTML == lastClicked && box5.innerHTML == lastClicked){
            foundWinner(lastClicked)
            gameDoneModal(lastClicked)
        } else if (box6.innerHTML == lastClicked && box7.innerHTML == lastClicked && box8.innerHTML == lastClicked){
            foundWinner(lastClicked)
            gameDoneModal(lastClicked)
        } else if (box0.innerHTML == lastClicked && box3.innerHTML == lastClicked && box6.innerHTML == lastClicked){
            foundWinner(lastClicked)
            gameDoneModal(lastClicked)
        } else if (box1.innerHTML == lastClicked && box4.innerHTML == lastClicked && box7.innerHTML == lastClicked){
            foundWinner(lastClicked)
            gameDoneModal(lastClicked)
        } else if (box2.innerHTML == lastClicked && box5.innerHTML == lastClicked && box8.innerHTML == lastClicked){
            foundWinner(lastClicked)
            gameDoneModal(lastClicked)
        } else if (box0.innerHTML == lastClicked && box4.innerHTML == lastClicked && box8.innerHTML == lastClicked){
            foundWinner(lastClicked)
            gameDoneModal(lastClicked)
        } else if (box2.innerHTML == lastClicked && box4.innerHTML == lastClicked && box6.innerHTML == lastClicked){
            foundWinner(lastClicked)
            gameDoneModal(lastClicked)
        } else if (boxesClicked === 9){
            draw()
            gameDoneModal()
        }
    }


    function foundWinner(xoro){
        if(xoro === '✖'){
        console.log(xoro+ ' wins')
        xScore++
        xPoints.textContent = ('X Score' + ' ' + xScore)
        } else if (xoro === '〇'){
            console.log(xoro + ' wins')
            oScore++
            oPoints.textContent = ('X Score' + ' ' + oScore)
        }
    }

    function draw(){
            tScore++
            tie.textContent = ('Tie' + ' '+ tScore)
            console.log('tie')
            topText.textContent = ('Draw!')
        }
    

    function gameDoneModal(finish){
        functionTrue = false
        gratz.classList.remove('gz');
        winner.classList.remove('sign');
        nextRound.classList.remove('next')
        modal.classList.remove('winningModal')
        modal.classList.add('winningModalActive')
        if (finish === '✖'){
            gratz.textContent = 'Congratulations!'
            winner.textContent = '✖ takes the round'
        } else if (finish === '〇'){
            gratz.textContent = 'Congratulations!'
            winner.textContent = '〇 takes the round'
        } else {
            gratz.textContent = 'Draw'
            winner.textContent = 'Good luck next game!'
        }
    }

    function closeModal(){
        gratz.classList.add('gz');
        winner.classList.add('sign');
        nextRound.classList.add('next');
        modal.classList.add('winningModal');
        modal.classList.remove('winningModalActive');
    }

    

    function restart(){
        closeModal()
        functionTrue = true
        box0.innerHTML = ''
        box1.innerHTML = ''
        box2.innerHTML = ''
        box3.innerHTML = ''
        box4.innerHTML = ''
        box5.innerHTML = ''
        box6.innerHTML = ''
        box7.innerHTML = ''
        box8.innerHTML = ''
        render()
        pOne = 0
        pTwo = 0
        boxesClicked = 0
    }