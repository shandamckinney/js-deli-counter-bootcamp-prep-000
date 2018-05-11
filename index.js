var katzDeli = []

function takeANumber(katzDeli, name){
  katzDeli.push(`${name}`)
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

function nowServing(){
  let line = 0
  while (line < katzDeli.length){
    i++;
  }
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    return (`Currently serving ${katzDeli.shift()}`)
  }
}