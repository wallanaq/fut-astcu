$(document).ready(() => {

  let count = 0;

  /************************************************************
   * btnAdd
   ************************************************************/
  $('#btnAdd').on('click', () => {

    const name = $('#txtName').val().trim()

    if (!$.isEmptyObject(name)) {
      
      $('#tbPlayers').addRow({id: ++count, name})
      
      $('#thCount').text(`# (${count})`)
      
      $('#txtName').val('')
      
    }

    $('#txtName').focus()

  })
  
  /************************************************************
   * btnClear
   ************************************************************/
  
  $('#btnClear').on('click', () => {
  
    count = 0

    $('#tbPlayers tbody').empty()
    $('#tbTeams tbody').empty()

    $('#thCount').text(`# (${count})`)
  
  }) 
  
  /************************************************************
   * btnGenerate
   ************************************************************/
  
  $('#btnGenerate').on('click', () => {
  
    $('#tbTeams tbody').empty()

    const rows = $('#tbPlayers').getRows()

    if (!Array.isArray(rows)) {
      return
    }

    const sorted = rows.sort(() => Math.random() - 0.5)

    const size = $('#teamSizeInput').val()

    sorted.split(+size).map((arr, index) => {
      $('#tbTeams').addRows(`Equipe ${index+1}`, arr)
    })

    $('#collapseThree').collapse()

  })

})
