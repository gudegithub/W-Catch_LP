var showloading = document.getElementById('showloading');
var contentsAll = document.getElementById('contentsAll');

// -------------------- What We Can Do --------------------
const item1 = document.getElementById("content-item1");
const item2 = document.getElementById("content-item2");
const item3 = document.getElementById("content-item3");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const marketing = document.getElementById("marketing-img");
const design = document.getElementById("design-img");
const technical = document.getElementById("technical-img");
const content1 = document.getElementById("text1-content");
const content2 = document.getElementById("text2-content");
const content3 = document.getElementById("text3-content");


item1.onmouseover = function() {
  item1.style.backgroundColor = "inherit";
  item1.style.border = "hidden";
  text1.style.opacity = 0;
  marketing.style.opacity = 0.8;
  content1.style.opacity = 1.0;
};
item1.onmouseout = function() {
  item1.style.backgroundColor = 'rgba(199, 170, 170, 0.8)';
  text1.style.opacity = 1;
  item1.style.border = "#757575 solid 2px";
  item1.style.backgroundImage = "none";
  marketing.style.opacity = 0;
  content1.style.opacity = 0;
};
item2.onmouseover = function() {
  item2.style.backgroundColor = "inherit";
  item2.style.border = "hidden";
  text2.style.opacity = 0;
  design.style.opacity = 0.8;
  content2.style.opacity = 1.0;
};
item2.onmouseout = function() {
  item2.style.backgroundColor = 'rgba(199, 170, 170, 0.8)';
  text2.style.opacity = 1;
  item2.style.border = "#757575 solid 2px";
  item2.style.backgroundImage = "none";
  design.style.opacity = 0;
  content2.style.opacity = 0;
};
item3.onmouseover = function() {
  item3.style.backgroundColor = "inherit";
  item3.style.border = "hidden";
  text3.style.opacity = 0;
  technical.style.opacity = 0.8;
  content3.style.opacity = 1.0;
};
item3.onmouseout = function() {
  item3.style.backgroundColor = 'rgba(199, 170, 170, 0.8)';
  text3.style.opacity = 1;
  item3.style.border = "#757575 solid 2px";
  item3.style.backgroundImage = "none";
  technical.style.opacity = 0;
  content3.style.opacity = 0;
};



//-------------------- Site Plan --------------------
const plan1Button = document.getElementById("plan1Button");
const plan2Button = document.getElementById("plan2Button");
const plan3Button = document.getElementById("plan3Button");
const plan0 = document.getElementById("plan0List");
const plan1 = document.getElementById("plan1List");
const plan2 = document.getElementById("plan2List");
const plan3 = document.getElementById("plan3List");
const planDefault = document.getElementById("planDefault");
const plan1Content = document.getElementById("plan1Content");
const plan2Content = document.getElementById("plan2Content");
const plan3Content = document.getElementById("plan3Content");

plan1Button.onclick = function() {
  plan2.style.display = "none";
  plan3.style.display = "none";
  planDefault.style.display = "none";
  plan1Content.style.display = "block";
  plan2Content.style.display = "none";
  plan3Content.style.display = "none";
}

plan2Button.onclick = function() {
  plan2.style.display = "block";
  plan3.style.display = "none";
  planDefault.style.display = "none";
  plan1Content.style.display = "none";
  plan2Content.style.display = "block";
  plan3Content.style.display = "none";
}

plan3Button.onclick = function() {
  plan2.style.display = "block";
  plan3.style.display = "block";
  planDefault.style.display = "none";
  plan1Content.style.display = "none";
  plan2Content.style.display = "none";
  plan3Content.style.display = "block";
}


// ---------- Flow ----------

const flow = document.getElementById("flow");
const box = document.getElementById("flowDetailBox");
const flow_img = document.getElementById("flowDetailImg");
const flow_title = document.getElementById("flowDetailTitle");
const flow_content = document.getElementById("flowDetailContent");

const flowImgs = new Array("img/call.svg","img/contact.svg","img/hearing.svg","img/suggest.svg","img/start.svg");
const flowTitles = new Array("お問い合わせ","ご連絡","ヒアリング","ご提案","制作開始");
const flowContents = new Array("お問い合わせフォームからご連絡下さい。","２営業日内にご連絡します。","案件についてヒアリングを行います。","課題の解決策を複数ご提示します。","制作に取りかかります。");
var currentNum = 0;

window.addEventListener('load', () => {

  showloading.style.display = 'none';
  contentsAll.classList.remove('hidden');

  var slideShow = function() {
    flow_img.src = flowImgs[currentNum];
    flow_title.textContent = flowTitles[currentNum];
    flow_content.textContent = flowContents[currentNum];

    if (currentNum == flowImgs.length - 1){
      currentNum = 0;
    }
    else {
      currentNum ++;
    }

  }

  setInterval(slideShow, 8000);

}, false);

// function getScroll() {
//   //ブラウザによって異なる
//   let element = document.documentElement || document.body;
//   // スクロールされたピクセル数
//   let scroll = element.scrollTop;
//   // スクロール範囲の最大のピクセル数
//   let range = element.scrollHeight;
//   // console.log(scroll);
//   // console.log(range);

//   if (scroll / range > 0.093) {
//     let contents_animation = document.getElementById('contents_animation');
//     contents_animation.classList.remove('none');
//   }
//   if (scroll / range > 0.1) {
//     let contents_animationExample_1 = document.getElementById('contents_animationExample_1');
//     contents_animationExample_1.classList.remove('none');
//     let contents_animationExample_2 = document.getElementById('contents_animationExample_2');
//     contents_animationExample_2.classList.remove('none');
//     let contents_animationExample_3 = document.getElementById('contents_animationExample_3');
//     contents_animationExample_3.classList.remove('none');
//   }
//   if (scroll / range > 0.28) {
//     let contents_cms = document.getElementById('contents_cms');
//     contents_cms.classList.remove('none');
//   }
//   if (scroll / range > 0.37) {
//     let contents_plansTitle = document.getElementById('contents_plansTitle');
//     contents_plansTitle.classList.remove('none');
//   }
//   if (scroll / range > 0.43) {
//     let contents_plan_1 = document.getElementById('contents_plan_1');
//     contents_plan_1.classList.remove('none');
//     let contents_plan_2 = document.getElementById('contents_plan_2');
//     contents_plan_2.classList.remove('none');
//   }
//   if (scroll / range > 0.53) {
//     let contents_buttonToForm = document.getElementById('contents_buttonToForm');
//     contents_buttonToForm.classList.remove('none');
//   }
// }

// setInterval("getScroll()", 100);
