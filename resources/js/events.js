import * as dom from './dom.js'

/************************************************************
 * btnAdd
 ************************************************************/

const btnAdd = document.getElementById('btnAdd')

btnAdd.onclick = () => {
  
  const txtName   = document.getElementById('txtName')
  const tbPlayers = document.getElementById('tbPlayers')

  const id   = tbPlayers.rows.length
  const name = txtName.value.trim()
  
  if (typeof name === 'string' && name.length !== 0) {
    dom.addRow(tbPlayers, {id, name})
  }

  txtName.value = null
  txtName.focus()

}

/************************************************************
 * btnClear
 ************************************************************/

const btnClear = document.getElementById('btnClear')

btnClear.onclick = () => {

  dom.deleteRows('tbPlayers')

  dom.setVisibility('.output', 'hidden')

} 

/************************************************************
 * btnGenerate
 ************************************************************/

const btnGenerate = document.getElementById('btnGenerate')

btnGenerate.onclick = () => { 

  const tbPlayers = document.querySelectorAll('#tbPlayers tr')
  const tbTeams   = document.getElementById('tbTeams')

  const rows = dom.getRows(tbPlayers)

  const sorted = rows.sort(() => Math.random() - 0.5)

  dom.deleteRows('tbTeams')

  dom.addSpan(tbTeams, 2, 'Team 1')
  dom.addRows(tbTeams, sorted.slice(0, 6).sort((a, b) => a.id - b.id))

  dom.addSpan(tbTeams, 2, 'Team 2')
  dom.addRows(tbTeams, sorted.slice(6).sort((a, b) => a.id - b.id))

  dom.setVisibility('.output', 'visible')
  
}