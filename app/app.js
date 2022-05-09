document.addEventListener('DOMContentLoaded', () => {
    console.log(navigator.userAgent);

    // variable
    const auth = true;
    const app = document.getElementById("app");
    // boucle de verification de : auth
    if (auth == true) {
        // boucle de verification app
        if (app) {
            // redimension de l'application
            app.style.width = '100%';
            app.style.height = '100%';
            // console.log verification auth et app
            console.log('auth : ' + auth + ' /' + ' app : ' + app);




            const button_menu_1 = document.getElementById('button_menu_1');

            const button_menu_2 = document.getElementById('button_menu_2');

            const button_menu_3 = document.getElementById('button_menu_3');

            const button_menu_4 = document.getElementById('button_menu_4');

            const button_menu_5 = document.getElementById('button_menu_5');

            const button_menu_6 = document.getElementById('button_menu_6');

            const plusbutton = document.getElementById('plusbutton');

            const moinsbutton = document.getElementById('moinsbutton');

            const projetbutton = document.getElementById('projetbutton');
            
            const frames = document.getElementById('frames');

            projetbutton.addEventListener('click',()=>{
                if(projetbutton){
                   
                    if(frames.style.display == 'none'){
                        frames.style.display = 'block';
                    }else{
                        frames.style.display = 'none';
                    }
                }
            })
                document.getElementById('closebckimg').addEventListener('click',()=>{
                    if(closebckimg){
                      if (frames.style.display == 'block') {
                        frames.style.display = 'none';
                      }else{
                        frames.style.display = 'block'
                      }
                    }
                })

            plusbutton.addEventListener('click',()=>{
                const plus = document.getElementById('plus');

                plus.style.display = 'block';

                if(plus.style.display == 'block'){
                    plusbutton.style.display = 'none';
                    moinsbutton.style.display = 'block';
                }
            })

            moinsbutton.addEventListener('click',()=>{

                plus.style.display = 'none';

                if(plus.style.display == 'none'){
                    plusbutton.style.display = 'block';
                    moinsbutton.style.display = 'none';
                }
            })
            // parametre option
            const themesombreinput = document.getElementById('themesombreinput');

            themesombreinput.addEventListener('click',()=>{
                if (themesombreinput.checked == true) {
                    document.body.classList.add('theme_sombre');
                    document.body.classList.remove('theme_clair');
                }else{
                    document.body.classList.remove('theme_sombre');
                    document.body.classList.add('theme_clair');

                }
            })
            

            button_menu_6.addEventListener('click',()=>{
                
                const parametre = document.getElementById('parametre');
                
                if(parametre.style.display == 'none'){
                    parametre.style.display = 'block';
                }else if(parametre.style.display = 'block'){
                    parametre.style.display = 'none';
                }

            })
            
            //boutton du site
            button_menu_1.addEventListener('click', () => {
                window.location = "#";
            })


            button_menu_2.addEventListener('click', () => {

                console.log(button_menu_2.innerHTML);

                const article_1 = document.getElementById('article_1');

                article_1.scrollIntoView({
                    behavior: 'auto',
                    block: 'center',
                    inline: 'center'
                });
            })


            button_menu_3.addEventListener('click', (e) => {

                console.log(button_menu_3.innerHTML);

                const article_2 = document.getElementById('article_2');

                article_2.scrollIntoView({
                    behavior: 'auto',
                    block: 'center',
                    inline: 'center'
                });
            })


            button_menu_4.addEventListener('click', () => {

                console.log(button_menu_4.innerHTML);

                const article_3 = document.getElementById('article_3');

                article_3.scrollIntoView({
                    behavior: 'auto',
                    block: 'center',
                    inline: 'center'
                });
            })


            button_menu_5.addEventListener('click', () => {

                console.log(button_menu_5.innerHTML);

                const article_4 = document.getElementById('article_4');

                const plus = document.getElementById('plus');

                plus.style.display = 'block';

                if(plus.style.display == 'block'){
                    plusbutton.style.display = 'none';
                    moinsbutton.style.display = 'block';
                }

                article_4.scrollIntoView({
                    behavior: 'auto',
                    block: 'center',
                    inline: 'center'
                });
            })

        } else {
            auth = false;
            console.log(auth);
        }
    } else {
        console.log(auth);
        app.remove();
    }
})