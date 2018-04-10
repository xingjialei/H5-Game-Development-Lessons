var FirstLayer = cc.Layer.extend({
    //sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var sp2 = new cc.Sprite(res.Red_png);
        sp2.x = 100;
        sp2.y = 100;
        this.addChild(sp2);

        var sp3 = new cc.Sprite(res.Yellow_png);
        sp3.x = 200;
        sp3.y = 200;
        this.addChild(sp3);
        return true;
    }
});
var FirstScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new FirstLayer();
        this.addChild(layer);
    }
});
