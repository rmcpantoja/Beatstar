#include "include\comaudio_remix.au3"
#include <fileConstants.au3>
global $packname="C:\users\" &@username &"\beatpacks\default"
global $musicnum="0"
$txtfile = FileOpen("rate_list.txt", $FC_OVERWRITE + $FC_CREATEPATH)
for $i = 1 to 11
$musicnum = $musicnum +1
$music = $device.opensound($packname &"\" &$musicnum &"music.ogg", 0)
FileWrite($txtfile, $i &": " &getSampleRate($music) &@CRLF)
;msgbox(0, "level " &$i, getSampleRate($musica))
next
FileClose($txtfile)
MsgBox(0, "finished", "finished")