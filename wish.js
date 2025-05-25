function lockLandscape() {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen().then(() => {
      if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape')
          .then(() => {
            console.log("Orientation locked to landscape.");
          })
          .catch((err) => {
            console.error("Failed to lock orientation:", err);
          });
      }
    }).catch(err => {
      console.error("Failed to enter fullscreen:", err);
    });
  } else {
    console.warn("Fullscreen API not supported.");
  }
}


//Document Constants

const wish1 = document.getElementById("wish1");
const wish10 = document.getElementById("wish10");
const banner = document.getElementById("banner");
const w1 = document.getElementById("w1");
const w1four = document.getElementById("w1four");
const w1five = document.getElementById("w1five");
const w1four10 = document.getElementById("w1four10");
const w1five10 = document.getElementById("w1five10");
const pityCounter = document.getElementById("pityCounter");
const wishResult = document.getElementById("wishResult");

//Variables

const _4pity = 10;
const _5pity = 10;
let _4tries = 0;
let _5tries = 0;
let got5star = false;
let got4star = false;
let lost50 = false;
let _4star;
let _5star;
let li = document.createElement("li");
let results = [];

//Functions and Ran selector

wish1.addEventListener("click", runWish1);
wish10.addEventListener("click", runWish10);

//Charecters And Weapon

let Gold = "Furina";

let A = "Charlette";
let B = "Mika";
let C = "Changyoun";


let V = "Mappa Mare";
let W = "Favonius Sword";
let X = "Sacrificial GreatSword";
let Y = "Favonius Codex";
let Z = "The Flute";

let standard5star = ['Dulic', 'Jean', 'Mona', 'qiqi', 'Dehya', 'Mizuki', 'Keqing'];

let wea5standard = ['Aqua Favonia', 'Skyward Atlas', 'Lost Prayers of Sacred Wind', 'Skyward GreatSword'];

let char4star = [A,B,C];
let wea4star = [V,W,X,Y,Z];

let wea3star = ['Magic Guide', 'Thrilling Tales of Dragon', 'Cool Steel', 'Heibringer of Dawn', 'Emerald Orb', 'Debate Club', 'Black Tassel', 'Criscent Pike'];


//Function Action

function runWish1() {
    wishResult.innerHTML = "";
    results = [];
    got5star = false;
    got4star = false;
    _5tries++;
    _4tries++;
    
    _5star = (Math.random()*100)+1;
    _4star = Math.floor(Math.random()*100)+1;
    
    
    if ((_5tries < (_5pity - 19) && _5star <= 1.6) ||
            ((_5pity - 19) <= _5tries && _5tries < (_5pity - 6) && _5star <= 3.5) ||
            ((_5pity - 6) <= _5tries && _5tries < (_5pity - 1) && _5star <= 6.5) ||
            (_5tries >= (_5pity - 1))) {
    
        if (lost50 === true) {
            results.push({content: Gold, color: 'gold'});
            lost50 = false;
            
        }
        else if (lost50 === false) {
            let fifty50 = Math.floor(Math.random()*100)+1;
            if (fifty50 <= 50) {
                results.push({content: Gold, color: 'gold'});
            }
            else {
                lost50 = true;
                let roll = Math.floor(Math.random()*100)+1;
                if (roll <= 55) {
                    let decide = Math.floor(Math.random()*(standard5star.length));
                    results.push({content: standard5star[decide] , color: 'gold'});
                }
                else {
                    let decide = Math.floor(Math.random()*(wea5standard.length));
                    results.push({content: wea5standard[decide] , color: 'gold'});
                }
            }
        }
        _5tries = 0;
        _4tries++;
        got5star = true;
    }
    
    else if (_4tries <= 9 && _4star <=10 || _4tries >= _4pity) {
        let roll = Math.floor(Math.random()*100)+1;
        if (roll <= 55) {
            let decide = Math.floor(Math.random()*(char4star.length));
             results.push({content: char4star[decide] , color: 'purple'});
        }
        else {
            let decide = Math.floor(Math.random()*(wea4star.length));
            results.push({content: wea4star[decide] , color: 'purple'});
        }
        _4tries = 0;
        _5tries++;
        got4star = true;
    }
    
    else {
        let decide = Math.floor(Math.random()*(wea3star.length));
        results.push({content: wea3star[decide] , color: 'black'});
        _4tries++;
        _5tries++;
    }
    playAnimation1();
}

function playAnimation1() {
    banner.style.display = 'none';
    if (got5star === true) {
        w1five.style.display = 'block';
        w1five.play();
        w1five.addEventListener("ended", function(){
            banner.style.display = 'block';
            w1five.style.display = 'none';
            displayResult();
        })
    }
    else if (got4star === true) {
        w1four.style.display = 'block';
        w1four.play();
        w1four.addEventListener("ended", function(){
            banner.style.display = 'block';
            w1four.style.display = 'none';
            displayResult();
            })
    }
    else {
        w1.style.display = 'block';
        w1.play();
        w1.addEventListener("ended", function(){
            banner.style.display = 'block';
            w1.style.display = 'none';
            displayResult();
        })
    }
    
    function displayResult() {
        results.forEach(result => {
                li.textContent = result.content;
                li.style.color = result.color;
                wishResult.appendChild(li);
            })
    }
}

function runWish10() {

    wishResult.innerHTML = "";
    results = [];
    got5star = false;
    got4star = false;
    _5tries++;
    _4tries++;

    for(let i=0; i<10; i++){
        
        _5star = (Math.random()*100)+1;
        _4star = Math.floor(Math.random()*100)+1;
        
        if ((_5tries < (_5pity - 19) && _5star <= 1.6) ||
            ((_5pity - 19) <= _5tries && _5tries < (_5pity - 6) && _5star <= 3.5) ||
            ((_5pity - 6) <= _5tries && _5tries < (_5pity - 1) && _5star <= 6.5) ||
            (_5tries >= (_5pity - 1))) {
    
        if (lost50 === true) {
            results.push({content: Gold, color: 'gold'});
            lost50 = false;
            
        }
        else if (lost50 === false) {
            let fifty50 = Math.floor(Math.random()*100)+1;
            if (fifty50 <= 50) {
                results.push({content: Gold, color: 'gold'});
            }
            else {
                lost50 = true;
                let roll = Math.floor(Math.random()*100)+1;
                if (roll <= 55) {
                    let decide = Math.floor(Math.random()*(standard5star.length));
                    results.push({content: standard5star[decide] , color: 'gold'});
                }
                else {
                    let decide = Math.floor(Math.random()*(wea5standard.length));
                    results.push({content: wea5standard[decide] , color: 'gold'});
                }
            }
        }
        _5tries = 0;
        _4tries++;
        got5star = true;
    }
    
    else if (_4tries <= 9 && _4star <=10 || _4tries >= _4pity) {
        let roll = Math.floor(Math.random()*100)+1;
        if (roll <= 55) {
            let decide = Math.floor(Math.random()*(char4star.length));
             results.push({content: char4star[decide] , color: 'purple'});
        }
        else {
            let decide = Math.floor(Math.random()*(wea4star.length));
            results.push({content: wea4star[decide] , color: 'purple'});
        }
        _4tries = 0;
        _5tries++;
        got4star = true;
    }
    
    else {
        let decide = Math.floor(Math.random()*(wea3star.length));
        results.push({content: wea3star[decide] , color: 'black'});
        _4tries++;
        _5tries++;
    }
        
    }
    playAnimation10();
    
}

function playAnimation10() {
    
    banner.style.display = 'none';
    if (got5star === true) {
        w1five10.style.display = 'block';
        w1five10.play();
        w1five10.addEventListener("ended", function(){
            banner.style.display = 'block';
            w1five10.style.display = 'none';
            displayResult();
        }, { once: true })
    }
    else if (got4star === true) {
        w1four10.style.display = 'block';
        w1four10.play();
        w1four10.addEventListener("ended", function(){
            banner.style.display = 'block';
            w1four10.style.display = 'none';
            displayResult();
            }, { once: true })
    }
    else {
        w1.style.display = 'block';
        w1.play();
        w1.addEventListener("ended", function(){
            banner.style.display = 'block';
            w1.style.display = 'none';
            displayResult();
        }, { once: true })
    }
    
    function displayResult() {
        results.forEach(result => {
                li = document.createElement('li');
                li.textContent = result.content;
                li.style.color = result.color;
                wishResult.appendChild(li);
            })
    }
    
}
