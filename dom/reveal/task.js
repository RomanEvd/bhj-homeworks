let banners = document.querySelectorAll('.reveal');
let viewPortSize = window.innerHeight;

window.addEventListener('scroll', function() {
    for (let item of banners) {
        const ads = {tob, bottom} = item.getBoundingClientRect();
        if ((viewPortSize >= 0) && (ads.bottom >= 0)) { 
            item.classList.add('reveal_active');
        }
        else {
            item.classList.remove('reveal_active');
        }
    }
});