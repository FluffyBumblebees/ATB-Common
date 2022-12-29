//Made by Fluffy Bumblebee
//WHY ARE THERE SO MANY FUKN DUPLICATES MAN. AHHHH

onEvent('recipes', event => {
	//Utils

	let Replace = (replacer, replaceable) => {
		event.replaceOutput(replaceable, replacer)
		event.replaceInput(replaceable, replacer)	
	}
	let RemoveReplace = (replacer, recipeType, replaceable) => {
		event.remove({output: replaceable, type: recipeType})
		event.replaceOutput(replaceable, replacer)
		event.replaceInput(replaceable, replacer)	
	}
	let removeRecipe = (block, recipeType, type) => {
		if (type == 1 || type == 3) {
			event.remove({output: block, type: recipeType})
		}
		if (type == 2 || type == 3) {
			event.remove({input: block, type: recipeType})
		}
	}
	let RemoveReplaceExt = (replacer, recipeType, replaceable, shouldAddOut, shouldAddIn, removeDuplicateRecipe) => {
		if (removeDuplicateRecipe) {
			event.remove({output: replaceable, type: recipeType})
		}
		if (!shouldAddOut) {
			event.remove({output: replaceable, type: recipeType})
		} else {
			event.replaceOutput(replaceable, replacer)
		}
		if (!shouldAddIn) {
			event.remove({input: replaceable, type: recipeType})
		} else {
			event.replaceInput(replaceable, replacer)
		}
	}
	//conv(int) = ConvertIntoEach
	let conv2 = (object1, object2) => {
		event.shapeless(object1, object2)
		event.shapeless(object2, object1)
	}
	let conv3 = (object1, object2, object3) => {
		event.shapeless(object1, object2)
		event.shapeless(object2, object3)
		event.shapeless(object3, object1)
	}
	let conv4 = (object1, object2, object3, object4) => {
		event.shapeless(object1, object2)
		event.shapeless(object2, object3)
		event.shapeless(object3, object4)
		event.shapeless(object4, object1)
	}
	let Conv2Two2 = (object1, object2) => {
		craft2x2(object1, object2)
		craft2x2(object2, object1)
	}
	let Conv3Two2 = (object1, object2, object3) => {
		craft2x2(object1, object2)
		craft2x2(object2, object3)
		craft2x2(object3, object1)
	}
	let Conv4Two2 = (object1, object2, object3, object4) => {
		craft2x2(object1, object2)
		craft2x2(object2, object3)
		craft2x2(object3, object4)
		craft2x2(object4, object1)
	}
	let StoneTyped = (materialName) => {
		event.stonecutting('consistency_plus:' + materialName + '_bricks',		 'minecraft:' + materialName)
		event.stonecutting('consistency_plus:' + materialName + '_bricks', 		 'minecraft:polished_' + materialName)
		event.stonecutting('consistency_plus:' + materialName + '_brick_slab', 	 'minecraft:' + materialName)
		event.stonecutting('consistency_plus:' + materialName + '_brick_slab', 	 'minecraft:polished_' + materialName)
		event.stonecutting('consistency_plus:' + materialName + '_brick_slab', 	 'consistency_plus:' + materialName + '_bricks')
		event.stonecutting('consistency_plus:' + materialName + '_brick_stairs', 'minecraft:' + materialName)
		event.stonecutting('consistency_plus:' + materialName + '_brick_stairs', 'minecraft:polished_' + materialName)
		event.stonecutting('consistency_plus:' + materialName + '_brick_stairs', 'consistency_plus:' + materialName + '_bricks')
		event.stonecutting('consistency_plus:' + materialName + '_brick_wall', 	 'minecraft:' + materialName)
		event.stonecutting('consistency_plus:' + materialName + '_brick_wall', 	 'minecraft:polished_' + materialName)
		event.stonecutting('consistency_plus:' + materialName + '_brick_wall', 	 'consistency_plus:' + materialName + '_bricks')
		event.stonecutting('consistency_plus:' + materialName + '_pillar', 	   	 'minecraft:' + materialName)
		event.stonecutting('consistency_plus:' + materialName + '_pillar', 		 'minecraft:polished_' + materialName)
		event.stonecutting('consistency_plus:' + materialName + '_pillar', 		 'consistency_plus:' + materialName + '_bricks')
	}
	let slabIntoFullRecipe = (result, ingredient) => {
		event.shaped(result, [
			'I',
			'I'
			], {
			I: ingredient
		  }
		)
	}
	let stairRecipe = (result, ingredient) => {
		event.shaped('4x '+ result, [
			'I  ',
			'II ',
			'III'
			], {
			I: ingredient
		  }
		)
	}
	let stairFromSlabRecipe = (result, ingredient) => {
		event.shaped('2x '+ result, [
			'I  ',
			'II ',
			'III'
			], {
			I: ingredient
		  }
		)
	}
	let slabRecipe = (result, ingredient) => {
		event.shaped('6x ' + result, [
			'III'
			], {
			I: ingredient
		  }
		)
	}
	let wallRecipe = (result, ingredient) => {
		event.shaped('6x ' + result, [
			'III',
			'III'
			], {
			I: ingredient
		  }
		)
	}
	let craft2x2 = (result, ingredient) => {
		event.shaped('4x ' + result, [
			'II',
			'II'
			], {
			I: ingredient
		  	}
		)
	}
	let craftStoneAlternative = (result, ingredient) => {
		event.shaped('2x ' + result, [
			' I',
			'I '
			], {
			I: ingredient
		  	}
		)
	}
	let craftStoneAlternative2 = (result, ingredient) => {
		event.shaped('2x ' + result, [
			'I ',
			' I'
			], {
			I: ingredient
		  	}
		)
	}
	let removeCrafting = (object) => {
		event.remove({output: object, type: 'minecraft:crafting_shaped'})
	}

	// Vanilla Recipe Redirection
	event.remove({output: 'consistency_plus:cut_stone', type: 'minecraft:crafting_shaped'})
	craft2x2('consistency_plus:cut_stone', 'blockus:stone_tiles')
	event.remove({output: 'consistency_plus:cut_terracotta', type: 'minecraft:crafting_shaped'})
	craft2x2('consistency_plus:cut_terracotta', 'blockus:large_bricks')
	event.remove({output: 'architects_palette:calcite_bricks', type: 'minecraft:crafting_shaped'})
	craftStoneAlternative('architects_palette:calcite_bricks', 'consistency_plus:polished_calcite')
	craftStoneAlternative2('twigs:polished_calcite', 'minecraft:calcite')
	event.remove({output: 'blockus:polished_tuff', type: 'minecraft:crafting_shaped'})
	craftStoneAlternative('blockus:polished_tuff', 'minecraft:tuff')
	event.remove({output: 'architects_palette:tuff_bricks', type: 'minecraft:crafting_shaped'})
	craftStoneAlternative('architects_palette:tuff_bricks', 'twigs:polished_tuff')
	craftStoneAlternative2('twigs:polished_tuff', 'minecraft:tuff')
	event.remove({output: 'blockus:obsidian_bricks', type: 'minecraft:crafting_shaped'})
	craftStoneAlternative('blockus:obsidian_bricks', 'consistency_plus:polished_obsidian')
	event.remove({output: 'betternether:obsidian_tile', type: 'minecraft:crafting_shaped'})
	craftStoneAlternative('betternether:obsidian_tile', 'minecraft:obsidian')
	stairRecipe('betternether:obsidian_bricks_stairs', 'betternether:obsidian_bricks')
	stairRecipe('betternether:obsidian_tile_stairs', 'betternether:obsidian_tile')
	slabRecipe('betternether:obsidian_bricks_slab', 'betternether:obsidian_bricks')
	slabRecipe('betternether:obsidian_tile_slab', 'betternether:obsidian_tile')
	removeCrafting('blockus:polished_dripstone')
	craftStoneAlternative('blockus:polished_dripstone', 'minecraft:dripstone_block')
	removeCrafting('architects_palette:dripstone_bricks')
	craftStoneAlternative('architects_palette:dripstone_bricks', 'blockus:polished_dripstone')
	event.remove({id: 'architects_palette:choral_end_stone_bricks'})
	event.shapeless('architects_palette:choral_end_stone_bricks', ['minecraft:end_stone_bricks', 'minecraft:chorus_fruit'])
	removeCrafting('blockus:polished_end_stone')
	craftStoneAlternative('blockus:polished_end_stone', 'minecraft:end_stone')
	removeCrafting('consistency_plus:polished_end_stone')
	craftStoneAlternative2('consistency_plus:polished_end_stone', 'minecraft:end_stone')
	removeCrafting('blockus:polished_amethyst')
	craftStoneAlternative('blockus:polished_amethyst', 'minecraft:amethyst_block')
	removeCrafting('blockus:quartz_tiles')
	craftStoneAlternative('blockus:quartz_tiles', 'minecraft:quartz_bricks')
	event.remove({id: 'blockus:polished_netherrack'})
	craftStoneAlternative('blockus:polished_netherrack', 'minecraft:netherrack')
	event.remove({id: 'consistency_plus:cut_netherrack_crafting'})
	craftStoneAlternative('consistency_plus:cut_netherrack', 'minecraft:nether_bricks')
	craftStoneAlternative('blockus:netherrack_circle_pavement', 'blockus:polished_netherrack')
	craftStoneAlternative2('blockus:netherrack_bricks', 'blockus:polished_netherrack')

	//Basalt
	RemoveReplace(	'consistency_plus:basalt_brick_stairs', // replacer
					'minecraft:crafting_shaped', // recipeType
					'blockus:polished_basalt_brick_stairs' // replaceable
				 )
	conv2('consistency_plus:basalt_brick_stairs', 'betternether:basalt_bricks_stairs')
	RemoveReplace(	'consistency_plus:cobbled_basalt_slab', // replacer
					'minecraft:crafting_shaped', // recipeType
					'blockus:rough_basalt_slab' // replaceable
				 )
    slabIntoFullRecipe('minecraft:basalt', 'betternether:basalt_slab')
	slabIntoFullRecipe('consistency_plus:cobbled_basalt', 'consistency_plus:cobbled_basalt_slab')
	RemoveReplace(	'consistency_plus:cobbled_basalt_stairs', // replacer
					'minecraft:crafting_shaped', // recipeType
					'blockus:rough_basalt_stairs' // replaceable
				 )
	stairRecipe('betternether:basalt_bricks_stairs', 'betternether:basalt_bricks')
	RemoveReplace(	'consistency_plus:cobbled_basalt', // replacer
					'minecraft:crafting_shaped', // recipeType
					'blockus:rough_basalt' // replaceable
				 )
	conv2('consistency_plus:basalt_brick_wall', 'blockus:polished_basalt_brick_wall')
	wallRecipe('betternether:basalt_bricks_wall', 'betternether:basalt_bricks')
	Replace('betternether:basalt_bricks', 'blockus:polished_basalt_bricks')
	Replace('betternether:basalt_bricks_slab', 'blockus:polished_basalt_brick_slab')

	//Stone
	removeRecipe('blockus:smooth_stone_stairs', 'minecraft:crafting_shaped', 1)
	stairFromSlabRecipe('blockus:smooth_stone_stairs', 'minecraft:smooth_stone_slab')
	event.remove({id: 'consistency_plus:stone_crafting'})
	craftStoneAlternative('minecraft:stone', 'minecraft:cobblestone')
	event.remove({id: 'blockus:legacy_stonecutter'})
	craft2x2('blockus:legacy_stonecutter', 'blockus:legacy_cobblestone')

	//Granite
	event.remove({output: 'consistency_plus:granite_bricks', type: 'minecraft:crafting_shaped', input: 'minecraft:polished_granite'})
	StoneTyped('granite')
	Conv2Two2('consistency_plus:granite_bricks', 'blockus:granite_bricks')
	Conv2Two2('consistency_plus:granite_brick_stairs', 'blockus:granite_brick_stairs')
	Conv2Two2('consistency_plus:granite_brick_slab', 'blockus:granite_brick_slab')
	Conv2Two2('consistency_plus:granite_brick_wall', 'blockus:granite_brick_wall')
	Conv2Two2('consistency_plus:granite_pillar', 'blockus:polished_granite_pillar')
	Conv4Two2('blockus:granite_bricks', 'chisel:solid_bricks/granite', 'chisel:soft_bricks/granite', 'consistency_plus:granite_bricks')

	//Diorite
	event.remove({output: 'consistency_plus:diorite_bricks', type: 'minecraft:crafting_shaped', input: 'minecraft:polished_diorite'})
	StoneTyped('diorite')
	Conv2Two2('consistency_plus:diorite_bricks', 'blockus:diorite_bricks')
	Conv2Two2('consistency_plus:diorite_brick_stairs', 'blockus:diorite_brick_stairs')
	Conv2Two2('consistency_plus:diorite_brick_slab', 'blockus:diorite_brick_slab')
	Conv2Two2('consistency_plus:diorite_brick_wall', 'blockus:diorite_brick_wall')
	Conv2Two2('consistency_plus:diorite_pillar', 'blockus:polished_diorite_pillar')
	Conv4Two2('blockus:diorite_bricks', 'chisel:solid_bricks/diorite', 'chisel:soft_bricks/diorite', 'consistency_plus:diorite_bricks')

	//Andesite
	event.remove({output: 'consistency_plus:andesite_bricks', type: 'minecraft:crafting_shaped', input: 'minecraft:polished_andesite'})
	StoneTyped('andesite')
	Conv2Two2('consistency_plus:andesite_bricks', 'blockus:andesite_bricks')
	Conv2Two2('consistency_plus:andesite_brick_stairs', 'blockus:andesite_brick_stairs')
	Conv2Two2('consistency_plus:andesite_brick_slab', 'blockus:andesite_brick_slab')
	Conv2Two2('consistency_plus:andesite_brick_wall', 'blockus:andesite_brick_wall')
	Conv2Two2('consistency_plus:andesite_pillar', 'blockus:polished_andesite_pillar')
	Conv4Two2('blockus:andesite_bricks', 'chisel:solid_bricks/andesite', 'chisel:soft_bricks/andesite', 'consistency_plus:andesite_bricks')

	//Ladders
	conv2('charm:warped_ladder', 'betternether:warped_ladder')
	conv2('charm:crimson_ladder', 'betternether:crimson_ladder')

	//Bars
	event.remove({id: 'charm:variant_bars/gold_bars'})
	event.remove({id: 'blockus:golden_bars'})
	event.remove({id: 'tconstruct:common/gold_bars'})
	conv4('blockus:golden_bars', 'tconstruct:gold_bars', 'createdeco:gold_bars', 'charm:gold_bars')
	event.remove({id: 'createdeco:netherite_bars'})
	conv2('createdeco:netherite_bars', 'charm:netherite_bars')

	//pink
	removeCrafting('biomemakeover:pink_terracotta_bricks')
	craftStoneAlternative('biomemakeover:pink_terracotta_bricks', 'minecraft:pink_terracotta')
	removeCrafting('blockus:pink_shingles')
	craftStoneAlternative2('blockus:pink_shingles', 'minecraft:pink_terracotta')
	removeCrafting('blockus:pink_concrete_bricks')
	craftStoneAlternative('blockus:pink_concrete_bricks', 'consistency_plus:polished_pink_concrete')
	
	//light_gray
	removeCrafting('biomemakeover:light_gray_terracotta_bricks')
	craftStoneAlternative('biomemakeover:light_gray_terracotta_bricks', 'minecraft:light_gray_terracotta')
	removeCrafting('blockus:light_gray_shingles')
	craftStoneAlternative2('blockus:light_gray_shingles', 'minecraft:light_gray_terracotta')
	removeCrafting('blockus:light_gray_concrete_bricks')
	craftStoneAlternative('blockus:light_gray_concrete_bricks', 'consistency_plus:polished_light_gray_concrete')

	//black
	removeCrafting('biomemakeover:black_terracotta_bricks')
	craftStoneAlternative('biomemakeover:black_terracotta_bricks', 'minecraft:black_terracotta')
	removeCrafting('blockus:black_shingles')
	craftStoneAlternative2('blockus:black_shingles', 'minecraft:black_terracotta')
	removeCrafting('blockus:black_concrete_bricks')
	craftStoneAlternative('blockus:black_concrete_bricks', 'consistency_plus:polished_black_concrete')

	//purple
	removeCrafting('biomemakeover:purple_terracotta_bricks')
	craftStoneAlternative('biomemakeover:purple_terracotta_bricks', 'minecraft:purple_terracotta')
	removeCrafting('blockus:purple_shingles')
	craftStoneAlternative2('blockus:purple_shingles', 'minecraft:purple_terracotta')
	removeCrafting('blockus:purple_concrete_bricks')
	craftStoneAlternative('blockus:purple_concrete_bricks', 'consistency_plus:polished_purple_concrete')

	//cyan
	removeCrafting('biomemakeover:cyan_terracotta_bricks')
	craftStoneAlternative('biomemakeover:cyan_terracotta_bricks', 'minecraft:cyan_terracotta')
	removeCrafting('blockus:cyan_shingles')
	craftStoneAlternative2('blockus:cyan_shingles', 'minecraft:cyan_terracotta')
	removeCrafting('blockus:cyan_concrete_bricks')
	craftStoneAlternative('blockus:cyan_concrete_bricks', 'consistency_plus:polished_cyan_concrete')

	//white
	removeCrafting('biomemakeover:white_terracotta_bricks')
	craftStoneAlternative('biomemakeover:white_terracotta_bricks', 'minecraft:white_terracotta')
	removeCrafting('blockus:white_shingles')
	craftStoneAlternative2('blockus:white_shingles', 'minecraft:white_terracotta')
	removeCrafting('blockus:white_concrete_bricks')
	craftStoneAlternative('blockus:white_concrete_bricks', 'consistency_plus:polished_white_concrete')

	//light_blue
	removeCrafting('biomemakeover:light_blue_terracotta_bricks')
	craftStoneAlternative('biomemakeover:light_blue_terracotta_bricks', 'minecraft:light_blue_terracotta')
	removeCrafting('blockus:light_blue_shingles')
	craftStoneAlternative2('blockus:light_blue_shingles', 'minecraft:light_blue_terracotta')
	removeCrafting('blockus:light_blue_concrete_bricks')
	craftStoneAlternative('blockus:light_blue_concrete_bricks', 'consistency_plus:polished_light_blue_concrete')

	//magenta
	removeCrafting('biomemakeover:magenta_terracotta_bricks')
	craftStoneAlternative('biomemakeover:magenta_terracotta_bricks', 'minecraft:magenta_terracotta')
	removeCrafting('blockus:magenta_shingles')
	craftStoneAlternative2('blockus:magenta_shingles', 'minecraft:magenta_terracotta')
	removeCrafting('blockus:magenta_concrete_bricks')
	craftStoneAlternative('blockus:magenta_concrete_bricks', 'consistency_plus:polished_magenta_concrete')

	//blue
	removeCrafting('biomemakeover:blue_terracotta_bricks')
	craftStoneAlternative('biomemakeover:blue_terracotta_bricks', 'minecraft:blue_terracotta')
	removeCrafting('blockus:blue_shingles')
	craftStoneAlternative2('blockus:blue_shingles', 'minecraft:blue_terracotta')
	removeCrafting('blockus:blue_concrete_bricks')
	craftStoneAlternative('blockus:blue_concrete_bricks', 'consistency_plus:polished_blue_concrete')

	//green
	removeCrafting('biomemakeover:green_terracotta_bricks')
	craftStoneAlternative('biomemakeover:green_terracotta_bricks', 'minecraft:green_terracotta')
	removeCrafting('blockus:green_shingles')
	craftStoneAlternative2('blockus:green_shingles', 'minecraft:green_terracotta')
	removeCrafting('blockus:green_concrete_bricks')
	craftStoneAlternative('blockus:green_concrete_bricks', 'consistency_plus:polished_green_concrete')

	//red
	removeCrafting('biomemakeover:red_terracotta_bricks')
	craftStoneAlternative('biomemakeover:red_terracotta_bricks', 'minecraft:red_terracotta')
	removeCrafting('blockus:red_shingles')
	craftStoneAlternative2('blockus:red_shingles', 'minecraft:red_terracotta')
	removeCrafting('blockus:red_concrete_bricks')
	craftStoneAlternative('blockus:red_concrete_bricks', 'consistency_plus:polished_red_concrete')

	//gray
	removeCrafting('biomemakeover:gray_terracotta_bricks')
	craftStoneAlternative('biomemakeover:gray_terracotta_bricks', 'minecraft:gray_terracotta')
	removeCrafting('blockus:gray_shingles')
	craftStoneAlternative2('blockus:gray_shingles', 'minecraft:gray_terracotta')
	removeCrafting('blockus:gray_concrete_bricks')
	craftStoneAlternative('blockus:gray_concrete_bricks', 'consistency_plus:polished_gray_concrete')

	//brown
	removeCrafting('biomemakeover:brown_terracotta_bricks')
	craftStoneAlternative('biomemakeover:brown_terracotta_bricks', 'minecraft:brown_terracotta')
	removeCrafting('blockus:brown_shingles')
	craftStoneAlternative2('blockus:brown_shingles', 'minecraft:brown_terracotta')
	removeCrafting('blockus:brown_concrete_bricks')
	craftStoneAlternative('blockus:brown_concrete_bricks', 'consistency_plus:polished_brown_concrete')

	//lime
	removeCrafting('biomemakeover:lime_terracotta_bricks')
	craftStoneAlternative('biomemakeover:lime_terracotta_bricks', 'minecraft:lime_terracotta')
	removeCrafting('blockus:lime_shingles')
	craftStoneAlternative2('blockus:lime_shingles', 'minecraft:lime_terracotta')
	removeCrafting('blockus:lime_concrete_bricks')
	craftStoneAlternative('blockus:lime_concrete_bricks', 'consistency_plus:polished_lime_concrete')

	//yellow
	removeCrafting('biomemakeover:yellow_terracotta_bricks')
	craftStoneAlternative('biomemakeover:yellow_terracotta_bricks', 'minecraft:yellow_terracotta')
	removeCrafting('blockus:yellow_shingles')
	craftStoneAlternative2('blockus:yellow_shingles', 'minecraft:yellow_terracotta')
	removeCrafting('blockus:yellow_concrete_bricks')
	craftStoneAlternative('blockus:yellow_concrete_bricks', 'consistency_plus:polished_yellow_concrete')

	//orange
	removeCrafting('biomemakeover:orange_terracotta_bricks')
	craftStoneAlternative('biomemakeover:orange_terracotta_bricks', 'minecraft:orange_terracotta')
	removeCrafting('blockus:orange_shingles')
	craftStoneAlternative2('blockus:orange_shingles', 'minecraft:orange_terracotta')
	removeCrafting('blockus:orange_concrete_bricks')
	craftStoneAlternative('blockus:orange_concrete_bricks', 'consistency_plus:polished_orange_concrete')

})