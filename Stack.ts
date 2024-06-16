class NodoLista<T> {
    valor: T
    siguiente: NodoLista<T> | null

    constructor(valor: T) {
        this.valor = valor
        this.siguiente = null
    }
}

class Pila<T> {
    private tope: NodoLista<T> | null

    constructor() {
        this.tope = null
    }

    // Método para agregar un elemento en la parte superior de la pila
    push(elemento: T): void {
        const nuevoNodo = new NodoLista<T>(elemento)
        if (!this.tope) {
            // Si la pila está vacía, el nuevo nodo se convierte en el tope
            this.tope = nuevoNodo
        } else {
            // Si la pila no está vacía, el nuevo nodo apunta al nodo anteriormente en el tope
            nuevoNodo.siguiente = this.tope
            // El nuevo nodo se convierte en el nuevo tope
            this.tope = nuevoNodo
        }
    }

    // Método para remover y devolver el elemento superior de la pila
    pop(): T | undefined {
        if (!this.tope) return undefined; // Si la pila está vacía, no se puede sacar ningún elemento
        const elementoSacado = this.tope.valor
        this.tope = this.tope.siguiente // El nodo siguiente al tope se convierte en el nuevo tope
        return elementoSacado
    }

    // Método para obtener el elemento superior de la pila sin removerlo
    peek(): T | undefined {
        if (!this.tope) return undefined // Si la pila está vacía, no hay ningún elemento en el tope
        return this.tope.valor // Retorna el valor del tope de la pila
    }

    // Método para verificar si la pila está vacía
    isEmpty(): boolean {
        return this.tope === null // La pila está vacía si el tope es null
    }

    // Método para obtener el tamaño de la pila
    size(): number {
        let contador = 0
        let actual = this.tope
        while (actual) {
            contador++
            actual = actual.siguiente
        }
        return contador // Retorna la cantidad de elementos en la pila
    }

    // Método para limpiar la pila, eliminando todos los elementos
    clear(): void {
        this.tope = null // El tope se vuelve null, lo que indica que la pila está vacía
    }
}

// Ejemplo de uso
const pila = new Pila<number>()
pila.push(2)
pila.push(3)
pila.push(5)

console.log("Elemento en el tope:", pila.peek())

console.log("Desapilando elementos:")
while (!pila.isEmpty()) {
    console.log(pila.pop())
}