#INCLUDE "INCLUDE\_SleepEx.au3"
#include "include\audio.au3"
#include "include\comaudio_remix.au3"
#include <ComboConstants.au3>
#include "include\functions.au3"
#include <guiConstantsEx.au3>
#include "include\timeGetTime.au3"
Opt("GUIOnEventMode",1)
global $packname=""
global $musicnum="1"
global $actionkey="1"
global $actionpressed = ""
global $pressed="1"
global $playactions = "0"
global $sComboRead = ""
global $sComboRead2 = ""
init()
func init()
global $packname = FileSelectFolder("select a pack", "C:\" &@username &"\beatpacks")
$levels=inputbox("Beatstar BPM scanner", "How many levels does this pack have?")
if $levels = "" then
MSGBox(16, "error", "the field is empty!")
exit
endIf
global $musicfile = $packname &"\" &$musicnum &"music.ogg"
global $m1 = $device.opensound($musicfile, 0)
global $a2 = $device.opensound($packname &"\a2.ogg", 0)
$a2.volume=0.01
global $o2 = $device.opensound($packname &"\o2.ogg", 0)
$o2.volume=0.01
global $a3 = $device.opensound($packname &"\a3.ogg", 0)
$a3.volume=0.01
global $o3 = $device.opensound($packname &"\o3.ogg", 0)
$o3.volume=0.01
global $a4 = $device.opensound($packname &"\a4.ogg", 0)
$a4.volume=0.01
global $o4 = $device.opensound($packname &"\o4.ogg", 0)
$o4.volume=0.01
global $a5 = $device.opensound($packname &"\a5.ogg", 0)
$a5.volume=0.01
global $o5 = $device.opensound($packname &"\o5.ogg", 0)
$o5.volume=0.01
createbeat($m1)
global $gui = GuiCreate("Beatstar remix!")
global $createbpm = GUICtrlCreateButton("create bpm for this pack", 20, 10, 30, 30)
GUICtrlSetOnEvent(-1, "CreateBpm")
global $createremix = GUICtrlCreateButton("&Create a random remix with this pack", 90, 10, 30, 30)
GUICtrlSetOnEvent(-1, "Remix")
$label1 = GUICtrlCreateLabel("Choose level", 0, 45, 30, 30)
global $level = GUICtrlCreateCombo("", 0, 50, 30, 30, BitOR($CBS_DROPDOWNLIST,$CBS_AUTOHSCROLL))
GUICtrlSetOnEvent(-1, "chooselevel")
$label2 = GUICtrlCreateLabel("Beat division (for actions)", 25, 45, 30, 30)
global $bdiv = GUICtrlCreateCombo("2", 25, 50, 30, 30, BitOR($CBS_DROPDOWNLIST,$CBS_AUTOHSCROLL))
GUICtrlSetOnEvent(-1, "div")
GUICtrlSetData($bdiv, "4|8|16|32|64")
global $play = GUICtrlCreateButton("&Play", 50, 50, 30, 30)
GUICtrlSetOnEvent(-1, "player")
global $mmute = GuiCtrlCreateCheckbox("Mute music", 90, 50, 30, 30)
GUICtrlSetOnEvent(-1, "player")
global $playactions = GUICtrlCreateButton("&Play actions", 130, 50, 30, 30)
GUICtrlSetOnEvent(-1, "player")
global $amute = GuiCtrlCreateCheckbox("Mute actions", 150, 50, 30, 30)
GUICtrlSetOnEvent(-1, "player")
$label3 = GUICtrlCreateSlider("&Music volume", 175, 40, 30, 30)
global $mvolume = GUICtrlCreateSlider(175, 50, 30, 30)
GUICtrlSetOnEvent(-1, "volume")
GUICtrlSetLimit(-1, 100, 0)
GUICtrlSetData($mvolume, 50)
$label4 = GUICtrlCreateLabel("&actions volume", 225, 40, 30, 30)
global $avolume = GUICtrlCreateSlider(225, 50, 30, 30)
GUICtrlSetOnEvent(-1, "volume")
GUICtrlSetLimit(-1, 100, 0)
GUICtrlSetData($avolume, 50)
global $exitbtn = GUICtrlCreateButton("e&xit", 150, 10, 30, 30)
GUICtrlSetOnEvent(-1, "_exit")
GuiSetState(@sw_SHOW)
for $ILevel = 1 to $levels
GUICtrlSetData($level, $ILevel)
next
While 1
if $playactions = 1 then
playactions()
else
continueLoop
EndIf
WEnd
EndFunc
func _exit()
exit
endfunc