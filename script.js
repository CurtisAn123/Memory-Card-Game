const cards = document.querySelectorAll('.card');

let firstRevealed = false;
// fix clicking multiple icons bug
let lock = false;
let first, second;

// randomize
cards.forEach(card => {
    let random = Math.floor(Math.random() * 36);
    card.style.order = random;
}
)

function reveal() {
    if (!lock && this !== first) {
        this.classList.add('reveal');

        if (!firstRevealed) {
            firstRevealed = true;
            first = this;
        } else {
            firstRevealed = false;
            second = this;
    
            if (first.dataset.framework === second.dataset.framework) {
                first.removeEventListener('click', reveal);
                second.removeEventListener('click', reveal);
            } else {
                lock = true;

                setTimeout(function() {
                    first.classList.remove('reveal');
                    second.classList.remove('reveal');
                }, 1500);

                lock = false;
            }
    
        }
    }
}

cards.forEach(card => card.addEventListener('click', reveal));