let app = document.querySelector(".password-generator");
app.querySelector(".length input").addEventListener("input", function(){
    app.querySelector(".length span").innerText = app.querySelector(".length input").value;
});
app.querySelector("#generate-password").addEventListener("click", function(){
    let settings = {
        length: app.querySelector(".length input").value,
        numbers: app.querySelector(".settings #setting-number").checked,
        specialchars: app.querySelector(".settings #setting-specialchar").checked,
    };
    let specialCharArr =["@","#","$","%","^","&","*",".","_"];
    let password = "";
    for(let i=0; i<settings.length;i++){
        let r = Math.random();
        if(r > 0.8 && settings.numbers){
            password += Math.trunc(Math.random()*9);
        } else if(r > 0.5){
            password += String.fromCharCode(Math.trunc(Math.random()*26)+65);
        } else {
            password += String.fromCharCode(Math.trunc(Math.random()*26)+97);
        }
        if(r < 0.4 && settings.specialchars){
            password += specialCharArr[Math.trunc(Math.random()*specialCharArr.length)];
            i++;
        }
        app.querySelector(".head .password").innerText = password;
    }
});