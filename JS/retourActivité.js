

/*------------------------------------------------*/
function verifLogin(){
    var pse = document.getElementById('pseudoID');
    var err = document.getElementById('erreurId');
    err.innerHTML="";
    var retour = true;
    if(pse.value.length < 4){
		err.innerHTML = "Votre pseudo doit contenir au moins 4 caractères.<br/>";
		retour = false;
    }
    else{
		err.innerHTML = "";
		err.innerHTML = "Pseudo OK.<br/>";
	}
    return retour;
}

function verifMdP(){
	var pwd = document.getElementById('pwdID');
	var err = document.getElementById('erreurId');
	err.innerHTML="";
    var retour = true;
    if(pwd.value.length < 4){
	err.innerHTML = "Votre mot de passe  doit contenir au moins 4 caractères.<br/>";
	retour = false;
    }
    return retour;
}

function verifConfirmMdP(){
	var pwd = document.getElementById('pwdID');
	var confirm = document.getElementById('confirmPwdID');
    var err = document.getElementById('erreurId');
    err.innerHTML="";
    var retour = true;
   
	if(pwd.value != confirm.value){
	    err.innerHTML +="Vos mots de passe ne coïncident pas.<br/>";
	    retour = false;
    }
    return retour;
}



function contientChiffre(t)
{
    return /\d/.test(t);
}

function contientMajuscule(t)
{
    return /[A-Z]/.test(t);
}

function contientPonctuation(t)
{
    return /[-_;,:.]/.test(t);
}

function verifSecuMdP(){
    var pwd = document.getElementById('pwdID');
    var sec = document.getElementById('forcePwdId');
    if(pwd.value.length >= 5 && pwd.value.length <= 8 && (contientChiffre(pwd.value) || contientMajuscule(pwd.value) || contientPonctuation(pwd.value)) )
	sec.style.color = 'orange';
    else{
		if(pwd.value.length > 8 && (contientChiffre(pwd.value) || contientMajuscule(pwd.value) || contientPonctuation(pwd.value)) )
			sec.style.color = 'green';
		else
	    sec.style.color = 'red';
    }
}


function verifMail() 
{ 
   var reg = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;
   var email = document.getElementById('mailID');
   var err = document.getElementById('erreurId');
   err.innerHTML="";
   var retour = true;
   if (!reg.test(email.value) ) {
			retour=false;
			err.innerHTML +="Mail non valide.<br/>";
			}	

   return retour;
}


function verifTel(){
	var tel = document.getElementById('telID');
	var err = document.getElementById('erreurId');
	err.innerHTML="";
    var retour = true;
    if(tel.value.length != 10){
	err.innerHTML = "Votre numero doit contenir 10 chiffres.<br/>";
	retour = false;
    }
    return retour;
}


function verifForm(){
    var pse = document.getElementById('pseudoID');
    var pwd = document.getElementById('pwdID');
    var confirm = document.getElementById('confirmPwdID');
    var err = document.getElementById('erreurId');
    err.innerHTML="";
    var retour = true;
    if(pse.value.length < 4){
	err.innerHTML = "Votre pseudo doit contenir au moins 4 caractères.<br/>";
	retour = false;
    }
    if(pwd.value.length < 4){
	err.innerHTML += "Votre mot de passe doit contenir au moins 4 caractères.<br/>";
	retour = false;
    }
    else{
	if(pwd.value != confirm.value){
	    err.innerHTML +="Vos mots de passe ne coïncident pas.<br/>";
	    retour = false;
	}
    }
    return retour;
}
