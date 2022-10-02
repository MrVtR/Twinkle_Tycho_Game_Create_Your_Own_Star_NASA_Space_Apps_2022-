gdjs.TELA_32INICIAL_32Code = {};
gdjs.TELA_32INICIAL_32Code.GDNewSpriteObjects1= [];
gdjs.TELA_32INICIAL_32Code.GDNewSpriteObjects2= [];
gdjs.TELA_32INICIAL_32Code.GDNewSprite3Objects1= [];
gdjs.TELA_32INICIAL_32Code.GDNewSprite3Objects2= [];
gdjs.TELA_32INICIAL_32Code.GDNewSprite4Objects1= [];
gdjs.TELA_32INICIAL_32Code.GDNewSprite4Objects2= [];
gdjs.TELA_32INICIAL_32Code.GDNewSprite5Objects1= [];
gdjs.TELA_32INICIAL_32Code.GDNewSprite5Objects2= [];
gdjs.TELA_32INICIAL_32Code.GDNewSprite6Objects1= [];
gdjs.TELA_32INICIAL_32Code.GDNewSprite6Objects2= [];
gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1= [];
gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects2= [];

gdjs.TELA_32INICIAL_32Code.conditionTrue_0 = {val:false};
gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0 = {val:false};
gdjs.TELA_32INICIAL_32Code.condition1IsTrue_0 = {val:false};
gdjs.TELA_32INICIAL_32Code.condition2IsTrue_0 = {val:false};
gdjs.TELA_32INICIAL_32Code.condition3IsTrue_0 = {val:false};


gdjs.TELA_32INICIAL_32Code.mapOfGDgdjs_46TELA_9532INICIAL_9532Code_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1});
gdjs.TELA_32INICIAL_32Code.eventsList0 = function(runtimeScene) {

{


gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val = false;
{
gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU OPCOES", false);
}}

}


};gdjs.TELA_32INICIAL_32Code.mapOfGDgdjs_46TELA_9532INICIAL_9532Code_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1});
gdjs.TELA_32INICIAL_32Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1);

gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val = false;
{
gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TELA_32INICIAL_32Code.mapOfGDgdjs_46TELA_9532INICIAL_9532Code_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if (gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val) {
/* Reuse gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.TELA_32INICIAL_32Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1);

gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val = false;
{
gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TELA_32INICIAL_32Code.mapOfGDgdjs_46TELA_9532INICIAL_9532Code_46GDNewSprite2Objects1Objects, runtimeScene, true, true);
}if (gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val) {
/* Reuse gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1[i].setAnimation(0);
}
}}

}


{


gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val = false;
gdjs.TELA_32INICIAL_32Code.condition1IsTrue_0.val = false;
gdjs.TELA_32INICIAL_32Code.condition2IsTrue_0.val = false;
{
gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if ( gdjs.TELA_32INICIAL_32Code.condition0IsTrue_0.val ) {
{
gdjs.TELA_32INICIAL_32Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if ( gdjs.TELA_32INICIAL_32Code.condition1IsTrue_0.val ) {
{
gdjs.TELA_32INICIAL_32Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
}
if (gdjs.TELA_32INICIAL_32Code.condition2IsTrue_0.val) {
}

}


{


{
}

}


};

gdjs.TELA_32INICIAL_32Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TELA_32INICIAL_32Code.GDNewSpriteObjects1.length = 0;
gdjs.TELA_32INICIAL_32Code.GDNewSpriteObjects2.length = 0;
gdjs.TELA_32INICIAL_32Code.GDNewSprite3Objects1.length = 0;
gdjs.TELA_32INICIAL_32Code.GDNewSprite3Objects2.length = 0;
gdjs.TELA_32INICIAL_32Code.GDNewSprite4Objects1.length = 0;
gdjs.TELA_32INICIAL_32Code.GDNewSprite4Objects2.length = 0;
gdjs.TELA_32INICIAL_32Code.GDNewSprite5Objects1.length = 0;
gdjs.TELA_32INICIAL_32Code.GDNewSprite5Objects2.length = 0;
gdjs.TELA_32INICIAL_32Code.GDNewSprite6Objects1.length = 0;
gdjs.TELA_32INICIAL_32Code.GDNewSprite6Objects2.length = 0;
gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects1.length = 0;
gdjs.TELA_32INICIAL_32Code.GDNewSprite2Objects2.length = 0;

gdjs.TELA_32INICIAL_32Code.eventsList1(runtimeScene);
return;

}

gdjs['TELA_32INICIAL_32Code'] = gdjs.TELA_32INICIAL_32Code;
