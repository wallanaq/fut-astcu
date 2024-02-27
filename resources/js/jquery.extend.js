/************************************************************
 * table.addRow
 ************************************************************/

$.fn.addRow = function(obj) {

  const data = Object.entries(obj).map(([key, value]) => {
    return $('<td>').text(value).attr('id', key)
  })

  const row = $('<tr>').append(data)

  this.append(row)

}

/************************************************************
 * table.addRows
 ************************************************************/

$.fn.addRows = function(arr) {
  arr.forEach(obj => this.addRow(obj))
}

/************************************************************
 * table.addSection
 ************************************************************/

$.fn.addSection = function(headerText, colspan) {
  
  const data = $('<td>').text(headerText).attr('colspan', colspan)

  const row = $('<tr>').append(data)

  this.append(row)

}

/************************************************************
 * table.getRows
 ************************************************************/

$.fn.getRows = function() {

  const data = []

  this.children('tbody').find('tr').each(function() {
    
    const row = {}

    $(this).find('td').each(function() {
      const pName = $(this).attr('id')
      const pValue = $(this).text()
      row[pName] = pValue
    })

    data.push(row)

  })

  return data

}
