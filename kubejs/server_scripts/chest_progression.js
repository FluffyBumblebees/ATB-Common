//Made by Fluffy Bumblebee
onEvent('recipes', event => {
//Crystal Chest Fix (Recipe)
  event.remove({output: 'ironchests:crystal_chest'})
      event.shaped('ironchests:crystal_chest', [
      'GGG',
      'GDG',
      'GGG'
      ], {
      G: 'minecraft:glass',
      D: 'expandedstorage:diamond_chest'
  })
  //Obsidian Chest Fix (Recipe)
  event.remove({output: 'ironchests:obsidian_chest'})
  event.shaped('ironchests:obsidian_chest', [
      'OOO',
      'OEO',
      'OOO'
      ], {
      O: 'minecraft:obsidian',
      E: 'ironchests:emerald_chest'
  })
  event.shaped('ironchests:obsidian_chest', [
      'OOO',
      'ODO',
      'OOO'
      ], {
      O: 'minecraft:obsidian',
      D: 'expandedstorage:diamond_chest'
  }) 
  event.shaped('expandedstorage:obsidian_chest', [
      'OOO',
      'OEO',
      'OOO'
      ], {
      O: 'minecraft:obsidian',
      E: 'ironchests:emerald_chest'
  }) 
  // Obsidian Chests circulation
  event.shapeless('ironchests:obsidian_chest', ['expandedstorage:obsidian_chest'])
  event.shapeless('expandedstorage:obsidian_chest', ['ironchests:obsidian_chest'])
  //Remove Duplicate Chests (ironchest: diamondchest,ironchest,goldchest)
    event.remove({output: 'ironchests:iron_chest'})
	event.remove({output: 'ironchests:gold_chest'})
	event.remove({output: 'ironchests:diamond_chest'})
  //Remove old chests
    event.remove({output: 'expandedstorage:old_obsidian_chest'})
    event.remove({output: 'expandedstorage:old_wood_chest'})
	event.remove({output: 'expandedstorage:old_iron_chest'})
    event.remove({output: 'expandedstorage:old_gold_chest'})
	event.remove({output: 'expandedstorage:old_diamond_chest'})
	event.remove({output: 'expandedstorage:old_netherite_chest'})
  //Skystone chest needs wooden chests
    event.remove({output: 'ae2:sky_stone_chest'})
	event.shaped('ae2:sky_stone_chest', [
      'SSS',
      'SWS',
      'SSS'
      ], {
      W: '#c:wooden_chests',
      S: 'ae2:sky_stone_block'
    }
   )
  //Raw Skystone Chest smelts into smelted one
  	event.remove({output: 'ae2:smooth_sky_stone_chest'})
	event.smelting('ae2:smooth_sky_stone_chest', 'ae2:sky_stone_chest').xp(0.2)
  //Copper Chest needs skystone
    event.remove({output: 'ironchests:copper_chest'})
  	event.shaped('ironchests:copper_chest', [
      'CCC',
      'CSC',
      'CCC'
      ], {
      S: 'ae2:smooth_sky_stone_chest',
      C: 'minecraft:copper_ingot'
    }
   )
  //Chestsize2 needs copper chest
	event.remove({output: 'expandedstorage:iron_chest'})
    event.shaped('expandedstorage:iron_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: 'minecraft:iron_ingot',
      C: 'ironchests:copper_chest'	  
     }
    )
    event.remove({output: 'mythicmetals_decorations:aquarium_chest'})
    event.shaped('mythicmetals_decorations:aquarium_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: 'mythicmetals:aquarium_ingot',
      C: 'ironchests:copper_chest'	  
     }
    )
	event.remove({output: 'mythicmetals_decorations:banglum_chest'})
    event.shaped('mythicmetals_decorations:banglum_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: 'mythicmetals:banglum_ingot',
      C: 'ironchests:copper_chest'	  
     }
    )
	event.remove({output: 'mythicmetals_decorations:manganese_chest'})
    event.shaped('mythicmetals_decorations:manganese_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: 'mythicmetals:manganese_ingot',
      C: 'ironchests:copper_chest'	  
     }
    )
	event.remove({output: 'mythicmetals_decorations:silver_chest'})
    event.shaped('mythicmetals_decorations:silver_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: 'modern_industrialization:silver_ingot',
      C: 'ironchests:copper_chest'	  
     }
    )
  //Chest size 3 needs Chest size 2
	event.remove({output: 'expandedstorage:gold_chest'})
    event.shaped('expandedstorage:gold_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: 'minecraft:gold_ingot',
      C: '#c:chest_size_2'	  
     }
    )
	event.remove({output: 'mythicmetals_decorations:steel_chest'})
    event.shaped('mythicmetals_decorations:steel_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: '#c:steel_ingots',
      C: '#c:chest_size_2'	  
     }
    )
	event.remove({output: 'mythicmetals_decorations:platinum_chest'})
    event.shaped('mythicmetals_decorations:platinum_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: '#c:platinum_ingots',
      C: '#c:chest_size_2'	  
     }
    )
	event.remove({output: 'mythicmetals_decorations:osmium_chest'})
    event.shaped('mythicmetals_decorations:osmium_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: '#c:osmium_ingots',
      C: '#c:chest_size_2'	  
     }
    )
	event.remove({output: 'mythicmetals_decorations:kyber_chest'})
    event.shaped('mythicmetals_decorations:kyber_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: 'mythicmetals:kyber_ingot',
      C: '#c:chest_size_2'	  
     }
    )
	event.remove({output: 'mythicmetals_decorations:quadrillum_chest'})
    event.shaped('mythicmetals_decorations:quadrillum_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: 'mythicmetals:quadrillum_ingot',
      C: '#c:chest_size_2'	  
     }
    )
	event.remove({output: 'mythicmetals_decorations:bronze_chest'})
    event.shaped('mythicmetals_decorations:bronze_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: '#c:bronze_ingots',
      C: '#c:chest_size_2'	  
     }
    )
	event.remove({output: 'mythicmetals_decorations:midas_gold_chest'})
    event.shaped('mythicmetals_decorations:midas_gold_chest', [
      'III',
      'ICI',
      'III'
      ], {
      I: 'mythicmetals:midas_gold_ingot',
      C: '#c:chest_size_2'	  
     }
    )
  //Chest size 4 needs Chest size 3
    event.remove({output: 'ironchests:emerald_chest'})
    event.shaped('ironchests:emerald_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'minecraft:emerald',
      G: '#c:chest_size_3'
     }
	)
    event.remove({output: 'expandedstorage:diamond_chest'})
    event.shaped('expandedstorage:diamond_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'minecraft:diamond',
      G: '#c:chest_size_3'
     }
	)
    event.remove({output: 'mythicmetals_decorations:carmot_chest'})
    event.shaped('mythicmetals_decorations:carmot_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:carmot_ingot',
      G: '#c:chest_size_3'
     }
	)
	event.remove({output: 'mythicmetals_decorations:durasteel_chest'})
    event.shaped('mythicmetals_decorations:durasteel_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:durasteel_ingot',
      G: '#c:chest_size_3'
	 }
	)
	event.remove({output: 'mythicmetals_decorations:runite_chest'})
    event.shaped('mythicmetals_decorations:runite_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:runite_ingot',
      G: '#c:chest_size_3'
     }
	)
	event.remove({output: 'mythicmetals_decorations:prometheum_chest'})
    event.shaped('mythicmetals_decorations:prometheum_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:prometheum_ingot',
      G: '#c:chest_size_3'
     }
	)
	event.remove({output: 'mythicmetals_decorations:stormyx_chest'})
    event.shaped('mythicmetals_decorations:stormyx_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:stormyx_ingot',
      G: '#c:chest_size_3'
     }
	)
  //Chest size 5 needs Chest size 4
    event.remove({output: 'mythicmetals_decorations:star_platinum_chest'})
    event.shaped('mythicmetals_decorations:star_platinum_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:star_platinum',
      G: '#c:chest_size_4'
     }
	)
	event.remove({output: 'expandedstorage:netherite_chest'})
    event.shaped('expandedstorage:netherite_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'minecraft:netherite_ingot',
      G: '#c:chest_size_4'
     }
	)
  //Chest size 6 needs Chest size 5
    event.remove({output: 'mythicmetals_decorations:adamantite_chest'})
    event.shaped('mythicmetals_decorations:adamantite_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:adamantite_ingot',
      G: '#c:chest_size_5'
     }
	)
	event.remove({output: 'mythicmetals_decorations:hallowed_chest'})
    event.shaped('mythicmetals_decorations:hallowed_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:hallowed_ingot',
      G: '#c:chest_size_5'
     }
	)
	event.remove({output: 'mythicmetals_decorations:mythril_chest'})
    event.shaped('mythicmetals_decorations:mythril_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:mythril_ingot',
      G: '#c:chest_size_5'
     }
	)
	event.remove({output: 'mythicmetals_decorations:orichalcum_chest'})
    event.shaped('mythicmetals_decorations:orichalcum_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:orichalcum_ingot',
      G: '#c:chest_size_5'
     }
	)
	event.remove({output: 'mythicmetals_decorations:palladium_chest'})
    event.shaped('mythicmetals_decorations:palladium_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:palladium_ingot',
      G: '#c:chest_size_5'
     }
	)
	//Chest size 7 needs Chest size 6
	event.remove({output: 'mythicmetals_decorations:metallurgium_chest'})
    event.shaped('mythicmetals_decorations:metallurgium_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:metallurgium_block',
      G: '#c:chest_size_6'
     }
	)
	event.remove({output: 'mythicmetals_decorations:celestium_chest'})
    event.shaped('mythicmetals_decorations:celestium_chest', [
      'EEE',
      'EGE',
      'EEE'
      ], {
      E: 'mythicmetals:celestium_block',
      G: '#c:chest_size_6'
     }
	)
  }
)

//Tags for chests
onEvent('tags.items', event => {
  //Chest Progression Tag Assignments
	//Aether chest add to woodenchests tag
	event.add('c:wooden_chests', 'the_aether:skyroot_chest')
	event.add('c:wooden_chests', 'the_aether:golden_oak_chest')
	event.add('c:wooden_chests', 'the_aether:orange_chest')
	event.add('c:wooden_chests', 'the_aether:crystal_chest')
	event.add('c:wooden_chests', 'the_aether:wisteria_chest')
	//chest size_base
	event.add('c:chest_size_base', '#c:wooden_chests')
	//chest size 0
	event.add('c:chest_size_0', 'ae2:sky_stone_chest')
	event.add('c:chest_size_0', 'ae2:smooth_sky_stone_chest')
	//chest size 1
	event.add('c:chest_size_1', 'ironchests:copper_chest')
	//chest size 2
	event.add('c:chest_size_2', 'expandedstorage:iron_chest')
	event.add('c:chest_size_2', 'mythicmetals_decorations:silver_chest')
	event.add('c:chest_size_2', 'mythicmetals_decorations:manganese_chest')
	event.add('c:chest_size_2', 'mythicmetals_decorations:banglum_chest')
	event.add('c:chest_size_2', 'mythicmetals_decorations:aquarium_chest')
	//chest size 3
	event.add('c:chest_size_3', 'expandedstorage:gold_chest')
	event.add('c:chest_size_3', 'mythicmetals_decorations:steel_chest')
	event.add('c:chest_size_3', 'mythicmetals_decorations:quadrillum_chest')
	event.add('c:chest_size_3', 'mythicmetals_decorations:bronze_chest')
	event.add('c:chest_size_3', 'mythicmetals_decorations:platinum_chest')
	event.add('c:chest_size_3', 'mythicmetals_decorations:osmium_chest')
	event.add('c:chest_size_3', 'mythicmetals_decorations:kyber_chest')
	event.add('c:chest_size_3', 'mythicmetals_decorations:midas_gold_chest')
	//Chest size 4
	event.add('c:chest_size_4', 'ironchests:emerald_chest')
	event.add('c:chest_size_4', 'expandedstorage:diamond_chest')
	event.add('c:chest_size_4', 'ironchests:obsidian_chest')
	event.add('c:chest_size_4', 'ironchests:crystal_chest')
	event.add('c:chest_size_4', 'expandedstorage:obsidian_chest')
	event.add('c:chest_size_4', 'mythicmetals_decorations:carmot_chest')
	event.add('c:chest_size_4', 'mythicmetals_decorations:runite_chest')
	event.add('c:chest_size_4', 'mythicmetals_decorations:durasteel_chest')
	event.add('c:chest_size_4', 'mythicmetals_decorations:prometheum_chest')
	event.add('c:chest_size_4', 'mythicmetals_decorations:stormyx_chest')
	//Chest size 5
	event.add('c:chest_size_5', 'mythicmetals_decorations:star_platinum_chest')
	event.add('c:chest_size_5', 'expandedstorage:netherite_chest')
	//Chest size 6
	event.add('c:chest_size_6', 'mythicmetals_decorations:adamantite_chest')
	event.add('c:chest_size_6', 'mythicmetals_decorations:mythril_chest')
	event.add('c:chest_size_6', 'mythicmetals_decorations:palladium_chest')
	event.add('c:chest_size_6', 'mythicmetals_decorations:hallowed_chest')
	event.add('c:chest_size_6', 'mythicmetals_decorations:orichalcum_chest')
	//Chest size 7
	event.add('c:chest_size_7', 'mythicmetals_decorations:metallurgium_chest')
	event.add('c:chest_size_7', 'mythicmetals_decorations:celestium_chest')
 }
)