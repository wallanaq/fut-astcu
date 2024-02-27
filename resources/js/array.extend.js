Array.prototype.split = function(size) {
  
  const arrays = []
  
  for (let i = 0; i < this.length; i += size) {
    const subArray = this.slice(i, i + size).sort((a, b) => a.id - b.id)
    arrays.push(subArray)
  }

  return arrays

}