function makeBackgroundColor(color){
    document.body.style.background = color;
}

var button1 = document.getElementById('button1');
button1.addEventListener('mousemove', function(){
		makeBackgroundColor('white');
});
var button2 = document.getElementById('button2');
button2.addEventListener('click', function(){
		makeBackgroundColor('blue');
});
var button3 = document.getElementById('button3');
button3.addEventListener('click', function(){
		makeBackgroundImage();
});

function makeBackgroundImage(){
    console.log('Store');
    document.body.style.backgroundImage = "url('http://i.5sfer.com/post/postImage/8ipwnn.jpg')";
};

var button4 = document.getElementById('button4');
button4.addEventListener('click', function(){
        makeBackgroundImageBack();
});

function makeBackgroundImageBack(){
    console.log('Store');
    document.body.style.backgroundImage = "url('http://th29.st.depositphotos.com/3892937/7377/v/950/depositphotos_73776649-stock-illustration-seamless-exotic-pattern.jpg')";
};

  var div = document.createElement('div');
  div.className = "alert alert-success";
  div.innerHTML = "<strong>About Me </strong>Ссылка на "+'<a href= https://vk.com/id95886564><strong>VK</strong></a>';
  document.body.appendChild(div);

  var div2 = document.createElement('div');
    div2.className = "alert2 alert2-success";
    div2.innerHTML = 'Здесь можно найти много про мои путешествия и виды увлечения, так как их много.<a href= https://www.instagram.com/stasananas62/><strong>instsgram</strong></a>';
    document.body.appendChild(div2);

    function countNumber() {
            for(var i=1; i<=3; i++) {
            alert("Тяжко сделать сайт в жатый срок. " + i);
            }
            };
  var div5 = document.createElement('div');
    div5.className = "alert5 alert5-success";
    div5.innerHTML ="Если грустно и одиноко то просто " + '<a href= http://met-mother.com/>ножми на меня)</a>';
    document.body.appendChild(div5);
/*unction makeBackgroundImageBack(){
    console.log('Store');
    document.body.style.makeBackgroundImageBack = "url('http://th29.st.depositphotos.com/3892937/7377/v/950/depositphotos_73776649-stock-illustration-seamless-exotic-pattern.jpg')";
  };*/
/*(function main() {
  var elem1, elem2, elem3, elem4, elem5;

  createElem1();
  createElem2();
  createElem3();
  createElem4();
  createElem5();

  function createElem1(){
    var elem1 = document.getElementById('menu1');
    elem1.style.backgroundColor = 'red';
    elem1.style.color = 'black';
    elem1.style.height = '50px';
    elem1.style.fontsize = '22px';
    elem1.innerHTML ='<div id= "menu2"></div>';
    elem1.innerHTML ='<a href= http:\\www.ficbook.net>ficbook</a>';
  }

  function createElem2(){
    var elem2 = document.getElementById('menu2');
    elem2.style.backgroundColor = 'yellow';
    elem2.style.color = 'white';
    elem2.style.height = '50px';
    elem2.style.fontsize = '22px';
    elem2.innerHTML ='<div id= "menu3"></div>';
    elem2.innerHTML ='<a href= http:\\www.vk.com>Vkontakte</a>';
      }

    function createElem3(){
    var elem3 = document.getElementById('menu3');
    elem3.style.backgroundColor = 'green';
    elem3.style.color = 'black';
    elem3.style.height = '50px';
    elem3.style.fontsize = '24px';
    elem3.innerHTML ='<div id= "menu4"></div>';
    elem3.innerHTML ='<a href= http:\\www.malkoran-world.clan.su>my one on Ucoz</a>';
      }

      function createElem4(){
    var elem4 = document.getElementById('menu4');
    elem4.style.backgroundColor = 'orange';
    elem4.style.color = 'gold';
    elem4.style.height = '50px';
    elem4.style.fontsize = '28px';
    elem4.innerHTML ='<div id= "menu5"></div>';
    elem4. innerHTML = '<a href= https:\\www.modgames.net>Site with over9000 game-mods</a>';

}

    function createElem5(){
    var elem5 = document.getElementById('menu5')
    elem5.style.backgroundColor = 'cyan';
    elem5.style.color = 'grey';
    elem5.style.height = '50px';
    elem5.style.fontsize = '26px';
    elem5.innerHTML = '<a href= http:\\www.militarist.com.ua>militarist</a>';
}


})();*/