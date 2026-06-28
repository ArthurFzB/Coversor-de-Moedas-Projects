const convertButton = document.querySelector(".convert-button");
const select1 = document.querySelector(".select-1");
const select2 = document.querySelector(".select-2");

function convertValues() {

    const inputValue = document.querySelector(".input-value").value;

    const valueToConvert = document.querySelector(".value")
    const valueConverted = document.querySelector(".value-2")

    // VALOR REAL MOEDAS
    const realV = 1.00;
    const dolarV = 5.45;
    const euroV = 5.85;
    const libraV = 6.86


    // BITCOIN
    const real = 322797;
    const Dolar = 62855;
    const Euro = 55014;
    const Libra = 45205;



    if (select1.value === "real-1") {
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputValue / realV)
    }

    if (select1.value === "dolar-1") {
        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputValue / dolarV)
    }

    if (select1.value === "euro-1") {
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputValue / euroV)
    }
     if (select1.value === "libra-1") {
        valueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency", currency: "GBP"
        }).format(inputValue / libraV)
    }


    // ----------------------------------------------------------------------------------

    if (select2.value === "real") {
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputValue / realV)
    }
    if (select2.value === "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputValue / dolarV)
    }

    if (select2.value === "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "EUR"
        }).format(inputValue / euroV)
    }
    if (select2.value === "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputValue / libraV)
    }

    if (select2.value === "bitcoin") {

        // Criamos uma variável vazia para guardar o preço do BTC na moeda escolhida
        let precoDoBitcoinSelecionado = 0;

        // Verificamos qual é a moeda de ORIGEM (select1) para escolher o preço correto
        if (select1.value === "real-1") {
            precoDoBitcoinSelecionado = real;
        } else if (select1.value === "dolar-1") {
            precoDoBitcoinSelecionado = Dolar;
        } else if (select1.value === "euro-1") {
            precoDoBitcoinSelecionado = Euro;
        } else if (select1.value === "libra-1") {
            precoDoBitcoinSelecionado = Libra;
        }
        const satoshisFinais = inputValue / precoDoBitcoinSelecionado;

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 8
        }).format(satoshisFinais);

    }


}

function changeCurrency() {
    const name1 = document.getElementById("name-1")
    const Img1 = document.querySelector(".first-img")


    if (select1.value == "real-1") {
        name1.innerHTML = "Real Brasileiro"
        Img1.src = "./assets/Brasil.png"

    }
    if (select1.value == "dolar-1") {
        name1.innerHTML = "Dólar Americano"
        Img1.src = "./assets/Dolar.png"
    }
    if (select1.value == "euro-1") {
        name1.innerHTML = "Euro"
        Img1.src = "./assets/Euro.png"
    }
    if (select1.value == "libra-1") {
        name1.innerHTML = "Euro"
        Img1.src = "./assets/Libra.png"
    }
    convertValues()
}
function changeCurrency2() {
    const name2 = document.getElementById("name-2")
    const Img2 = document.querySelector(".second-img")


    if (select2.value == "real") {
        name2.innerHTML = "Real Brasileiro"
        Img2.src = "./assets/Brasil.png"

    }
    if (select2.value == "dolar") {
        name2.innerHTML = "Dólar Americano"
        Img2.src = "./assets/Dolar.png"
    }
    if (select2.value == "euro") {
        name2.innerHTML = "Euro"
        Img2.src = "./assets/Euro.png"
    }
    if (select2.value == "bitcoin") {
        name2.innerHTML = "Bitcoin"
        Img2.src = "./assets/Bitcoin.png"
    }
    if (select2.value == "libra") {
        name2.innerHTML = "Libra"
        Img2.src = "./assets/Libra.png"
    }
    convertValues()
}

convertButton.addEventListener("click", convertValues)
select1.addEventListener("change", changeCurrency,convertValues() );
select2.addEventListener("change", changeCurrency2,convertValues() );