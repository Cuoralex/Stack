// Clase  representa nodo de lista enlazada
var NodoLista = /** @class */ (function () {
    function NodoLista(valor) {
        // Asigna valor al nodo
        this.valor = valor;
        // Inicia el siguiente nodo como null
        this.siguiente = null;
    }
    return NodoLista;
}());
// Clase representar una pila
var Pila = /** @class */ (function () {
    function Pila() {
        // Inicia el tope como null
        this.tope = null;
    }
    // Método agregar elemento parte superior de la pila
    Pila.prototype.push = function (elemento) {
        // Creación de un nuevo nodo
        var nuevoNodo = new NodoLista(elemento);
        if (!this.tope) {
            // Si está vacía, el nuevo nodo es el tope
            this.tope = nuevoNodo;
        }
        else {
            // Si no está vacía, el nuevo nodo apunta al anteriormente en el tope
            nuevoNodo.siguiente = this.tope;
            // El nuevo nodo es el nuevo tope
            this.tope = nuevoNodo;
        }
    };
    // Método remover y devolver el elemento superior de la pila
    Pila.prototype.pop = function () {
        if (!this.tope)
            return undefined; // Si está vacía, no se saca ningún elemento
        var elementoSacado = this.tope.valor;
        this.tope = this.tope.siguiente; // El nodo siguiente al tope se convierte en el nuevo tope
        return elementoSacado;
    };
    // Método para saber el elemento superior de la pila
    Pila.prototype.peek = function () {
        if (!this.tope)
            return undefined; // Si está vacía, no hay ningún elemento en el tope
        return this.tope.valor; // Retorna el valor
    };
    // Método verificar si la pila está vacía
    Pila.prototype.isEmpty = function () {
        return this.tope === null; // Está vacía si el tope es null
    };
    // Método tamaño de la pila
    Pila.prototype.size = function () {
        var contador = 0;
        var actual = this.tope;
        // Iterar entre nodos y los cuenta, dice el número de elementos
        while (actual) {
            contador++;
            actual = actual.siguiente;
        }
        return contador; // Retorna cantidad de elementos en la pila
    };
    // Método limpiar la pila, eliminando todos los elementos
    Pila.prototype.clear = function () {
        this.tope = null; // El tope será null, indicando pila está vacía
    };
    return Pila;
}());
// Ejemplo de uso
var pila = new Pila();
// Agregando elementos a la pila
pila.push(7);
pila.push(20);
pila.push(52);
console.log("Elemento tope:", pila.peek()); // Muestrar elemento en el tope
console.log("Desapilando elementos:");
while (!pila.isEmpty()) {
    console.log(pila.pop()); // Desapilar elementos y mostrarlos
}
// Agregar elementos para demostrar otros métodos
pila.push(10);
pila.push(24);
pila.push(36);
// Mostrar tamaño de la pila
console.log("Tamaño de la pila:", pila.size());
// Verificar si la pila está vacía
console.log("¿La pila está vacía?:", pila.isEmpty());
// Limpiar la pila
pila.clear();
// Verificar nuevamente si la pila está vacía después de limpiarla
console.log("¿La pila está vacía después de limpiar?:", pila.isEmpty());
// Agregar algunos elementos nuevamente
pila.push(27);
pila.push(80);
pila.push(19);
// Mostrar el nuevo tamaño de la pila
console.log("Nuevo tamaño de la pila:", pila.size());
// Ver el elemento en el tope
console.log("Elemento actual en el tope:", pila.peek());
// Remover todos los elementos de la pila
console.log("Desapilando elementos nuevamente:");
while (!pila.isEmpty()) {
    console.log(pila.pop());
}
// Verificar si la pila está vacía al final
console.log("¿La pila está vacía al final?:", pila.isEmpty());
