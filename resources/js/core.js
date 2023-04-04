export function sort(rows) {

  const sorted = []

  while (rows.length > 0) {
    let position = Math.floor(Math.random() * rows.length)
    if (rows[position] == undefined) {
      continue
    }
    sorted.push(rows.splice(position, 1)[0]);
  }
  
  return sorted

}