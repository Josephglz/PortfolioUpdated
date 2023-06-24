function hidePages()
{
    document.getElementById('home').classList.remove('hidden');
    document.getElementById('about').classList.remove('hidden');
    document.getElementById('education').classList.remove('hidden');
    document.getElementById('experience').classList.remove('hidden');
    document.getElementById('portfolio').classList.remove('hidden');
    document.getElementById('contact').classList.remove('hidden');
}

function clearSectionStyle(section) {
    document.getElementById(section).classList.remove('underline');
    document.getElementById(section).classList.remove('decoration-orangeHighlight');
}

function changePage(page)
{
    hidePages();
    var menu = document.getElementById('menu-active');
    switch(page)
    {
        case 'home':
            document.getElementById('home').classList.remove('hidden');
            menu.classList.add('hidden');
            break;

        case 'about':
            document.getElementById('about').classList.remove('hidden');
            menu.classList.remove('hidden');
            break;

        case 'education':
            document.getElementById('education').classList.remove('hidden');
            menu.classList.remove('hidden');
            break;

        case 'experience':
            document.getElementById('experience').classList.remove('hidden');
            menu.classList.remove('hidden');
            break;

        case 'portfolio':
            document.getElementById('portfolio').classList.remove('hidden');
            menu.classList.remove('hidden');
            break;

        case 'contact':
            document.getElementById('contact').classList.remove('hidden');
            menu.classList.remove('hidden');
            break;

        default:
            document.getElementById('home').classList.remove('hidden');
            menu.classList.add('hidden');
            break;

    }
}
