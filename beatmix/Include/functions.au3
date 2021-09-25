func volume()
select
Case @GUI_CtrlId = $mvolume
$musicvol=GUICtrlRead($mvolume)
$m1.volume=$musicvol
Case @GUI_CtrlId = $avolume
$actionsvol=GUICtrlRead($avolume)
$a2.volume=$actionsvol
$o2.volume=$actionsvol
$a3.volume=$actionsvol
$o3.volume=$actionsvol
$a4.volume=$actionsvol
$o4.volume=$actionsvol
$a5.volume=$actionsvol
$o5.volume=$actionsvol
EndSelect
EndFunc
func playactions()
createbeat($m1)
if $playactions = 1 then
$a2.play
sleep($nextaction)
EndIf
if $playactions = 1 then
$o2.play
sleep($nextaction)
EndIf
if $playactions = 1 then
$a3.play
sleep($nextaction)
EndIf
if $playactions = 1 then
$o3.play
sleep($nextaction)
EndIf
if $playactions = 1 then
$a4.play
sleep($nextaction)
EndIf
if $playactions = 1 then
$o4.play
sleep($nextaction)
EndIf
if $playactions = 1 then
$a5.play
sleep($nextaction)
EndIf
if $playactions = 1 then
$o5.play
sleep($nextaction)
EndIf
$actionkey = "1"
$pressed = "1"
;if $playactions = 1 then playactions()
EndFunc
func player()
select
Case @GUI_CtrlId = $play
if not $m1.playing=1 then
$m1.play
$m1.repeating=1
$playactions=1
EndIf
if $m1.volume=0.01 then $m1.volume=1
Case @GUI_CtrlId = $mmute
if _IsChecked($mmute) then
$m1.volume=0.01
else
$m1.volume=1
EndIf
Case @GUI_CtrlId = $playactions
if $a2.volume=1 then
$a2.volume=0.01
else
$a2.volume=1
EndIf
if $o2.volume=1 then
$o2.volume=0.01
else
$o2.volume=1
endif
if $a3.volume=1 then
$a3.volume=0.01
else
$a3.volume=1
endif
if $o3.volume=1 then
$o3.volume=0.01
else
$o3.volume=1
endif
if $a4.volume=1 then
$a4.volume=0.01
else
$a4.volume=1
endif
if $o4.volume=1 then
$o4.volume=0.01
else
$o4.volume=1
endif
if $a5.volume=1 then
$a5.volume=0.01
else
$a5.volume=1
endif
if $o5.volume=1 then
$o5.volume=0.01
else
$O5.volume=1
endif
Case @GUI_CtrlId = $amute
if _IsChecked($amute) then
$a2.volume=0.01
$o2.volume=0.01
$a3.volume=0.01
$o3.volume=0.01
$a4.volume=0.01
$o4.volume=0.01
$a5.volume=0.01
$o5.volume=0.01
else
$a2.volume=1
$o2.volume=1
$a3.volume=1
$o3.volume=1
$a4.volume=1
$o4.volume=1
$a5.volume=1
$o5.volume=1
endif
EndSelect
EndFunc
func div()
$sComboRead2 = GUICtrlRead($bdiv)
divide($sComboRead2)
EndFunc
func chooselevel()
if $m1.playing then
$m1.reset
$m1.stop
EndIf
if $playactions = 1 then $playactions = 0
$sComboRead = GUICtrlRead($level)
$musicnum = $sComboRead
$musicfile = $packname &"\" &$musicnum &"music.ogg"
$m1 = $device.opensound($musicfile, 0)
createbeat($m1)
EndFunc
func createbeat($song, $divide=4)
global $milis = getLength($song)
global $samplerate = getSampleRate($m1)
if $samplerate = 16000 then $milis = $milis /16.0
if $samplerate = 22050 then $milis = $milis /22.0
if $samplerate = 32000 then $milis = $milis /32.0
if $samplerate = 44100 then $milis = $milis /44.0
if $samplerate = 48000 then $milis = $milis /48.0
if $samplerate = 64000 then $milis = $milis /64.0
if $samplerate = 88200 then $milis = $milis /88.1
global $milis2 = int($milis)
;Ok, now we are going to apply them in the bpm to see.
global $pulsos = $milis2 / $sComboRead2
global $pulsosarreglo = int($pulsos)
$pulsosarreglo = $pulsosarreglo -1
global $sleep = $pulsosarreglo -15
global $NEXTACTION = $sleep /2
EndFunc
func remix()
$remixlabel = GUICtrlCreateLabel("choose mix style", 0, 45, 30, 30)
global $levels = GUICtrlCreateCombo("", 0, 50, 30, 30, BitOR($CBS_DROPDOWNLIST,$CBS_AUTOHSCROLL))
EndFunc
func divide($number)
$pulsos = $milis2 /$number
$pulsosarreglo = int($pulsos)
$pulsosarreglo = $pulsosarreglo -1
$sleep = $pulsosarreglo -38
$NEXTACTION = $sleep /2
EndFunc
Func _IsChecked($idControlID)
Return BitAND(GUICtrlRead($idControlID), $GUI_CHECKED) = $GUI_CHECKED
EndFunc