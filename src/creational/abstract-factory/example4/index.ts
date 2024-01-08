interface Button{
    render(): void
    onClick(f: Function): void 
}

class WindowsButton implements Button{
    render(): void {
        console.log('Render a button in a windows style')
    }
    onClick(f: Function): void {
        console.log('Windows button clicked')
        f()
    }
    
}

class MacOSButton implements Button{
    render(): void {
        console.log('Render a button in a MacOS style')
    }
    onClick(f: Function): void {
        console.log('MacOS button clicked')
        f()
    }
    
}

interface CheckBox{
    render(): void
    toggle(): void
}

class WindowsCheckBox implements CheckBox{
    constructor(private button: Button){

    }
    
    render(): void {
        console.log('Render a checkbox in a Windows style')
    }
    
    toggle(): void {
        this.button.onClick(() => console.log('Windows checkbox toggled'))
    }
}

class MacOSCheckBox implements CheckBox{
    constructor(private button: Button){
    
    }

    render(): void {
        console.log('Render a checkbox in a MacOS style')
    }
    
    toggle(): void {
        this.button.onClick(() => console.log('MacOS checkbox toggled'))
    }
}

interface GUIFactory{
    createButton(): Button    
    createCheckBox(button: Button): CheckBox
}

class WindowsFactory implements GUIFactory{
    createButton(): Button {
        return new WindowsButton()
    }
    
    createCheckBox(button: Button): CheckBox {
        return new WindowsCheckBox(button)
    }
}

class MacOSFactory implements GUIFactory{
    createButton(): Button {
        return new MacOSButton()
    }
    
    createCheckBox(button: Button): CheckBox {
        return new MacOSCheckBox(button)
    }
}

// client code
function renderUI(factory: GUIFactory){
    const button = factory.createButton()
    const checkBox = factory.createCheckBox(button)
    button.render()
    checkBox.render()
    button.onClick(() => {
        console.log('Button clicked')
    })
    checkBox.toggle()
}

renderUI(new WindowsFactory())
renderUI(new MacOSFactory())