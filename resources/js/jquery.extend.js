/************************************************************
 * table.addRow
 ************************************************************/

$.fn.addRow = function(obj) {

  const row = $('<tr>').append(Object.entries(obj).map(([key, value]) => {
    return $('<td>').text(value).attr('id', key)
  }))

  this.append(row)

}

/************************************************************
 * table.addRows
 ************************************************************/

$.fn.addRows = function(headerText, arr) {
  
  const data = $('<td>').text(headerText).attr('colspan', Object.keys(arr[0]).length);
  const row = $('<tr>').append(data)

  this.append(row)
  
  arr.forEach(obj => this.addRow(obj));

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
