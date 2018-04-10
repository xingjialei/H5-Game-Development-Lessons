
var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;

        /*var layer1 = new cc.LayerColor(cc,color.RED,200,200);
        var layer2 = new cc.LayerColor(cc,color.BLUE,200,200);
        var layer3 = new cc.LayerColor(cc,color.YELLOW,200,200);
        var layer4 = new cc.LayerColor(cc,color.WHITE,200,200);

        layer2.ignoreAnchor = false;
        layer3.ignoreAnchor = false;
        layer4.ignoreAnchor = false;
        //设置锚点位置 可影响平移、旋转、缩放
        layerl.setAnchorPoint(0,0);
        layer2.setAnchorPoint(1,1);
        layer3.setAnchorPoint(1,0);
        layer4.setAnchorPoint(0,0);

        // layerl.setPosition(size.width/2,size.height/2);
        // layer2.setPosition(size.width/2,size.height/2);
        layer1.setPosition(50,50);
        layer2.setPosition(size.width-50,size.height-50);
        layer3.setPosition(size.width-50,50);
        layer4.setPosition(size.width-50,50);
        //旋转
        //layerl.rotation = 45;

        //缩放
        //layerl.scale = 0.5;

        this.addChild(layerl);
        this.addChild(layer2);
        this.addChild(layer3);
        this.addChild(layer4);

        //旋转动画
        layer2.runAction(cc.rotateBy(2,180).repeatForever());
        layer3.runAction(cc.rotateBy(2,180).repeatForever());*/

        /*父节点本来就有zOder顺序，因此不能显示*/
        var node3 = new cc.Sprite(res.Red_png);
        node3.setAnchorPoint(cc.p(1.0,1.0));
        node3.x = 200;
        node3.y = 200;
        this.addChild(node3,10);//zOder

        var node4 = new cc.Sprite(res.Yellow_png);
        node4.setAnchorPoint(cc.p(0.5,0.5));
        node4.x = 100;
        node4.y = 100;
        this.addChild(node4,9);

        /*var node5 = new cc.Sprite(res.Yellow_png);
        node5.x = 200;
        node5.y = 200;
        node5.setAnchorPoint(cc.p(0,0));
        var node6 = new cc.Sprite(res.Red_png);
        node6.x = 200;
        node6.y = 200;
        node6.setAnchorPoint(cc.p(1,1));

        this.addChild(node5);
        node5.addChild(node6);
        var point = node5.convertToWorldSpace(node6.getPosition());///不考虑锚点
        var point = node5.convertToWorldSpaceAR(node6.getPosition());///考虑锚点
        console.log(point);*/
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

