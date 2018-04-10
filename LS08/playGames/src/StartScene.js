
var StartLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        /*创建一个按钮MenuItemLabel*/
        var startLabel = new cc.LabelTTF("开 始","",50);
        startLabel.setFontFillColor(cc.color.RED);
        startLabel.enableStroke(cc.color.YELLOW,5);

        var startMenuItem = new cc.MenuItemLabel(startLabel,function(){
            cc.log("跳转到主游戏场景！");
            //cc.director.runScene(new cc.TransitionMoveInB(2,new MainScene()));
        },this);
        /*设置按钮*/
        /*var setLabel = new cc.LabelTTF("开 始","",50);
        setLabel.setFontFillColor(cc.color.RED);
        setLabel.enableStroke(cc.color.YELLOW,5);

        var setMenuItem = new cc.MenuItemLabel(setLabel,function(){
        },this);
        var menu = new cc.Menu(setMenuItem);
        menu.y = size.height*0.3;
        this.addChild(menu);*/

        /*logo*/
        var logo = new cc.LabelTTF("飞机游戏DEMO","",80);
        logo.setFontFillColor(cc.color.RED);
        logo.enableStroke(cc.color.YELLOW,5);
        logo.setPosition(size.width*0.5,size.height*0.7);
        this.addChild(logo);

        var menu = new cc.Menu(startMenuItem);
        menu.y = size.height*0.3;
        this.addChild(menu);


        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});