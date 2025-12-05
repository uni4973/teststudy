const hisquizlist = [
    "徳川初代将軍は？",
    "徳川二代将軍は？",
    "徳川三代将軍は？",
    "徳川五代将軍は？",
    "徳川5代目将軍のころの時代の文化を何という？",
    "元禄文化の主な担い手は？",
    "浮世草子と呼ばれる当時の人々の暮らしを題材にした小説を描いた人物は？",
    "井原西鶴がえがいた小説は当時なんとよばれた？",
    "人形浄瑠璃の台本に人間関係を書いた人物は？",
    "近松門左衛門は人間関係を何の台本に書いた？",
    "代表作として奥の細道が挙げられる俳諧を芸術の域まで高めたじんぶつは？",
    "松尾芭蕉の代表作として知られる作品は？",
    "尾形光琳が大成した絵のしゅるいは？",
    "尾形光琳が参考にした風神雷神図屏風などの作品を残した装飾画家は？",
    "町人の風俗を描く、浮世絵を描き始めた人物は？",
    "井原西鶴の描いた浮世草子の好色物の中での代表作の名前は？",
    "井原西鶴の描いた浮世草子の町人物の中での代表作の名前は？",
    "浮世草子のジャンルとして好色物と町人物と何がある？",
    "近松門左衛門の人形浄瑠璃の代表作として知られる作品は？",
    "歌舞伎で活躍した人物の中で上方⁽京都⁾で活躍した人物は？",
    "歌舞伎で活躍した人物の中で江戸で活躍した人物は？",
    "装飾画家 俵屋宗達の代表作は？",
    "装飾画家 尾形光琳の代表作は？",
    "浮世絵師 菱川師宣の代表作は？",
    "藩主である浅野長矩が吉良義央に切りかかった事件の処罰について不満だった浅野長矩の47人の家臣が起こした反乱をそれが起きた藩の名前を取ってなんという？",
    "綱吉の時代は〇や〇も学問をするようになる",
    "綱吉の時代に広まった学問は？",
    "綱吉が儒学を中心とした政治を目指す行為の一つとして孔子をまつった聖堂をどこに建てた？",
    "1650年ごろ第二代水戸藩主である徳川光圀は何という歴史書を著した？",
    "大日本史を著した人物は？",
    "関孝和は江戸時代の数学である何を確立した？",
    "和算を確立した人物は？",
    "1669年に農業全書を著した人物は？",
    "宮崎安貞は何を著した？",
    "綱吉の時代に武士や庶民に学問が普及したことにより読み書き・そろばんを教える何が作られた？",
    "綱吉の時代には庶民の生活水準が上がり一日三食になり、服の材料として麻から何に変わった？",
    "綱吉の時代に武士や庶民に学問が普及したことによりたくさんの本を持つ何が生まれた？",
    "江戸時代の中期の幕府の政治が慢性的に抱えている問題は？",
    "綱吉は儒学中心の政治を目指したがこのような政治を何という？",
    "4代から7代の将軍が文治政治をすることに起因する、由井正雪が首謀者の武断主義である幕府に対する謀反を企んだ事件を何という？",
    "綱吉は財政難を乗り越えるために慶長小判を回収し、金の含有率を少なくした何を発行した？",
    "綱吉は動物を守る何を発布した？",
    "生類憐みの令を廃止した徳川六代目将軍は？",
    "徳川七代目将軍は？（僕のノートには名前以外のことは書かれていませんでした）",
    "紀伊徳川家(徳川御三家の一つ)出身である徳川八代目将軍は？",
    "吉宗が行った改革は？",
    "享保の改革では財政難を乗り越えるために行った一万石宇当たり100石ののコメを徴収する代わりに参勤交代の江戸在住期間を半分にする制度を何という？",
    "享保の改革で行われた新しい農地を増やすために行われた政策は？",
    "享保の改革で行われたコメの豊作不作にかかわらず年貢を取り立てる政策のことを何という？",
    "享保の改革で行われた支出を減らすために節約するようにさせる政策を何という？",
    "大量の大奥の経費を削減するために行われたのは？",
    "江戸時代中期の幕府の財政難につながったのは寺社の造営修築、明暦の大火の復興、物価上昇のほかに富士山の噴火にもつながった地震を何という？",
    "宝永地震により噴火した火山は？",
    "江戸中期幕府の財政難の原因にもなった歴史的大火事を何という？",
    "享保の改革前の幕府の収入不足の原因として金銀の不足や何があげられる？",
    "町奉行ののちに寺社奉行となった、小石川養成所や町火消を設置した人物は？",
    "大岡忠相が設置した無料医療を提供するために作ったものは？",
    "享保の改革で小石川養成所や町火消が設置される要因にもなった政策は？",
    "享保の改革で行われたこれまであやふやだった法律を整備した法典は？",
    "享保の改革の結果主に米価の上昇によって起こった飢饉を何という？",
    "享保の改革の結果主に米価の上昇によって米を出し惜しみして売らない商人を襲うことを何という？",
    "八代将軍吉宗は彼が行った政策内容から何と呼ばれた？",
    "吉宗が途中で将軍の位を退き大御所となったが、吉宗の子である九代目将軍となった人物を何という？"
]
const hisanswerlist = [
    "家康",
    "秀忠",
    "家光",
    "綱吉",
    "元禄文化",
    "上方の町人",
    "井原西鶴",
    "浮世草子",
    "近松門左衛門",
    "人形浄瑠璃",
    "松尾芭蕉",
    "奥の細道",
    "装飾画",
    "俵屋宗達",
    "菱川師宣",
    "好色一代男",
    "日本永代蔵",
    "武家物",
    "曾根崎心中",
    "坂田藤十郎",
    "市川団十郎",
    "風神雷神図屏風",
    "燕子花図屏風",
    "見返り美人図",
    "赤穂事件",
    "武士庶民",
    "朱子学",
    "湯島",
    "大日本史",
    "徳川光圀",
    "和算",
    "関孝和",
    "宮崎安貞",
    "農業全書",
    "寺子屋",
    "木綿",
    "蔵書家",
    "財政難",
    "文治政治",
    "慶安の変",
    "元禄小判",
    "生類憐みの令",
    "家宣",
    "家継",
    "吉宗",
    "享保の改革",
    "上米の制",
    "新田開発",
    "定免法",
    "倹約令",
    "大奥のリストラ",
    "宝永地震",
    "富士山",
    "明暦の大火",
    "米価の低下",
    "大岡忠相",
    "小石川養成所",
    "目安箱",
    "公事方御定書",
    "享保の飢饉",
    "打ちこわし",
    "米将軍",
    "家重"
]
const geoquizlist = [
    "konnnitiha"
]
const geoanswerlist = [
    "yes"
]
const bioquizlist =[
    "hello"
]
const bioanswerlist = [
    "no"
]
function askquiz () {
        const option = document.title;
        if(option == "歴史勉強サイト"){
            listnum = Math.floor(Math.random()*hisquizlist.length);
            quizsentance.textContent = hisquizlist[listnum];
        }
        else if(option == "生物勉強サイト"){
            listnum = Math.floor(Math.random()*bioquizlist.length);
            quizsentance.textContent = bioquizlist[listnum];
        }
        else{
            listnum = Math.floor(Math.random()*geoquizlist.length);
            quizsentance.textContent = geoquizlist[listnum];
        }
        resalt.textContent = "結果："
        console.log(listnum)
}
const quiz = document.getElementById('quiz');
const quizsentance = document.getElementById('quizsentance');
const resalt = document.getElementById("resalt");
const finish = document.getElementById("finish");
const answer = document.getElementById("answerbox")
const collect = document.getElementById("series")
const title = document.title;

let series = 0;
let listnum;
quiz.addEventListener('click', () =>{
    askquiz(history)
});
finish.addEventListener('click', () =>{
    if(answer.value==hisanswerlist[listnum] || answer.value==geoanswerlist[listnum] || answer.value==bioanswerlist){
        series = series + 1;
        collect.textContent = "連続正解回数：" + series;
        resalt.textContent = "結果：正解"
        document.getElementById("answerbox").value = "";
    }
    else{
        resalt.textContent = "a"
        if(title=="歴史勉強サイト"){
            resalt.textContent = "結果：不正解 答えは" + hisanswerlist[listnum] + "です" 
        }
        else if(title=="生物勉強サイト"){
            resalt.textContent = "結果：不正解 答えは" + geoanswerlist[listnum] + "です"
        }
        else{
            resalt.textContent = "結果：不正解 答えは" + bioanwerlist[listnum] + "です"}
        series = 0;
        collect.textContent = "連続正解回数：0"
        document.getElementById("answerbox").value = "";
    }

});
