// ======================================= PACKAGES INVOKE
var profiles = require("../data/friends.js");


// ======================================= EXPORT

module.exports = function (app) {

  app.get("/api/historical_figures", function (req, res) {
    res.json(profiles.historyFigures);
  });

  app.post("/", function (req, res) {

    var scoresResultsArr = [];
    var inputProfile = req.body;
    var bestMatchIndex;
    
    profiles.inputProfile.name = inputProfile.name;
    profiles.inputProfile.photo = inputProfile.photo;
    profiles.inputProfile.scores = inputProfile.scores;
    
    profiles.historyFigures.forEach(function (item) {
      
      var scoresDifArr = 0;
      
      item.scores.forEach(function (item, index) {
        
        scoresDifArr += Math.abs(inputProfile.scores[index] - item);
        
      })
      
      scoresResultsArr.push(scoresDifArr)
      
    })
    
    var bestMatchScore = scoresResultsArr[0];

    for (i = 1; i < scoresResultsArr.length -1; i++) {

      if (bestMatchScore > scoresResultsArr[i]) {
  
        bestMatchScore = scoresResultsArr[i];
        bestMatchIndex = i;
  
      } 

    }

    console.log(bestMatchIndex);
    console.log(scoresResultsArr);

    res.send(profiles.historyFigures[bestMatchIndex]);

  })

};