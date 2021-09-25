;comaudio remix library :)
#include-once
#include "audio.au3"
global $powerstyle = "0"
func getpos($sound)
$return = $sound.Position
return $return
EndFunc
func setpos($sound, $pos)
if $sound.Seekable = true then
$sound.Position=$pos
return 1
else
return 0
EndIf
EndFunc
func getLength($sound)
$length = $sound.Length
return $length
EndFunc
func getSampleRate($sound)
$srate = $sound.sampleRate
return $srate
EndFunc
func soundreverse($sound)
if $sound.seekable=true then
$length = getLength($sound)
;if $sound.position = $length then $sound.reset
$length = $length -3000
if not $sound.playing=1 then $sound.play
for $Back = $length to 1000 step -1800
setpos($sound, $Back)
sleep(25)
next
EndIf
EndFunc
func soundfast($sound)
if $sound.seekable=true then
$length = getLength($sound)
$length = $length -1000
if not $sound.playing=1 then $sound.play
for $Back = 100 to $length step 4000
setpos($sound, $Back)
sleep(60)
next
EndIf
EndFunc
func soundbaxping($sound)
$pitch=2.00
if $sound.seekable=true then
$length = getLength($sound)
$length = $length -2000
$step = -3000
if not $sound.playing=1 then $sound.play
for $Back = $length to 1000 step $step
$step = $step -100
$pitch = $pitch -0.01
if $pitch > 0.25 then $sound.pitchshift=$pitch
setpos($sound, $back)
sleep(15)
next
$sound.pitchshift=1
$sound.stop
EndIf
EndFunc
func soundbrake($sound)
$start =0.01
$End = 1.00
if not $sound.playing = 1 then $sound.play
For $iPitch = $End To $Start Step -0.04
$sound.pitchshift = $iPitch
sleep(25)
Next
$sound.pitchshift = 1
$sound.stop
EndFunc
func SoundSetStyle($sound, $type, $power = "off")
if $sound.seekable=true then
$length = getLength($sound)
else
return 0 ;failed can't create the style.
EndIf
if $sound.position < $length then $sound.reset
if not $sound.playing=1 then $sound.play
$samplerate = getSampleRate($sound)
$sratestring = $samplerate /1000
$sratestring = $sratestring -0.200
$length = $length /$sratestring
$ms = int($length)
$beats2 = int($ms /2)
$beats3 = int($ms /3)
$beats4 = int($ms /4)
$beats5 = int($ms /5)
$beats8 = int($ms /8)
$beats16 = int($ms /16)
$beats32 = int($ms /32)
$beats64 = int($ms /64)
$beats128 = int($ms /128)
select
case $type = 1
for $beat = 1 to 4
SetPos($sound, $beats64)
sleep($beats64)
next
SETPOS($sound, $beats16 *44)
sleep($beats32)
for $beat2 = 1 to 2
SETPOS($sound, $beats16 *44)
sleep($beats64)
next
for $beat3 = 1 to 2
SETPOS($sound, $beats8 *44)
sleep($beats32)
next
for $beat4 = 1 to 2
SETPOS($sound, $beats4 *33)
sleep($beats32)
next
for $sbeat = 1 to 4
SetPos($sound, $beats4*44)
sleep($beats64)
next
SETPOS($sound, $beats4 *55)
sleep($beats32)
for $sbeat2 = 1 to 2
SETPOS($sound, $beats4 *62)
sleep($beats64)
next
for $sbeat3 = 1 to 2
SETPOS($sound, $beats4 *66)
sleep($beats32)
next
for $sbeat4 = 1 to 2
SETPOS($sound, $beats4 *77.1)
sleep($beats32)
next
SETPOS($sound, $beats2 *44)
EndSelect
while $power = "on"
if $powerstyle = "1" then
SoundSetStyle($sound, $type, $power)
Else
ExitLoop
EndIf
Wend
EndFunc