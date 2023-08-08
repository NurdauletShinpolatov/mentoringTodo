let arr = [1, 4, 3, 2, 5, 3, 5]
let newArr = []

const funk = (arr) => {
  let res = arr.map(item => {
      if (item == 1) return "bir"
      else if (item == 2) return "ikki"
      else if (item == 3) return "uch"
      else if (item == 4) return "tort"
      else return "besh"
  })
  return res
}