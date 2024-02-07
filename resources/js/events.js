$(document).ready(() => {

  let count = 0;

  /************************************************************
   * btnAdd
   ************************************************************/
  
  $('#btnAdd').on('click', () => {

    const name = $('#txtName').val().trim()

    if (!$.isEmptyObject(name)) {
      $('#tbPlayers').addRow({id: ++count, name})
    }

    $('#tbCount').text(`# (${count})`)
    
    $('#txtName').val('');
    $('#txtName').focus()
  
  })
  
  /************************************************************
   * btnClear
   ************************************************************/
  
  $('#btnClear').on('click', () => {
  
    count = 0

    $('#tbPlayers').children('tbody').empty()
    $('#tbTeams').children('tbody').empty()

    $('#tbCount').text(`# (${count})`)
  
  }) 
  
  /************************************************************
   * btnGenerate
   ************************************************************/
  
  $('#btnGenerate').on('click', () => {
  
    $('#tbTeams tbody').empty()

    const rows = $('#tbPlayers tbody').getRows()

    const sorted = rows.sort(() => Math.random() - 0.5)

    const half = Math.ceil(sorted.length / 2);

    const compareFn = (a, b) => a.id - b.id

    const team1 = sorted.slice(0, half).sort(compareFn)
    const team2 = sorted.slice(half).sort(compareFn)

    $('#tbTeams').addRows('Team 1', team1)
    $('#tbTeams').addRows('Team 2', team2)

    new bootstrap.Collapse($('#collapseOne'))
    new bootstrap.Collapse($('#collapseTwo'))

  })

})
