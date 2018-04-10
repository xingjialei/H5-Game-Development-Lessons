
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;

        this.addChild(new cc.LayerColor(cc.color.GRAY));

        var sp1 = new cc.Sprite(res.Spide_png);
        sp1.setPosition(size.width/2,size.height*0.7);
        this.addChild(sp1);

        //将贴图集放入缓存,进行（创建精灵）取贴图操作
        cc.spriteFrameCache.addSpriteFrames(res.Enemy11_plist);
        var sp2 = new cc.Sprite("#11_L_at_00005.png");
        sp2.setPosition(size.width/2,size.height*0.5);
        this.addChild(sp2);

        var sp3 = new cc.Sprite("#11_T_wk_00012.png");
        sp3.setPosition(size.width/2,size.height*0.3);
        this.addChild(sp3);

        //cc.spriteFrameCache.addSpriteFrames(res.Enemy11_plist);
        //var spriteFrame = cc.spriteFrameCache.getSpriteFrame("#11_T_wk_00012.png");
        var spriteFrame = cc.spriteFrameCache.getSpriteFrame("#11_T_wk_00004.png");
        var sp4 = new cc.Sprite(spriteFrame);
        sp4.setPosition(size.width/2,size.height*0.1);
        this.addChild(sp4);

        var moveMenuItem = new cc.MenuItemFont("移动",function(){
            sp3.y += 5;
            var rect = sp2.getBoundingBox();
            if(cc.rectContainsPoint(rect,sp3.getPosition())){
                cc.log("碰撞到了！");
            }

            //小矩形区被大矩形区包含的时候发生
            /*if(cc.rectContainsRect(rect,sp3.getBoundingBox())){
                cc.log("碰撞到了！");
            }*/
        },this);
        var menu = new cc.Menu(moveMenuItem);
        menu.setPosition(0,0);
        moveMenuItem.setPosition(size.width*0.5,size.height*0.2);
        this.addChild(menu);

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

