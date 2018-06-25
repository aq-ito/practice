document.addEventListener("DOMContentLoaded", function(event) {

    var newDate = document.getElementsByClassName("newDate");
    var newImg = document.getElementsByClassName("newImage");
    var newName = document.getElementsByClassName("item_name");

    var slideEle = document.getElementById("new_slide");
    var slideChilds = slideEle.children;

    var newEle1 = document.getElementsByClassName("new_contents");
    var newChilds1 = newEle1[0].children;
    for(var i=0; i<9; i++){
        var newCopyChil = newChilds1[0];
        var newClone = newCopyChil.cloneNode(true);

        newEle1[0].appendChild(newClone);
    }

    var slideEle = document.getElementById("new_slide");
    var slideChilds = slideEle.children;
    for(var i=0; i<2; i++){
        var slideCopyChil = slideChilds[0];
        var slideClone = slideCopyChil.cloneNode(true);

        slideEle.appendChild(slideClone);
    }

    fetch('./json/list_item.json').then(function(response){
        return response.json();
    }).then(function(data){
        for(var i=0; i < 30; i++){

            newDate[i].textContent = data.item_list[i].item_date;
            newImg[i].src = data.item_list[i].img.src;
            newImg[i].alt = data.item_list[i].img.title;
            newName[i].textContent = data.item_list[i].item_name;
        }
    });

    var recEle = document.getElementsByClassName("recommend_contents");
    var recChilds = recEle[0].children;

    for(var j=0; j<4; j++){
        var recCopyChil = recChilds[j];
        var recClone = recCopyChil.cloneNode(true);

        recEle[0].appendChild(recClone);
    }

    var ulEle = document.getElementById("ul_newsContents");
    var ulChilds = ulEle.children;

    for(var j=0; j<3; j++){
        var ulCopyChil = ulChilds[j];
        var ulClone = ulCopyChil.cloneNode(true);

        ulEle.appendChild(ulClone);
    }

    var ele = document.getElementsByClassName("release_date");
    var con = document.getElementsByClassName("news_contents");

    fetch('./json/list_news.json').then(function(response){
        return response.json();
    }).then(function(data){
            for(var j=0; j<4; j++){
                ele[j].textContent = data.news[j].date;
                con[j].textContent = data.news[j].content;
            }
        });
});