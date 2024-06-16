// Clase  representa nodo de lista enlazada
class NodoLista<T> {
    valor: T
    siguiente: NodoLista<T> | null

    constructor(valor: T) {
        // Asigna valor al nodo
        this.valor = valor
        // Inicia el siguiente nodo como null
        this.siguiente = null
    }
}

// Clase representar una pila
class Pila<T> {
    private tope: NodoLista<T> | null

    constructor() {
        // Inicia el tope como null
        this.tope = null
    }

    // Método agregar elemento parte superior de la pila
    push(elemento: T): void {
        // Creación de un nuevo nodo
        const nuevoNodo = new NodoLista<T>(elemento)
        if (!this.tope) {
            // Si está vacía, el nuevo nodo es el tope
            this.tope = nuevoNodo
        } else {
            // Si no está vacía, el nuevo nodo apunta al anteriormente en el tope
            nuevoNodo.siguiente = this.tope
            // El nuevo nodo es el nuevo tope
            this.tope = nuevoNodo
        }
    }

    // Método remover y devolver el elemento superior de la pila
    pop(): T | undefined {
        if (!this.tope) return undefined; // Si está vacía, no se saca ningún elemento
        const elementoSacado = this.tope.valor
        this.tope = this.tope.siguiente // El nodo siguiente al tope se convierte en el nuevo tope
        return elementoSacado
    }

    // Método para saber el elemento superior de la pila
    peek(): T | undefined {
        if (!this.tope) return undefined // Si está vacía, no hay ningún elemento en el tope
        return this.tope.valor // Retorna el valor
    }

    // Método verificar si la pila está vacía
    isEmpty(): boolean {
        return this.tope === null // Está vacía si el tope es null
    }

    // Método tamaño de la pila
    size(): number {
        let contador = 0
        let actual = this.tope
        // Iterar entre nodos y los cuenta, dice el número de elementos
        while (actual) {
            contador++
            actual = actual.siguiente
        }
        return contador // Retorna cantidad de elementos en la pila
    }

    // Método limpiar la pila, eliminando todos los elementos
    clear(): void {
        this.tope = null // El tope será null, indicando pila está vacía
    }
}

// Ejemplo de uso
const pila = new Pila<number>()

// Agregando elementos a la pila
pila.push(7)
pila.push(20)
pila.push(52)

console.log("Elemento tope:", pila.peek()) // Muestrar elemento en el tope

console.log("Desapilando elementos:")
while (!pila.isEmpty()) {
    console.log(pila.pop()) // Desapilar elementos y mostrarlos
}

// Agregar elementos para demostrar otros métodos
pila.push(10)
pila.push(24)
pila.push(36)

// Mostrar tamaño de la pila
console.log("Tamaño de la pila:", pila.size())

// Verificar si la pila está vacía
console.log("¿La pila está vacía?:", pila.isEmpty())

// Limpiar la pila
pila.clear()

// Verificar nuevamente si la pila está vacía después de limpiarla
console.log("¿La pila está vacía después de limpiar?:", pila.isEmpty())

// Agregar algunos elementos nuevamente
pila.push(27)
pila.push(80)
pila.push(19)

// Mostrar el nuevo tamaño de la pila
console.log("Nuevo tamaño de la pila:", pila.size())

// Ver el elemento en el tope
console.log("Elemento actual en el tope:", pila.peek())

// Remover todos los elementos de la pila
console.log("Desapilando elementos nuevamente:")
while (!pila.isEmpty()) {
    console.log(pila.pop())
}

// Verificar si la pila está vacía al final
console.log("¿La pila está vacía al final?:", pila.isEmpty())
