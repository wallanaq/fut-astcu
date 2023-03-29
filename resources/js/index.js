function addPlayer() {
  
  let txtName = document.getElementById('pName')
  let tbPlayers  = document.getElementById('tbPlayers')
  
  let id = tbPlayers.rows.length
  let name = txtName.value.trim()

  if (name != null && name.trim() != '') {
    addRow(tbPlayers, id, name)        
  }

  txtName.value = null
  txtName.focus()

}

function addRow(table, id, name) {
  
  let row = table.insertRow(-1)
  
  row.insertCell(0).innerHTML = id
  row.insertCell(1).innerHTML = name
  
}

function addRows(table, arrayObj) {

  arrayObj.forEach(obj => {
    addRow(table, obj.id, obj.name)
  });

}

function addSpan(table, value) {

  let cel = table.insertRow(-1).insertCell(0)
  cel.colSpan = 2
  cel.className = 'table-active'
  cel.innerHTML = value

}

function getRows(records) {

  return Array.prototype.slice.call(records, 1).map(row => {
    return {
      id: row.firstChild.innerHTML,
      name: row.lastChild.innerHTML,
    }
  })

}

function clearTable(table) {

  let rowCount = table.rows.length

  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i)
  }
  
}

function sort(rows) {

  let sorted = []

  while (rows.length > 0) {
    let position = Math.floor(Math.random() * rows.length)
    if (rows[position] == undefined) {
      continue
    }
    sorted.push(rows.splice(position, 1)[0]);
  }
  
  return sorted

}

function generate() {

  let tbRows = document.querySelectorAll('#tbPlayers tr')

  let rows = getRows(tbRows)

  let sorted = sort(rows)

  let tbTeams = document.getElementById('tbTeams')

  clearTable(tbTeams)
  
  addSpan(tbTeams, 'Team 1')
  addRows(tbTeams, sorted.slice(0, 6).sort((a, b) => a.id - b.id))
  addSpan(tbTeams, 'Team 2')
  addRows(tbTeams, sorted.slice(-6).sort((a, b) => a.id - b.id))

  document.querySelector('.tbOutput').style.visibility = 'visible'

}