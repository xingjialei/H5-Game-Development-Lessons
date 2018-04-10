
var HelloWorldLayer = cc.Layer.extend({
    redlayer:null,
    redSprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        /*var redlayer = new cc.LayerColor(cc.color.RED,200,200);
        redlayer.ignoreAnchor = false;
        redlayer.y = size.height/2;
        this.redlayer = redlayer;//layer1原先是局部，将其先设为全局变量
        this.addChild(this.redlayer);*/

        var redSprite = new cc.LayerColor(cc.color.YELLOW,200,200);
        redSprite.ignoreAnchor = false;
        redSprite.x = size.width/2;
        this.redSprite = redSprite;
        this.addChild(this.redSprite);

        //this.scheduleUpdate();
        this.schedule(this.myCallback,0.2,cc.REPEAT_FOREVER,0);//参数：函数
        return true;
    },
    update:function (dt) {
        this.redlayer.x += 1;
        cc.log(dt);
    },
    myCallback:function(){
        /*this.redlayer.x += 20;
        if(this.redlayer.x > 400){
            this.unschedule(this.myCallback);
        }*/
        this.redSprite.y -= this.speed;
        if(this.redSprite.y < 0){
            this.speed = -this.speed;
        }else{
            this.speed += 0.2;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

