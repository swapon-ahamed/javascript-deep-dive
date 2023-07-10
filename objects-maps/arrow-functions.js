const user = {
    username: 'swapon.ahamed',
    email: 'swapon.ahamed@gmail.com',
    name: 'Swapn Ahamed',
    getBio(){
        return `My name is ${this.name}.`
    },
    getDetails(){
        let that = this;
        setTimeout(function(){
            console.log( `Not available this keyword: My name is ${that.name}, username: ${that.username} and E-mail: ${that.email}`);
        },2000);
    },
    getDetailsToArrow(){
       setTimeout( () => {
        console.log( `Available this keyword: My name is ${this.name}, username: ${this.username} and E-mail: ${this.email}`);
       },3000)
    }
}

console.log('getBio: ', user.getBio());
 user.getDetails();
 user.getDetailsToArrow();