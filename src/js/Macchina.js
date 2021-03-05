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
        posX=Math.random()
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
}