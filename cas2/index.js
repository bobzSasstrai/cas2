const studenti = [
    { ime: "Pero", prosek: 9.1, grad: "Berovo" },
    { ime: "Stojko", prosek: 6, grad: "Kavadarci" },
    { ime: "Stojna", prosek: 10, grad: "Veles" },
    { ime: "Mara", prosek: 5, grad: "Kichevo" },
    { ime: "Petka", prosek: 9.3, grad: "Skopje" },
    { ime: "Mitre", prosek: 7.5, grad: "Ohrid" },
    { ime: "Risto", prosek: 9.5, grad: "Strumica" },
    { ime: "Tosho", prosek: 8.3, grad: "Gevgelija" },
    { ime: "Andrej", prosek: 8, grad: "Skopje" }, 
    { ime: "Andreja", prosek: 6.1, grad: "Skopje" }, 
    { ime: "Ana", prosek: 7.9, grad: "Skopje" }, 
    { ime: "Boban", prosek: 7, grad: "Kumanovo" },
    { ime: "Stojan", prosek: 7.3, grad: "Kumanovo" },
  ];
  
  const rezultat = studenti
  .filter(student => 
    student.grad === "Skopje" && 
    student.ime.startsWith("A") && 
    student.prosek > 7
  )
  .sort((a, b) => a.ime.localeCompare(b.ime));

console.log(rezultat);

const rezultat2 = studenti
  .filter(student => student.prosek > 9 && student.grad !== "Skopje")
  .sort((a, b) => b.prosek - a.prosek);

console.log(rezultat2);


const rezultat3 = studenti
  .filter(student => student.ime.length === 5) 
  .sort((a, b) => a.prosek - b.prosek) 
  .slice(0, 3); 

console.log(rezultat3);


const rezultat4 = studenti
  .filter(student => student.grad === "Kumanovo") 
  .reduce((acc, student, _, array) => acc + student.prosek / array.length, 0); 

console.log(rezultat4);

const rezultat5 = studenti
  .filter(student => student.grad === "Skopje" || student.grad === "Ohrid") 
  .reduce((acc, student, _, array) => acc + student.prosek / array.length, 0); 

console.log(rezultat5);


const goran = [
    { ime: "Goran", prosek: 7.3, grad: "Delcevo" }
]

const studenti2 = {
    ...studenti, goran
}

console.log(studenti2)

const [a, b, ...nebitniParametri] = studenti;

console.log(b, nebitniParametri)