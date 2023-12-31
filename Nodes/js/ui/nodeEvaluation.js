class Mesh {
    constructor(){
        this.verteces;
        this.edges;
        this.vertexGroups;

        this.dataChanged = true;
    }
    evaluate(){
        return this.verteces;
    }
}

class Subdivision {
    constructor(){
        this.inputVerteces;
        this.outputVerteces;
        this.iterations;

        this.dataChanged = true;
    }
    evaluate(){
        this.outputVerteces = this.subdivideMesh(this.inputVerteces, this.iterations);
        return this.outputVerteces;
    }
    subdivideMesh(inputVerteces, iterations){
        //subdividing algorithm
        return subdividesVertecesArray;
    }
}

class DrawShape {
    constructor(){
        this.graphics = new PIXI.Graphics();

        this.dataChanged = true;
    }
    evaluate(){
        this.graphics = Canvas.drawShape();
        return this.graphics;
    }
}

class KBlurXY {
    constructor(app){
        this.app = app;
        this.graphics = new PIXI.Graphics();
        this.outputBitmap;
        this.graphics.blurX = 20;
        this.graphics.blurY = 210;
        this.mute = false;
        this.quality = 20;

        this.dataChanged = true;
    }
    evaluate(){
        if (dataChanged == true){
            this.outputBitmap = Canvas.getBitmapFromGraphics(this.graphics);
            return this.outputBitmap;
        }
        else {
            return this.outputBitmap;
        }
    }
/*     getBitmapFromGraphics(graphicsObject, blurX, blurY){

        const blurFilter = new PIXI.filters.BlurFilter();
        blurFilter.quality = this.quality;
        blurFilter.blurX = blurX;
        blurFilter.blurY = blurY;
        graphicsObject.filters = [blurFilter];
        return getBitmapFromGraphicsObject(graphicsObject);
    }
    getBitmapFromGraphicsObject(graphicsObject){
        let graphicTexture;
        const graphicBoundaryBox = new PIXI.Rectangle();
        const graphicBitmap = new PIXI.Sprite(graphicTexture);
        graphicBoundaryBox.x = -graphicsObject.blurX;
        graphicBoundaryBox.y = -graphicsObject.blurY;
        graphicBoundaryBox.width = (graphicsObject.width + graphicsObject.blurX) * 2;
        graphicBoundaryBox.height = (graphicsObject.height + graphicsObject.blurY) * 2;
      
        graphicTexture = app.renderer.generateTexture(graphicsObject, PIXI.SCALE_MODES.NEAREST, 1, graphicBoundaryBox);
        graphicBitmap.texture = graphicTexture;
        return graphicBitmap;       
    } */
}

class Mask {
    constructor(){
        this.dataChanged = true;
        this.canvas;
        this.graphic;
        this.mask;
    }
    evaluate(){
        this.canvas = Canvas.maskGraphicByGraphic(graphic, mask);
        return this.canvas;
    }
}

class Output {
    constructor(){
        this.canvas = null;
    }
    evaluate(){
        return this.canvas;
    }
    assignCanvas(canvas){
        this.canvas = canvas;
    }
}