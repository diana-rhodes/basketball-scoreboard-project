let homeScore = 0
let guestScore = 0


function highlightLeader() { // call every time the score is updated
    if (!(homeScore == 0 && guestScore == 0)) {
        if (homeScore > guestScore) { // if the Home team is in the lead
            // highlight guest score and remove any highlight from home score
            document.getElementById("homeScoreEl").style.color = "#50D8D7";
            document.getElementById("guestScoreEl").style.color = "#BFCDE0";
        } else if (homeScore == guestScore) { // if the game is tied
            // highlight both guest score and home score; neither team is in the lead per se, but I think it's still exciting to emphasize the fact that it's anyone's game
            document.getElementById("homeScoreEl").style.color = "#50D8D7";
            document.getElementById("guestScoreEl").style.color = "#50D8D7";
        } else { // if the guest team is in the lead
            // highlight guest score and remove any highlight from home score
            document.getElementById("homeScoreEl").style.color = "#BFCDE0";
            document.getElementById("guestScoreEl").style.color = "#50D8D7";
        } 
    }
}

// Increment Home team's score and update the text element to match
function incrementHomeBy1() { 
    homeScore ++
    document.getElementById("homeScoreEl").textContent = homeScore
    highlightLeader()
}

function incrementHomeBy2() {
    homeScore += 2
    document.getElementById("homeScoreEl").textContent = homeScore
    highlightLeader()
}

function incrementHomeBy3() {
    homeScore += 3
    document.getElementById("homeScoreEl").textContent = homeScore
    highlightLeader()
}

// Increment Guest team's score and update the text element to match
function incrementGuestBy1() {
    guestScore ++
    document.getElementById("guestScoreEl").textContent = guestScore
    highlightLeader()
}

function incrementGuestBy2() {
    guestScore += 2
    document.getElementById("guestScoreEl").textContent = guestScore
    highlightLeader()
}

function incrementGuestBy3() {
    guestScore += 3
    document.getElementById("guestScoreEl").textContent = guestScore
    highlightLeader()
}

// Reset both team's scores to 0, and remove any highlighting (while 0 and 0 is a tie, I don't think that's exciting enough to warrant highlighting it)
function newGame() {
    guestScore = 0
    document.getElementById("guestScoreEl").textContent = guestScore
    homeScore = 0 
    document.getElementById("homeScoreEl").textContent = homeScore
    document.getElementById("homeScoreEl").style.color = "#BFCDE0";
    document.getElementById("guestScoreEl").style.color = "#BFCDE0";
}