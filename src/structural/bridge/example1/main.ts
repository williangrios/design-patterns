import { Radio } from "./example1/device/radio";
import { Tv } from "./example1/device/tv";
import { RemoteControl } from "./example1/remote-control/remote-control";
import { RemoteControlWithVolume } from "./example1/remote-control/remote-control-with-volume";

function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void{
    abstraction.togglePower()

    // type guard
    if (!('volumeUp' in abstraction))  return
    abstraction.volumeUp()
    abstraction.volumeUp()
    abstraction.volumeDown()
}

const radio = new Radio()
const radioRemoteControl = new RemoteControl(radio)
clientCode(radioRemoteControl)

const radioRemoteControlWithVolume = new RemoteControlWithVolume(radio)
clientCode(radioRemoteControlWithVolume)

const tv = new Tv()
const tvRemoteControl = new RemoteControl(tv)
clientCode(tvRemoteControl)

const tvRemoteControlWithVolume = new RemoteControlWithVolume(tv)
clientCode(tvRemoteControlWithVolume)