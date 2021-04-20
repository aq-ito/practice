document.addEventListener("DOMContentLoaded", function(event) {

    var element = document.getElementById('contents_slide');
    var childs = element.children;
    var newElement = document.getElementById('new_slide');
    var newChilds = newElement.children;

    var click_flg = 1;

    // element children -> HTMLCollection　-> Element
    // element childNodes -> NodeList -> すべて

    var conLeft = document.getElementById('conLeft');
    var conRight = document.getElementById('conRight');
    var newLeft = document.getElementById('newLeft');
    var newRight = document.getElementById('newRight');

    conLeft.addEventListener('click',slideLeft1,false);
    conRight.addEventListener('click',slideRight1,false);
    newLeft.addEventListener('click',slideLeft2,false);
    newRight.addEventListener('click',slideRight2,false);
    
    var autoSlide = 5300;
    var loop = setInterval(slider,autoSlide);
    var windowSize = 767;

    function slider(){
        var intViewportWidth = window.innerWidth;
        if(intViewportWidth > windowSize && click_flg == 1){
            var firstChil = childs[0];
            var lastChil = childs[childs.length - 1];
            var clone = firstChil.cloneNode(true);
            var position = 0;

            var update = function(){
                click_flg =  0;
                var time = setTimeout(update,1);
                position = position - 4;
                element.style.left = position + "%";

                if(position <= -100){
                    clearTimeout(time);
                    click_flg = 1;
                }
            }
            update();

            element.removeChild(firstChil);
            element.appendChild(clone);
        }else if(intViewportWidth <= windowSize){
            loop = false;
        }else{
            return false;
        }
    }

    function slideLeft1(){
        if(click_flg == 1){
            var firstChil = childs[0];
            var lastChil = childs[childs.length - 1];
            var clone = firstChil.cloneNode(true);
            var position = 0;
            click_flg = 0;
            clearInterval(loop);
            
            var update = function(){
                var time = setTimeout(update,1);
                position = position - 4;
                element.style.left = position + "%";

                if(position <= -100){
                    clearTimeout(time);
                    click_flg = 1;
                    loop = setInterval(slider,autoSlide);
                }
            }
            update();

            element.removeChild(firstChil);
            element.appendChild(clone);
        }else{
            return false;
        }
    }

    function slideRight1(){
        if(click_flg == 1){
            var lastChil = childs[childs.length - 1];
            var firstChil = childs[0];
            var clone = lastChil.cloneNode(true);
            var position = -200;
            click_flg = 0;
            clearInterval(loop);

            var update = function(){
                var time = setTimeout(update,1);
                position = position + 4;
                element.style.left = position + "%";

                if(position >= -100){
                    clearTimeout(time);
                    click_flg = 1;
                    loop = setInterval(slider,autoSlide);
                }
            }
            update();

            element.removeChild(lastChil);
            element.insertBefore(clone,firstChil);
        }else{
            return false;
        }
    }

    function slideLeft2(){
        if(click_flg == 1){
            var firstChil = newChilds[0];
            var lastChil = newChilds[newChilds.length - 1];
            var clone = firstChil.cloneNode(true);
            var position = 0;

            var update = function(){
                click_flg = 0;
                var time = setTimeout(update,1);
                position = position - 4;
                newElement.style.left = position + "%";

                if(position <= -100){
                    clearTimeout(time);
                    click_flg = 1;
                }
            }
            update();

            newElement.removeChild(firstChil);
            newElement.appendChild(clone);
        }else{
            return false;
        }
    }

    function slideRight2(){
        if(click_flg == 1){
            var lastChil = newChilds[newChilds.length - 1];
            var firstChil = newChilds[0];
            var clone = lastChil.cloneNode(true);
            var position = -200;
            
            var update = function(){
                click_flg = 0;
                var time = setTimeout(update,1);
                position = position + 4;
                newElement.style.left = position + "%";

                if(position >= -100){
                    clearTimeout(time);
                    click_flg = 1;
                }
            }      
            update();   
                newElement.removeChild(lastChil);
                newElement.insertBefore(clone,firstChil);
        }else{
            return false;
        }
    }
  });
