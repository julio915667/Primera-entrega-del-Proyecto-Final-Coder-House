/*let boton = document.getElementById("boton")

boton.addEventListener('click', function(){
     alert("toco el boton")

})*/

const computer = [{
          name: "PC DE OFICINA",
          mother: "MOTHERBOARD H410",
          cpu: "MICRO INTEL CELERON G5905 DC 3.5GHZ",
          memory: "MEMORIA 8GB DDR4 2666 CRUCIAL UDIMM",
          disc: "SSD MARKVISION 240GB SATA III",
          props: "GABINETE KIT",
          price: "60.000$",
          thisIs: "Computadora"
     },
     {
          name: "PC GAMER",
          mother: "H510M PCIE 4.0 DDR4 USB 3.2",
          cpu: "INTEL I9 10MA GEN Dual Core",
          memory: "8GB 2666MHZ DDR4",
          disc: "1TB SATA3 WD BLUE",
          props: "GABINETE:Atx-Con Fuente 550W TECLADO, MOUSE USB, PARLANTES USB Potenciados",
          price: "95.000$",
          thisIs: "Computadora"
     }
]

const product = [{
          name: "Placa de Video ZOTAC GAMING",
          description: "GeForce GTX 1660 Ti 6GB ZT-T16610F-10L",
          price: "140.000$",
          thisIs: "Componente"
     },
     {
          name: "Ram",
          description: "16GB, 2300MZH",
          price: "10.000$",
          component: "Componente"
     },
     {
          name: "Fuente de Alimentacion",
          description: "MSI MPG A750GF",
          price: "25.000$",
          thisIs: "Componente"
     },
     {
          name: "Mouse Gamer",
          description: "Thermaltake Level 20 Rgb",
          price: "19.500$",
          thisIs: "Periferico"
     },
     {
          name: "Teclado Gamer",
          description: "Gadnic ZT800 QWERTY Outemu Blue español España color negro con luz RGB",
          price: "5000$",thisIs: "Periferico"
     },
     {
          name: "Monitor Gamer",
          description: "Monitor Gigabyte 24 pulgadas.",
          price: "50.000",
          thisIs: "Periferico"
     },
     {
          name: "Disco Duro Externo",
          description: "Western Digital WD Elements Portable WDBUZG0010BBK 1TB negro",
          price: "9.500$",
          thisIs: "Componente",
     }
]
//busqueda
function search(nameOfPc) {
     const date = computer.concat(product)
     nameOfPc = prompt("Ingrese el Nombre del Producto:")
     let computers = date.find(pc => pc.name == nameOfPc)
     console.log(computers)
}
search()

//-------------------------------------------------//

//filtrado

function filtrerPro(name) {
     const date = computer.concat(product)
     name = prompt("Ingrese el Filtro de lo que desea:")
     let thisWhat = date.filter(where => where.thisIs == name)
     console.log(thisWhat)
}

filtrerPro()