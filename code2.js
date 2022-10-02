gdjs.PULSANTECode = {};
gdjs.PULSANTECode.GDESTRELAObjects1= [];
gdjs.PULSANTECode.GDESTRELAObjects2= [];
gdjs.PULSANTECode.GDNewTextObjects1= [];
gdjs.PULSANTECode.GDNewTextObjects2= [];
gdjs.PULSANTECode.GDNewText2Objects1= [];
gdjs.PULSANTECode.GDNewText2Objects2= [];
gdjs.PULSANTECode.GDNewText3Objects1= [];
gdjs.PULSANTECode.GDNewText3Objects2= [];
gdjs.PULSANTECode.GDNewText4Objects1= [];
gdjs.PULSANTECode.GDNewText4Objects2= [];
gdjs.PULSANTECode.GDTEXTOObjects1= [];
gdjs.PULSANTECode.GDTEXTOObjects2= [];
gdjs.PULSANTECode.GDNewSpriteObjects1= [];
gdjs.PULSANTECode.GDNewSpriteObjects2= [];

gdjs.PULSANTECode.conditionTrue_0 = {val:false};
gdjs.PULSANTECode.condition0IsTrue_0 = {val:false};
gdjs.PULSANTECode.condition1IsTrue_0 = {val:false};
gdjs.PULSANTECode.condition2IsTrue_0 = {val:false};
gdjs.PULSANTECode.conditionTrue_1 = {val:false};
gdjs.PULSANTECode.condition0IsTrue_1 = {val:false};
gdjs.PULSANTECode.condition1IsTrue_1 = {val:false};
gdjs.PULSANTECode.condition2IsTrue_1 = {val:false};


gdjs.PULSANTECode.mapOfGDgdjs_46PULSANTECode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.PULSANTECode.GDNewSpriteObjects1});
gdjs.PULSANTECode.eventsList0 = function(runtimeScene) {

{


{
}

}


};gdjs.PULSANTECode.eventsList1 = function(runtimeScene) {

{


gdjs.PULSANTECode.condition0IsTrue_0.val = false;
{
gdjs.PULSANTECode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.PULSANTECode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU OPCOES", false);
}
{ //Subevents
gdjs.PULSANTECode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.PULSANTECode.mapOfGDgdjs_46PULSANTECode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.PULSANTECode.GDNewSpriteObjects1});
gdjs.PULSANTECode.eventsList2 = function(runtimeScene) {

{


gdjs.PULSANTECode.condition0IsTrue_0.val = false;
{
gdjs.PULSANTECode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PULSANTECode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.PULSANTECode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.PULSANTECode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.PULSANTECode.GDNewText4Objects1);
{for(var i = 0, len = gdjs.PULSANTECode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDNewText2Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.PULSANTECode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDNewText3Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.PULSANTECode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDNewText4Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{


gdjs.PULSANTECode.condition0IsTrue_0.val = false;
gdjs.PULSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition0IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}
}if ( gdjs.PULSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition1IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1);
}
}}
if (gdjs.PULSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ESTRELA"), gdjs.PULSANTECode.GDESTRELAObjects1);
gdjs.copyArray(runtimeScene.getObjects("TEXTO"), gdjs.PULSANTECode.GDTEXTOObjects1);
{for(var i = 0, len = gdjs.PULSANTECode.GDESTRELAObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDESTRELAObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.PULSANTECode.GDTEXTOObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDTEXTOObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MODELAGEM\\RR LYRAE\\WhatsApp-Audio-2022-10-01-at-21.18.57.wav", true, 50, 1);
}}

}


{


gdjs.PULSANTECode.condition0IsTrue_0.val = false;
gdjs.PULSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition0IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}
}if ( gdjs.PULSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition1IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2);
}
}}
if (gdjs.PULSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ESTRELA"), gdjs.PULSANTECode.GDESTRELAObjects1);
gdjs.copyArray(runtimeScene.getObjects("TEXTO"), gdjs.PULSANTECode.GDTEXTOObjects1);
{for(var i = 0, len = gdjs.PULSANTECode.GDESTRELAObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDESTRELAObjects1[i].setAnimation(7);
}
}{for(var i = 0, len = gdjs.PULSANTECode.GDTEXTOObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDTEXTOObjects1[i].setAnimation(7);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MODELAGEM\\RV Tauri\\WhatsApp-Audio-2022-10-01-at-21.18.25.wav", true, 50, 1);
}}

}


{


gdjs.PULSANTECode.condition0IsTrue_0.val = false;
gdjs.PULSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition0IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}
}if ( gdjs.PULSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition1IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3);
}
}}
if (gdjs.PULSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ESTRELA"), gdjs.PULSANTECode.GDESTRELAObjects1);
gdjs.copyArray(runtimeScene.getObjects("TEXTO"), gdjs.PULSANTECode.GDTEXTOObjects1);
{for(var i = 0, len = gdjs.PULSANTECode.GDESTRELAObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDESTRELAObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.PULSANTECode.GDTEXTOObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDTEXTOObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MODELAGEM\\RV Tauri\\WhatsApp-Audio-2022-10-01-at-21.18.25.wav", true, 50, 1);
}}

}


{


gdjs.PULSANTECode.condition0IsTrue_0.val = false;
gdjs.PULSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition0IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}
}if ( gdjs.PULSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition1IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 4);
}
}}
if (gdjs.PULSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ESTRELA"), gdjs.PULSANTECode.GDESTRELAObjects1);
gdjs.copyArray(runtimeScene.getObjects("TEXTO"), gdjs.PULSANTECode.GDTEXTOObjects1);
{for(var i = 0, len = gdjs.PULSANTECode.GDESTRELAObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDESTRELAObjects1[i].setAnimation(5);
}
}{for(var i = 0, len = gdjs.PULSANTECode.GDTEXTOObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDTEXTOObjects1[i].setAnimation(5);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MODELAGEM\\RR LYRAE\\WhatsApp-Audio-2022-10-01-at-21.18.57.wav", true, 50, 1);
}}

}


{


gdjs.PULSANTECode.condition0IsTrue_0.val = false;
gdjs.PULSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition0IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2);
}
}if ( gdjs.PULSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition1IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1);
}
}}
if (gdjs.PULSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ESTRELA"), gdjs.PULSANTECode.GDESTRELAObjects1);
gdjs.copyArray(runtimeScene.getObjects("TEXTO"), gdjs.PULSANTECode.GDTEXTOObjects1);
{for(var i = 0, len = gdjs.PULSANTECode.GDESTRELAObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDESTRELAObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.PULSANTECode.GDTEXTOObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDTEXTOObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MODELAGEM\\RR LYRAE\\WhatsApp-Audio-2022-10-01-at-21.18.57.wav", true, 50, 1);
}}

}


{


gdjs.PULSANTECode.condition0IsTrue_0.val = false;
gdjs.PULSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition0IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2);
}
}if ( gdjs.PULSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition1IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2);
}
}}
if (gdjs.PULSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ESTRELA"), gdjs.PULSANTECode.GDESTRELAObjects1);
gdjs.copyArray(runtimeScene.getObjects("TEXTO"), gdjs.PULSANTECode.GDTEXTOObjects1);
{for(var i = 0, len = gdjs.PULSANTECode.GDESTRELAObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDESTRELAObjects1[i].setAnimation(6);
}
}{for(var i = 0, len = gdjs.PULSANTECode.GDTEXTOObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDTEXTOObjects1[i].setAnimation(6);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MODELAGEM\\RV Tauri\\WhatsApp-Audio-2022-10-01-at-21.18.25.wav", true, 50, 1);
}}

}


{


gdjs.PULSANTECode.condition0IsTrue_0.val = false;
gdjs.PULSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition0IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2);
}
}if ( gdjs.PULSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition1IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3);
}
}}
if (gdjs.PULSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ESTRELA"), gdjs.PULSANTECode.GDESTRELAObjects1);
gdjs.copyArray(runtimeScene.getObjects("TEXTO"), gdjs.PULSANTECode.GDTEXTOObjects1);
{for(var i = 0, len = gdjs.PULSANTECode.GDESTRELAObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDESTRELAObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.PULSANTECode.GDTEXTOObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDTEXTOObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MODELAGEM\\RV Tauri\\WhatsApp-Audio-2022-10-01-at-21.18.25.wav", true, 50, 1);
}}

}


{


gdjs.PULSANTECode.condition0IsTrue_0.val = false;
gdjs.PULSANTECode.condition1IsTrue_0.val = false;
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition0IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2);
}
}if ( gdjs.PULSANTECode.condition0IsTrue_0.val ) {
{
{gdjs.PULSANTECode.conditionTrue_1 = gdjs.PULSANTECode.condition1IsTrue_0;
gdjs.PULSANTECode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 4);
}
}}
if (gdjs.PULSANTECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ESTRELA"), gdjs.PULSANTECode.GDESTRELAObjects1);
gdjs.copyArray(runtimeScene.getObjects("TEXTO"), gdjs.PULSANTECode.GDTEXTOObjects1);
{for(var i = 0, len = gdjs.PULSANTECode.GDESTRELAObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDESTRELAObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.PULSANTECode.GDTEXTOObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDTEXTOObjects1[i].setAnimation(4);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MODELAGEM\\RR LYRAE\\WhatsApp-Audio-2022-10-01-at-21.18.57.wav", true, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.PULSANTECode.GDNewSpriteObjects1);

gdjs.PULSANTECode.condition0IsTrue_0.val = false;
{
gdjs.PULSANTECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PULSANTECode.mapOfGDgdjs_46PULSANTECode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if (gdjs.PULSANTECode.condition0IsTrue_0.val) {
/* Reuse gdjs.PULSANTECode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.PULSANTECode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDNewSpriteObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.PULSANTECode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.PULSANTECode.GDNewSpriteObjects1);

gdjs.PULSANTECode.condition0IsTrue_0.val = false;
{
gdjs.PULSANTECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PULSANTECode.mapOfGDgdjs_46PULSANTECode_46GDNewSpriteObjects1Objects, runtimeScene, true, true);
}if (gdjs.PULSANTECode.condition0IsTrue_0.val) {
/* Reuse gdjs.PULSANTECode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.PULSANTECode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.PULSANTECode.GDNewSpriteObjects1[i].setAnimation(0);
}
}}

}


{


{
}

}


};

gdjs.PULSANTECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PULSANTECode.GDESTRELAObjects1.length = 0;
gdjs.PULSANTECode.GDESTRELAObjects2.length = 0;
gdjs.PULSANTECode.GDNewTextObjects1.length = 0;
gdjs.PULSANTECode.GDNewTextObjects2.length = 0;
gdjs.PULSANTECode.GDNewText2Objects1.length = 0;
gdjs.PULSANTECode.GDNewText2Objects2.length = 0;
gdjs.PULSANTECode.GDNewText3Objects1.length = 0;
gdjs.PULSANTECode.GDNewText3Objects2.length = 0;
gdjs.PULSANTECode.GDNewText4Objects1.length = 0;
gdjs.PULSANTECode.GDNewText4Objects2.length = 0;
gdjs.PULSANTECode.GDTEXTOObjects1.length = 0;
gdjs.PULSANTECode.GDTEXTOObjects2.length = 0;
gdjs.PULSANTECode.GDNewSpriteObjects1.length = 0;
gdjs.PULSANTECode.GDNewSpriteObjects2.length = 0;

gdjs.PULSANTECode.eventsList2(runtimeScene);
return;

}

gdjs['PULSANTECode'] = gdjs.PULSANTECode;
