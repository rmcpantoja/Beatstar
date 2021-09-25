#include <date.au3>
#include-once
;time library.

;Function: english_time
;Written by Matthew Horspool with math code by Kevin Jones.
;takes an integer input of seconds and returns an appropriate time (e.g. 1 hour, 2 minutes, 21 seconds).
;second param is 1 by default to return above, else returns  a colon delimited list.

Func english_time($Secs,$human=1)
#cs
Takes a time value in Seconds and converts it into Days, Hours, Minutes
and Seconds.  Set the second param to 1 if you want a return like "1
day, 6 hours and 30 seconds).  Set to 0 if you want "1:6:0:30"
#ce
$mins=Floor($secs/60)
$hours=floor($mins/60)
$days=floor($hours/24)
$weeks=floor($days/7)
$fortnights=floor($weeks/2)
$weeks=mod($weeks,2)
$days=mod($days,7)
$hours=mod($hours,24)
$mins=mod($mins,60)
$secs=mod($secs,60)
If $Human=0 Then
$string=$days&":"&$hours&":"&$mins&":"&$secs
Else
$String=""
If $fortnights=1 Then $String=$fortnights&" fortnight, "
If $fortnights>1 Then $String=$fortnights&" fortnights, "
If $weeks=1 Then $String=$weeks&" week, "
If $weeks>1 Then $String=$weeks&" weeks, "
If $Days=1 Then $String=$Days&" day, "
If $Days>1 Then $String=$days&" Days, "
If $Hours=1 Then $String=$String&$hours&" hour, "
If $Hours>1 Then $String=$String&$Hours&" hours, "
If $Mins=1 Then $String=$String&$Mins&" minute, "
If $Mins>1 Then $String=$String&$Mins&" Minutes, "
If $Secs=1 Then $String=$String&$Secs&" second, "
If $Secs>1 Then $String=$string&$Secs&" seconds, "
$String=StringTrimRight($String,2)
EndIf
Return $String
EndFunc

;function: time_add_interval
;written by Sean Randall
;using a function from the date library, adds a given number of seconds to a time and returns the new time.
;takes the interval in seconds, and optionally a date and time to add to.
;second parameter defaults to _now_Calc() and must be of type YYYY/MM/DD HH:MM:SS.

func time_add_interval($int,$time=0)
if $time = 0 then $time = _NowCalc()
$New = _DateAdd( 's',$int,$time)
;we sort of need, like, just the time.
$new = stringRight($new,9)
return $new
endFunc

;function: parse_english_time_interval
;written by Sean randall.
;takes a time (e.g. 2 minutes, 13 seconds) and returns an integer of seconds (e.g. 133).
#cs
where w are words,
this function requires that: all w that are odd (1, 3, 5 etc) are numberz
all w that are even (2, 4, 6) etc are words, being representation of numbers.
i.e. 1 minute, 13 seconds.
w1 is 1, w3 13.
w2 and w4 are the units of time.
Valid units:
for*tnight
hour or hr
min*ute
wee*k or wk
d*ay
sec*ond
#ce
func parse_english_time_interval($string)
;init a variable to 0
$output = 0
;split our input
$string = stringSplit($string," ")
;we want to loop through the units  (w1, 3 etc)
for $counter = 1 to uBound($string) step 2
;don't go too far, though
if uBound($string)-1 < $counter then exitLoop
;get the number (like 1) and the int (like minute)
$number = int($string[$counter])
$int = $string[$counter+1]
;the number must be something, else there's no point.
if $number == 0 then continueLoop
;how much do we go up by each time? if no unit, we default to 0.
$addBy = 0
;now we go through our units.
select
case StringInStr($int,"sec")  ;seconds
$addBy = 1
case StringInStr($int,"min") ;minutes
$addBy = 60
case StringInStr($int,"hr") or stringInStr($int,"hou") ;Hours
$addBy = 3600
case StringInStr($int,"day") ;days
$addBy = 86400
case StringInStr($int,"wee") or stringinStr($int,"wk")  ;weeks
$addBy = 604800
case StringInStr($int,"Fort") ;fortnights
$addBy = 1209600
endSelect
;multiply by the appropriate amount for the existing number,
$number = $number *$addby
;then add that seconded value to the output in total.
$output = $output +$number
next
return $output
endFunc

;function: get_greeting
;Written by Sean Randall
;Takes an hour and returns "morning", "afternoon" etc.
func Get_Greeting($hour =@hour)
$choices = "morning|afternoon|evening|night"
$choices = StringSplit($choices,"|")
if $hour > 21 then return $choices[4]
if $hour > 16 then return $choices[3]
if $hour > 11 then return $choices[2]
if $hour >= 0 then return $choices[1]
endFunc
;bpm_to_ms
;written by matthew horspool
;converts beets per minute (music) into milliseconds 
Func BPM_To_MS($bpm)
$ms=60/$bpm
$ms=$ms*1000
Return $time
EndFunc
;ms_to_bpm 
;written by Matthew Horspool
;converts milliseconds to beets per minute (music).
Func MSToBPM($ms)
$bpm=$ms/1000
$bpm=60/$ms
Return $bpm
EndFunc

