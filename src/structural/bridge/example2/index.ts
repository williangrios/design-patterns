interface MediaPlayerImplementation{
    playAudio(): void
    playVideo(): void
}

class WindowsMediaPlayer implements MediaPlayerImplementation{
    public playAudio(): void {
        console.log('Playing audio on Windows Media Player');
    }
    public playVideo(): void {
        console.log('Playing video on Windows Media Player');
    }
}

class MacOsMediaPlayer implements MediaPlayerImplementation{
    public playAudio(): void {
        console.log('Playing audio on MacOs Media Player');
    }
    public playVideo(): void {
        console.log('Playing video on MacOs Media Player');
    }
}

abstract class MediaPlayerAbstraction{
    constructor(protected implementation: MediaPlayerImplementation){
    }

    abstract playFile():void   
}

class AudioPlayer extends MediaPlayerAbstraction{
    public playFile(): void{
        this.implementation.playAudio()
    }
}

class VideoPlayer extends MediaPlayerAbstraction{
    public playFile(): void{
        this.implementation.playVideo()
    }
}

// client code

let windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer())
windowsAudioPlayer.playFile()

let macOsVideoPlayer = new VideoPlayer(new MacOsMediaPlayer())
macOsVideoPlayer.playFile()
