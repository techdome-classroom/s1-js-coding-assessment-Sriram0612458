const getTotalIsles = function (map) {


  if (!map || map.length === 0 || map[0].length === 0) return 0;

  const rows = map.length;
  const cols = map[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  let islandCount = 0;

  const dfs = (row, col) => {
      if (row < 0 || row >= rows || col < 0 || col >= cols) return;


      if (map[row][col] === 'W' || visited[row][col]) return;

      visited[row][col] = true;

      dfs(row - 1, col); 
      dfs(row + 1, col); 
      dfs(row, col - 1); 
      dfs(row, col + 1);
  };

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (map[i][j] === 'L' && !visited[i][j]) {
              dfs(i, j);
              islandCount++;
          }
      }
  }

  return islandCount;


};

module.exports = getTotalIsles;