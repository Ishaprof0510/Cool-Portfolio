const mouthClose = document.querySelector('.closed')
const eyesClose = document.querySelector('.open')


mouthClose.addEventListener('click', () => {
    if (eyesClose.classList.contains('open')) { 
        eyesClose.classList.add('active');
        mouthClose.classList.remove('active');
    }
    });

    eyesClose.addEventListener('click', () => {
        if (mouthClose.classList.contains('closed')) { 
            mouthClose.classList.add('active');
            eyesClose.classList.remove('active');
        }
        });
