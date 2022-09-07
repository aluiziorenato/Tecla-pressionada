const box = document.querySelector(".box"); // instancia a constante box com a classe box do html
      document.addEventListener("keydown", e =>{ // escuta o evendo de tecla pressionada.
        let keyName = e.keyCode === 32 ? "Space" : e.key; // instacia a variável keyName que recebe a condicional ternária
                                                            //para identificar a tecla space pele codigo ou pelo nome
        box.querySelector(".key-code").innerText = e.keyCode; //adiciona ao html
        box.querySelector(".key-name").innerText = keyName.toUpperCase(); // adiciona o nome da tecla em maiúsculo
        box.querySelector(".key span").innerText = keyName; // adiciona o nome da tecla em minusculo
        box.querySelector(".code span").innerText = e.keyCode;  // adciona no html o código da tecla
        box.classList.add("active"); //adiciona para as tags a classe active para estilização no css
      }); 