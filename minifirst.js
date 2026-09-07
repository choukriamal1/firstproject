const prompt = require(`prompt-sync`)();

console.log(`Voici votre calculatrice veuillez choisir l operation que vous voulez`);

function add(a, b)
{
    a = parseInt(prompt("Entrer un nombre a : "));
    b = parseInt(prompt("Entrer un nombre b : "));
    console.log(a + b );
}

function mult(c, d) 
{
    c = parseInt(prompt("Entrer un nombre c : "));
    d = parseInt(prompt("Entrer un nombre d : "));
    console.log(c * d );
}
           
function div(e, f)
{
    e = parseInt(prompt("Entrer un nombre e : "));
    f = parseInt(prompt("Entrer un nombre f : "));
    if (f==0)
    {
     console.log(`Erreur`);
    }
    else 
    {
    console.log( e / f) ;
    }
}
            
function sous(g, h)
{    
    g = parseInt(prompt("Entrer un nombre g : "));
    h = parseInt(prompt("Entrer un nombre h : "));
    console.log( g - h );
}


function afficherTableu() {     
    console.log("1- addition");
    console.log("2- Multiplication");
    console.log("3- Division");
    console.log("4- Soustraction");
    console.log("5- Quitter");

let operation = parseInt(prompt("choisir parmis les operations"));
switch(operation)
{ 
    case 1:
        console.log(`1.Addition`);
        add();
        break;

    case 2:
        console.log(`2.Multiplication`);
        mult();
        break;


    case 3:
        console.log(`3.Division`);
        div();
        break;
        

    case 4:
        console.log(`4.Soustractio`);
        sous();
        break;

     case 5:
        console.log(`5.Quitter`);
        break;
    default:
        console.log(`Cette operation n existe pas`);
} 
}
afficherTableu();