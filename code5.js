gdjs.ECLIPSANTECode = {};
gdjs.ECLIPSANTECode.GDNewSpriteObjects1= [];
gdjs.ECLIPSANTECode.GDNewSpriteObjects2= [];
gdjs.ECLIPSANTECode.GDreturnObjects1= [];
gdjs.ECLIPSANTECode.GDreturnObjects2= [];
gdjs.ECLIPSANTECode.GDtextoObjects1= [];
gdjs.ECLIPSANTECode.GDtextoObjects2= [];
gdjs.ECLIPSANTECode.GDNewTextObjects1= [];
gdjs.ECLIPSANTECode.GDNewTextObjects2= [];
gdjs.ECLIPSANTECode.GDNewText2Objects1= [];
gdjs.ECLIPSANTECode.GDNewText2Objects2= [];

gdjs.ECLIPSANTECode.conditionTrue_0 = {val:false};
gdjs.ECLIPSANTECode.condition0IsTrue_0 = {val:false};
gdjs.ECLIPSANTECode.condition1IsTrue_0 = {val:false};
gdjs.ECLIPSANTECode.condition2IsTrue_0 = {val:false};
gdjs.ECLIPSANTECode.conditionTrue_1 = {val:false};
gdjs.ECLIPSANTECode.condition0IsTrue_1 = {val:false};
gdjs.ECLIPSANTECode.condition1IsTrue_1 = {val:false};
gdjs.ECLIPSANTECode.condition2IsTrue_1 = {val:false};


gdjs.ECLIPSANTECode.mapOfGDgdjs_46ECLIPSANTECode_46GDreturnObjects1Objects = Hashtable.newFrom({"return": gdjs.ECLIPSANTECode.GDreturnObjects1});
gdjs.ECLIPSANTECode.eventsList0 = function(runtimeScene) {

{


{
}

}


};gdjs.ECLIPSANTECode.eventsList1 = function(runtimeScene) {

{


gdjs.ECLIPSANTECode.condition0IsTrue_0.val = false;
{
gdjs.ECLIPSANTECode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ECLIPSANTECode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU OPCOES", false);
}
{ //Subevents
gdjs.ECLIPSANTECode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.ECLIPSANTECode.mapOfGDgdjs_46ECLIPSANTECode_46GDreturnObjects1Objects = Hashtable.newFrom({"return": gdjs.ECLIPSANTECode.GDreturnObjects1});
gdjs.ECLIPSANTECode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("return"), gdjs.ECLIPSANTECode.GDreturnObjects1);

gdjs.ECLIPSANTECode.condition0IsTrue_0.val = false;
{
gdjs.ECLIPSANTECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ECLIPSANTECode.mapOfGDgdjs_46ECLIPSANTECode_46GDreturnObjects1Objects, runtimeScene, true, false);
}if (gdjs.ECLIPSANTECode.condition0IsTrue_0.val) {
/* Reuse gdjs.ECLIPSANTECode.GDreturnObjects1 */
{for(var i = 0, len = gdjs.ECLIPSANTECode.GDreturnObjects1.length ;i < len;++i) {
    gdjs.ECLIPSANTECode.GDreturnObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ECLIPSANTECode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("return"), gdjs.ECLIPSANTECode.GDreturnObjects1);

gdjs.ECLIPSANTECode.condition0IsTrue_0.val = false;
{
gdjs.ECLIPSANTECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ECLIPSANTECode.mapOfGDgdjs_46ECLIPSANTECode_46GDreturnObjects1Objects, runtimeScene, true, true);
}if (gdjs.ECLIPSANTECode.condition0IsTrue_0.val) {
/* Reuse gdjs.ECLIPSANTECode.GDreturnObjects1 */
{for(var i = 0, len = gdjs.ECLIPSANTECode.GDreturnObjects1.length ;i < len;++i) {
    gdjs.ECLIPSANTECode.GDreturnObjects1[i].setAnimation(0);
}
}}

}


{


{
}

}


{


gdjs.ECLIPSANTECode.condition0IsTrue_0.val = false;
gdjs.ECLIPSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition0IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}
}if ( gdjs.ECLIPSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition1IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1);
}
}}
if (gdjs.ECLIPSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ECLIPSANTECode.GDtextoObjects1);
{for(var i = 0, len = gdjs.ECLIPSANTECode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ECLIPSANTECode.GDtextoObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.ECLIPSANTECode.condition0IsTrue_0.val = false;
gdjs.ECLIPSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition0IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}
}if ( gdjs.ECLIPSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition1IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2);
}
}}
if (gdjs.ECLIPSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ECLIPSANTECode.GDtextoObjects1);
{for(var i = 0, len = gdjs.ECLIPSANTECode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ECLIPSANTECode.GDtextoObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.ECLIPSANTECode.condition0IsTrue_0.val = false;
gdjs.ECLIPSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition0IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}
}if ( gdjs.ECLIPSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition1IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3);
}
}}
if (gdjs.ECLIPSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ECLIPSANTECode.GDtextoObjects1);
{for(var i = 0, len = gdjs.ECLIPSANTECode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ECLIPSANTECode.GDtextoObjects1[i].setAnimation(5);
}
}}

}


{


gdjs.ECLIPSANTECode.condition0IsTrue_0.val = false;
gdjs.ECLIPSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition0IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2);
}
}if ( gdjs.ECLIPSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition1IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1);
}
}}
if (gdjs.ECLIPSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ECLIPSANTECode.GDtextoObjects1);
{for(var i = 0, len = gdjs.ECLIPSANTECode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ECLIPSANTECode.GDtextoObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.ECLIPSANTECode.condition0IsTrue_0.val = false;
gdjs.ECLIPSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition0IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2);
}
}if ( gdjs.ECLIPSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition1IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2);
}
}}
if (gdjs.ECLIPSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ECLIPSANTECode.GDtextoObjects1);
{for(var i = 0, len = gdjs.ECLIPSANTECode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ECLIPSANTECode.GDtextoObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.ECLIPSANTECode.condition0IsTrue_0.val = false;
gdjs.ECLIPSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition0IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2);
}
}if ( gdjs.ECLIPSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.ECLIPSANTECode.conditionTrue_1 = gdjs.ECLIPSANTECode.condition1IsTrue_0;
gdjs.ECLIPSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3);
}
}}
if (gdjs.ECLIPSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ECLIPSANTECode.GDtextoObjects1);
{for(var i = 0, len = gdjs.ECLIPSANTECode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ECLIPSANTECode.GDtextoObjects1[i].setAnimation(2);
}
}}

}


};

gdjs.ECLIPSANTECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ECLIPSANTECode.GDNewSpriteObjects1.length = 0;
gdjs.ECLIPSANTECode.GDNewSpriteObjects2.length = 0;
gdjs.ECLIPSANTECode.GDreturnObjects1.length = 0;
gdjs.ECLIPSANTECode.GDreturnObjects2.length = 0;
gdjs.ECLIPSANTECode.GDtextoObjects1.length = 0;
gdjs.ECLIPSANTECode.GDtextoObjects2.length = 0;
gdjs.ECLIPSANTECode.GDNewTextObjects1.length = 0;
gdjs.ECLIPSANTECode.GDNewTextObjects2.length = 0;
gdjs.ECLIPSANTECode.GDNewText2Objects1.length = 0;
gdjs.ECLIPSANTECode.GDNewText2Objects2.length = 0;

gdjs.ECLIPSANTECode.eventsList2(runtimeScene);
return;

}

gdjs['ECLIPSANTECode'] = gdjs.ECLIPSANTECode;
