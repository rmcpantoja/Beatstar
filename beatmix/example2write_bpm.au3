#include "include\scan_Bpm.au3"
global $packname="Default"
global $musicnum="1"
global $musicfile = "beatpacks\" &$packname &"\" &$musicnum &"music.ogg"
global $actionkey="1"
global $pressed="1"
$file = FileOpen("bpm.txt", $FO_OVERWRITE + $FO_CREATEPATH)
FileWrite($file, "0,")
for $repetir = 1 to 11
$scan = scan($musicfile)
$musicnum = $musicnum  +1
$musicfile = "beatpacks\" &$packname &"\" &$musicnum &"music.ogg"
FileWrite($file, $scan &",")
next
msgbox(64, "the songs have been scanned", "Now, enjoy playing the pack in the beatstar.")
