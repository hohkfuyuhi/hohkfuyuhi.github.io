var japanese = document.getElementById('jp_click'),
	chinese = document.getElementById('cn_click'),
    english = document.getElementById('en_click'),
    jp_txt = document.querySelectorAll('#jp'),
	cn_txt = document.querySelectorAll('#cn'),
    en_txt = document.querySelectorAll('#en'),
    nb_jp = jp_txt.length,
	nb_cn = cn_txt.length,
    nb_en = en_txt.length;

japanese.addEventListener('click', function() {
    lang(japanese,english,chinese);
}, false);

chinese.addEventListener('click', function() {
    lang(chinese,japanese,english);
}, false);

english.addEventListener('click', function() {
    lang(english,japanese,chinese);
}, false);

function lang(langOn,langOff1,langOff2){
    if (!langOn.classList.contains('current_lang')) {
        langOn.classList.add('current_lang');
        langOff1.classList.remove('current_lang');
		langOff2.classList.remove('current_lang');
    }
    if(langOn.innerHTML == 'JP'){
        show(jp_txt, nb_jp);
        hide(en_txt, nb_en);
		hide(cn_txt, nb_cn);
    }
    else if(langOn.innerHTML == 'EN'){
        show(en_txt, nb_en);
        hide(jp_txt, nb_jp);
		hide(cn_txt, nb_cn);
    }
	else if(langOn.innerHTML == 'CN'){
        show(cn_txt, nb_cn);
        hide(jp_txt, nb_jp);
		hide(en_txt, nb_en);
    }
}

function show(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function hide(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    lang(english,japanese,chinese);
}
init();