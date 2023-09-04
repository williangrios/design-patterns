// Component
export abstract class ProductComponent {
    abstract getPrice(): number;
    // add(product: ProductComponent): void { }
    // remove(product: ProductComponent): void { }
}

// Leaf
export class ProductLeaf extends ProductComponent {
    constructor(public name: string, public price: number) {
        super()
    }
    getPrice(): number {
        return this.price
    }
}

// Composite
export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = []
    add(...products: ProductComponent[]): void {
        products.forEach(product => this.children.push(product))
    }
    remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product)
        if (productIndex !== -1) {
            this.children.splice(productIndex, 1)
        }
    }
    getPrice(): number {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0)
    }
}

