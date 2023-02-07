package net.fluffybumblebee.atb_core.internal.mixin;

import net.fluffybumblebee.atb_core.internal.BootTimer;
import net.minecraft.GameVersion;
import net.minecraft.SharedConstants;
import org.jetbrains.annotations.Nullable;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

import static net.fluffybumblebee.atb_core.core.ATBCore.LOGGER;

@Mixin(SharedConstants.class)
public class SharedConstantsMixin {
    @Shadow private static @Nullable GameVersion gameVersion;

    @Unique private static boolean EXPIRED = false;

    @Inject(method = "createGameVersion", at = @At("HEAD"))
    private static void setTimerStart(CallbackInfo ci) {
        if (gameVersion == null && !EXPIRED) {
            BootTimer.STOP_WATCH.start();
            LOGGER.info("");
            LOGGER.info("Loading timer started!");
            LOGGER.info("");
            EXPIRED = true;
        }
    }
}
