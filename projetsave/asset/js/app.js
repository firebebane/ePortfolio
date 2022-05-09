document.addEventListener("DOMContentLoaded", () => {
    console.log(navigator.userAgent);


    // button page formulaire
    const button1 = document.getElementById("a8424us");

    if (button1) {
        button1.addEventListener('click', (event) => {
            location.href = "./asset/src/formulaire.html";
        })

    }


    const form = document.querySelector("form");

    if (form) {

        const v0 = document.forms[0].elements[0];
        const v1 = document.forms[0].elements[1];
        const v2 = document.forms[0].elements[2];
        const v3 = document.forms[0].elements[3];
        const v4 = document.forms[0].elements[4];

        document.forms[0].addEventListener("submit", function(e) {

            e.preventDefault();


            sessionStorage.setItem('Name', document.forms[0].elements[0].value);
            sessionStorage.setItem('Prenom', document.forms[0].elements[1].value);
            sessionStorage.setItem('E-Mail', document.forms[0].elements[2].value);
            sessionStorage.setItem('Ville', document.forms[0].elements[3].value);
            sessionStorage.setItem('Pays', document.forms[0].elements[4].value);



            msgalert.classList.remove('msgalertprint');
            msgalert.classList.add('msgalertprint2');


            setTimeout(() => {
                msgalert.classList.remove('msgalertprint2');
                msgalert.classList.add('msgalertprint');

                setTimeout(() => {
                    location.href = '../../web.html';
                }, 500);
            }, 4000);
        })

        const msgalert = document.createElement("section");
        let screengui = document.getElementById("screengui");
        screengui.appendChild(msgalert);
        msgalert.setAttribute("id", "msgalertprint");
        msgalert.setAttribute("class", "msgalertprint");

        const alertmsgp = document.createElement("p");
        msgalert.appendChild(alertmsgp);
        alertmsgp.innerHTML = "vous avez etes inscript";
        alertmsgp.setAttribute("class", "alert");
    }
})