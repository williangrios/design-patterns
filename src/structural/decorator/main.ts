import { ItemAccomodationDecorator } from "./item/ItemAccomodationDecorator";
import { ItemDecorator } from "./item/ItemDecorator";
import { Ticket } from "./item/Ticket";

const ticket = new Ticket()
console.log(ticket.getName());
console.log(ticket.getPrice());

const decoratedTicket = new ItemDecorator(ticket)
console.log(decoratedTicket.getName());
console.log(decoratedTicket.getPrice());

const decoratedTicketWithAccomodation = new ItemAccomodationDecorator(ticket)
console.log(decoratedTicketWithAccomodation.getName());
console.log(decoratedTicketWithAccomodation.getPrice());

const decoratedTicketWithTwoAccomodation = new ItemAccomodationDecorator(decoratedTicketWithAccomodation)
console.log(decoratedTicketWithTwoAccomodation.getName());
console.log(decoratedTicketWithTwoAccomodation.getPrice());

