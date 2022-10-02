gdjs.CATACLISMACode = {};
gdjs.CATACLISMACode.GDNewSpriteObjects1= [];
gdjs.CATACLISMACode.GDNewSpriteObjects2= [];
gdjs.CATACLISMACode.GDNewSprite2Objects1= [];
gdjs.CATACLISMACode.GDNewSprite2Objects2= [];
gdjs.CATACLISMACode.GDNewSprite3Objects1= [];
gdjs.CATACLISMACode.GDNewSprite3Objects2= [];
gdjs.CATACLISMACode.GDNewTextObjects1= [];
gdjs.CATACLISMACode.GDNewTextObjects2= [];

gdjs.CATACLISMACode.conditionTrue_0 = {val:false};
gdjs.CATACLISMACode.condition0IsTrue_0 = {val:false};
gdjs.CATACLISMACode.condition1IsTrue_0 = {val:false};


gdjs.CATACLISMACode.mapOfGDgdjs_46CATACLISMACode_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.CATACLISMACode.GDNewSprite3Objects1});
gdjs.CATACLISMACode.eventsList0 = function(runtimeScene) {

{


{
}

}


};gdjs.CATACLISMACode.eventsList1 = function(runtimeScene) {

{


gdjs.CATACLISMACode.condition0IsTrue_0.val = false;
{
gdjs.CATACLISMACode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.CATACLISMACode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU OPCOES", false);
}
{ //Subevents
gdjs.CATACLISMACode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.CATACLISMACode.mapOfGDgdjs_46CATACLISMACode_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.CATACLISMACode.GDNewSprite3Objects1});
gdjs.CATACLISMACode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CATACLISMACode.GDNewSprite3Objects1);

gdjs.CATACLISMACode.condition0IsTrue_0.val = false;
{
gdjs.CATACLISMACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CATACLISMACode.mapOfGDgdjs_46CATACLISMACode_46GDNewSprite3Objects1Objects, runtimeScene, true, false);
}if (gdjs.CATACLISMACode.condition0IsTrue_0.val) {
/* Reuse gdjs.CATACLISMACode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.CATACLISMACode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CATACLISMACode.GDNewSprite3Objects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.CATACLISMACode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CATACLISMACode.GDNewSprite3Objects1);

gdjs.CATACLISMACode.condition0IsTrue_0.val = false;
{
gdjs.CATACLISMACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CATACLISMACode.mapOfGDgdjs_46CATACLISMACode_46GDNewSprite3Objects1Objects, runtimeScene, true, true);
}if (gdjs.CATACLISMACode.condition0IsTrue_0.val) {
/* Reuse gdjs.CATACLISMACode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.CATACLISMACode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CATACLISMACode.GDNewSprite3Objects1[i].setAnimation(0);
}
}}

}


{


{
}

}


};

gdjs.CATACLISMACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CATACLISMACode.GDNewSpriteObjects1.length = 0;
gdjs.CATACLISMACode.GDNewSpriteObjects2.length = 0;
gdjs.CATACLISMACode.GDNewSprite2Objects1.length = 0;
gdjs.CATACLISMACode.GDNewSprite2Objects2.length = 0;
gdjs.CATACLISMACode.GDNewSprite3Objects1.length = 0;
gdjs.CATACLISMACode.GDNewSprite3Objects2.length = 0;
gdjs.CATACLISMACode.GDNewTextObjects1.length = 0;
gdjs.CATACLISMACode.GDNewTextObjects2.length = 0;

gdjs.CATACLISMACode.eventsList2(runtimeScene);
return;

}

gdjs['CATACLISMACode'] = gdjs.CATACLISMACode;
