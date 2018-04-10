//自定义层
var CustomLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;
        var label = new cc.LabelTTF("这是第一个场景","",50);
        label.x = size.width*0.5;
        label.y = size.height*0.5;
        this.addChild(label);
    }
});
//渐进层
var BgLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        //this.addChild(cc.LayerColor(cc.color.WHITE));

        var gdLayer1 = new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0),cc.p(0,-1));
        var gdLayer2 = new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0),cc.p(-1,-1),
            [{p:0,color:cc.color.RED},
                {p:5,color:new cc.Color(0,0,0,0)},
                {p:1,color:cc.color.RED}
            ]);
        //this.addChild(gdLayer1);
        this.addChild(gdLayer2);
    }
});
var StartScene = cc.Scene.extend({
    ctor:function(){
        this._super();

        var bgLayer = new BgLayer();
        this.addChild(bgLayer);

        var customLayer = new CustomLayer();
        this.addChild(customLayer);

        /*var bgLayer = new BgLayer();
        this.addChild(bgLayer);
        var customLayer = new cc.CustomLayer();
        this.addChild(customLayer);
        var gdLayer1 = new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0),cc.p(0,-1));
        var gdLayer2 = new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0),cc.p(0,-1),
            [{p:0,color:cc.color.RED},
                {p:5,color:new cc.Color(0,0,0,0)},
                {p:1,color:cc.color.RED}
            ])*/
        //this.addChild(gdLayer2);
    }
})
