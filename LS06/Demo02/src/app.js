
var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;
        var startMenuItem = new cc.MenuItemFont("开始",function(){
            cc.log('开始按钮点击了！');
        },this);

        var setMenuItem = new cc.MenuItemFont("设置",function(){
            cc.log('设置按钮点击了！');
        },this);

        var ttfLabel = new cc.LabelTTF("其他","",30);
        ttfLabel.setFontFillColor(cc.color.RED);
        ttfLabel.setFontFillColor(cc.color.YELLOW,2);
        ttfLabel.enableStroke(cc.color.WHITE,15,15,15);

        var otherMenuItem = new cc.MenuItemLabel(ttfLabel,function(){
            cc.log('其他按钮点击了！');
        },this);

        var menu = new cc.Menu(startMenuItem,setMenuItem,otherMenuItem);
        menu.alignItemsHorizontallyWithPadding(size.width*0.2);
        this.addChild(this.menu);
        menu.y = size.height*0.5;
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

