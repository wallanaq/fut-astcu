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

    $('#thCount').text(`#`)
  
  }) 
  
  /************************************************************
   * btnGenerate
   ************************************************************/
  
  $('#btnGenerate').on('click', () => {
  
    $('#tbTeams tbody').empty()

    const rows = $('#tbPlayers').getRows()

    if (rows.length > 0) {
      
      const sorted = rows.sort(() => Math.random() - 0.5)
  
      const size = $('#teamSizeInput').val()
  
      sorted.split(+size).map((arr, index) => {
        $('#tbTeams').addSection(`Equipe ${index + 1}`, 2)
        $('#tbTeams').addRows(arr)
      })
  
      $('#collapseThree').collapse()
      
    }

  })

})
