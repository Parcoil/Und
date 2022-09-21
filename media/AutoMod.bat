@echo off
:: (Modpack link.)
set link=https://mettet.tk/media/mods.zip
:: (Anything above 1.18.1+ has to be fabric for fether client and you have to add -fabric at the and ov the version example 1.19-fabric)
set ver=1.19.2-fabric

:menu
cls
title Auto Mod
color 78
echo Downloaded %item% to %folder%
echo WARNING DOWNLOADING WILL DLETE THE MODS IN YOUR MODS FOLDER!!
echo -----------------------------------------------
echo 1 = Download for fether client.
echo 2 = Download for the normal mods folder.
echo 3 = Exit
set /p a=
if %a% == 1 goto feth
if %a% == 2 goto norm
if %a% == 3 goto exit
if not %a% == 1, 2, 3 goto menu

:: Go to mods folder
:feth
del /s /q %appdata%\.feather\user-mods\%ver%
cd "%appdata%\.feather\user-mods\"
md %ver%
cd "%appdata%\.feather\user-mods\%ver%"
goto dlf
:norm
del /s /q "%appdata%\.minecraft\mods"
cd "%appdata%\.minecraft"
md mods
cd "%appdata%\.minecraft\mods"
goto dln


:dlf
cls
echo Downloading
curl %link% --output mods.zip
echo Downloaded
goto uzf


:uzf
cls
echo Unzipping
powershell -Command "Expand-Archive mods.zip -DestinationPath %appdata%\.feather\user-mods\%ver% -Force"
echo Unzipped
goto del


:dln
cls
echo Downloading
curl %link% --output mods.zip
echo Downloaded
goto uzn


:uzn
cls
echo Unzipping
powershell -Command "Expand-Archive mods.zip -DestinationPath %appdata%\.minecraft\mods -Force"
echo Unzipped
goto del


:del
cls
del /f mods.zip
title Done, Bye
echo Done, Bye

:exit
exit