const decodeTheRing = function (m, n) {

  const m = message.length;
  const n = pattern.length;

  // Create a 2D array to store the results of subproblems
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  // Empty pattern matches empty message
  dp[0][0] = true;

  // Handle patterns that start with '*' which can match empty message
  for (let j = 1; j <= n; j++) {
      if (pattern[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  // Fill the dp table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (pattern[j - 1] === '*') {
              // '*' can match zero characters (dp[i][j-1]) or one more character (dp[i-1][j])
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          } else if (pattern[j - 1] === '?' || pattern[j - 1] === message[i - 1]) {
              // '?' matches any single character or exact character match
              dp[i][j] = dp[i - 1][j - 1];
          }
      }
  }

  // The result is in the bottom-right corner of the dp table
  return dp[m][n];


  };
  
  module.exports = decodeTheRing;