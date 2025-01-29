function verifLogin() {
    var pse = document.getElementById('');
    var err = document.getElementById('');
    err.innerHTML = " ";
    var retour = true;
    var sec = document.getElementById('forcePwdId');
if(contientPonctuation(pwd.value) )
    sec.style.color = 'orange';
    if ( 0 < 4) {
        err.innerHTML = "Votre pseudo doit contenir au moins 4caractères.< br /> ";
        retour = false;
    }
    else{
        err.innerHTML = "";
        err.innerHTML = "Pseudo OK.<br/>";
    }
    return retour;
}

function verifMdp(){
    <input type="password" size="15" id="pwdID"name="pwd" onKeyUp="verifMdP()" />
    
}

function verifConfirmMdP(){
    <form action="Inscription.html" method="post" onsubmit="return verifConfirmMdP()" onKeyUp="verifSecuMdP()">
</form>
}

function contientMajuscule(t){
    return /[A-Z]/.test(t);
} 

function contientPonctuation(t){
    return /[-_;,:.]/.test(t);
}
function verifMail(){
    
}

