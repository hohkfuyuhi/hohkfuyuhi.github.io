var english = document.getElementById("en"),
	japanese = document.getElementById("jp"),
	chinese = document.getElementById("cn"),
	font = document.getElementById("fontchange"),
	myname = document.getElementById("intro2"),
	findme = document.getElementById("findme"),
	skills = document.getElementById("skills");
            
english.addEventListener("click",function(){
	lang(english,japanese,chinese);
}, false);
            
japanese.addEventListener("click",function(){
	lang(japanese,english,chinese);
}, false);
        
chinese.addEventListener("click",function(){
	lang(chinese,english,japanese);
}, false);

function lang(langon,langoff1,langoff2){
    if(!langon.classList.contains("current_lang")){
        langon.classList.add("current_lang");
        langoff1.classList.remove("current_lang");
        langoff2.classList.remove("current_lang");
    }
    
    if(langon.innerHTML == "EN"){
        font.classList.add("eng");
        font.classList.remove("jap");
        font.classList.remove("chn");
	myname.classList.add("engname");
        myname.classList.remove("japname");
        myname.classList.remove("chnname");
	findme.classList.add("en");
        findme.classList.remove("jp");
        findme.classList.remove("cn");
	skills.classList.add("en");
        skills.classList.remove("jp");
        skills.classList.remove("cn");
        document.getElementById("intro1").innerHTML = "Hello! My name is";
	document.getElementById("intro2").innerHTML = "Max Ho";
	document.getElementById("intro3").innerHTML = "and I am a programmer";
	document.getElementById("intro4").innerHTML = "with various design skills";
	findme.innerHTML = "You can find me on the following platforms";
	skills.innerHTML = "<h2>Look at what I can do!</h2>";
        document.getElementById("head1").innerHTML = "Programming";
        document.getElementById("head2").innerHTML = "Design";
        document.getElementById("head3").innerHTML = "Video";
        document.getElementById("design1").innerHTML = "Vectors";
        document.getElementById("design2").innerHTML = "Packaging";
        document.getElementById("design3").innerHTML = "Pamphlets";
        document.getElementById("design4").innerHTML = "Name cards";
        document.getElementById("video1").innerHTML = "Editor / Colourist";
        document.getElementById("video2").innerHTML = "Audio Technician";
        document.getElementById("video3").innerHTML = "Lighting Designer / Gaffer";
        document.getElementById("video4").innerHTML = "Director of Photography / Camera Operator";
        document.getElementById("clickme").innerHTML = "Click me!";
    }
    
    else if (langon.innerHTML == "日本語"){
	font.classList.add("jap");
        font.classList.remove("eng");
        font.classList.remove("chn");
	myname.classList.add("japname");
        myname.classList.remove("engname");
        myname.classList.remove("chnname");
	findme.classList.add("jp");
        findme.classList.remove("en");
        findme.classList.remove("cn");
	skills.classList.add("jp");
        skills.classList.remove("en");
        skills.classList.remove("cn");
        document.getElementById("intro1").innerHTML = "こんにちは！僕の名前は";
	document.getElementById("intro2").innerHTML = "マックス";
	document.getElementById("intro3").innerHTML = "僕はプログラマーです。更に、";
	document.getElementById("intro4").innerHTML = "様々なデザインスキルを持っています。";
	findme.innerHTML = "以下のサイトまたはQRコードで僕に連絡することができます";
	skills.innerHTML = "<h2>僕のスキルを見せてやろう！</h2>";
        document.getElementById("head1").innerHTML = "プログラミング";
        document.getElementById("head2").innerHTML = "デザイン";
        document.getElementById("head3").innerHTML = "ビデオ制作";
        document.getElementById("design1").innerHTML = "ベクターイラスト";
        document.getElementById("design2").innerHTML = "パッケージデザイン";
        document.getElementById("design3").innerHTML = "パンフレットデザイン";
        document.getElementById("design4").innerHTML = "名刺デザイン";
        document.getElementById("video1").innerHTML = "編集 ／ 色指定";
        document.getElementById("video2").innerHTML = "音響技師";
        document.getElementById("video3").innerHTML = "照明技師";
        document.getElementById("video4").innerHTML = "撮影監督 ／ 撮影技師";
        document.getElementById("clickme").innerHTML = "アイコンがクリックできます！";
    }
    
    else if (langon.innerHTML == "中文"){
	font.classList.add("chn");
        font.classList.remove("jap");
        font.classList.remove("eng");
	myname.classList.add("chnname");
        myname.classList.remove("japname");
        myname.classList.remove("engname");
	findme.classList.add("cn");
        findme.classList.remove("jp");
        findme.classList.remove("en");
	skills.classList.add("cn");
        skills.classList.remove("jp");
        skills.classList.remove("en");
	document.getElementById("intro1").innerHTML = "你好！我的名字是";
	document.getElementById("intro2").innerHTML = "何浩杰";
	document.getElementById("intro3").innerHTML = "我的专长是编程，";
	document.getElementById("intro4").innerHTML = "但我也有各种的设计技能。";
	findme.innerHTML = "你能用以下的链接或二维码找到我";
	skills.innerHTML = "<h2>看看我的厉害！</h2>";
        document.getElementById("head1").innerHTML = "编程语言";
        document.getElementById("head2").innerHTML = "设计知识";
        document.getElementById("head3").innerHTML = "视频经验";
        document.getElementById("design1").innerHTML = "矢量图";
        document.getElementById("design2").innerHTML = "包装设计";
        document.getElementById("design3").innerHTML = "宣传册设计";
        document.getElementById("design4").innerHTML = "名片设计";
        document.getElementById("video1").innerHTML = "编辑 ／ 色指定";
        document.getElementById("video2").innerHTML = "录音师";
        document.getElementById("video3").innerHTML = "照明师 ／ 灯光师";
        document.getElementById("video4").innerHTML = "摄影指导 ／ 放映技师";
        document.getElementById("clickme").innerHTML = "这些图标是能单击的！";
    }
}