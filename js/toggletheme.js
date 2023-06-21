   
    const switchThemeBtn = document.querySelector('.changeTheme')
    let toggleTheme = 0;
    

    switchThemeBtn.addEventListener('click', () => {

        if(toggleTheme === 0) {

            document.documentElement.style.setProperty('--body-color', '#fcf5eb');
            document.documentElement.style.setProperty('--color-light', '#0a192f');
            document.documentElement.style.setProperty('--blue', '#4588e0');

            // changer le theme de la navbar
            document.querySelector('#navbar').setAttribute('data-bs-theme', 'light');

            toggleTheme++;

        } else {

            document.documentElement.style.setProperty('--body-color', '#0a192f');
            document.documentElement.style.setProperty('--color-light', '#fcf5eb');
            document.documentElement.style.setProperty('--blue', '#64ffda');
            // changer le theme de la navbar
            document.querySelector('#navbar').setAttribute('data-bs-theme', 'dark');
            toggleTheme--;

        }


    })
    

