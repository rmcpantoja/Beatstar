#include "include\comaudio_remix.au3"
$level=1
$music=$device.opensound("beatpacks/default/"&$level &"music.ogg", 0)
SoundSetStyle($music, "1", "on")
while $music.playing = 1
sleep(10)
Wend