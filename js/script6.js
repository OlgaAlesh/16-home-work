// task 7

let S = "2 млн.руб.",
    p = "10%",
    years = "5 лет",
    Pereplata = function(){
        console.log(parseInt(S) * parseInt(p) / 100 * parseInt(years) + ` млн. руб.`);
    };

    Pereplata();