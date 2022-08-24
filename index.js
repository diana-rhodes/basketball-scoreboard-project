let homeScore = 0
let awayScore = 0

function highlightLeader() { // call every time the score is updated
    if (!(homeScore == 0 && awayScore == 0)) {
        if (homeScore > awayScore) { // if the Home team is in the lead
            // highlight guest score and remove any highlight from home score
            document.getElementById("homeScoreEl").style.color = "#50D8D7";
            document.getElementById("awayScoreEl").style.color = "#BFCDE0";
        } else if (homeScore == awayScore) { // if the game is tied
            // highlight both guest score and home score
            // neither team is in the lead per se, 
            // but I think it's still exciting to emphasize the fact that it's anyone's game
            document.getElementById("homeScoreEl").style.color = "#50D8D7";
            document.getElementById("awayScoreEl").style.color = "#50D8D7";
        } else { // if the guest team is in the lead
            // highlight guest score and remove any highlight from home score
            document.getElementById("homeScoreEl").style.color = "#BFCDE0";
            document.getElementById("awayScoreEl").style.color = "#50D8D7";
        } 
    }
}

// Increment Home team's score and update the text element to match
function incrementHomeBy1() { 
    homeScore += 1
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
function incrementAwayBy1() {
    awayScore +=1
    document.getElementById("awayScoreEl").textContent = awayScore
    highlightLeader()
}

function incrementAwayBy2() {
    awayScore += 2
    document.getElementById("awayScoreEl").textContent = awayScore
    highlightLeader()
}

function incrementAwayBy3() {
    awayScore += 3
    document.getElementById("awayScoreEl").textContent = awayScore
    highlightLeader()
}

// Reset both team's scores to 0, and remove any highlighting
function newGame() {
    awayScore = 0
    document.getElementById("awayScoreEl").textContent = awayScore
    homeScore = 0 
    document.getElementById("homeScoreEl").textContent = homeScore
    document.getElementById("homeScoreEl").style.color = "#BFCDE0";
    document.getElementById("awayScoreEl").style.color = "#BFCDE0";
}