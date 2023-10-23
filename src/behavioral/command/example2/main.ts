import { LightIntensityCommand } from "./light-intensity-command";
import { LightPowerCommand } from "./light-power-command";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

// receiver
const bedRoomLight = new SmartHouseLight('Luz do quarto')
const bedRoomIntensityCommand = new LightIntensityCommand(bedRoomLight)
const bathRoomLight = new SmartHouseLight('Luz do banheiro')

// command
const bathLightPowerCommand = new LightPowerCommand(bathRoomLight)
const bedRoomLightPowerCommand = new LightPowerCommand(bedRoomLight)

// controle - invoker
const smartHouseApp = new SmartHouseApp()
smartHouseApp.addCommand('btn-1', bathLightPowerCommand)
smartHouseApp.addCommand('btn-2', bedRoomLightPowerCommand)
smartHouseApp.addCommand('btn-3', bedRoomIntensityCommand)
smartHouseApp.executeCommand('btn-1')
smartHouseApp.undoCommand('btn-1')

smartHouseApp.executeCommand('btn-3')
smartHouseApp.executeCommand('btn-3')
smartHouseApp.executeCommand('btn-3')
smartHouseApp.executeCommand('btn-3')
smartHouseApp.executeCommand('btn-3')
smartHouseApp.executeCommand('btn-3')
smartHouseApp.executeCommand('btn-3')
smartHouseApp.undoCommand('btn-3')
smartHouseApp.undoCommand('btn-3')
smartHouseApp.undoCommand('btn-3')