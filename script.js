let btn1=document.querySelector("#btn1");
let visible= "hide";
btn1.addEventListener("click", function() {
    
    if (visible==="hide"){
        document.getElementById("Mission Decrypt").innerHTML=
    `<h1>Mission Decrypt</h1>
            <h2><i>A cryptography-based web challenge devoloped for team kalpana's tech event</i></h2>
            <img class="proimg" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/sites/67886/images/RTYfh51hRL2wXesNqZGa_Largest-encryption-key-cracked.jpg" alt="decryption">
            <ul> 
                <li><b>Features:</b>
                    <ul>
                        <li>Interactive levels with increasing difficulty</li>
                        <li>Real time hints and score tracking</li>
                    </ul>
                    
                </li>
                <li><b>Impact:</b> Engaged over 50 participants in a gamified tech experience</li>
                <li><b>Role:</b> Participant and a content writer</li>
            </ul>`
    }else{
        document.getElementById("Mission Decrypt").style.visibility="hidden"
    }
    
})
    
       
let btn2=document.querySelector("#btn2");

btn2.addEventListener("click", function() {
    document.getElementById("ClimaCast").innerHTML=
    `<h1>ClimaCast</h1>
            <h2><i>A sleek weather forecasting web app that delivers real time weather insights</i></h2>
            <img class="proimg" alt="weather" src="https://cdn-icons-png.flaticon.com/256/8880/8880994.png">
            <ul>
                <li><b>Tech Stack:</b> HTML,CSS,JavaScript,open weather map API</li>
                <li><b>Features:</b>
                    <ul>
                        <li>Search by city or location</li>
                        <li>Displays temperature,humidity,wind and weather icons</li>
                        <li><b>Role:</b>Solo Devoloper</li>
                    </ul>
                </li>
            </ul>

        </div>`
})
let btn3=document.querySelector("#btn3");

btn3.addEventListener("click", function() {
    document.getElementById("Tic Tac Toe").innerHTML=
    `<h1>Tic Tac Toe Duel</h1>
            <h2><i> A sleek browser based game designed for logic practice and UI polishing </i></h2>
            <img class="proimg" alt="game" src="https://thumbs.dreamstime.com/b/k-blue-pink-tic-tac-toe-game-icon-black-background-glowing-neon-line-tic-tac-toe-o-game-icon-black-background-318165951.jpg"
            <ul>
                <li><b>Tech Stack:</b> HTML,CSS,JavaScript</li>
                <li><b>Features:</b>
                    <ul>
                        <li>Clean,responsive 3x3 game board</li>
                        <li>Win/draw detection logic with real-time status updates</li>
                        <li>Restart button to replay without page refresh</li>
                    </ul>
                </li>
                <li><b>Role:</b> Solo Devoloper</li>
            </ul>
        </div>`
})
let modeBtn=document.querySelector("#mode")
let currMode="light";
modeBtn.addEventListener("click",()=>{
    if (currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="rgb(60, 59, 59)"
        document.querySelector("body").style.color="white"
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white"
        document.querySelector("body").style.color="black"
    }

})

document.getElementById('form').addEventListener('submit', function(e) {
            if (!confirm('Are you sure you want to submit this form?')) {
                e.preventDefault();
            }
        });


   
