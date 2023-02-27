package net.stockieslad.atb_core.internal.mixin;

import net.stockieslad.atb_core.internal.BootTimer;
import net.minecraft.GameVersion;
import net.minecraft.SharedConstants;
import net.stockieslad.atb_core.core.ATBCore;
import org.jetbrains.annotations.Nullable;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(SharedConstants.class)
public class SharedConstantsMixin {
    @Shadow private static @Nullable GameVersion gameVersion;

    @Unique private static boolean EXPIRED = false;

    @Inject(method = "createGameVersion", at = @At("HEAD"))
    private static void setTimerStart(CallbackInfo ci) {
        if (gameVersion == null && !EXPIRED) {
            BootTimer.STOP_WATCH.start();
            ATBCore.LOGGER.info("");
            ATBCore.LOGGER.info("Loading timer started!");
            ATBCore.LOGGER.info("");
            EXPIRED = true;
        }
    }
}
