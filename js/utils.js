function rectangularCollision({rectange1, rectange2}){
    return (
        rectange1.attackBox.position.x + rectange1.attackBox.width >= rectange2.position.x &&
        rectange1.attackBox.position.x <= rectange2.position.x + rectange2.width &&
        rectange1.attackBox.position.y + rectange1.attackBox.height >= rectange2.position.y &&
        rectange1.attackBox.position.y <= rectange2.position.y + rectange2.height
    )
}

function determineWinner({player, enemy, timerId}){
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if(player.health == enemy.health){
        document.querySelector('#displayText').innerHTML = 'Tie'
    } else if(player.health > enemy.health){
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
    } else if(player.health < enemy.health){
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
    }
}

let timer = 60
let timerId
function decreaseTimer(){
    if(timer>0){
        timerId = setTimeout(decreaseTimer, 1000)
        timer -= 1
        document.querySelector('#timer').innerHTML = timer
    }

    if(timer === 0){
        determineWinner({player, enemy})
    }
}