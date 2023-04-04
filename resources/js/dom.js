function addRow(table, obj) {

  const row = table.insertRow(-1)
  
  Object.entries(obj).forEach(entry => {
    const cell = row.insertCell(-1)
    const [key, value] = entry;
    cell.id = key
    cell.innerHTML = value
  })
  
}

function addRows(table, arr) {

  arr.forEach(obj => addRow(table, obj));

}

function addSpan(table, value) {

  const cell = table.insertRow(-1).insertCell(0)

  cell.colSpan = 2
  cell.className = 'table-active'
  cell.innerHTML = value

}

function getRows(table) {

  return Array.prototype.slice.call(table, 1).map(row => {
    return Array.prototype.slice.call(row.cells).reduce((obj, cell) => (obj[cell.id] = cell.innerHTML, obj), {})
  })

}

//todo
function clearTable(table) {

  const rowCount = table.rows.length

  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i)
  }
  
}

function setVisibility(className, visibility) {

  const element = document.querySelector(className)

  element.style.visibility = visibility

}

export {
  addRow,
  addRows,
  getRows,
  addSpan,
  setVisibility
}