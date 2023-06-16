
const questions = document.querySelectorAll('.question');

questions.forEach(function (question){

    const btn = question.querySelector('.question__btn');

    btn.addEventListener('click', function(){
        
        questions.forEach(function (item){

            if(item !== question){

                item.classList.remove('show__text')
            }
        });

        question.classList.toggle('show__text')
    });
});