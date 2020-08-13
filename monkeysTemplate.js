$(() => {
    renderMonkey();

    function renderMonkey() {
        let src = document.getElementById('monkeyCard').innerHTML;
        let monkeySelect = document.getElementById('monkey-template').innerHTML;

        let template = Handlebars.compile(monkeySelect);
        Handlebars.registerPartial('monkeyCard', src);

        let container = document.getElementById('monkeys');

        container.innerHTML = template({monkeys});

        let button = document.querySelectorAll(".infoButton");

        for(let i = 0; i < button.length; i++){
            button[i].addEventListener('click', function(){
                let display = this.nextSibling.nextSibling;
                $(display).toggle();
                console.log(display);
            });
        }

    }
});