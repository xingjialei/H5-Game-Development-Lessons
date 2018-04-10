
var HelloWorldLayer = cc.Layer.extend({
    label:null,
    second:0,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;

        /*var labelTTF = new cc.LabelTTF("玩家1：","",64);
        this.labelTTF = labelTTF;
        labelTTF.x = 50;
        labelTTF.y = size.height-50;
        labelTTF.setAnchorPoint(0,1);
        this.addChild(labelTTF);

        //设置字体样式
        labelTTF.setFontFillColor(cc.color.WHITE);*/

        var labelTTF = new cc.LabelTTF("","",64);
        this.label = labelTTF;
        labelTTF.x = 50;
        labelTTF.y = size.height-50;
        labelTTF.setAnchorPoint(0,1);
        this.addChild(this.label);

        /*this.scheduleUpdate();*/
        this.schedule(this.myTimer,1,cc.REPEAT_FOREVER,0);
        return true;

    },
    /*update:function (dt) {
        if(this.t < 60){
            this.t += 1;
            this.labelTTF.setString("玩家1："+this.t);
        }
    },*/
    myTimer:function(dt){
        this.second += 1;
        this.label.setString("玩家："+this.second);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

