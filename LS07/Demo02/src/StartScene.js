var StartLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var layer = new cc.LayerColor(cc.color.GRAY);
        this.addChild(layer);

        var size = cc.winSize;
        var label = new cc.LabelTTF("这是开始场景","",50);
        label.x = size.width/2;
        label.y = size.height*0.7;
        this.addChild(label);

        //创建菜单项，并创建菜单
        var menuItem = new cc.MenuItemFont("跳转到主游戏场景",function(){
            //cc.director.runScene(new MainScene());
            cc.director.runScene(new cc.TransitionMoveInB(2,new MainScene()));
        },this);
        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x = size.width*0.5;
        menuItem.y = size.height*0.3;
        this.addChild(menu);
        
        cc.log("StartScene:ctor");
    },
    onEnter:function() {
        this._super();
        cc.log("StartScene:onEnter");

        var layer = new StartLayer();
        this.addChild(layer);
    },
    onEnterTransitionDidFinish:function(){},
    onEnterTransitionDidStart:function(){},
})

var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});

