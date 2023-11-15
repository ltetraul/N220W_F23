var list = document.querySelectorAll('#codeBox li');
var totalItems = list.length;
var i = 0;
while (i < totalItems) {
    var trashIcon = document.createElement('img');
    trashIcon.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png');
    trashIcon.setAttribute('class', 'listIcon');
    list[i].appendChild(trashIcon);
    i++;
}

var newList = document.querySelectorAll('#codeBox li');
var newItems = newList.length;
var x = 0;
while (x < newItems) {
    var trashIcon = document.createElement('img');
    trashIcon.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png');
    trashIcon.setAttribute('class', 'listIcon');
    newList[x].appendChild(trashIcon);
    x++;
}

var codeBox = document.getElementById('codeBox');
codeBox.addEventListener('click', changeProp, false);
function changeProp(e) {
    var target = getTarget(e);
    var tParent = target.parentNode;
    if(tParent.tagName == 'LI') {
        tParent.remove();
    }
    else if(tParent.tagName == 'UL') {
        target.classList.add('selected');
    }
}

var gray = document.querySelectorAll('#codeBox ul')[0];
gray.addEventListener('click', reInstate, false);
function reInstate(e) {
    var target = getTarget(e);
    var tParent = target.parentNode;
    if (tParent.tagName == 'UL') {
        if (target.setAttribute('class', "selected")) {
            target.classList.remove('selected');
        } else {
            target.classList.add('selected');
        }
    }
}


function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}