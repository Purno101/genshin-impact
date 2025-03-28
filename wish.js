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

//Loading Screen

// Preload all videos
const videos = [
    document.getElementById('w1'),
    document.getElementById('w1four'),
    document.getElementById('w1five'),
    document.getElementById('w1four10'),
    document.getElementById('w1five10')
];

const loadingProgress = document.getElementById('loadingProgress');
const loadingScreen = document.getElementById('loadingScreen');

// Track how many videos have loaded
let loadedVideos = 0;

// Function to update the progress bar
function updateProgressBar() {
    const progress = (loadedVideos / videos.length) * 100;
    loadingProgress.value = progress;
}

// Preload videos and track loading progress
videos.forEach((video) => {
    video.addEventListener('canplaythrough', () => {
        loadedVideos++;
        updateProgressBar();
        
        // If all videos are loaded, hide the loading screen
        if (loadedVideos === videos.length) {
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500); // Hide with a small delay for smooth transition
        }
    });
    
    // Start loading the video (important for canplaythrough to trigger)
    video.load();
});


//Variables

let _4pity = 10;
let _5pity = 90;
let _4tries = 0;
let _5tries = 0;
let got5star = false;
let got4star = false;
let fifty50;
let roll;
let li = document.createElement('li');
let name;
let lost_50;
let weaOrChar;
let decide;
let win;
let results = [];

//Functions and Ran selector

wish1.addEventListener("click", runWish1);
wish10.addEventListener("click", runWish10);

let _4star = (Math.random()*100)+1;
let _5star = (Math.random()*100)+1;

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


let char5star = Gold;

let standard5star = ['Dulic', 'Jean', 'Mona', 'qiqi', 'Dehya', 'Mizuki', 'Keqing'];

let wea5standard = ['Aqua Favonia', 'Skyward Atlas', 'Lost Prayers of Sacred Wind', 'Skyward GreatSword'];

let char4star = [A,B,C];
let wea4star = [V,W,X,Y,Z];

let wea3star = ['Magic Guide', 'Thrilling Tales of Dragon', 'Cool Steel', 'Heibringer of Dawn', 'Emerald Orb', 'Debate Club', 'Black Tassel', 'Criscent Pike'];


//Function Action

function runWish1(){
    
    banner.style.display = 'none';
    
    if (
        (_5tries < (_5pity - 19) && _5star <= 1.6) ||
        ((_5pity - 19) <= _5tries && _5tries < (_5pity - 6) && _5star <= 3.5) ||
        ((_5pity - 6) <= _5tries && _5tries < (_5pity    - 1) && _5star <= 6.5) ||
        (_5tries === (_5pity - 1))
    ) {
        if (got5star !== true) {
            got5star = true;
        }
        
        let roll = Math.floor(Math.random()*100)+1;
        if (roll <=50) {
            fifty50 = 1;
        }
        
        else {
     
            fifty50 = 0;   
        }
        
        _5tries = 0;
        _4tries++;
    
    }
    
    
    
    else if (_4tries === (_4pity-1) || _4star <= 10) {
    
        if (got4star !== true) {
            got4star = true;
        }
        _4tries = 0;
        _5tries++;
        
    }
    
    else {
        _4tries++;
        _5tries++;
       }
       
    _4star = (Math.random()*100)+1;
    _5star = (Math.random()*100)+1;
    
    playAnimation1();
    function playAnimation1(){
       
        wishResult.innerHTML = '';
        
        if (got5star === true) {
            w1five.style.display = 'block';
            
            if (lost_50 === true || fifty50 === 1) {
                win = true;
            }
            
            got5star = false;
            
    w1five.play();
    w1five.addEventListener("ended", () => {
        w1five.style.display = 'none';
        banner.style.display = 'inline';
        
        pityCounter.textContent = `Current Pity = ${_5tries}`;
        
        li = document.createElement('li');
        
         if (win === true) {
           wishResult.innerHTML = '';
           li.textContent = char5star;
           wishResult.appendChild(li);
           lost_50 = false;
         }
         
         
         else {
         lost_50 = true;
         wishResult.innerHTML = '';
         weaOrChar = Math.floor(Math.random()*100)+1;
         
         if (weaOrChar <= 55) {
             decide = Math.floor(Math.random()*(standard5star.length));
             wishResult.innerHTML = '';
           li.textContent = standard5star[decide];
           wishResult.appendChild(li);
         }
         
         else{
             decide = Math.floor(Math.random()*(wea5standard.length));
             wishResult.innerHTML = '';
           li.textContent = wea5standard[decide];
           wishResult.appendChild(li);
         }
         
         
         }
             
        
    });
        }
        
        else if (got4star === true) {
            
            got4star = false;
            weaOrChar = Math.floor(Math.random()*100)+1;
            if (weaOrChar <= 30) {
                decide = Math.floor(Math.random()*(wea4star.length));
             wishResult.innerHTML = '';
           li.textContent = wea4star[decide];
            }
            
            else {
                decide = Math.floor(Math.random()*(char4star.length));
             wishResult.innerHTML = '';
           li.textContent = char4star[decide];
            }
            
            
            w1four.style.display = 'block';
    w1four.play();
    w1four.addEventListener("ended", ()=> {
        w1four.style.display = 'none';
        banner.style.display = 'inline';
        pityCounter.textContent = `Current Pity = ${_5tries}`;
        wishResult.appendChild(li);
        })
        }
        
        else {
            
            decide = Math.floor(Math.random()*(wea3star.length));
             wishResult.innerHTML = '';
           li.textContent = wea3star[decide];
           
            w1.style.display = 'block';
            
    w1.play();
    w1.addEventListener("ended", ()=> {
        w1.style.display = 'none';
        banner.style.display = 'inline';
        pityCounter.textContent = `Current Pity = ${_5tries}`;
        wishResult.appendChild(li)
        })
            
        }
        
    }
    
}

function runWish10() {
    banner.style.display = "none";
    results = [];
    wishResult.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {

        if (
            (_5tries < (_5pity - 19) && _5star <= 1.6) ||
            ((_5pity - 19) <= _5tries && _5tries < (_5pity - 6) && _5star <= 3.5) ||
            ((_5pity - 6) <= _5tries && _5tries < (_5pity - 1) && _5star <= 6.5) ||
            (_5tries === (_5pity - 1))
        ) {
            if (got5star !== true) {
                got5star = true;
            }

            let roll = Math.floor(Math.random() * 100) + 1;
            if (roll <= 50) {
                fifty50 = 1;
            } else {
                fifty50 = 0;
            }

            if (lost_50 === true || fifty50 === 1) {
                win = true;
            }

            if (win === true) {
                
                results.push(char5star);
                lost_50 = false;
            } else {
                lost_50 = true;
                
                let weaOrChar = Math.floor(Math.random() * 100) + 1;

                if (weaOrChar <= 55) {
                    let decide = Math.floor(Math.random() * (standard5star.length));
                    
         results.push(standard5star[decide]);
                } else {
                    let decide = Math.floor(Math.random() * (wea5standard.length));
                    
          results.push(wea5standard[decide]);
                }
            }

            _5tries = 0;
            _4tries++;
            
            
        } else if (_4tries === (_4pity - 1) || _4star <= 10) {
            _4tries = 0;
            _5tries++;
            
            weaOrChar = Math.floor(Math.random()*100)+1;
            if (weaOrChar <= 30) {
                decide = Math.floor(Math.random()*(wea4star.length));
             wishResult.innerHTML = '';
           results.push(wea4star[decide]);
            }
            
            else {
                decide = Math.floor(Math.random()*(char4star.length));
             
           results.push(char4star[decide]);
            }
            
            
        } else {
            _4tries++;
            _5tries++;
            
            decide = Math.floor(Math.random()*(wea3star.length));
             
           results.push(wea3star[decide]);
        }

        _4star = (Math.random() * 100) + 1;
        _5star = (Math.random() * 100) + 1;
    }
    
    
    playAnimation10();
}

function playAnimation10() {
    if (got5star === true) {
        w1five10.style.display = 'block';
        w1five10.play();
        w1five10.addEventListener("ended", () => {
            w1five10.style.display = 'none';
            banner.style.display = 'inline';
            got5star = false;
            pityCounter.textContent = `Current Pity = ${_5tries}`;
            wishResult.innerHTML = '';
            results.forEach(result => {
        li = document.createElement('li');
        li.textContent = result;
        
    if (char4star.includes(result) || wea4star.includes(result)) {
        li.style.color = 'purple';
    } else if(char5star.includes(result) || standard5star.includes(result) || wea5standard.includes(result)){
        li.style.color = 'gold';
    }
        
        wishResult.appendChild(li);
    });
        });
    } else {
        w1four10.style.display = 'block';
        w1four10.play();
        w1four10.addEventListener("ended", () => {
            w1four10.style.display = 'none';
            banner.style.display = 'inline';
            pityCounter.textContent = `Current Pity = ${_5tries}`;
            wishResult.innerHTML = '';
            results.forEach(result => {
    let li = document.createElement('li');
    li.textContent = result;

    if (char4star.includes(result) || wea4star.includes(result)) {
        li.style.color = 'purple'; 
    } else if(char5star.includes(result) || standard5star.includes(result) || wea5standard.includes(result)) {
        li.style.color = 'gold';
    }

    wishResult.appendChild(li);
});

        });
    }

    
}