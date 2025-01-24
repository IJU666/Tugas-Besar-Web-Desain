function cekLogin() {
        
    var usn = (document.login.username.value);
    var pass = (document.login.pass.value);

    if (usn == "mahasiswa1" && pass == "123") {
       
        window.location.href="./dashboard.html";
    } else{
        alert("Username atau Password tidak sesuai");
    }
}
