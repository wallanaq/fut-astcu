/**
 * Add a new row of data to a Table object
 * 
 * @param {Element} table HTML Table element
 * @param {Object} obj An object to add
 */
function addRow(table, obj) {

  const row = table.getElementsByTagName('tbody')[0].insertRow(-1)
  
  Object.entries(obj).forEach(entry => {
    const cell = row.insertCell(-1)
    const [key, value] = entry;
    cell.id = key
    cell.innerHTML = value
  })
  
}

/**
 * Add new rows of data to a Table object
 * 
 * @param {Element} table HTML Table element
 * @param {Object} obj An array of objects
 */
function addRows(table, arr) {

  arr.forEach(obj => addRow(table, obj))

}

/**
 * Add cell with span
 * 
 * @param {Element} table HTML Table element
 * @param {Number} colspan The number of columns a cell should span
 * @param {String} content Cell content
 */
function addSpan(table, colspan, content) {

  const cell = table.insertRow(-1).insertCell(0)

  cell.colSpan = colspan
  cell.className = 'table-active'
  cell.innerHTML = content

}

/**
 * Get all rows in the table as an array of objects
 * 
 * @param {*} table HTML Table element
 * @returns Array of objects
 */
function getRows(table) {

  return Array.prototype.slice.call(table, 1).map(row => {
    return Array.prototype.slice.call(row.cells).reduce((obj, cell) => (obj[cell.id] = cell.innerHTML, obj), {})
  })

}

/**
 * 
 * @param {String} tableId
 */
function deleteRows(tableId) {

  document.querySelectorAll(`#${tableId} tbody tr`).forEach(row => row.remove())

}

/**
 * Set visibility of the component
 * 
 * @param {String} className The className property of the element
 * @param {String} visibility New visibility
 */
function setVisibility(className, visibility) {

  const element = document.querySelector(className)

  element.style.visibility = visibility

}

export {
  addRow,
  addRows,
  getRows,
  deleteRows,
  addSpan,
  setVisibility
}