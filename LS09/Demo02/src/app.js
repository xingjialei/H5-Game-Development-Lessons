
var HelloWorldLayer = cc.Layer.extend({
    runner:null,
    stone:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.addChild(new cc.LayerColor(cc.color.GRAY));



        //帧动画 方法一
        /*sp = new cc.Sprite(res["sp_animation_"+1]);
        sp.setPosition(cc.p(size.width*0.2,size.height*0.5));
        this.addChild(sp);
        var animation = new cc.Animation();
        for(var i = 1 ;i<15 ;i++){
            //[]获得属性，可以进行字符串组合；.则不能进行组合
            var frameName = res["sp_animation_"+i];
            animation.addSpriteFrameWithFile(frameName);
            //this.addChild(this.sprites[i]);
        }

        animation.setDelayPerUnit(1/10);
        //是否恢复到第一帧
        animation.setRestoreOriginalFrame(true);
        var animateAction = cc.animate(animation);
        //sp.runAction(animateAction);
        sp.runAction(cc.repeatForever(animateAction));*/

        //骨骼动画 方法二
        //加入缓存
        /*cc.spriteFrameCache.addSpriteFrames(res.sp_animation_plist);
        sp = new cc.Sprite("#grossini_dance_generic_01.png");
        sp.setPosition(cc.p(size.width*0.2,size.height*0.5));
        this.addChild(sp);
        var spriteFrames = [];
        for(var i = 1; i < 15 ;i++){
            var frameName = "grossini_dance_generic_"+((i<10)?("0"+i):i)+".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(frameName);
            spriteFrames.push(frame);
        }
        var animation2 = new cc.Animation(spriteFrames,0.2,2);
        var animateAction = cc.animate(animation2);
        animation2.setRestoreOriginalFrame(true);
        sp.runAction(animateAction.repeatForever());*/

        //奔跑实例
        this.addChild((new cc.LayerColor(cc.color.WHITE)));
        var land = new cc.Sprite(res.land_png);
        land.setPosition(cc.p(size.width*0.5,size.height*0.2));
        land.setScaleX(1.5);
        this.addChild(land);

        cc.spriteFrameCache.addSpriteFrames(res.run_plist,res.run_png);
        var sp = new cc.Sprite("#run_1.png");
        sp.setPosition(cc.p(size.width*0.2,size.height*0.2));
        //捏着脚底板放在地面，否则锚点是中心点
        sp.setAnchorPoint(0.5,0);
        this.addChild(sp);
        this.runner = sp;

        var spriteFrames = [];
        for(var i = 1; i < 15; i++){
            var frameName = "run_"+ i +".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(frameName);
            spriteFrames.push(frame);
        };
        var animation3 = new cc.Animation(spriteFrames,0.03,2);
        var animateAction = cc.animate(animation3);
        animation3.setRestoreOriginalFrame(true);
        sp.runAction(animateAction.repeatForever());

        //sp.runAction(cc.repeatForever(cc.jumpBy(2,0,0,100,1)));

        //创建石头
        var stone = new cc.Sprite(res.stone_png);
        stone.setPosition(cc.p(size.width*0.8,size.height*0.2));
        stone.setAnchorPoint(0.5,0);
        this.addChild(stone);
        this.stone = stone;

        return true;
    },
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

