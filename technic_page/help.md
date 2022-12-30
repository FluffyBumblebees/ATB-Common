# Where to find help

Github://github.com/FluffyBumblebees/ATB-Common/issues

Discord: https://discord.gg/fMSnenNSXM @ #feedback

___________________________________________________

# (Pre-launch)

**Ram**,1A

- This modpack needs atleast 2.5Gb of RAM to run on very low settings. For render distances between 8 & 20 chunks, allocate around 3 - 4 Gb of RAM for optimal performance.

- When running shaders, allocate about 25% more RAM if you experiencing GC (Garbage Collector)-related issues. This should fix it. If not, keep going higher at 0.5Gb increments.

- Try to keep your memory usage around 80% usage, going too high or low will result is memory-related performance issues.

- If your game spontaneously crashes due to RAM issues. Run a memory diagnostic on your system to test if your RAM is defective. If not, report this to me.

- There is a java flag that can reduce RAM usage! I highly advise that you use this for any minecraft environment. Here it is:            "-XX:+UseStringDeduplication"

- To reduce your RAM usage, learn about some common java garbage collectors and configure (via java flags) your environment. Keep in mind though that G1GC (the standard one) works just fine but your mileage may vary.

-----------------------------------------------------------------------------------------------
**Java**,1B

- This modpack is built on 1.18.2, which means you will need atleast JDK 17. Because of this, those java flags that you might've heard of that claim to improve memory performance are pretty much useless as JDK optimises this for your system anyways.

- Before jumping to conclusions, ensure that your java is up to date first.
-
- If your game crashes without a crash report & you get an error that with a name that includes something like these set of characters "hrr_error_pid", this means that you encountered a JVM crash, and you will need to follow standard procedures of resolving these issues. Since these crashes are far harder to fix/diagnose, it is highly advised that you join my discord server and ask me directly for assistance.

-----------------------------------------------------------------------------------------------
**Bugs**,1C

- When dealing with bugs, please try reinstalling the pack first to see if your issue goes away. If not, report it to me.

-----------------------------------------------------------------------------------------------
**Editing the modpack**, 1D

1. The term "gamedir" is short for "game directory" and is just where all the modpack files are.

2. You can get to this in 2 ways:

  - ("WinKey" + "R") then copy and paste "%appdata%/.technic/modpacks\the-limit-reborn-1181" in the typing box!

  - The 2nd way is to click "Modpack Options" on the top right of the modpack menu. After that, click "Open" next to the "Install Folder" location.


3. You are now at the gamedir! You should see folders like "bin", "cache", "mods", "config", etc. If you do, then you are in the right place. If a solution requires you to remove something like "byg config", it means go to the **config** folder in your **gamedir**, and delete the whatever is named with "byg".

___________________________________________________

# (Launch)

**Patience**,2A

- Minecraft is known to struggle with making the screen responsive during boot. During boot, make sure you don't interfere with the screen by spam clicking, moving it, etc. Just let it do its thing. Sometimes being impatient will end up making you wait more.

----------------------------------------------------------------------------------------------

**Bugs**,2B

- Did your game not load corectly? Does the screen look off? Is it refusing to start at all? I can provide help through the aforementioned mediums at the top of the help page.

-----------------------------------------------------------------------------------------------

**Launch**,2C

- Do you not like the screen? Maybe you have a better idea for how the loading screen should look. I am open to feedback so let me know of your opinions.

-----------------------------------------------------------------------------------------------

#  (Post-launch & Usage)

**World Loading**,3A

- Similar to launch, you need to treat world loading the same way. Try not to interfere with things.

- This modpack has a mod called "fastload", which allows you to control how you want your world to load. All you need to do is navigate to the "Mods" button in the main menu, then search "fastload". After that, you need to click the button at the top left of its description. There, you will find all the settings to tinker with the world loading process. It is documented by tooltips so you don't need to worry about how something works.

- If you have an "error in selected datapacks", make sure you take out any of the mods/datapacks you added (if you did). You should also try making a new world to see if your world is possibly corrupt. Also try rinsing and repeating these steps on a fresh install as outdated files can cause issues like this.

- Since world loading can take some time on lower end machines, try using previously mentioned "fastload" to optimise your world loading to your desire. You can also navigate to the c2me.toml config (instructions provided in section 1D) and bump the thread usage count. Don't forget that allocating more threads will use signficiantly more RAM & possibly cause issues with other processes of the game such as rendering. Make sure to always leave around 3 threads for the rest of your game/system.

-----------------------------------------------------------------------------------------------
**Gameplay**,3B

- "Where the hell is veinminer?" It is an enchantment, not a base, keybind-controlled thing. This is for balancing reasons.

-  When using shaders, ensure that you understand the possible consequences of using it, as well as changing it's settings. If you are using Complementary shaders, don't turn off "Compatibility Mode" unless you know what you're doing. If the current shaderpack you're using looks wrong, laggy, buggy, etc, try switching to the other internally provided one to see if that resolves your issues... or don't use it at all.

- "Why does open to lan have a giant text saying I can't cheat?" Balancing reasons, it gives the capability to cheat, so I disabled that specific part that permits you to.

- As good practice, always backup your worlds. It saves me & you from having to resolve issues.

- In order to get new items from world generation in an outdated world, just generate new chunks and you will have your new items. World generation might change and look weird though so keep that in mind.

- Is your server lagging behind? You can tell by seeing if animals are "teleporting" and the server is generally less responsive. Things like giant factories & huge amounts of entities are prone to causing lag. Try to be wise with how you build your worlds.

-----------------------------------------------------------------------------------------------

**Main Menu**,3C

- You are free to edit configs at your discretion, but for technical mods, such as C2ME, do not expect support.

- Don't like some of my custom modpack resources, you can change them at the "paxi" config or the "menufiles" folder (Instructions provided at section 1D).

-----------------------------------------------------------------------------------------------

**Patience**,3D

- Refer to 2A

-----------------------------------------------------------------------------------------------
**Performance**,3E

- Refer to 1A (All paragraphs) ,  3A (Paragraph: 2, 4) & 3B (Paragraph: 6) for world loading & RAM.

- You can try changing some settings from the sodium options menu (in video settings). Along with the server & RAM, the chunk builder can cause lag for your game, so try editing the thread count in sodium as well.

- To use shaders, make sure to configure it if it does not fit up to your standards. More at 3B (Paragraph: 2).

- If your game is not running well and you're using shaders, try switching it off and back on, or turning it off completely. If you are not using shaders, try restarting your game or computer. Try reducing your render distance, shadow distance & simulation distance as well.

--------------------------------------------------------- --------------------------------------

# (Server)

**Things to setup**,4A

- Make sure you always keep the files up to date. The changed folders are always provided in every update, so you will know which folders you will need to change.

- You can modify the server to your liking, change the icon, settings, and pretty much everything (except for mods, configs and serverresources

- There are plenty of resources & videos on how to setup a server which applies to **every** minecraft server environment.

-----------------------------------------------------------------------------------------------

**Startup & Usage**,4B

- If you know what you're doing and are confident that you an experiencing an issue that is outside of your control. I can aid you in resolving your issues.

- If your server crashes on first boot, try booting it up again as a mod, named "Paradise Lost" may cause this kind of issue.

- You could be crashing becasue your world is outdated and/or broken, so keep that in mind.