class Amplifier{
    constructor(){
        
    }

    public turnOn(): void{
        console.log('Amplifier is turned On')
    }
    
    public setVolume(level: number): void {
        console.log('volume is set to: ', level)
    }
}

class DVDPlayer{
    constructor(){
        
    }
    public turnOn(): void{
        console.log('DVD Player is turned On')
    }
    public play(movie: string){
        console.log ('Playing:', movie)
    }
}

class Projector{
    constructor(){
        
    }
    public turnOn(): void{
        console.log('Projector is turned On')
    }
    public setInput(dvdPlayer: DVDPlayer){
        console.log('Input set to DVDPlayer')
    }
}

class Lights{
    constructor(){
        
    }
    public dim(level: number): void{
        console.log('Lights dimmed to', level)
    }
}

class HomeTheaterFacade{
    constructor(private amplifier: Amplifier, private dvdPlayer: DVDPlayer, private projector: Projector, private lights: Lights){
    
    }

    public watchMovie(movie: string, volume: number, lights: number){
        console.log('Get ready to watch: ', movie)
        this.lights.dim(lights)
        this.amplifier.turnOn()
        this.amplifier.setVolume(volume)
        this.dvdPlayer.turnOn()
        this.projector.turnOn()
        this.projector.setInput(this.dvdPlayer)
        this.dvdPlayer.play(movie)
    }
}

// client code
const amplifier = new Amplifier()
const dvdPlayer = new DVDPlayer()
const projector = new Projector()
const lights = new Lights()
const homeTheaterFacade = new HomeTheaterFacade(amplifier, dvdPlayer, projector, lights)
homeTheaterFacade.watchMovie('Exterminator', 12, 2)