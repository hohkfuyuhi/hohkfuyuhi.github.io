var english = document.getElementById("en"),
    japanese = document.getElementById("jp"),
    chinese = document.getElementById("cn"),
    enbot = document.getElementById("enbot"),
    jpbot = document.getElementById("jpbot"),
    cnbot = document.getElementById("cnbot"),
    font = document.getElementById("fontchange"),
    myname = document.getElementById("intro2"),
    skills = document.getElementById("skills"),
    findme = document.getElementById("findme");

english.addEventListener("click",function(){
    lang(english,japanese,chinese);
    lang(enbot,jpbot,cnbot);
}, false);

japanese.addEventListener("click",function(){
    lang(japanese,english,chinese);
    lang(jpbot,enbot,cnbot);
}, false);

chinese.addEventListener("click",function(){
    lang(chinese,english,japanese);
    lang(cnbot,enbot,jpbot);
}, false);

enbot.addEventListener("click",function(){
    lang(enbot,jpbot,cnbot);
    lang(english,japanese,chinese);
}, false);

jpbot.addEventListener("click",function(){
    lang(jpbot,enbot,cnbot);
    lang(japanese,english,chinese);
}, false);

cnbot.addEventListener("click",function(){
    lang(cnbot,enbot,jpbot);
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
        document.getElementById("intro3").innerHTML = "i am a front-end dev,";
        document.getElementById("intro4").innerHTML = "and a visual designer.";
        skills.innerHTML = "look at what i can do";
        document.getElementById("software").innerHTML = "&#62; software knowledge &#60;";
        document.getElementById("softwaremodaltitle").innerHTML = "includes, but not limited to";
        document.getElementById("what-aegisub").innerHTML = "&#40;what is aegisub?&#41;";
        document.getElementById("works").innerHTML = "&#62; stuff i've done &#60;";
        document.getElementById("worksmodaltitle").innerHTML = "updated whenever i feel like it";
        document.getElementById("works-langchanger").innerHTML = "&#62; super simple javascript language changer";
        document.getElementById("works-csshover").innerHTML = "&#62; explaining css3 hover effects";
        document.getElementById("works-youtube").innerHTML = "&#62; my youtube channel";
        document.getElementById("head1").innerHTML = "coding";
        document.getElementById("head2").innerHTML = "design";
        document.getElementById("head3").innerHTML = "video";
        document.getElementById("design2").innerHTML = "web design";
        document.getElementById("design3").innerHTML = "logos";
        document.getElementById("design4").innerHTML = "name cards";
        document.getElementById("video1").innerHTML = "editor / colourist";
        document.getElementById("video2").innerHTML = "audio technician";
        document.getElementById("video3").innerHTML = "gaffer";
        document.getElementById("video4").innerHTML = "camera operator";
        findme.innerHTML = "find Max here";
        document.getElementById("emailmodaltitle").innerHTML = "email";
        document.getElementById("linemodaltitle").innerHTML = "line qr code";
        document.getElementById("wcmodaltitle").innerHTML = "wechat qr code";
        document.getElementById("about1").innerHTML = "let's talk about Max";
        document.getElementById("about2").innerHTML = "usually plugged into his NW-ZX300";
        document.getElementById("aboutnorm").innerHTML = "ew mainstream";
        document.getElementById("aboutdiff").innerHTML = "indie wow";
        document.getElementById("aboutwtf").innerHTML = "yeah nah";
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
        document.getElementById("intro3").innerHTML = "僕はフロントエンド開発者兼";
        document.getElementById("intro4").innerHTML = "ビジュアルデザイナーです。";
        skills.innerHTML = "僕の力、見せてあげるよ";
        document.getElementById("software").innerHTML = "&#62; ソフト知識 &#60;"
        document.getElementById("softwaremodaltitle").innerHTML = "以下のものに限定されない";
        document.getElementById("what-aegisub").innerHTML = "（aegisubとは？）";
        document.getElementById("works").innerHTML = "&#62; 僕の作品のいくつか &#60;";
        document.getElementById("worksmodaltitle").innerHTML = "更新したいときに更新します（英語版のみ）";
        document.getElementById("works-langchanger").innerHTML = "&#62; javascriptで超シンプルな言語交換";
        document.getElementById("works-csshover").innerHTML = "&#62; css3のホバー効果の説明";
        document.getElementById("works-youtube").innerHTML = "&#62; 僕のyoutubeチャンネル";
        document.getElementById("head1").innerHTML = "コーディング";
        document.getElementById("head2").innerHTML = "デザイン";
        document.getElementById("head3").innerHTML = "ビデオ制作";
        document.getElementById("design2").innerHTML = "ウェブ<span>デザイン</span>";
        document.getElementById("design3").innerHTML = "ロゴ設計";
        document.getElementById("design4").innerHTML = "名刺設計";
        document.getElementById("video1").innerHTML = "編集 / <span>色彩設定</span>";
        document.getElementById("video2").innerHTML = "音響技師";
        document.getElementById("video3").innerHTML = "照明技師";
        document.getElementById("video4").innerHTML = "撮影技師";
        findme.innerHTML = "連絡方法";
        document.getElementById("emailmodaltitle").innerHTML = "メール";
        document.getElementById("igmodaltitle").innerHTML = "インスタ";
        document.getElementById("ig1").innerHTML = "&#62; 主要アカウント";
        document.getElementById("ig2").innerHTML = "&#62; 写真撮影／ビジュアルデザイン";
        document.getElementById("linemodaltitle").innerHTML = "line二次元コード";
        document.getElementById("wcmodaltitle").innerHTML = "wechat二次元コード";
        document.getElementById("about1").innerHTML = "マックスを紹介しましょう";
        document.getElementById("about2").innerHTML = "通常はNW-ZX300でハイレゾを聴きます";
        document.getElementById("aboutnorm").innerHTML = "一般人だよ";
        document.getElementById("aboutdiff").innerHTML = "特別ですね";
        document.getElementById("aboutwtf").innerHTML = "マジやばい";
        document.getElementById("dev1").innerHTML = "パソコン最高";
        document.getElementById("touhou2").innerHTML = "発熱巫女～ず";
        document.getElementById("mtg1").innerHTML = "アトラクサ";
        document.getElementById("mtg2").innerHTML = "スリヴァーの<span>首領</span>";
        document.getElementById("mtg3").innerHTML = "フレイア<span>リーズ</span>";
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
        document.getElementById("intro3").innerHTML = "我的专长是前端开发，";
        document.getElementById("intro4").innerHTML = "但我也是个视觉设计师。";
        skills.innerHTML = "瞧瞧我的厉害";
        document.getElementById("software").innerHTML = "&#62; 软件知识 &#60;"
        document.getElementById("softwaremodaltitle").innerHTML = "包括但不限于";
        document.getElementById("what-aegisub").innerHTML = "（什么是 aegisub？）";
        document.getElementById("works").innerHTML = "&#62; 我的一些作品 &#60;";
        document.getElementById("worksmodaltitle").innerHTML = "我爽就更新（仅提供英语）";
        document.getElementById("works-langchanger").innerHTML = "&#62; 使用javascript的超简单语言转换器";
        document.getElementById("works-csshover").innerHTML = "&#62; css3悬停效果的说明";
        document.getElementById("works-youtube").innerHTML = "&#62; 我的youtube频道";
        document.getElementById("head1").innerHTML = "编程语言";
        document.getElementById("head2").innerHTML = "设计知识";
        document.getElementById("head3").innerHTML = "视频经验";
        document.getElementById("design2").innerHTML = "网页设计";
        document.getElementById("design3").innerHTML = "商标设计";
        document.getElementById("design4").innerHTML = "名片设计";
        document.getElementById("video1").innerHTML = "编辑 / <span>色指定</span>";
        document.getElementById("video2").innerHTML = "录音师";
        document.getElementById("video3").innerHTML = "灯光师";
        document.getElementById("video4").innerHTML = "放映技师";
        findme.innerHTML = "联络方式";
        document.getElementById("emailmodaltitle").innerHTML = "电子邮件";
        document.getElementById("igmodaltitle").innerHTML = "instagram";
        document.getElementById("ig1").innerHTML = "&#62; 主账号";
        document.getElementById("ig2").innerHTML = "&#62; 摄影／视觉设计";
        document.getElementById("linemodaltitle").innerHTML = "line二维码";
        document.getElementById("wcmodaltitle").innerHTML = "微信二维码";
        document.getElementById("about1").innerHTML = "介绍一下浩杰吧";
        document.getElementById("about2").innerHTML = "通常会在NW-ZX300上听着高分辨率音频";
        document.getElementById("aboutnorm").innerHTML = "正常人啦";
        document.getElementById("aboutdiff").innerHTML = "有点不同";
        document.getElementById("aboutwtf").innerHTML = "完蛋了";
        document.getElementById("dev1").innerHTML = "台式机最棒";
        document.getElementById("touhou2").innerHTML = "发热巫女";
        document.getElementById("mtg1").innerHTML = "亚崔夏";
        document.getElementById("mtg2").innerHTML = "裂片妖大王";
        document.getElementById("mtg3").innerHTML = "妃雅丽兹";
    }
}