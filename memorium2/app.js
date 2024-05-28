const emojis = ["🥰","🥰","😘","😘","😡","😡","🤯","🤯","👺","👺","👍","👍","🕵️‍♂️","🕵️‍♂️","👽","👽"];


var shu_emojis = emojis.sort(()=> (Math.random() > .5) ? 2 : -1);
for(var i = 0; i < emojis.length;i++)
{
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shu_emojis[i];

    box.onclick = function() {
        this.classList.add('boxOpen');
        var openBoxes = document.querySelectorAll('.boxOpen');
        if (openBoxes.length > 1) {
            setTimeout(function() {
                if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                    openBoxes.forEach(function(box) {
                        box.classList.add('boxMath');
                        box.classList.remove('boxOpen');
                    });
                    if (document.querySelectorAll('.boxMath').length === emojis.length) {
                        alert('¡Has ganado!');
                    }
                } else {
                    setTimeout(function() {
                        openBoxes.forEach(function(box) {
                            box.classList.remove('boxOpen');
                        });
                    }, 500);
                }
            }, 100);
        }
    }
    document.querySelector('.game').appendChild(box);
}