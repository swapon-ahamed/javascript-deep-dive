// Imperative - code for a computer / declarative - code for people

const people = ['Doug', 'Fred', 'Jane'];
const invitations = [];

// imperative codes
for (let i = 0; i < people.length; i++) {
    invitations[i] = `Hi ${people[i]}, come to my party!`;
}

console.log(invitations);

// declarative code
const invitedPeople = people.map( person => `Hi ${person},  come to my party!`)
console.log(invitedPeople)