a = 0

function play(x){
    if(a===0){
        sorted = Math.floor(Math.random() * 3) + 1
        if(sorted===1){
            document.getElementById('resp').src = './img/rock.jpg'
        }if(sorted===2){
            document.getElementById('resp').src = './img/Folha de papel.png'
        }if(sorted===3){
            document.getElementById('resp').src = './img/Tesoura.jpg'
        }
        document.getElementById('pc').style.display = 'block'
        document.getElementById('answer').style.display = 'block'
        document.getElementById('result').style.display = 'block'
        if(x===sorted){
            document.getElementById('result').innerHTML = 'DRAW'
            document.getElementById('result').style.color = 'gray'
        }
        if(x===1 & sorted===2){
            document.getElementById('result').innerHTML = 'LOSE'
            document.getElementById('result').style.color = 'red'
        }
        if(x===2 & sorted===3){
            document.getElementById('result').innerHTML = 'LOSE'
            document.getElementById('result').style.color = 'red'
        }
        if(x===3 & sorted===1){
            document.getElementById('result').innerHTML = 'LOSE'
            document.getElementById('result').style.color = 'red'
        }
        if(x===1 & sorted===3){
            document.getElementById('result').innerHTML = 'WIN'
            document.getElementById('result').style.color = 'green'
        }
        if(x===2 & sorted===1){
            document.getElementById('result').innerHTML = 'WIN'
            document.getElementById('result').style.color = 'green'
        }
        if(x===3 & sorted===2){
            document.getElementById('result').innerHTML = 'WIN'
            document.getElementById('result').style.color = 'green'
        }
        a+=1
    }
}