// Initialize data storage
let batsmen = [];
let bowlers = [];
let totalScore = 0;
let totalWickets = 0;
let totalBalls = 0;

// Function to update stats dynamically
function updateStats() {
  // Get inputs
  const score = parseInt(document.getElementById('input-score').value) || 0;
  const wickets = parseInt(document.getElementById('input-wickets').value) || 0;
  const balls = parseInt(document.getElementById('input-balls').value) || 0;

  const batsman1Name = document.getElementById('input-batsman1-name').value;
  const batsman1Runs = parseInt(document.getElementById('input-batsman1-runs').value) || 0;
  const batsman1Balls = parseInt(document.getElementById('input-batsman1-balls').value) || 0;

  const batsman2Name = document.getElementById('input-batsman2-name').value;
  const batsman2Runs = parseInt(document.getElementById('input-batsman2-runs').value) || 0;
  const batsman2Balls = parseInt(document.getElementById('input-batsman2-balls').value) || 0;

  const bowlerName = document.getElementById('input-bowler-name').value;
  const bowlerOvers = parseFloat(document.getElementById('input-bowler-overs').value) || 0;
  const bowlerRuns = parseInt(document.getElementById('input-bowler-runs').value) || 0;
  const bowlerWickets = parseInt(document.getElementById('input-bowler-wickets').value) || 0;

  // Update total stats
  totalScore += score;
  totalWickets += wickets;
  totalBalls += balls;

  // Update batsman stats
  updateBatsmanStats(batsman1Name, batsman1Runs, batsman1Balls);
  updateBatsmanStats(batsman2Name, batsman2Runs, batsman2Balls);

  // Update bowler stats
  updateBowlerStats(bowlerName, bowlerOvers, bowlerRuns, bowlerWickets);

  // Update the display
  displayStats();
}

// Function to update batsman stats
function updateBatsmanStats(name, runs, balls) {
  if (!name) return;

  let batsman = batsmen.find((b) => b.name === name);
  if (!batsman) {
    batsman = { name, runs: 0, balls: 0 };
    batsmen.push(batsman);
  }
  batsman.runs += runs;
  batsman.balls += balls;
}

// Function to update bowler stats
function updateBowlerStats(name, overs, runs, wickets) {
  if (!name) return;

  let bowler = bowlers.find((b) => b.name === name);
  if (!bowler) {
    bowler = { name, overs: 0, runs: 0, wickets: 0 };
    bowlers.push(bowler);
  }
  bowler.overs = overs;
  bowler.runs += runs;
  bowler.wickets += wickets;
}

// Function to display stats
function displayStats() {
  document.getElementById('score').innerText = `${totalScore}/${totalWickets}`;
  document.getElementById('overs').innerText = `${Math.floor(totalBalls / 6)}.${totalBalls % 6}`;
  document.getElementById('runrate').innerText = (totalScore / (totalBalls / 6)).toFixed(2);

  const batsmanDisplay = batsmen.map(
    (b) => `${b.name} - ${b.runs} runs (${b.balls} balls)`
  ).join('<br>');
  document.querySelector('.batsman-stats').innerHTML = `<h3>Batsmen Stats</h3>${batsmanDisplay}`;

  const bowlerDisplay = bowlers.map(
    (b) => `${b.name} - ${b.overs.toFixed(1)} overs, ${b.runs} runs, ${b.wickets} wickets`
  ).join('<br>');
  document.querySelector('.bowler-stats').innerHTML = `<h3>Bowler Stats</h3>${bowlerDisplay}`;
}
