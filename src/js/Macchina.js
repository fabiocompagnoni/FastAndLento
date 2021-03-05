/**
 * @author Fabio Compagnoni
 * @version 1.0
 */

class Macchina
{
    static modello;
    static vel;
    static posX;
    static poxY;
    
    constructor(modello)
    {
        this.modello=modello;
        this.vel=0;
    }
    getPosX()
    {
        return this.posX;
    }
    getPosY()
    {
        return this.posY;
    }
    setPosX(posX)
    {
        this.posX=posX;
    }
    setPosY(posY)
    {
        this.posY=posY;
    }
    getModello()
    {
        return this.modello;
    }
    setModello(modello)
    {
        this.modello=modello;
    }
    muovi(X,Y)
    {
        this.posX+=X;
        this.posY+=Y;
    }
    mostra(canvas)
    {
        let str="";
        switch(this.modello)
        {
            case 0: str="Audi"; break;
            case 1: str="Car"; break;
            case 2: str="Mini_truck"; break;
            case 3: str="Mini_van"; break;
            case 4: str="Police"; break;
            case 5: str="Ambulance"; break;
        }
        str+=".png";
        let ctx=canvas.getContext("2d");
        let img=document.createElement("img");
        img.src='src/img/macchine/'+str;
        img.appendChild(canvas);
        ctx.drawImage(img,this.posX,this.posY);
    }
}