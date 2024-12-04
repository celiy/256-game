const validNums = [2, 4, 8, 16]
let gameinv     = []
let gametiles   = [] 
function getRandomNum(){
    return validNums[Math.floor(Math.random() * validNums.length)]
}


document.addEventListener('DOMContentLoaded', () => {
    for (let n=1;n<10;n++){
        gametiles.push(document.querySelector(`.game-tile-${n}`));
    }
    const gi1 = document.querySelector('.game-inv-tile-1'); gi1.innerHTML = "<p>2</p>";
    const gi2 = document.querySelector('.game-inv-tile-2');
    const gi3 = document.querySelector('.game-inv-tile-3');
    gameinv   = [gi1, gi2, gi3];

    for (let n = 0; n < 9; n++){
        const obj     = gametiles[n];
        obj.innerHTML = "<p>2</p>"
    }
    for (let n = 0; n < 2; n++){
        const obj = gameinv[n+1];
        const random  = getRandomNum();
        obj.innerHTML = `<p>${random}</p>`
    }
});

function setRandomInv(){
    for (let n = 0; n < 3; n++){
        const obj = gameinv[n];
        const random  = getRandomNum();
        obj.innerHTML = `<p>${random}</p>`
    }
}

let selectedNum = 0;
let lastSelected;

function showSelectedNum(num){
    const obj = document.querySelector('.best');
    obj.innerHTML = `Current: ${num}`
}

function addNum(num){
    for (let n=0; n<gametiles.length; n++){
        if (num == gametiles[n].id){
            if (parseInt(gametiles[n].textContent) === selectedNum){
                if (lastSelected.id != gametiles[n].id){
                    const addedNum = parseInt(gametiles[n].textContent) + selectedNum;
                    gametiles[n].innerHTML = `<p>${addedNum}</p>`;
                    setRandomInv();
                    selectedNum = 0;
                    lastSelected = false;
                    
                    return
                }
            } if (selectedNum === 0 || lastSelected.id != gametiles[n].id){
                lastSelected = gametiles[n];
                selectedNum = parseInt(gametiles[n].textContent);
                showSelectedNum(selectedNum);
            }
            return
        }
    }
}

function selectNum(num){
    for (let n=0; n<gameinv.length; n++){
        if (num == gameinv[n].id){
            lastSelected = false
            selectedNum = parseInt(gameinv[n].textContent);
            showSelectedNum(selectedNum);
            return
        }
    }
}