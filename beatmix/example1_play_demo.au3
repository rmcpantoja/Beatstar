#include "include\scan_Bpm.au3"
global $packname="default"
global $musicnum="1"
global $musicfile = "beatpacks\" &$packname &"\" &$musicnum &"music.ogg"
global $actionkey="1"
global $pressed="1"
for $repetir = 1 to 11
$scan = scan($musicfile)
$musicnum = $musicnum  +1
$musicfile = "beatpacks\" &$packname &"\" &$musicnum &"music.ogg"
msgbox(0, "bpm", $scan)
next
msgbox(0, "Example 1", "Finished")
