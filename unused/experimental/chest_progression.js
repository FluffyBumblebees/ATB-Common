//Made by Fluffy Bumblebee
onEvent('recipes', event => {
  //Functions
  let chestRec = (inputOuter, inputInner, output) => {
    event.shaped(output, [
      'OOO',
      'OIO',
      'OOO'
    ], {
      O: inputOuter,
      I: inputInner
    });
  }

  let remNChest = (inputOuter, inputInner, outPut, shouldRemove) => {
    if (shouldRemove) {
      event.remove({output: outPut});
    }
    chestRec(inputOuter, inputInner, outPut);
  }

  let massRemNChest = (set) => {
    for (let i = 0; i < set.length; i++) {
      element = set[i];
      remNChest(element[0], element[1], element[2], true);
    }
  }

  let remNSmelt = (input, outPut, xp) => {
    event.remove({output: outPut});
    event.smelting(input, outPut).xp(xp);
  }

  let conv2 = (block1, block2) => {
    event.shapeless(block1, block2);
    event.shapeless(block2, block1);
  }

  let massRemove = (itemArray) => {
    for (let i = 0; i < itemArray.length; i++) {
      for (let j = 1; i < itemArray[i].length; j++) {
        var lowerArray = itemArray[i];
        event.remove(lowerArray[0] + ':' + lowerArray[j]);
      }
    }
  }

  //Crystal Chest Fix (Recipe)
  event.remove({output: 'ironchests:crystal_chest'})
    event.shaped('ironchests:crystal_chest', [
      'GGG',
      'IDI',
      'GGG'
    ], {
      G: 'minecraft:glass',
      D: 'expandedstorage:diamond_chest',
      I: 'minecraft:diamond'
  });


  //Obsidian Chest Fix (Recipe)
  remNChest('minecraft:obsidian', 'ironchests:emerald_chest', 'ironchests:obsidian_chest', true);
  remNChest('minecraft:obsidian', 'ironchests:emerald_chest', 'expandedstorage:obsidian_chest', false);
  remNChest('minecraft:obsidian', 'expandedstorage:diamond_chest', 'ironchests:obsidian_chest', false);
  conv2('ironchests:obsidian_chest', 'expandedstorage:obsidian_chest');

  //Remove Duplicate Chests
  massRemove([
    [
      'ironchests', 
      'iron_chest', 
      'gold_chest', 
      'diamond_chest'
    ],
    [
      'expandedstorage', 
      'old_obsidian_chest', 
      'old_wood_chest', 
      'old_iron_chest', 
      'old_gold_chest', 
      'old_diamond_chest', 
      'old_netherite_chest'
    ] 
  ])

  //Skystone chest needs wooden chests
  remNChest('ae2:sky_stone_block', '#c:wooden_chests', 'ae2:sky_stone_chest');
  remNSmelt('ae2:sky_stone_stone', 'ae2:smooth_sky_stone_chest', 0.2);

  //Chest Progression
  const CST = '#c:chest_size_';
  const IRCT = 'iron_chests:';
  const MMDECOR = 'mythicmetals_decorations:';
  const MYTMET = 'mythicmetals:'
  const MOD_IND = 'modern_industrialization:';
  const EXP_STO = 'expandedstorage:';

  massRemNChest([
    ['minecraft:copper_ingot', 'ae2:smooth_sky_stone_chest', IRCT + 'copper_chest'],
    ['minecraft:iron_ingot', IRCT + 'copper_chest', EXP_STO + 'iron_chest'],
    [MYTMET + 'aquarium_ingot', IRCT + 'copper_chest', MMDECOR + 'aquarium_chest'],
    [MYTMET + 'banglum_ingot', IRCT + 'copper_chest', MMDECOR + 'banglum_chest']
    [MYTMET + 'manganese_ingot', IRCT + 'copper_chest', MMDECOR + 'manganese_chest'],
    [MOD_IND + 'silver_ingot', IRCT + 'copper_chest', MMDECOR + 'silver_chest'],
    ['minecraft:gold_ingot', CST + '2', EXP_STO + 'gold_chest'],
    ['#c:steel_ingots', CST + '2', MMDECOR + 'steel_chest'],
    ['#c:platinum_ingots', CST + '2', MMDECOR + 'platinum_chest'],
    ['#c:osmium_ingots', CST + '2', MMDECOR + 'osmium_chest'],
    [MYTMET + 'kyber_ingot', CST + '2', MMDECOR + 'kyber_chest'],
    [MYTMET + 'quadrillum_ingot', CST + '2', MMDECOR + 'quadrillum_chest'],
    ['#c:bronze_ingots', CST + '2', MMDECOR + 'bronze_chest'],
    [MYTMET + 'midas_gold_ingot', CST + '2', MMDECOR + 'midas_gold_chest'],
    ['minecraft:emerald', CST + '3', IRCT + 'emerald_chest'],
    ['minecraft:diamond', CST + '3', EXP_STO + 'diamond_chest'],
    [MYTMET + 'carmot_ingot', CST + '3', MMDECOR + 'carmot_chest'],
    [MYTMET + 'durasteel_ingot', CST + '3', MMDECOR + 'durasteel_chest'],
    [MYTMET + 'runite_ingot', CST + '3', MMDECOR + 'runite_chest'],
    [MYTMET + 'prometheum_ingot', CST + '3', MMDECOR + 'prometheum_chest'],
    [MYTMET + 'stormyx_ingot', CST + '3', MMDECOR + 'stormyx_chest'],
    [MYTMET + 'star_platinum', CST + '4', MMDECOR + 'star_platinum_chest'],
    ['minecraft:netherite_ingot', CST + '4', EXP_STO + 'netherite_chest'],
    [MYTMET + 'adamantite_ingot', CST + '5', MMDECOR + 'adamantite_chest'],
    [MYTMET + 'hallowed_ingot', CST + '5', MMDECOR + 'hallowed_chest'],
    [MYTMET + 'mythril_ingot', CST + '5', MMDECOR + 'mythril_chest'],
    [MYTMET + 'orichalcum_ingot', CST + '5', MMDECOR + 'orichalcum_chest'],
    [MYTMET + 'palladium_ingot', CST + '5', MMDECOR + 'palladium_chest'],
    [MYTMET + 'metallurgium_block', CST + '6', MMDECOR + 'metallurgium_chest'],
    [MYTMET + 'celestium_block', CST + '6', MMDECOR + 'celestium_chest']
  ]);
})

//Tags for chests
onEvent('tags.items', event => {
    
  //Aether chest add to woodenchests tag
  event.add('c:wooden_chests', [
    'the_aether:skyroot_chest',
    'the_aether:golden_oak_chest',
    'the_aether:orange_chest',
    'the_aether:crystal_chest',
    'the_aether:wisteria_chest'
  ]);

  //Chest Size_Base
  event.add('c:chest_size_base', '#c:wooden_chests');

  //Chest Size 0
  event.add('c:chest_size_0', [
    'ae2:sky_stone_chest',
    'ae2:smooth_sky_stone_chest'
  ]);

  //Shest Size 1
  event.add('c:chest_size_1', 'ironchests:copper_chest');

  //Shest Size 2
  event.add('c:chest_size_2', [
    'expandedstorage:iron_chest',
    'mythicmetals_decorations:silver_chest',
    'mythicmetals_decorations:manganese_chest',
    'mythicmetals_decorations:banglum_chest',
    'mythicmetals_decorations:aquarium_chest'
  ]);

  //chest Size 3
  event.add('c:chest_size_3', [
    'expandedstorage:gold_chest',
    'mythicmetals_decorations:steel_chest',
    'mythicmetals_decorations:quadrillum_chest',
    'mythicmetals_decorations:bronze_chest',
    'mythicmetals_decorations:platinum_chest',
    'mythicmetals_decorations:osmium_chest',
    'mythicmetals_decorations:kyber_chest',
    'mythicmetals_decorations:midas_gold_chest'
  ]);

  //Chest Size 4
  event.add('c:chest_size_4', [
    'ironchests:emerald_chest',
    'expandedstorage:diamond_chest',
    'ironchests:obsidian_chest',
    'ironchests:crystal_chest',
    'expandedstorage:obsidian_chest',
    'mythicmetals_decorations:carmot_chest',
    'mythicmetals_decorations:runite_chest',
    'mythicmetals_decorations:durasteel_chest',
    'mythicmetals_decorations:prometheum_chest',
    'mythicmetals_decorations:stormyx_chest'
  ]);

  //Chest Size 5
  event.add('c:chest_size_5', [
    'mythicmetals_decorations:star_platinum_chest',
    'expandedstorage:netherite_chest'
  ]);

  //Chest Size 6
  event.add('c:chest_size_6', [
    'mythicmetals_decorations:adamantite_chest',
    'mythicmetals_decorations:mythril_chest',
    'mythicmetals_decorations:palladium_chest',
    'mythicmetals_decorations:hallowed_chest',
    'mythicmetals_decorations:orichalcum_chest'
  ]);

  //Chest Size 7
  event.add('c:chest_size_7', [
    'mythicmetals_decorations:metallurgium_chest',
    'mythicmetals_decorations:celestium_chest'
  ]);
})