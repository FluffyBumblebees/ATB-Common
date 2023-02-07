package net.fluffybumblebee.atb_core.internal.mixin;

import net.minecraft.Bootstrap;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

import static net.fluffybumblebee.atb_core.core.ATBCore.LOGGER;
import static net.fluffybumblebee.atb_core.internal.BootTimer.BOOTSTRAP_TIME_CACHE;
import static net.fluffybumblebee.atb_core.internal.BootTimer.getTimeInSeconds;

@Mixin(Bootstrap.class)
public class BootstrapMixin {
    @Inject(method = "initialize", at = @At("TAIL"))
    private static void logBootstrapTime(CallbackInfo ci) {
        BOOTSTRAP_TIME_CACHE = getTimeInSeconds();
        LOGGER.info("");
        LOGGER.info("Boot time (Seconds): " + BOOTSTRAP_TIME_CACHE);
        LOGGER.info("");
    }
}
