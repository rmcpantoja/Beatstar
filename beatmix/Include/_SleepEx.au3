#include-once
Func otherdelay($ms)
$Timer = TimerInit()
$Delay = TimerDiff($Timer)
$DelayTime = $ms
while 1
If $Delay > $DelayTime Then
return 1
$Timer = TimerInit()
exitloop
else
return 0
exitloop
EndIf
sleep(10)
Wend
EndFunc