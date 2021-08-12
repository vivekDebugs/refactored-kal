const headerStyling = () => {

    const header = document.querySelector('header');
    header.classList.toggle('headerStyling');

    window.onscroll = function() { 
        if (document.body.scrollTop > 90 || 
            document.documentElement.scrollTop > 90) 
        { 
            header.classList.remove('headerStyling');
            header.classList.add('header-shrink');
        } 
        else { 
            header.classList.add('headerStyling');
            header.classList.remove('header-shrink');
        } 
    };

}
headerStyling();

