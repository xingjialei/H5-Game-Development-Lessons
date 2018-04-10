
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;
        //创建文字
        var label = new cc.LabelTTF("xxx");
        label.x = size.width / 2;
        label.y = size.height * 0.8;
        label.setFontSize(20);
        this.addChild(label);

        //创建两个精灵
        var redSprite = new cc.Sprite(res.red_png);
        redSprite.setPosition(size.width*0.4,size.height*0.5);
        redSprite.tag = 99;
        this.addChild(redSprite);

        var yellowSprite = new cc.Sprite(res.yellow_png);
        yellowSprite.setPosition(size.width*0.6,size.height*0.5);
        yellowSprite.tag = 100;
        this.addChild(yellowSprite);

;        //创建事件监听器
        var listener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:function(touch,event){
                cc.log("onTouchBegan",touch);
                var location = touch.getLocation();
                var target = event.getCurrentTarget();
                if(cc.rectContainsPoint(target.getBoundingBox(),location)) {
                    label.setString("点击到" + target.tag + "矩形");
                    return true;
                }
                return false;//返回布尔类型，若返回为false则后边后边回掉则不再执行
            },
            onTouchMoved:function(touch,event){
                cc.log("onTouchMoved");
                var delta = touch.getDelta();
                var target = event.getCurrentTarget();
                target.x += delta.x;
                target.y += delta.y;

            },
            onTouchEnded:function(touch,event){
               cc.log("onTouchEnded");
               var target = event.getCurrentTarget();
               if(99 === target.tag){
                   target.x = size.width*0.4;
                   target.y = size.height*0.5;
               }
               if(100 === target.tag){
                   target.x = size.width*0.6;
                   target.y = size.height*0.5;
               }
            }
        });
        cc.eventManager.addListener(listener,redSprite);
        cc.eventManager.addListener(listener.clone(),yellowSprite);

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

