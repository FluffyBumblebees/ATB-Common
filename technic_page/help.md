# (Pre-launch)

-----------------------------------------------------------------------------------------------
**Ram**,1A
- Please use at least 4Gb of RAM, anything lower will just result in   out of memory errors.
- If you have RAM to spare, don't go above 8Gb, this will not improve performance.
- If you get memory errors, run a memory diagnostic to see if your memory is not working correctly
-----------------------------------------------------------------------------------------------
**Java**,1B
- **Requires ATLEAST JavaJDK 17, & Java 1.8.0_321 (64-Bit)**
- Please ensure your java is up to date because this can trigger     unexplainable issues.
- If you see crash reports in the log that don't have any explanation but some arbitary numbers, this could potentially be a java issue.
-----------------------------------------------------------------------------------------------
**Bugs and other things**,1C
- If you are having bugs where minecraft just crashes, send me to log and I will diagnose the issue.
- :Please before submitting any issues. Reinstall the mod pack, sometimes configs and old files conflict with updates.
- "Better Loading Screen" is in here! It is a new mod and can cause some issues with the loading.
-----------------------------------------------------------------------------------------------
**Removing certain files from gamedir**, 1D
- The term "gamedir" is short for "game directory" and is just where all the modpack files are.
- You can get to this in 2 ways:
    - ("WinKey" + "R") then copy and paste "%appdata%/.technic/modpacks\the-limit-reborn-1181" in the typing box!
    - The 2nd way is to click "Modpack Options" on the top right of the modpack menu! Click "Open" next to the "Install Folder" location.

- You are now at the gamedir! You should see files like "bin", "cache", "mods", "config", etc. If you do, then you are in the right place! If an update says to remove something like "byg" config, it means go to the **config** folder in your **gamedir**, and delete the whatever is named with "byg".
- That's it! You just successfully deleted a file that you didn't need!
-----------------------------------------------------------------------------------------------

# (Launch)

-----------------------------------------------------------------------------------------------
**Patience**,2A
- Be patient and don't do stupid things like spam click, move the minecraft window, etc. This will just make your minecraft not respond and you will need to resume the client from suspended mode. If you can't do that you have to close it manually to start it up again.
-----------------------------------------------------------------------------------------------
**Bugs**,2B
- If you are having crashes then send me the log.
- Better loading screen has an issue where if the settings are fullscreen, the game will force fullscreen and get buggy. If you want to fix this. Always close your game in windowed mode!
-----------------------------------------------------------------------------------------------
**Launch**,2C
- **Dashloader** has to cache files if there is a change in Resourepack or mods! As you know updates **do affect this**. This means that every new update has to recache and thus won't reap the benefits of the booting speed improvements.
-----------------------------------------------------------------------------------------------

#  (Post-launch & Usage)

-----------------------------------------------------------------------------------------------
**World Loading**,3A
- if things happen during loading where your minecraft gets stuck loading a world (e.g stuck on 100%) then just restart your client and your world should be okay. **Normally only happens only on new worlds**
-----------------------------------------------------------------------------------------------
**Gameplay**,3B
- Veinminer is in the game but as an enchantment for balancing.
- Don't turn compatibility mode off or PBR on for complementary shaders, this can cause visual bugs. Every other setting is up to you.
- You can edit the HUD without worry of update overrides!
- I edited to 'Open to Lan' feature to disable any form of cheating as a way to remove that temptation.
  -Backup your worlds please so I don't have to deal with headaches.
- In order to get new items from world generation in an outdated world, just generate new chunks and you will have your new items. World generation might change and look weird though so keep that in mind.
- If your world pause for a couple seconds at the start, this is just because of everything registering for the first time. It only happens once when you generate your world for the first time.
-----------------------------------------------------------------------------------------------
**Main Menu**,3C
- Don't play around with configs and mods, if you do stuff something up after doing that then that is on you.
- The options menu is on the house!
- If you do not like the Custom resources, they can be disabled in the resource packs section.
-----------------------------------------------------------------------------------------------
**Patience**,3D
- Refer to 2A
-----------------------------------------------------------------------------------------------
**Performance**,3E
- They are so many settings you can play around with and tweak to your liking. Shadows are controlled through shaders when it is used. If not using that then normal settings apply. (Default is 64 chunks)
- If you are getting high fps but not high enough for shaders, there is a 'Potato' mode in complementary shaders that still looks good but gives you more fps.
- if shaders is performing worse than usual, switch it off and then on again before jumping to conclusions.
--------------------------------------------------------- --------------------------------------

# (Server)
-----------------------------------------------------------------------------------------------
**Things to setup**,4A
- **WHEN USING A DOCKER OR SOMETHING LIKE IT, COPY 'mods, 'kubejs', & 'config'!**
- **Fabric modloader must be exactly the same too!**
- **Fabric modloader version: (0.14.5)**
- Don't forget to add the Private IP, this can be done by typing 'ipconfig' in cmd for windows
- You don't need to setup the eula after first launch because that can be done by console on your first run, you still have to manually agree to it though (in the console).
- Modify the server to your liking, change the icon, settings, and pretty much everything (except for mods, configs and serverresources
-----------------------------------------------------------------------------------------------
**Startup & Usage**,4B
- You need to port forward 25565 at your private IP on your router if it isn't done already, there are numerous videos on how to do this.
- To get your friends to join your server, you will need give them your public IP, you must be careful and give this to people you trust. If in the wrong hands, the person who has it can see your address, router, devices and pretty much anything. You can use domain IP's instead, which is a lot safer but harder to setup. There are numerous sources on how to do this!
- Please be safe when doing things like closing the server, just stop it instead of just bluntly closing it, that can corrupt your world if you are unlucky enough.
- Add more or less ram depending on what you think best fits you and your device. Adding more ram can be useful in resolving TPS issues especially when it is low.
- Report unknown and unexpected crashes.
- If 'Paradise Lost' Crashes, this is normally, just restart and it should be ok. If it isn't, report to me ASAP.
--------------------------------------------------------------------------------------------------