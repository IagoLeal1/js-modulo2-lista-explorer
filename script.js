const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 120,
    height: 190,
  }
]

let patientsNames = []

for(let patient of patients){
  patientsNames.push(`nome: ${patient.name} \n idade: ${patient.age} \n weight: ${patient.weight} \n height: ${patient.height} \n`)
}

alert(patientsNames)