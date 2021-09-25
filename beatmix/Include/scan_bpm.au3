#include-once
#INCLUDE "_SleepEx.au3"
#include "audio.au3"
#include "comaudio_remix.au3"
#include <MsgBoxConstants.au3>
#include "time.au3"
func scan($music)
global $action = $device.opensound("beatpacks\"&$packname &"\a1.ogg", 0)
global $m1 = $device.opensound($music, 0)
$milis = getLength($m1)
$samplerate = getSampleRate($m1)
if $samplerate = 16000 then $milis = $milis /16.0
if $samplerate = 22050 then $milis = $milis /22.0
if $samplerate = 32000 then $milis = $milis /32.0
if $samplerate = 44100 then $milis = $milis /44.0
if $samplerate = 48000 then $milis = $milis /48.0
if $samplerate = 64000 then $milis = $milis /64.0
if $samplerate = 88200 then $milis = $milis /88.1
$milis2 = int($milis)
;Ok, now we are going to apply them in the bpm to see.
$pulsos = $milis2 /4
$pulsosarreglo = int($pulsos)
$pulsosarreglo = $pulsosarreglo -1
$sleep = $pulsosarreglo -46
$NEXTACTION = $sleep /2
$m1.play
for $I = 1 to 4
$actionkey = $actionkey +1
$pressed = $pressed +1
$action = $device.opensound("beatpacks\" &$packname &"\a" &$actionkey &".ogg", 0)
$action.play
sleep($NEXTACTION)
$actionpressed = $device.opensound("beatpacks\" &$packname &"\o" &$actionkey &".ogg", 0)
$actionpressed.play
sleep($NEXTACTION)
next
$actionkey = "1"
$pressed = "1"
return $pulsosarreglo
EndFunc