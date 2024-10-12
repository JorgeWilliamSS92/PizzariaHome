//testando

document.addEventListener("DOMContentLoaded", function () {
  const img2 = document.getElementById("downs2");
  let i = 1;
  setInterval(() => {
    if (i <= 6) {
      img2.src = `./imgs/pizza${i}.png`;
      i++;
    } else {
      i = 1;
      img2.src = `./imgs/pizza${i}.png`;
    }
  }, 2500);
});

///////////////////////////////////////////////////////

//adcionando imagens de pizza em frente aos nomes dos menus
function add(v) {
  const t = document.getElementById(v);
  t.classList.add("show");
}

function rem(v) {
  const t = document.getElementById(v);
  t.classList.remove("show");
}

//pegando as informações de foto pizza e rodapé e subsituindo ao clicar no arrow left ou arraow right
let v = 1;

function goRight() {
  v = v + 1;
  if (v <= 7) {
    const img = document.getElementById("downs2");
    img.src = `./imgs/pizza${v}.png`;
    return v;
  } else {
    v = 7;
    return v;
  }
}

function goLeft() {
  v = v - 1;
  if (v >= 1) {
    const img = document.getElementById("downs2");
    img.src = `./imgs/pizza${v}.png`;
    return v;
  } else {
    v = 1;
    return v;
  }
}

//pegando as informações de fotos da unidade e substituido de acordo com arrow left e arrow right
let vv = 1;

function goRight2() {
  vv = vv + 1;
  if (vv <= 5) {
    const img = document.getElementById("downs3");
    img.src = `./imgs/estrutura${vv}.jpg`;
    return vv;
  } else {
    vv = 7;
    return vv;
  }
}

function goLeft2() {
  vv = vv - 1;
  if (vv >= 1) {
    const img = document.getElementById("downs3");
    img.src = `./imgs/estrutura${vv}.jpg`;
    return vv;
  } else {
    vv = 1;
    return vv;
  }
}

//codigo para a página ir carregando conforme scrolldown
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

// Seleciona todos os elementos que queremos animar
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
