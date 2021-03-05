/**
 * @author Fabio Compagnoni
 * @version 1.0
 */
class Giocatore
{
    static punteggio;
    static modelloMacchina;
    constructor(punteggio,modelloMacchina)
    {
        this.punteggio=punteggio;
        this.modelloMacchina=modelloMacchina;
    }
    getPunteggio()
    {
        return this.punteggio
    }
    setPunteggio(punteggio)
    {
        this.punteggio=punteggio;
    }
    updatePunteggio(toAdd)
    {
        this.punteggio+=toAdd;
    }
    getModelloMacchina()
    {
        return this.modelloMacchina;
    }
    setModelloMacchina(modello)
    {
        this.modelloMacchina=modello;
    }
}

//giocatore principale
const giocatore1=new Giocatore(0,0);
//macchinaDelGiocatore
const macchinaPrincipale=new Macchina(giocatore1.getModelloMacchina());

const canvas=document.getElementById("gioco");

//genero 5 macchine
const macchine=new Array();
for(let i=0;i<5;i++)
{
    macchine[i]=new Macchina((Math.floor(Math.random()*5)));
    macchine[i].mostra(canvas);
}


