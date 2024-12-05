const validNums = [2, 4, 8, 16]
let gameinv     = []
let gametiles   = [] 
function getRandomNum(){
    return validNums[Math.floor(Math.random() * validNums.length)]
}

document.addEventListener('DOMContentLoaded', () => {
    for (let n=1;n<10;n++){
        gametiles.push(document.getElementById(`${n}`));
    }
    const gi1 = document.getElementById('10'); gi1.innerHTML = "<p>2</p>";
    const gi2 = document.getElementById('11');
    const gi3 = document.getElementById('12');
    gameinv   = [gi1, gi2, gi3];

    for (let n = 0; n < 9; n++){
        const obj     = gametiles[n];
        obj.innerHTML = "<p>2</p>"
    }
    for (let n = 0; n < 2; n++){
        gameinv[n+1].innerHTML = `<p>${getRandomNum()}</p>`;
    }
});

function setRandomInv(){
    for (let n = 0; n < 3; n++){
        gameinv[n].innerHTML = `<p>${getRandomNum()}</p>`;
    }
}

let selectedNum = 0;
let lastSelected;

function showSelectedNum(num){
    const obj = document.querySelector('.best');
    obj.innerHTML = `Current: ${num}`
}

function renderSelected(type, num){ //causa erros, para concertar
    if (type == "RnA"){
        for (let n=1; n < 10 ;n++){
            if (num==gametiles[n].id){
                gametiles[n].classList.remove("unselected");
                gametiles[n].classList.add("selected");
                return
            }
        }
    } if (type == "R"){
        for (let n=0;n<13;n++){
            try{
                gametiles[n].classList.remove("selected");
                gametiles[n].classList.add("unselected");
                gameinv[n].classList.remove("selected");
                gameinv[n].classList.add("unselected");
            } catch (err){}
        }
    } if (type == "GIRnA"){
        for (let n=0;n<3;n++){
            if (num==gameinv[n].id){
                gameinv[n].classList.remove("unselected");
                gameinv[n].classList.add("selected");
                return
            }
        }
    }
    
}

function addNum(num){
    for (let n=0; n<gametiles.length; n++){
        if (num == gametiles[n].id){
            if (parseInt(gametiles[n].textContent) === selectedNum){
                if (lastSelected.id != gametiles[n].id){ //adiciona
                    const addedNum = parseInt(gametiles[n].textContent) + selectedNum;
                    gametiles[n].innerHTML = `<p>${addedNum}</p>`;
                    setRandomInv();
                    selectedNum = 0;
                    lastSelected = false;
                    renderSelected("R");
                    
                    return
                }
            } if (selectedNum === 0 || lastSelected.id != gametiles[n].id){ //seleciona
                lastSelected = gametiles[n];
                selectedNum = parseInt(gametiles[n].textContent);
                showSelectedNum(selectedNum);
                renderSelected("RnA", gametiles[n].id);

                return
            }
            renderSelected("R");
            return
        }
        renderSelected("R");
    }
}

function selectNum(num){
    for (let n=0; n<3; n++){
        if (num == gameinv[n].id){ //seleciona
            lastSelected = false
            selectedNum = parseInt(gameinv[n].textContent);
            showSelectedNum(selectedNum);
            renderSelected("R");
            renderSelected("GIRnA", gameinv[n].id);

            return
        }
    }
}