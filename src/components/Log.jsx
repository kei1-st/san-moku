export default function Log({ logs }) {
  // logs : { square: { row: rowIdx, col: colIdx }, player: curPlayer }

  return (
    <ol id="log">
      {logs.map((log) => (
        <li key={`${log.square.row}${log.square.col}`}>
          {log.player} selected ({log.square.row}, {log.square.col})
        </li>
      ))}
    </ol>
  );
}
