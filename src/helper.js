export function genTicket(length) {
    const ticket = [];
    for (let i = 0; i < length; i++) {
        ticket.push(Math.floor(Math.random() * 10)); // numbers from 0–9
    }
    return ticket;
}

export function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
