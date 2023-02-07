package net.fluffybumblebee.atb_core.internal.mixin;

import net.fluffybumblebee.atb_core.core.ATBCore;
import net.minecraft.client.texture.SpriteAtlasHolder;
import net.minecraft.client.texture.SpriteAtlasTexture;
import net.minecraft.resource.ResourceManager;
import net.minecraft.util.profiler.Profiler;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

import static net.fluffybumblebee.atb_core.internal.BootTimer.*;

@Mixin(SpriteAtlasHolder.class)
public class SpriteAtlasHolderMixin {
    private static boolean FIRST = false;
    private static boolean EXPIRED = false;

    @Inject(method = "apply(Lnet/minecraft/client/texture/SpriteAtlasTexture$Data;Lnet/minecraft/resource/ResourceManager;Lnet/minecraft/util/profiler/Profiler;)V", at = @At("TAIL"))
    private void timerEnd(SpriteAtlasTexture.Data data, ResourceManager resourceManager, Profiler profiler, CallbackInfo ci) {
        if (FIRST && !EXPIRED) {
            STOP_WATCH.stop();
            ATBCore.LOGGER.info("");
            ATBCore.LOGGER.info("Loading time (Seconds): " + getTimeInSeconds());
            ATBCore.LOGGER.info("Loading time since bootstrap (Seconds): " + getTimeInSecondsSinceBoot());
            ATBCore.LOGGER.info("");
            EXPIRED = true;
        } else FIRST = true;
    }
}
