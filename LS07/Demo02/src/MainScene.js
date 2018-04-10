var MainLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var layer = new cc.LayerColor(cc.color(255,193,193));
        this.addChild(layer);

        var size = cc.winSize;
        var label = new cc.LabelTTF("这是主游戏场景","",50);
        label.x = size.width/2;
        label.y = size.height*0.7;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont("跳转到结束场景",function(){
            //cc.director.runScene(new OverScene());
            cc.director.runScene(new cc.TransitionFade(2,new OverScene(),(255,255,255)));
        },this);
        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x = size.width * 0.5;
        menuItem.y = size.height * 0.3;
        this.addChild(menu);
    }
})

//创建一个场景
var MainScene = cc.Scene.extend({
    /*onEnter:function () {
        this._super();
        //创建一个层，并添加到场景上
        var layer = new cc.LayerColor(cc.color.RED);
        this.addChild(layer);
    }*/
    ctor:function () {
        this._super();
        //创建一个层，并添加到场景上
        //var layer = new cc.LayerColor(cc.color.RED);
        var layer = new MainLayer();
        this.addChild(layer);
    }
});