import Channel from "../../../src/behavioral/mediator/example1/Channel"
import Participant from "../../../src/behavioral/mediator/example1/Participant"

test('deve criar um chat entre participantes', function(){
    const participantA = new Participant("A")
    const participantB = new Participant("B")
    const participantC = new Participant("C")
    participantB.receive(participantA, "Hello")
    participantC.receive(participantA, "Hello")
    expect(participantB.messages[0]).toBe("Participant B recebeu a mensagem Hello do participante A")
    expect(participantC.messages[0]).toBe("Participant C recebeu a mensagem Hello do participante A")
})

test('deve criar uma sala de  chat entre participantes', function(){
    const participantA = new Participant("A")
    const participantB = new Participant("B")
    const participantC = new Participant("C")
    const channel = new Channel()
    channel.register(participantA)
    channel.register(participantB)
    channel.register(participantC)
    channel.boradCast(participantA, "Hello")
    
    expect(participantB.messages[0]).toBe("Participant B recebeu a mensagem Hello do participante A")
    expect(participantC.messages[0]).toBe("Participant C recebeu a mensagem Hello do participante A")
})

test('deve mandar uma mensagem de um participante para outro', function(){
    const participantA = new Participant("A")
    const participantB = new Participant("B")
    const participantC = new Participant("C")
    const channel = new Channel()
    channel.register(participantA)
    channel.register(participantB)
    channel.register(participantC)
    channel.message(participantA, participantB, "Hello")
    
    expect(participantB.messages[0]).toBe("Participant B recebeu a mensagem Hello do participante A")
})