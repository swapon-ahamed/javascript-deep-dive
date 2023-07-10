import getDateNow from "./utils/date.js";
import "./utils/date.js";
import getUser from "./utils/getUser.js";
const year = 2019;
// Modules - allow us to share code between files
class App {
    constructor() {
        this.render();
    }

    render() {
        const {name, company} = getUser();
        document.getElementById("root").innerHTML = `
      <div>Date: ${getDateNow()}</div>
      <div>getUser function results should go here</div>
      <div>Name: ${name}</div>
      <div>Company: ${company}</div>
    `;
    }
}

// import / export

new App();
