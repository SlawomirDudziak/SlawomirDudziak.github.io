let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('blue');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for(var i=0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log(mode);
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'light.css';
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css';
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css';
    }
    localStorage.setItem('theme', mode);
}

jQuery(function($) {
    const scrollTime = 1000;
    $.scrollTo(0);
    $('#navtech').click(function() { $.scrollTo($('#about-me'), scrollTime)});
    $('#navproj').click(function() { $.scrollTo($('#projects'), scrollTime)});
    $('#navhob').click(function() { $.scrollTo($('#hobbies'),scrollTime)});
    $('#topBtn').click(function() { $.scrollTo($('body'), scrollTime)});
});

$(window).scroll(function(){
    if($(this).scrollTop()>300) $('#topBtn').fadeIn();
    else $('#topBtn').fadeOut();
});