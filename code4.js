gdjs.ROTACIONAL_32Code = {};
gdjs.ROTACIONAL_32Code.GDtextoObjects1= [];
gdjs.ROTACIONAL_32Code.GDtextoObjects2= [];
gdjs.ROTACIONAL_32Code.GDNewTextObjects1= [];
gdjs.ROTACIONAL_32Code.GDNewTextObjects2= [];
gdjs.ROTACIONAL_32Code.GDreturnObjects1= [];
gdjs.ROTACIONAL_32Code.GDreturnObjects2= [];
gdjs.ROTACIONAL_32Code.GDrotObjects1= [];
gdjs.ROTACIONAL_32Code.GDrotObjects2= [];

gdjs.ROTACIONAL_32Code.conditionTrue_0 = {val:false};
gdjs.ROTACIONAL_32Code.condition0IsTrue_0 = {val:false};
gdjs.ROTACIONAL_32Code.condition1IsTrue_0 = {val:false};
gdjs.ROTACIONAL_32Code.condition2IsTrue_0 = {val:false};
gdjs.ROTACIONAL_32Code.conditionTrue_1 = {val:false};
gdjs.ROTACIONAL_32Code.condition0IsTrue_1 = {val:false};
gdjs.ROTACIONAL_32Code.condition1IsTrue_1 = {val:false};
gdjs.ROTACIONAL_32Code.condition2IsTrue_1 = {val:false};


gdjs.ROTACIONAL_32Code.mapOfGDgdjs_46ROTACIONAL_9532Code_46GDreturnObjects1Objects = Hashtable.newFrom({"return": gdjs.ROTACIONAL_32Code.GDreturnObjects1});
gdjs.ROTACIONAL_32Code.eventsList0 = function(runtimeScene) {

{


{
}

}


};gdjs.ROTACIONAL_32Code.eventsList1 = function(runtimeScene) {

{


gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = false;
{
gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU OPCOES", false);
}
{ //Subevents
gdjs.ROTACIONAL_32Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.ROTACIONAL_32Code.mapOfGDgdjs_46ROTACIONAL_9532Code_46GDreturnObjects1Objects = Hashtable.newFrom({"return": gdjs.ROTACIONAL_32Code.GDreturnObjects1});
gdjs.ROTACIONAL_32Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("return"), gdjs.ROTACIONAL_32Code.GDreturnObjects1);

gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = false;
{
gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ROTACIONAL_32Code.mapOfGDgdjs_46ROTACIONAL_9532Code_46GDreturnObjects1Objects, runtimeScene, true, false);
}if (gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val) {
/* Reuse gdjs.ROTACIONAL_32Code.GDreturnObjects1 */
{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDreturnObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDreturnObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ROTACIONAL_32Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("return"), gdjs.ROTACIONAL_32Code.GDreturnObjects1);

gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = false;
{
gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ROTACIONAL_32Code.mapOfGDgdjs_46ROTACIONAL_9532Code_46GDreturnObjects1Objects, runtimeScene, true, true);
}if (gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val) {
/* Reuse gdjs.ROTACIONAL_32Code.GDreturnObjects1 */
{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDreturnObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDreturnObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = false;
gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val = false;
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition0IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}
}if ( gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val ) {
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition1IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1);
}
}}
if (gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("rot"), gdjs.ROTACIONAL_32Code.GDrotObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ROTACIONAL_32Code.GDtextoObjects1);
{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDtextoObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDrotObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDrotObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = false;
gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val = false;
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition0IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}
}if ( gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val ) {
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition1IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2);
}
}}
if (gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("rot"), gdjs.ROTACIONAL_32Code.GDrotObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ROTACIONAL_32Code.GDtextoObjects1);
{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDtextoObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDrotObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDrotObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = false;
gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val = false;
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition0IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}
}if ( gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val ) {
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition1IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3);
}
}}
if (gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("rot"), gdjs.ROTACIONAL_32Code.GDrotObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ROTACIONAL_32Code.GDtextoObjects1);
{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDtextoObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDrotObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDrotObjects1[i].setAnimation(2);
}
}}

}


{


gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = false;
gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val = false;
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition0IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2);
}
}if ( gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val ) {
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition1IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1);
}
}}
if (gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("rot"), gdjs.ROTACIONAL_32Code.GDrotObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ROTACIONAL_32Code.GDtextoObjects1);
{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDtextoObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDrotObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDrotObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = false;
gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val = false;
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition0IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2);
}
}if ( gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val ) {
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition1IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2);
}
}}
if (gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("rot"), gdjs.ROTACIONAL_32Code.GDrotObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ROTACIONAL_32Code.GDtextoObjects1);
{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDtextoObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDrotObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDrotObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val = false;
gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val = false;
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition0IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2);
}
}if ( gdjs.ROTACIONAL_32Code.condition0IsTrue_0.val ) {
{
{gdjs.ROTACIONAL_32Code.conditionTrue_1 = gdjs.ROTACIONAL_32Code.condition1IsTrue_0;
gdjs.ROTACIONAL_32Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3);
}
}}
if (gdjs.ROTACIONAL_32Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("rot"), gdjs.ROTACIONAL_32Code.GDrotObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.ROTACIONAL_32Code.GDtextoObjects1);
{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDtextoObjects1[i].setAnimation(5);
}
}{for(var i = 0, len = gdjs.ROTACIONAL_32Code.GDrotObjects1.length ;i < len;++i) {
    gdjs.ROTACIONAL_32Code.GDrotObjects1[i].setAnimation(5);
}
}}

}


};

gdjs.ROTACIONAL_32Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ROTACIONAL_32Code.GDtextoObjects1.length = 0;
gdjs.ROTACIONAL_32Code.GDtextoObjects2.length = 0;
gdjs.ROTACIONAL_32Code.GDNewTextObjects1.length = 0;
gdjs.ROTACIONAL_32Code.GDNewTextObjects2.length = 0;
gdjs.ROTACIONAL_32Code.GDreturnObjects1.length = 0;
gdjs.ROTACIONAL_32Code.GDreturnObjects2.length = 0;
gdjs.ROTACIONAL_32Code.GDrotObjects1.length = 0;
gdjs.ROTACIONAL_32Code.GDrotObjects2.length = 0;

gdjs.ROTACIONAL_32Code.eventsList2(runtimeScene);
return;

}

gdjs['ROTACIONAL_32Code'] = gdjs.ROTACIONAL_32Code;
