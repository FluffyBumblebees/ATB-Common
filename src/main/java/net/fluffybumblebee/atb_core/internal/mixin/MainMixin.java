package net.fluffybumblebee.atb_core.internal.mixin;

import net.fluffybumblebee.atb_core.util.BootTimer;
import net.minecraft.client.main.Main;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(Main.class)
public class MainMixin {
    @Inject(method = "main", at = @At("HEAD"))
    private static void setTimer(final String[] args, CallbackInfo ci) {
        BootTimer.STOP_WATCH.start();
    }
}
