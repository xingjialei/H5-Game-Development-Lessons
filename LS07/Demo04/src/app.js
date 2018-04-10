
/*var HelloWorldLayer = cc.Layer.extend({
    setScene:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;
        this.setScene = new SetScene();
        var btn = new cc.MenuItemFont("设置",function(){
            cc.director.pushScene(this.setScene);
        },this);
        var menu = new cc.Menu(btn);
        menu.setPosition(0,0);
        btn.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(btn);

        return true;
    }
});
var HelloWorldScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});*/


/*var SetLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var layer = new cc.LayerColor(cc.color.RED);
        this.addChild(layer);

        var btn = new cc.MenuItemFont("返回",function(){
            cc.director.popScene();
        },this);
        var menu = new cc.Menu(btn);
        menu.setPosition(0,0);
        btn.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(btn);

        /*var menu = new cc.LayerColor(cc.color.RED);
        menu.setPosition(size.width,size.height);
        this.addChild(menu);*/
        /*return true;
    }
});
var SetScene = cc.Scene.extend({
    //构造函数是进行实例化对象
    ctor:function(){
        this._super();
        cc.log("设置场景：ctor");
        var setLayer = new SetLayer();
        this.addChild((setLayer));
    },
    //加载完成后
    onEnter:function(){
        cc.log("设置场景：onEnter");
    },
    onExit:function(){
        cc.log("设置场景：onExit");
    }
});*/


var HelloWorldLayer = cc.Layer.extend({
    setScene:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.setScene = new SetScene();
        var btn = new cc.MenuItemFont("设置",function () {
            cc.director.pushScene(this.setScene);
        },this);
        var menu = new cc.Menu(btn);
        menu.setPosition(0,0);
        btn.setPosition(size.width/2,size.height/2);
        this.addChild(menu);
        return true;
    }
});
var HelloWorldScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
var SetLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.RED));
        var btn = new cc.MenuItemFont("返回",function () {
            cc.director.popScene();
        },this);
        var menu = new cc.Menu(btn);
        menu.setPosition(0,0);
        btn.setPosition(size.width/2,size.height/2);
        this.addChild(menu);
        return true;
    }
});
var SetScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        cc.log("设置场景：ctor");
        var setLayer = new SetLayer();
        this.addChild(setLayer);
    },
    onEnter:function () {
        this._super();
        cc.log("设置场景：onEnter");
    },
    onExit:function () {
        this._super();
        cc.log("设置场景：onExit");
    }
});


