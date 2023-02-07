package net.fluffybumblebee.atb_core.mixin;

import net.fluffybumblebee.atb_core.ATBCore;
import net.fluffybumblebee.atb_core.BootTimer;
import net.minecraft.client.gui.screen.TitleScreen;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

import java.util.concurrent.TimeUnit;

@Mixin(TitleScreen.class)
public class TitleScreenMixin {
    private static boolean
            FIRST = false,
            SECOND = false;

    @Inject(method = "init", at = @At("TAIL"))
    private void endTimer(final CallbackInfo ci) {
        if (FIRST && !SECOND) {
            BootTimer.STOP_WATCH.stop();
            ATBCore.LOGGER.info("");
            ATBCore.LOGGER.info("Total bootstrap time (Seconds): " + BootTimer.STOP_WATCH.getTime(TimeUnit.SECONDS));
            ATBCore.LOGGER.info("");
            BootTimer.STOP_WATCH.reset();
            SECOND = true;
        }
        if (!FIRST)
            FIRST = true;
    }
}
