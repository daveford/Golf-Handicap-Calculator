function calculateGolfHandicap(scores, courseRating, slopeRating) {
    // Calculate the average score for the rounds
    const averageScore = scores.reduce((total, score) => total + score) / scores.length;
    
    // Calculate the differential based on the average score and course slope
    const differential = (averageScore - courseRating) * 113 /  slopeRating;
    
    // Calculate the handicap based on the differential
    const handicap = Math.round(differential * 0.96); // Adjusted for 96% handicap factor
    
    return handicap;
  }

  module.exports = { calculateGolfHandicap };