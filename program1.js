const getTotalIsles = function (map) {


  if (!map || map.length === 0 || map[0].length === 0) return 0;

  const rows = map.length;
  const cols = map[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  let islandCount = 0;

  const dfs = (row, col) => {
      // Check for out of bounds
      if (row < 0 || row >= rows || col < 0 || col >= cols) return;

      // Check if the current cell is water or already visited
      if (map[row][col] === 'W' || visited[row][col]) return;

      // Mark the landmass as visited
      visited[row][col] = true;

      // Explore all four directions (up, down, left, right)
      dfs(row - 1, col); // Up
      dfs(row + 1, col); // Down
      dfs(row, col - 1); // Left
      dfs(row, col + 1); // Right
  };

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (map[i][j] === 'L' && !visited[i][j]) {
              // Found an unvisited landmass, start DFS
              dfs(i, j);
              islandCount++;
          }
      }
  }

  return ;


};

module.exports = getTotalIsles;