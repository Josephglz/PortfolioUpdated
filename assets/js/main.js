$home = document.querySelector('.home');
$about = document.querySelector('.about');
$education = document.querySelector('.education');
$experience = document.querySelector('.experience');
$portfolio = document.querySelector('.portfolio');
$contact = document.querySelector('.contact');

function hidePages()
{
    $home.classList.add('hidden');
    $about.classList.add('hidden');
    $education.classList.add('hidden');
    $experience.classList.add('hidden');
    $portfolio.classList.add('hidden');
    $contact.classList.add('hidden');
}

function changePage(page)
{
    hidePages();
    switch(page)
    {
        case 'home':
            $home.classList.remove('hidden');
            break;

        case 'about':
            $about.classList.remove('hidden');
            break;

        case 'education':
            $education.classList.remove('hidden');
            break;

        case 'experience':
            $experience.classList.remove('hidden');
            break;

        case 'portfolio':
            $portfolio.classList.remove('hidden');
            break;

        case 'contact':
            $contact.classList.remove('hidden');
            break;

        default:
            $home.classList.remove('hidden');
            break;

    }
}
