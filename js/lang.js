var english = document.getElementById("en"),
    japanese = document.getElementById("jp"),
    chinese = document.getElementById("cn"),
    font = document.getElementById("fontchange"),
    myname = document.getElementById("intro2"),
    skills = document.getElementById("skills"),
    findme = document.getElementById("findme");

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
        skills.classList.add("en");
        skills.classList.remove("jp");
        skills.classList.remove("cn");
        findme.classList.add("en");
        findme.classList.remove("jp");
        findme.classList.remove("cn");
        document.getElementById("btn-index").innerHTML = "home";
        document.getElementById("btn-skills").innerHTML = "skills";
        document.getElementById("btn-contact").innerHTML = "contact";
        document.getElementById("intro1").innerHTML = "hello! my name is";
        document.getElementById("intro2").innerHTML = "MAX HO";
        document.getElementById("intro3").innerHTML = "and i am a programmer";
        document.getElementById("intro4").innerHTML = "with various design skills";
        skills.innerHTML = "look at what i can do";
        document.getElementById("software").innerHTML = "&#62; software knowledge &#60;"
        document.getElementById("softwaremodaltitle").innerHTML = "includes, but not limited to";
        document.getElementById("head1").innerHTML = "programming";
        document.getElementById("head2").innerHTML = "design";
        document.getElementById("head3").innerHTML = "video";
        document.getElementById("design1").innerHTML = "UI / UX";
        document.getElementById("design2").innerHTML = "web design";
        document.getElementById("design3").innerHTML = "logos";
        document.getElementById("design4").innerHTML = "name cards";
        document.getElementById("video1").innerHTML = "editor / colourist";
        document.getElementById("video2").innerHTML = "audio technician";
        document.getElementById("video3").innerHTML = "gaffer";
        document.getElementById("video4").innerHTML = "camera operator";
        findme.innerHTML = "you can find me on the following platforms";
        document.getElementById("linemodaltitle").innerHTML = "LINE QR code";
        document.getElementById("wcmodaltitle").innerHTML = "WeChat QR code";
        document.getElementById("about1").innerHTML = "let's talk about Max";
        document.getElementById("about2").innerHTML = "usually listening to hi-res music on a NW-ZX300";
        document.getElementById("aboutnorm").innerHTML = "ew normie";
        document.getElementById("aboutdiff").innerHTML = "mainstream sucks";
        document.getElementById("aboutwtf").innerHTML = "yeah nah mate";
        document.getElementById("dev1").innerHTML = "pc master race";
        document.getElementById("touhou2").innerHTML = "hatsunetsumiko's";
        document.getElementById("mtg1").innerHTML = "atraxa";
        document.getElementById("mtg2").innerHTML = "sliver overlord";
        document.getElementById("mtg3").innerHTML = "freyalise";
    }

    else if (langon.innerHTML == "日本語"){
        font.classList.add("jap");
        font.classList.remove("eng");
        font.classList.remove("chn");
        myname.classList.add("japname");
        myname.classList.remove("engname");
        myname.classList.remove("chnname");
        skills.classList.add("jp");
        skills.classList.remove("en");
        skills.classList.remove("cn");
        findme.classList.add("jp");
        findme.classList.remove("en");
        findme.classList.remove("cn");
        document.getElementById("btn-index").innerHTML = "ホームページ";
        document.getElementById("btn-skills").innerHTML = "経験";
        document.getElementById("btn-contact").innerHTML = "連絡";
        document.getElementById("intro1").innerHTML = "こんにちは！僕の名前は";
        document.getElementById("intro2").innerHTML = "マックス";
        document.getElementById("intro3").innerHTML = "僕はプログラマーです。更に、";
        document.getElementById("intro4").innerHTML = "様々なデザインスキルも持っています。";
        skills.innerHTML = "僕の力、見せてあげるよ";
        document.getElementById("software").innerHTML = "&#62; ソフトウェア知識 &#60;"
        document.getElementById("softwaremodaltitle").innerHTML = "以下のものに限定されない";
        document.getElementById("head1").innerHTML = "プログラミング";
        document.getElementById("head2").innerHTML = "デザイン";
        document.getElementById("head3").innerHTML = "ビデオ制作";
        document.getElementById("design2").innerHTML = "ウェブデザイン";
        document.getElementById("design3").innerHTML = "ロゴ";
        document.getElementById("design4").innerHTML = "名刺";
        document.getElementById("video1").innerHTML = "編集 / 色指定";
        document.getElementById("video2").innerHTML = "音響技師";
        document.getElementById("video3").innerHTML = "照明技師";
        document.getElementById("video4").innerHTML = "撮影技師";
        findme.innerHTML = "以下のSNSで僕に連絡することができます";
        document.getElementById("linemodaltitle").innerHTML = "LINE二次元コード";
        document.getElementById("wcmodaltitle").innerHTML = "WeChat二次元コード";
        document.getElementById("about1").innerHTML = "自己紹介しましょう";
        document.getElementById("about2").innerHTML = "通常はNW-ZX300でハイレゾを聴く";
        document.getElementById("aboutnorm").innerHTML = "一般人だよ";
        document.getElementById("aboutdiff").innerHTML = "特別ですね";
        document.getElementById("aboutwtf").innerHTML = "マジやばい";
        document.getElementById("dev1").innerHTML = "パソコン最高";
        document.getElementById("touhou2").innerHTML = "発熱巫女～ず";
        document.getElementById("mtg1").innerHTML = "アトラクサ";
        document.getElementById("mtg2").innerHTML = "スリヴァーの首領";
        document.getElementById("mtg3").innerHTML = "フレイアリーズ";
    }

    else if (langon.innerHTML == "中文"){
        font.classList.add("chn");
        font.classList.remove("jap");
        font.classList.remove("eng");
        myname.classList.add("chnname");
        myname.classList.remove("japname");
        myname.classList.remove("engname");
        skills.classList.add("cn");
        skills.classList.remove("jp");
        skills.classList.remove("en");
        findme.classList.add("cn");
        findme.classList.remove("jp");
        findme.classList.remove("en");
        document.getElementById("btn-index").innerHTML = "主页";
        document.getElementById("btn-skills").innerHTML = "经验";
        document.getElementById("btn-contact").innerHTML = "联系";
        document.getElementById("intro1").innerHTML = "你好！我的名字是";
        document.getElementById("intro2").innerHTML = "何浩杰";
        document.getElementById("intro3").innerHTML = "我的专长是编程，";
        document.getElementById("intro4").innerHTML = "但我也有各种的设计技能。";
        skills.innerHTML = "瞧瞧我的厉害";
        document.getElementById("software").innerHTML = "&#62; 软件知识 &#60;"
        document.getElementById("softwaremodaltitle").innerHTML = "包括但不限于";
        document.getElementById("head1").innerHTML = "编程语言";
        document.getElementById("head2").innerHTML = "设计知识";
        document.getElementById("head3").innerHTML = "视频经验";
        document.getElementById("design2").innerHTML = "网页设计";
        document.getElementById("design3").innerHTML = "商标设计";
        document.getElementById("design4").innerHTML = "名片设计";
        document.getElementById("video1").innerHTML = "编辑 / 色指定";
        document.getElementById("video2").innerHTML = "录音师";
        document.getElementById("video3").innerHTML = "灯光师";
        document.getElementById("video4").innerHTML = "放映技师";
        findme.innerHTML = "你能通过以下的链接或扫二维码找到我";
        document.getElementById("linemodaltitle").innerHTML = "LINE二维码";
        document.getElementById("wcmodaltitle").innerHTML = "WeChat二维码";
        document.getElementById("about1").innerHTML = "介绍一下浩杰吧";
        document.getElementById("about2").innerHTML = "通常在NW-ZX300上听着高分辨率音频";
        document.getElementById("aboutnorm").innerHTML = "正常人啦";
        document.getElementById("aboutdiff").innerHTML = "比一般人不同";
        document.getElementById("aboutwtf").innerHTML = "完蛋了";
        document.getElementById("dev1").innerHTML = "台式机最棒";
        document.getElementById("touhou2").innerHTML = "发热巫女";
        document.getElementById("mtg1").innerHTML = "魔判官之声亚崔夏";
        document.getElementById("mtg2").innerHTML = "裂片妖大王";
        document.getElementById("mtg3").innerHTML = "罗堰之怒妃雅丽兹";
    }
}