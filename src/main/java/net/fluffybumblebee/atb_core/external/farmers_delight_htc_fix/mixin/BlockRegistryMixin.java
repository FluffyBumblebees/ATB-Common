package net.fluffybumblebee.atb_core.external.farmers_delight_htc_fix.mixin;

import com.ianm1647.expandeddelight.registry.BlockRegistry;
import me.fallenbreath.conditionalmixin.api.annotation.Condition;
import me.fallenbreath.conditionalmixin.api.annotation.Restriction;
import net.fabricmc.fabric.api.registry.StrippableBlockRegistry;
import net.minecraft.block.Blocks;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

import static com.ianm1647.expandeddelight.block.BlockList.CINNAMON_LOG;

@Restriction(
        require = {
                @Condition("expandeddelight"),
                @Condition("farmersdelight")
        }
)
@Mixin(BlockRegistry.class)
public abstract class BlockRegistryMixin {
    @Inject(method = "registerBlocks", at = @At("TAIL"), remap = false)
    private static void registerExtension(CallbackInfo ci) {
        StrippableBlockRegistry.register(CINNAMON_LOG, Blocks.STRIPPED_OAK_LOG);
    }
}
