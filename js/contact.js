function Kontact(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let exampleInputEmail1 = document.getElementById("exampleInputEmail1").value;
    let exampleInputPhone = document.getElementById("exampleInputPhone").value;
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1").value;
    let sms = document.getElementById("sms")

    if(name == "" || surname == "" || exampleInputEmail1 == "" || exampleInputPhone == "" || exampleFormControlTextarea1 == ""){
        sms.textContent = "Fill all the fields"
        sms.style.color = "red"
    }else{
        sms.textContent = "Thank you " + name + " " + surname +" !";
    }
}