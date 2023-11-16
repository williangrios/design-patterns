interface Observable{
    subscribe(...observer: Observer[]): void
    unsubscribe(observer: Observer): void
    notify(): void
}

interface Observer{
    update(...args: unknown[]): void
}

// Concrete Observable
class InputObservable implements Observable{
    private observers: Observer[] = []
    
    constructor(public element: HTMLInputElement){}
    
    subscribe(...observers: Observer[]): void {
        observers.forEach(observer => {
            if (!this.observers.includes(observer)){
                this.observers.push(observer)
            }
        })
    }

    unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)
        if (observerIndex !== -1){
            this.observers.splice(observerIndex, 1)
        }
    }

    notify(): void {
        this.observers.forEach(observer => observer.update(this))
    }
}

// Concrete Observer
class ParagraphObserver implements Observer{
    constructor(public element: HTMLParagraphElement){

    }

    update(observable: InputObservable): void {
        if (observable instanceof InputObservable){
            this.element.innerText = observable.element.value
        }
    }
}

// Concrete Observer
class DivObserver implements Observer{
    constructor(public element: HTMLDivElement){

    }

    update(observable: InputObservable): void {
        if (observable instanceof InputObservable){
            this.element.innerText = observable.element.value
        }
    }
}


// Client code
function makeInput(): HTMLInputElement {
    const input = document.createElement('input')
    document.body.appendChild(input)
    return input
}

function makeParagraph(): HTMLParagraphElement {
    const p = document.createElement('p')
    p.innerText = 'Texto inicial do paragrafo'
    document.body.appendChild(p)
    return p
}

function makeDiv(): HTMLParagraphElement {
    const div = document.createElement('div')
    div.innerText = 'Texto inicial da div'
    document.body.appendChild(div)
    return div
}

const input1 = new InputObservable(makeInput())
const p1 = new ParagraphObserver(makeParagraph())
const p2 = new ParagraphObserver(makeParagraph())
const div1 = new DivObserver(makeDiv())

input1.subscribe(p1, p2, div1)

input1.element.addEventListener('keyup', function () {
    input1.notify()
})

input1.unsubscribe(p2)