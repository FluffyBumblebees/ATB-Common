package net.fluffybumblebee.atb_core.mixin;

import com.kwpugh.more_gems.init.BlockInit;
import net.fluffybumblebee.terrains.common.registry.sets.crystal_geodes.component.CrystalGeodeSet;
import net.minecraft.block.AmethystClusterBlock;
import net.minecraft.block.Block;
import net.minecraft.block.BlockState;
import net.minecraft.block.Blocks;
import net.minecraft.tag.BlockTags;
import net.minecraft.util.collection.DataPool;
import net.minecraft.util.math.intprovider.UniformIntProvider;
import net.minecraft.util.registry.RegistryEntry;
import net.minecraft.world.gen.feature.*;
import net.minecraft.world.gen.stateprovider.BlockStateProvider;
import net.minecraft.world.gen.stateprovider.WeightedBlockStateProvider;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

import java.util.List;

import static net.minecraft.world.gen.feature.ConfiguredFeatures.register;

@Mixin(CrystalGeodeSet.class)
public class CrystalGeodeSetMixin {
    @Inject(method  = "registerGeode", at = @At("HEAD"), cancellable = true, remap = false)
    private static <B extends Block, C extends AmethystClusterBlock> void onRegister(
            B corundum,
            B crystal,
            C cluster,
            String colour,
            CallbackInfoReturnable<RegistryEntry<ConfiguredFeature<GeodeFeatureConfig, ?>>> cir
    ) {


        WeightedBlockStateProvider outerLayers = new WeightedBlockStateProvider(
                new DataPool.Builder<BlockState>()
                        .add(crystal.getDefaultState(), 10000)
                        .add(corundum.getDefaultState(), 200)
                        .add(BlockInit.CITRINE_BLOCK.getDefaultState(), 5)
                        .add(BlockInit.TOURMALINE_BLOCK.getDefaultState(), 5)
                        .add(BlockInit.KUNZITE_BLOCK.getDefaultState(), 5)
                        .add(BlockInit.TOPAZ_BLOCK.getDefaultState(), 5)
                        .add(BlockInit.ALEXANDRITE_BLOCK.getDefaultState(), 5)
                        .add(BlockInit.CORUNDUM_BLOCK.getDefaultState(), 5)
                        .add(BlockInit.SAPPHIRE_BLOCK.getDefaultState(), 5)
                        .add(BlockInit.SPINEL_BLOCK.getDefaultState(), 5)
                        .add(BlockInit.CARBONADO_BLOCK.getDefaultState(), 5)
                        .add(BlockInit.MOISSANITE_BLOCK.getDefaultState(), 5)
                        .add(Blocks.EMERALD_BLOCK.getDefaultState(), 4)
                        .add(Blocks.DIAMOND_BLOCK.getDefaultState(), 3)
                        .build());

        cir.setReturnValue(register(
                "quark_crystals:" + colour + "_geode",
                Feature.GEODE,
                new GeodeFeatureConfig(new GeodeLayerConfig(
                        BlockStateProvider.of(Blocks.AIR),
                        BlockStateProvider.of(crystal),
                        BlockStateProvider.of(corundum),
                        outerLayers,
                        outerLayers,
                        List.of(cluster.getDefaultState()),
                        BlockTags.FEATURES_CANNOT_REPLACE,
                        BlockTags.GEODE_INVALID_BLOCKS),
                        new GeodeLayerThicknessConfig(
                                3.4,
                                5.6,
                                7.2,
                                9.4
                        ),
                        new GeodeCrackConfig(
                                0.95,
                                2.0,
                                2
                        ),
                        0.35,
                        0.083,
                        true,
                        UniformIntProvider.create(4, 6),
                        UniformIntProvider.create(3, 4),
                        UniformIntProvider.create(1, 2),
                        -16,
                        16,
                        0.05,
                        1
                )
            )
        );
    }
}
