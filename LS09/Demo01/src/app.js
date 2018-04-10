
var HelloWorldLayer = cc.Layer.extend({
    sprites:[],
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.addChild(new cc.LayerColor(cc.color.GRAY));

        for(var i = 0;i < 3;i++) {
            this.sprites[i] = new cc.Sprite("res/sprite" + (i + 1) + ".png");
            this.sprites[i].x = size.width * 0.2;
            this.sprites[i].y = size.height * (0.3 * i + 0.2);
            this.addChild(this.sprites[i]);
        }
        ////////////////////////////////////////////////////即时动作
        /*var action1 = new cc.Place(300,size.height * 0.2);
        this.sprites[0].runAction(action1);

        this.sprites[1].runAction(cc.flipX(true));
        this.sprites[1].runAction(cc.flipY(true));

        this.sprites[2].runAction(cc.hide());
        this.sprites[2].runAction(cc.callFunc(function(){
            this.sprites[2].runAction(cc.show());
            cc.log("callFunc调用");
        },this))*/

        ////////////////////////////////////////////////////间隔动作
        /*var action1 = cc.moveBy(5,200,0);
        //this.sprites[0].runAction(action1);
        this.sprites[0].runAction(cc.jumpTo(10,cc.p(400,400),50,2));

        //10秒的时间移动到(400,400)
        this.sprites[1].runAction(cc.moveTo(10,400,400));

        //10秒4次跳跃，每次跳跃的高度是50.跳跃到(300.0)
        this.sprites[0].runAction(cc.jumpBy(10,cc.p(300,0),50,4));

        //jumpTo:跳跃到（坐标处）;jumpBy:（横向或纵向移动的位置）

        this.sprites[2].runAction(cc.rotateBy(10.0,90,0));
        //this.sprites[2].runAction(cc.rotateTo(10.0,0,90));*/

        ////////////////////////////////////////////////////启动暂停动画
        /*var action1 = cc.jumpTo(10,cc.p(400,400),50,2);
        //this.sprites[0].runAction(action1);

        var isPaused = false;
        var btn1 = new cc.MenuItemFont("Node1",function(){
            //this.sprites[0].runAction(action1);
            if(!isPaused){
                isPaused = true;
                this.sprites[0].runAction(action1);
            }else{
                isPaused = false;
                this.sprites[0].stopAction(action1);
            }
        },this);
        var btn2 = new cc.MenuItemFont("Node2",function(){
            this.sprites[0].stopAction(action1);
            if(!isPaused){
                isPaused = true;
                this.sprites[0].pause(action1);
            }else{
                isPaused = false;
                this.sprites[0].resume(action1);
            }
        },this);
        var menu = new cc.Menu(btn1,btn2);
        menu.setPosition(0,0);
        btn1.setPosition(size.width*0.4,size.height*0.5);
        btn2.setPosition(size.width*0.6,size.height*0.5);
        this.addChild(menu);*/

        ////////////////////////////////////////////////////缩放，淡入，淡出动画
        /*this.sprites[0].runAction(cc.scaleTo(5.0,5,5));

        this.sprites[1].runAction(cc.fadeOut(5.0));
        this.sprites[2].setOpacity(0);
        this.sprites[2].runAction(cc.fadeIn(5.0));

        var directorPauseItem = new cc.MenuItemFont("pause",function(){
            cc.director.pause();
        },this);
        var directorResumeItem = new cc.MenuItemFont("resume",function(){
            cc.director.resume();
        },this);
        var menu = new cc.Menu(directorPauseItem,directorResumeItem);
        menu.setPosition(0,0);
        directorPauseItem.setPosition(size.width*0.4,size.height*0.5);
        directorResumeItem.setPosition(size.width*0.6,size.height*0.5);
        this.addChild(menu);*/

        ////////////////////////////////////////////////////线性非线性变化
        /*//5倍速,线性速度变化
        this.sprites[1].runAction(cc.speed(cc.moveBy(20,300,0),5));

        //非线性速度变化
        var tempAct = cc.moveBy(5.0,200,0);
        //var tempEaseAction = tempAct.easing(cc.easeElasticInOut());
        var tempEaseAction = tempAct.easing(cc.easeExponentialIn());
        this.sprites[2].runAction(tempEaseAction);*/

        ////////////////////////////////////////////////////进度条
        /*var timer = new cc.ProgressTimer(this.sprites[1]);
        timer.x = this.sprites[1].x+100;
        timer.y = this.sprites[1].y;
        this.addChild(timer);

        timer.type = cc.ProgressTimer.TYPE_BAR;//进度条形式.RADIAL圆形
        timer.midPoint = cc.p(0,0);//控制变化起始点
        timer.barChangeRate = cc.p(0,1);//控制x和y方向的变化率
        timer.runAction(cc.progressTo(10.0,100));*/

        ////////////////////////////////////////////////////组合动画效果（sequence顺序执行）
        /*var mAction = cc.moveBy(5,200,0);
        var rAction = cc.rotateBy(5,90);
        var sAction = cc.scaleTo(5,0.5);
        var fAction = cc.fadeOut(5.0);
        var dAction = cc.delayTime(5);

        var cAction = cc.callFunc(function(){
            cc.log("sequence 动作组合执行结束");
            this.sprites[0].runAction(cc.scaleTo(2,1.0));
        },this);

        var Action = cc.sequence(mAction,sAction,dAction,fAction,rAction,cAction);
        this.sprites[0].runAction(Action);*/

        ///////////////////////////////////////////////////spawn组合动画（同步执行）
        /*//spawn和callFunc不要同时使用
        var mAction = cc.moveBy(5,200,0);
        var rAction = cc.rotateBy(5,90);
        var sAction = cc.scaleTo(5,0.5);
        var Action = cc.spawn(mAction,rAction,sAction);
        this.sprites[1].runAction(Action);*/

        ///////////////////////////////////////////////////repeat动作组合
        /*var rAction = cc.rotateBy(2,90);
        this.sprites[2].runAction(cc.repeat(rAction,5));
        this.sprites[2].runAction(cc.repeatForever(rAction));
        //旋转4次
        this.sprites[2].runAction(rAction.repeat(4));
        this.sprites[2].runAction(rAction.repeatForever());*/

        ///////////////////////////////////////////////////reverse动作组合
        var jAction = cc.jumpBy(5,300,0,100,3);
        this.sprites[1].runAction(cc.sequence(jAction,jAction.reverse()));

        var rAction = cc.rotateBy(5,90);
        this.sprites[2.].runAction(cc.sequence(rAction,rAction.reverse()));

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

