
//الأصناف
let cata = [
  ["نمر","همستر","صرصور","ابو بريص","حمامة","قرش","نملة","بطريق","فرس النهر","وحيد القرن","كلب","صقر","نسر","حوت","حمار ","أسد","طاووس","نورس","لقلق","فلامينغو","فهد","فيل","زرافة","دولفين","جردون","فارة","ديناصور","فقمة","سلحفة","نحلة","قنديل","كنغر","ببغاء","اخطبوط","نقار الخشب","قطة","خاروف","ماعز","حصان","حمار","بومة","بطة","وزة","بجعة","تمساح","سلطعون","خفاش","دودة","افعى","دعسوقة","خنفساء","جراد","أرنب","حمار وحشي","قرد","غوريلا","فراشة","كوالا","خنزير","دبور","بقرة","جاموس","ثور","ام اربع و اربعين","ضبع","ذئب","ذبابة","ناموسة","عقرب","غزال","دب","دب قطبي","باندا","سحلية","جمل","سنجاب","تنين","قنفذ","خلد","دجاجة","ديك","عنكبوت","ضفدع",],

  ["بوط","شحاطة","جاكيت","كنزة","خاتم","طاقية","بنطرون","جرابات","فستان","كلسون","حمالة صدر","حلق","نظارة","قميص","كندرة","جزمة","ساعة يد","ربطة عنق","سماعة","شيال","طوق","زنار","شنتاية","قُفاز","شورت","فيزون","جلابية",],

  ["سوريا","العراق","لبنان","الإمارات","الكويت","الأردن","تونس","الجزائر","المغرب","السعودية","اليمن","مصر","فلسطين","السودان","الصومال","قطر","البحرين","عمان","ليبيا","امريكا","روسيا","الصين","فرنسا","اليابان","ايران","بريطانيا","سويسرا","تركيا","كندا","المكسيك","كوريا الجنوبية","اسبانيا",],

  ["جزر","تفاح","سبانخ","خيار","بندورة","نجاص","بقدونس","كزبره","نعنع","كيوي","برتقال","ملوخية","موز","خيار","فراولة","قصب سكر","زيتون","تين","توت","عنب","اناناس","جوز الهند","مانجو","تمر","بطيخ","بطيخ أصفر","بيتنجان","بطاطا","بصل","ثوم","قثة","جارنك","خوخ","مشمش","عوجا","دراق","خس","ملفوف","زهرة","كوسا","عدس","رز",],

  ["مزهرية","كاسة","دفاية","مايكرويف","كنباية","مراية","جوال","راوتر","ابريق","مكواية","سطل","ساعة","كرسي","طاولة","شاحن","قنية فاضية","سوارة","علبة محرام","قداحة","باكيت","بسكليتة","سيارة","سجادة","فرن","مروحة","كاس","منشفة",],

  ["سوق الحميدية", "المالكي", "برزة", "السويقة", "القنوات", "العصورنية"],
  ["فروج مشوي", "سمك مشوي", "روبيان", "ملوخية ورز", "رز ومرقة", "بامية"],
  ["طيارة", "سائق", "ملعب", "محمد", "كريم", "نبيل"],
];

// المصفوفات المستخدمة 
let cloun_players = [], feak_players = [], players = [];


//المتغيرات المستخدمة
let topic, random_player,  rand_counter, counter_player = players.length,  random_topic, ran_payer, topic_now, counter = 0, counter_vote = 0 ;

const cards = document.querySelectorAll(".card-filed .card");


//إعادة تعيين العناصر المحفوظة عند تحديث الصفحة 
if (localStorage.getItem("player") != null) {
  players = JSON.parse(localStorage.getItem("player"));
  // add.click();
  players.forEach((player) => {
    let span = document.createElement("span");
    let btn = document.createElement("button");
    let p = document.createElement("p");
    btn.innerHTML = "-";
    p.innerHTML = player;
    span.appendChild(btn);
    span.appendChild(p);
    player_list.append(span);

    btn.onclick = () => {
      players.splice(players.indexOf(btn.nextElementSibling.innerHTML), 1);
      btn.parentElement.remove();
      localStorage.player = JSON.stringify(players);
      counter_player = players.length;
      if (counter_player >= 3) {
        starts.style.opacity = "1";
        starts.style.pointerEvents = "visible";
        varia.innerHTML = `فيك تضيف أكتر معلم `;
      } else {
        starts.style.opacity = "0.5";
        starts.style.pointerEvents = "none";
        varia.innerHTML = `أقل شي 3 لاعبين حبيب القلب!`;
      }
    };
  });
  counter_player = players.length;

  if (counter_player >= 3) {
    starts.style.opacity = "1";
    starts.style.pointerEvents = "visible";
    varia.innerHTML = `فيك تضيف أكتر معلم`;
  }

  // console.log("tiger")
}


//الدوال المستخدمة 
function show_first(show, none) {
  show.style.translate = "-50% -50%";
  none.style.translate = "200% -50%";
}
function show(show, none) {
  show.style.display = "flex";
  none.style.display = "none";
}

function giv(index) {
  if (players.length === 0) {
    show(Questions, choice);
    return;
  } else {
    player_1.innerHTML = players[index];
    palyers_2.innerHTML = `ل${players[index]}`;
    choice_btn.onclick = () => {
      name_out.innerHTML = feak_players[feak_players.length - 1];
      show(out, choice);

      if (index === random_player) {
        name_out_player.innerHTML = "انت يلي برا السالفة يا غالي";
        ran_payer = feak_players[feak_players.length - 1];
        random_player = undefined;
      } else {
        if (random_player === undefined) {
          random_player === undefined;
        } else {
          random_player = Math.floor(Math.random() * players.length);
        }
        name_out_player.innerHTML = `
              : انت داخل السالفة و يلي هي
                        <br>
                        <span id="dis_out">${cata[topic][random_topic]}</span>
                        <br>
                        امورك بالسليم بس اعرف مين برا السالفة<br> اضغط التالي
              
              `;
        topic_now = cata[topic][random_topic];
      }
    };
    feak_players.push(players[index]);
    players.splice(players.indexOf(players[index]), 1);
    out_btn.onclick = () => {
      show(choice, out);
      let ran = Math.floor(Math.random() * players.length);
      giv(ran);
    };
  }
}

function qus_any() {
  if (counter === feak_players.length) {
    counter = 0;
  }

  ask_any_to.innerHTML = feak_players[counter];

  for (let i = 0; i < feak_players.length; i++) {
    if (i === counter) {
      continue;
    }
    let btn = document.createElement("button");
    btn.innerHTML = feak_players[i];
    ask_plaeyr_any.append(btn);
    

    btn.onclick = () => {
      ask_plaeyr_any.innerHTML = null;
      
      qus_any();
      clickd.currentTime = 0;
     
         clickd.play();
    };
  }

  counter++;
}

function ques() {
  let rand = Math.floor(Math.random() * feak_players.length);
  if (feak_players[counter] === undefined) {
    show(ask_any, Ask);
    counter = 0;
    qus_any();
  } else {
    ask.innerHTML = feak_players[counter];
    if (rand === counter) {
      rand++;
      if (feak_players[rand] === undefined) {
        rand -= 2;
      }
    }
    ask_to.innerHTML = feak_players[rand];

    counter++;
  }
}

function select_vote() {
  if (feak_players[0] === undefined) {
    show(Reveal, Vote);
    reveal_player.innerHTML = ran_payer;

    let counter = 0 ;

    function movers(maxLoops) {
    let currentLoop = 0; // يحسب كم دورة خلصنا حالياً

    let mover = setInterval(() => {
        // إذا وصلنا لآخر لاعب بالدورة الحالية
        if (counter === cloun_players.length) {
            counter = 0;      // صفر العداد لتبدأ الدورة الجديدة من أول لاعب
            currentLoop++;    // زيادة عدد الدورات التي انتهت
        }

        // 🎯 الشرط الحاسم: إذا خلصنا عدد الدورات المطلوبة تماماً
        if (currentLoop === maxLoops) {
            clearInterval(mover); // إيقاف العداد نهائياً
            
            shadow_vote.style.display = "none";
            reveal_player.style.display = "flex";
            
            // 🔥 هنا يشتغل صوت الفوز فوراً عند كشف اللاعب الأخير!
            click_win.play(); 
              select.style.pointerEvents = visible;
              select.style.opacity = "1";
            
            return; // الخروج من الدالة
        }

        // كود تشغيل صوت النقر والتنقل بين الأسماء أثناء الدوران
        click_ul.currentTime = 0.5;
        click_ul.play();
        
        shadow_vote.style.display = "flex";
        reveal_player.style.display = "none";
        shadow_vote.innerHTML = cloun_players[counter];
        
        counter++; // الانتقال للاعب التالي
    }, 200); // جعلت السرعة 100 ملي ثانية ليكون التدوير سريع وحماسي!
}

// 🚀 استدعي الدالة مرة واحدة فقط وحدد عدد المرات داخل القوسين
// مثلاً هنا رقم 4 يعني المصفوفة رح تدور 4 مرات كاملة ورا بعض وبس تخلص يشتغل الصوت
movers(4);
  

  

    


    return;
  }
  vote_player.innerHTML = null;
  let random_vote = Math.floor(Math.random() * feak_players.length);

  players.push(feak_players[random_vote]);

  feak_players.splice(feak_players.indexOf(feak_players[random_vote]), 1);

  chose_vote.innerHTML = players[players.length - 1];

  for (let i = 0; i < cloun_players.length; i++) {
    if (cloun_players[i] === players[players.length - 1]) {
      continue;
    } else {
      let btn = document.createElement("button");

      btn.innerHTML = cloun_players[i];

      vote_player.append(btn);
        clickd.currentTime = 0;
     
         clickd.play();
      btn.onclick = select_vote;
    }
  }

  // console.log(players);
  // console.log(feak_players);
}


//الأحداث المستخدمة 
start.onclick = () => {
  show_first(Cards, Interface);
};

cards.forEach((card, index) => {
  card.onclick = () => {
    show_first(Names, Cards);

    topic = index;
  };
});

add_user.onclick = () => {
  show(add_player, cards[0]);
  player_name.focus();
};

add.onclick = () => {
  if (player_name.value != "") {
    player_list.innerHTML = "";
    players.push(player_name.value);
    localStorage.setItem("player", JSON.stringify(players));
    show(add_player, add_player);
    players.forEach((player) => {
      let span = document.createElement("span");
      let btn = document.createElement("button");
      let p = document.createElement("p");
      btn.innerHTML = "-";
      p.innerHTML = player;
      span.appendChild(btn);
      span.appendChild(p);
      player_list.append(span);

      btn.onclick = () => {
        players.splice(players.indexOf(btn.nextElementSibling.innerHTML), 1);
        btn.parentElement.remove();
        localStorage.player = JSON.stringify(players);
        counter_player = players.length;
        if (counter_player >= 3) {
          starts.style.opacity = "1";
          starts.style.pointerEvents = "visible";
          varia.innerHTML = `فيك تضيف أكتر معلم `;
        } else {
          starts.style.opacity = "0.5";
          starts.style.pointerEvents = "none";
          varia.innerHTML = `أقل شي 3 لاعبين حبيب القلب!`;
        }
      };
    });
    player_name.value = "";
    counter_player = players.length;
    if (counter_player >= 3) {
      starts.style.opacity = "1";
      starts.style.pointerEvents = "visible";
      varia.innerHTML = `فيك تضيف أكتر معلم `;
    } else {
      starts.style.opacity = "0.5";
      starts.style.pointerEvents = "none";
      varia.innerHTML = `أقل شي 3 لاعبين حبيب القلب!`;
    }
  }
};

back.onclick = () => {
  show(add_player, add_player);
};

starts.onclick = () => {
  for (let i = 0; i < players.length; i++) {
    cloun_players[i] = players[i];
  }
  show(choice, Names);
  let ran = Math.floor(Math.random() * players.length);
  random_player = Math.floor(Math.random() * players.length);
  random_topic = Math.floor(Math.random() * cata[topic].length);
  giv(ran);

  // console.log(cloun_players);
};

qus_to.onclick = () => {
  show(Ask, Questions);

  ques();
};

ask_btn.onclick = ques;

foucs.onclick = () => {
  show(Vote, ask_any);

  select_vote();
};

select.onclick = () => {
  show(find_out, Reveal);
  your_select.innerHTML = ran_payer;
  let ran = Math.floor(Math.random() * cata[topic].length);

  cata[topic][ran + 5] == undefined ? (ran -= 5) : false;
  let rand = ran + 5;
  let my_select = [];

  let counter_select = 0;
  for (let i = ran; i < rand; i++) {
    if (cata[topic][i] === topic_now) {
      continue;
    }
    my_select[counter_select] = cata[topic][i];

    counter_select++;

    // if(cata[topic][i] === cata[topic][random_topic])
    // {
    //     continue;
    // }
    // let btn = document.createElement("button");

    // btn.innerHTML = cata[topic][i];

    // select_topic.append(btn);
  }
  my_select.push(topic_now);
  my_select.sort().reverse();
  // let btn = document.createElement("button");

  // btn.innerHTML = cata[topic][random_topic];
  // select_topic.append(btn);

  // btn.style.order = "";
  // let ran =

  for (let i = 0; i < my_select.length; i++) {
    let btn = document.createElement("button");

    btn.innerHTML = my_select[i];

    select_topic.append(btn);
    btn.onclick = () => {
      document.querySelectorAll("#select_topic button").forEach((btn) => {
        btn.style.pointerEvents = "none";
      });

      setTimeout(() => {
        repl.style.opacity = "1";
        repl.style.pointerEvents = "visible";
      }, 1000);
      if (btn.innerHTML === cata[topic][random_topic]) {
        // this.style.background = "red";
        btn.style.background = "green";
        click_win.currentTime = 0;
        click_win.play();
      } else {
        btn.style.background = "red";
        btn.style.boxShadow = "0 5px 0 #ff000070";
        click_loss.currentTime = 0;
        click_loss.play();
        document.querySelectorAll("#select_topic button").forEach((btn) => {
          if (btn.innerHTML === cata[topic][random_topic]) {
            btn.style.background = "green";
          }
        });
      }
    };
  }
};

home.onclick = () => {
sessionStorage.removeItem("chek");
  setTimeout(()=>{
    window.location.reload();
  },500)
};
news.onclick = () => {
//   find_out.style.display = "none";
//   document.querySelectorAll("#select_topic button").forEach((btn) => {
//     btn.style.pointerEvents = "none";
//   });
//   ask_plaeyr_any.innerHTML = "";
//   select_topic.innerHTML = "";
//   repl.style.opacity = "0.5";
//   repl.style.pointerEvents = "none";
//   for(let i = 0 ; i < feak_players.length ; i++)
//   {
//     players[i] = feak_players[i];
//   }

//   console.log(players);
//   console.log(feak_players);
//   starts.click();


sessionStorage.chek = JSON.stringify(topic);

setTimeout(()=>{
    window.location.reload();
},200)


};


if(sessionStorage.chek != undefined )
{
     find_out.style.display = "none";
    cards[JSON.parse(sessionStorage.getItem("chek"))].click();
    Interface.style.display = "none";
    starts.click();
}



// console.log(localStorage.chek);



const btn = document.querySelectorAll("button");
const cardss = document.querySelectorAll(".card");

// btn.forEach((btn)=>{

//     btn.addEventListener(("click"),()=>{

//     click.currentTime = 0.1;

//     click.play();

// })
// })


function transition_sound(element,cur,voi){

    element.addEventListener("click",()=>{
     voi.currentTime = cur;

    voi.play();
    })
}

btn.forEach((btn,i)=>{

    if(i == 0 )
    {
       transition_sound(btn,0.1,click);
    }
    else{
    transition_sound(btn,0,clickd)
    }

});


cardss.forEach((card)=>{
   transition_sound(card,0.1,click);
})


const homee = document.querySelectorAll(".home");

homee.forEach((btn)=>{

    btn.addEventListener("click",()=> {

        btn.parentElement.style.opacity = "0";
        sessionStorage.removeItem("chek");
        setTimeout(()=>{window.location.reload()},800)
    }); 
});





