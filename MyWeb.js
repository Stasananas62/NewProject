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
