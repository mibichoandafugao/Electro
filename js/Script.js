function addCapacitor(){
    var capacitorList = document.getElementById("capacitor-list")
    var nuevoCapacitor = document.createElement("div")
    nuevoCapacitor.classList.add("labels")
    var spanC = document.createElement("span")
    spanC.textContent = "C" + (capacitorList.children.length + 3) + ": "
    var inputC = document.createElement("input");
    inputC.type = "number"
    inputC.id="cap" + (capacitorList.children.length + 3) 
    nuevoCapacitor.appendChild(spanC)
    nuevoCapacitor.appendChild(inputC)
    capacitorList.appendChild(nuevoCapacitor)

    var container = document. getElementsByClassName("container")[0]
    var capacitorContainer = document.getElementsByClassName("capacitor-container")[0]
    var newHeight = 400 + (capacitorList.children.length*60)
    container.style.height = newHeight + "px";
    var newHeight = 310 + (capacitorList.children.length *60)
    capacitorContainer.style.height = newHeight + "px";
}
function removeCapacitor() {
    var capacitorList = document.getElementById("capacitor-list")
    var children = capacitorList.children
    var container = document. getElementsByClassName("container")[0]
    var capacitorContainer = document.getElementsByClassName("capacitor-container")[0]
  
    if (children.length > 0) {
        capacitorList.removeChild(children[children.length - 1])
        
        var newHeightContainer = 400 + (capacitorList.children.length * 60)
        container.style.height = newHeightContainer + "px";
        
        var newHeightCapacitorContainer = 310 + (capacitorList.children.length * 60)
        capacitorContainer.style.height = newHeightCapacitorContainer + "px";
    }
}

function CalcularCapacitanciaParalelo() {
    var capacitores = document.getElementsByClassName('labels')[0].querySelectorAll('input');
    
    var capacitancias = [];
    capacitores.forEach(function(capacitor) {
        capacitancias.push(parseFloat(capacitor.value));
    });

    var capacitanciaTotal = capacitancias.reduce(function (accum, capacitancia) {
        return accum + capacitancia;
    }, 0);
    
    var resultado = document.getElementsByClassName('resultado')[0];
    var resultadoInput = resultado.querySelector('input');
    resultadoInput.value = capacitanciaTotal;
}

function CalcularCapacitanciaenSerie() {
    var capacitores = document.getElementsByClassName('labels')[0].querySelectorAll('input');
    
    var capacitancias = [];
    capacitores.forEach(function(capacitor) {
        capacitancias.push(parseFloat(capacitor.value));
    });

    var inversoTotal = capacitancias.reduce(function (accum, capacitancia) {
        return accum + 1 / capacitancia;
    }, 0);

    var capacitanciaTotal = 1 / inversoTotal;
    
    var resultado = document.getElementsByClassName('resultado')[0];
    var resultadoInput = resultado.querySelector('input');
    resultadoInput.value = capacitanciaTotal.toFixed(3);
}