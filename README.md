# Neeo-driver-nvidia-shield
This is driver for the Neeo remote to support the NVidia Shield via BlueTooth. It should be combined with my [websocket-to-ble-hid-bridge](https://github.com/Webunity/websocket-to-ble-hid-bridge) which runs on, for example, a Raspberry Pi and this driver which can also run on a Raspberry Pi. The peripheral uses a plugged in bluetooth USB adapter to act as a 'keyboard' for the NVidia Shield.

The driver receives commands from the Neeo remote, and passes them on via websockets to the 'keyboard' which in turn passes the commands on to the NVidia Shield over BLE.

## TODO
- Add instructions on how to set it up (pairing, remote part etc)

## Architecture
![how-it-works](./assets/neeo-driver-nvidia-shield.png?raw=true)

## Keycodes for the NVidia Shield
Specific commands for the Android Shield TV are (with modifier "0" unless otherwise mentioned):
  - Left          (80)
  - Right         (79)
  - Up            (82)
  - Down          (81)
  - Select        (40)
  - Back          (41)
  - Home          (1,41)
  - Volume up     (237)
  - Volume down   (238)
  - Mute          (239)
  - Menu          (101)
  - Power on/off  (102)
  - Play/pause    (232)
  - Stop          (243)
  - Fast forward  (242)
  - Fast reverse  (241)
  - Next song     (235)
  - Previous song (234)
 
## A note on recent apps
Recent apps uses the modifier 4 (alt) and key 43 (tab), but it has to be kept pressed in (just like on a keyboard) for the recent apps menu to show up. This means that task switching cannot be done yet, without implementing a set of keypresses to kill the current app for example. Since you can still kill apps via the settings menu i left this functionality as 'not-implemented'.

