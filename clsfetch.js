class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
}

async function users(){
    try{
    let url='https://jsonplaceholder.typicode.com/users/1';
    let response= await fetch(url);
    let data= await response.json();
    let usr=new User(data.name,data.email)
    console.log(usr.name);
    console.log(usr.email);
    console.log(usr instanceof User)

    }catch(error){
        console.log(error)
    }
    
}

users()