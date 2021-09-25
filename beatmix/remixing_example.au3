#include "include\scan_bpm.au3"
$music=$device.opensound("beatpacks/default/1music.ogg", 0)
$music.play
while $music.playing=1
sleep(10)
wend
soundSetStyle($music, 1, "on")
soundreverse($music)
soundbaxping($music)