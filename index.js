

let Email = document.getElementById('Email').value;
let password = document.getElementById('password').value;


function adUser(){


let a =[
    {
        email: 'salom@gmail.com',
        pasword:1234
    },
    {
        email: 'salim@gmail.com',
        pasword:12345
    },
    {
        email: 'rustam@gmail.com',
        pasword:123456
    },
    {
        email: 'ali@gmail.com',
        pasword:1234567
    }
]

for(let i=0; i <= a.lenth-1; i++){

    if( Email === a[i].email && password === a[i].pasword){
    alert('Xush kelibsiz')
    } else{
    alert('Login yoki parol xato')
    }
}


}