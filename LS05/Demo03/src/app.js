
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var layer1 = new cc.LayerColor(cc.color.RED,200,200);
        layer1.ignoreAnchor = false;
        layer1.x = size.width/6;
        layer1.y = size.height/2;
        this.addChild(layer1);

        var layer2 = new cc.LayerColor(cc.color.WHITE,200,200);
        layer2.ignoreAnchor = false;
        layer2.x = size.width/2;
        layer2.y = size.height/2;
        this.addChild(layer2);
        //layer1.addChild(lay2);其中200，200指代图形中心点坐标

        var layer3 = new cc.LayerColor(cc.color.YELLOW,200,200);
        layer3.ignoreAnchor = false;
        layer3.x = size.width/1.2;
        layer3.y = size.height/2;
        this.addChild(layer3);



        return true;
    }
});
//构造函数中，this指代实例化出来的对象
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

