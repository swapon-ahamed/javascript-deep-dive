// state - data to be managed in app
// state -> status

class App {
    constructor() {
      this.state = {
        isAuth : false,
        error: ''
      }

      this.checkAuth();
      this.render();
    //   this.$userMessage = document.getElementById("user-message");
      
    }
  
    checkAuth() {
      const user = false;
      if (user) {
        this.state = { ...this.state, isAuth: true }
        // this.$userMessage.textContent = "Welcome back!";
      } else {
        this.state = { ...this.state, error: 'You must sign in!' }
        // this.$userMessage.textContent = this.state.error;
        // this.$userMessage.style.color = "red";
      }
    }
  
    render() {
        const {isAuth, error} = this.state;
      document.getElementById("root").innerHTML = `
        <div style="color: ${error && 'red' }">
         ${isAuth ? 'Welcome Back!' : error}
        </div>
      `;
    }
  }
  
  new App();