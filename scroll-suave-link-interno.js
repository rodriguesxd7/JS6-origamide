const linksInternos = document.querySelectorAll(".js-menu a[href^='#'");

function initScroll () {
    function activeLinksInternos(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((item) => {
        item.addEventListener("click", activeLinksInternos);
    });
}

initScroll();

function initAnimacaoScroll () {
    const sections = document.querySelectorAll('.js-scroll');
        if (sections.length) {
            const windowMetade = window.innerHeight * 0.6; //PEGA O TAMANHO DA TELA E TIRA 60%

                
        function animaScroll () {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible)
                    section.classList.add("ativo");
                else 
                    section.classList.remove("ativo");
            })
        }

        animaScroll();

        window.addEventListener("scroll", animaScroll);
    }
}