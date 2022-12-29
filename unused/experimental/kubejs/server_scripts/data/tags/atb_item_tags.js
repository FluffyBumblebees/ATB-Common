////////////////////////////
//Made by Fluffy Bumblebee//
////////////////////////////

onEvent('tags.items', event => {
//Constants
	let default_colours = [
		'pink',
		'purple',
		'brown',
		'magenta',
		'green',
		'black',
		'light_blue',
		'light_gray',
		'cyan',
		'white',
		'orange',
		'blue',
		'red',
		'yellow',
		'lime',
		'gray'
	]

//Chest Progression
	// Base Chests
	event.add('c:wooden_chests', [
		'the_aether:skyroot_chest',
		'the_aether:golden_oak_chest',
		'the_aether:orange_chest',
		'the_aether:crystal_chest',
		'the_aether:wisteria_chest'
	])
	event.add('c:chest_size_base', '#c:wooden_chests')

	//Chest Size 0
	event.add('c:chest_size_0', [
		'ae2:sky_stone_chest',
		'ae2:smooth_sky_stone_chest'
	])

	//Chest Size 1
	event.add('c:chest_size_1', 'ironchests:copper_chest')

	//Chest Size 3
	event.add('c:chest_size_2', [
		'expandedstorage:iron_chest',
		'mythicmetals_decorations:silver_chest',
		'mythicmetals_decorations:manganese_chest',
		'mythicmetals_decorations:banglum_chest',
		'mythicmetals_decorations:aquarium_chest'
	])

	//Chest Size 3
	event.add('c:chest_size_3', [
		'expandedstorage:gold_chest',
		'mythicmetals_decorations:steel_chest',
		'mythicmetals_decorations:quadrillum_chest',
		'mythicmetals_decorations:bronze_chest',
		'mythicmetals_decorations:platinum_chest',
		'mythicmetals_decorations:osmium_chest',
		'mythicmetals_decorations:kyber_chest',
		'mythicmetals_decorations:midas_gold_chest'
	])

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
	])

	//Chest Size 5
	event.add('c:chest_size_5', [
		'mythicmetals_decorations:star_platinum_chest',
		'expandedstorage:netherite_chest'
	])
	
	//Chest Size 6
	event.add('c:chest_size_6', [
		'mythicmetals_decorations:adamantite_chest',
		'mythicmetals_decorations:mythril_chest',
		'mythicmetals_decorations:palladium_chest',
		'mythicmetals_decorations:hallowed_chest',
		'mythicmetals_decorations:orichalcum_chest'
	])
	
	//Chest Size 7
	event.add('c:chest_size_7', [
		'mythicmetals_decorations:metallurgium_chest',
		'mythicmetals_decorations:celestium_chest'
	])

//Building Blocks
	//Functions
	let coloured_terracotta_concrete = (colour) => {
		event.add('chipped:' + colour + '_terracotta',  [
			'biomemakeover:' + colour + '_terracotta_bricks',
			'blockus:' + colour + '_shingles',
			'consistency_plus:cut_' + colour + '_terracotta',
			'consistency_plus:cobbled_' + colour + '_terracotta',
			'consistency_plus:smooth_' + colour + '_terracotta',
			'consistency_plus:polished_' + colour + '_terracotta',
			'consistency_plus:chiseled_' + colour + '_terracotta',
			'consistency_plus:carved_' + colour + '_terracotta',
			'consistency_plus:' + colour + '_terracotta_corner_pillar',
			'consistency_plus:' + colour + '_terracotta_pillar',
			'consistency_plus:' + colour + '_terracotta_tiles',
			'consistency_plus:' + colour + '_terracotta_bricks'
		])
		event.add('chipped:' + colour + '_concrete', [
			'chisel:weaver/' + colour + '_concrete',
			'chisel:layer/' + colour + '_concrete',
			'chisel:encased_bricks/' + colour + '_concrete',
			'chisel:braid/' + colour + '_concrete',
			'chisel:french/' + colour + '_concrete',
			'chisel:circular/' + colour + '_concrete',
			'chisel:twist/' + colour + '_concrete',
			'chisel:chaotic_small/' + colour + '_concrete',
			'chisel:chaotic_bricks/' + colour + '_concrete',
			'chisel:prism/' + colour + '_concrete',
			'chisel:dent/' + colour + '_concrete',
			'chisel:triple_bricks/' + colour + '_concrete',
			'chisel:tiles_medium/' + colour + '_concrete',
			'chisel:tiles_small/' + colour + '_concrete',
			'chisel:large_tile/' + colour + '_concrete',
			'chisel:raw/' + colour + '_concrete',
			'chisel:cut/' + colour + '_concrete',
			'chisel:jellybean/' + colour + '_concrete',
			'chisel:cracked_bricks/' + colour + '_concrete',
			'chisel:slant/' + colour + '_concrete',
			'chisel:cracked/' + colour + '_concrete',
			'chisel:mosaic/' + colour + '_concrete',
			'chisel:chaotic_medium/' + colour + '_concrete',
			'chisel:zag/' + colour + '_concrete',
			'chisel:soft_bricks/' + colour + '_concrete',
			'chisel:road/' + colour + '_concrete',
			'chisel:small_bricks/' + colour + '_concrete',
			'chisel:pillar/' + colour + '_concrete',
			'chisel:array/' + colour + '_concrete',
			'chisel:solid_bricks/' + colour + '_concrete',
			'chisel:panel/' + colour + '_concrete',
			'chisel:ornate/' + colour + '_concrete',
			'consistency_plus:polished_' + colour + '_concrete',
			'consistency_plus:cut_' + colour + '_concrete',
			'consistency_plus:smooth_' + colour + '_concrete',
			'consistency_plus:' + colour + '_concrete_bricks',
			'consistency_plus:' + colour + '_concrete_tiles',
			'consistency_plus:' + colour + '_concrete_pillar',
			'consistency_plus:' + colour + '_concrete_corner_pillar',
			'consistency_plus:carved_' + colour + '_concrete',
			'consistency_plus:chiseled_' + colour + '_concrete',
			'blockus:chiseled_' + colour + '_concrete',
			'blockus:' + colour + '_concrete_pillar',
			'blockus:' + colour + '_concrete_bricks'
		])
	}

	//Terracotta
	default_colours.forEach(element => {
		coloured_terracotta_concrete(element)
	})

	//Basalt
	event.add('chipped:basalt', [
		'architects_palette:basalt_tiles',
		'architects_palette:cracked_basalt_tiles',
		'architects_palette:chiseled_basalt_tiles',
		'betternether:basalt_bricks',
		'blockus:polished_basalt_circle_pavement',
		'blockus:chiseled_polished_basalt',
		'blockus:cracked_polished_basalt_bricks',
		'blockus:zigzagged_polished_basalt',
		'blockus:polished_basalt_pillar',
		'consistency_plus:basalt_tiles',
		'consistency_plus:polished_basalt',
		'consistency_plus:carved_basalt',
		'consistency_plus:chiseled_basalt',
		'consistency_plus:cut_basalt',
		'consistency_plus:basalt_corner_pillar',
		'consistency_plus:basalt_bricks',
		'minecraft:polished_basalt',
		'minecraft:smooth_basalt'
	])

	//Granite
	event.add('chipped:granite', [
		'blockus:zigzagged_granite',
		'blockus:cracked_granite_bricks',
		'blockus:granite_bricks',
		'blockus:chiseled_granite_bricks',
		'blockus:granite_circle_pavement',
		'blockus:polished_granite_pillar',
		'consistency_plus:granite_pillar',
		'consistency_plus:smooth_granite',
		'consistency_plus:chiseled_granite',
		'consistency_plus:cut_granite',
		'consistency_plus:carved_granite',
		'consistency_plus:granite_tiles',
		'consistency_plus:granite_corner_pillar',
		'consistency_plus:granite_bricks',
		'create:granite_pillar',
		'create:layered_granite',
		'create:small_granite_bricks',
		'create:cut_granite',
		'create:polished_cut_granite',
		'create:cut_granite_bricks',
		'chisel:weaver/granite',
		'chisel:layer/granite',
		'chisel:encased_bricks/granite',
		'chisel:braid/granite',
		'chisel:french/granite',
		'chisel:circular/granite',
		'chisel:twist/granite',
		'chisel:chaotic_small/granite',
		'chisel:chaotic_bricks/granite',
		'chisel:prism/granite',
		'chisel:dent/granite',
		'chisel:triple_bricks/granite',
		'chisel:tiles_medium/granite',
		'chisel:tiles_small/granite',
		'chisel:large_tile/granite',
		'chisel:raw/granite',
		'chisel:cut/granite',
		'chisel:jellybean/granite',
		'chisel:cracked_bricks/granite',
		'chisel:slant/granite',
		'chisel:cracked/granite',
		'chisel:mosaic/granite',
		'chisel:chaotic_medium/granite',
		'chisel:zag/granite',
		'chisel:soft_bricks/granite',
		'chisel:road/granite',
		'chisel:small_bricks/granite',
		'chisel:pillar/granite',
		'chisel:array/granite',
		'chisel:solid_bricks/granite',
		'chisel:panel/granite',
		'chisel:ornate/granite',
		'minecraft:polished_granite'
	])

	//Stone
	event.add('chipped:stone', [
		'blockus:stone_tiles',
		'blockus:stone_brick_pillar',
		'blockus:zigzagged_stone_bricks',
		'blockus:stone_circle_pavement',
		'consistency_plus:stone_tiles',
		'consistency_plus:stone_pillar',
		'consistency_plus:stone_corner_pillar',
		'consistency_plus:carved_stone',
		'consistency_plus:polished_stone',
		'consistency_plus:cut_stone',
		'consistency_plus:cracked_stone_pillar',
		'consistency_plus:cracked_chiseled_stone_bricks',
		'consistency_plus:cracked_stone_corner_pillar',
		'chisel:ornate/stone',
		'chisel:cut/stone',
		'chisel:soft_bricks/stone',
		'chisel:small_bricks/stone',
		'chisel:zag/stone',
		'chisel:mosaic/stone',
		'chisel:largeornate/stone',
		'chisel:road/stone',
		'chisel:slant/stone',
		'chisel:weaver/stone',
		'chisel:layer/stone',
		'chisel:cracked/stone',
		'chisel:circular/stone',
		'chisel:cracked_bricks/stone',
		'chisel:twist/stone',
		'chisel:triple_bricks/stone',
		'chisel:chaotic_small/stone',
		'chisel:tiles_small/stone',
		'chisel:chaotic_bricks/stone',
		'chisel:sunken/stone',
		'chisel:tiles_medium/stone',
		'chisel:chaotic_medium/stone',
		'chisel:braid/stone',
		'chisel:array/stone',
		'chisel:solid_bricks/stone',
		'chisel:dent/stone',
		'chisel:encased_bricks/stone',
		'chisel:panel/stone',
		'chisel:pillar/stone',
		'chisel:french/stone',
		'chisel:prism/stone',
		'chisel:large_tile/stone',
		'chisel:jellybean/stone',
		'chisel:raw/stone',
		'chisel:poison/stone',
		'#minecraft:stone_bricks'
	])
	
	//Diorite
	event.add('chipped:diorite', [
		'graveyard:tg_diorite',
		'minecraft:polished_diorite',
		'blockus:polished_diorite_pillar',
		'blockus:diorite_bricks',
		'blockus:cracked_diorite_bricks',
		'blockus:chiseled_diorite_bricks',
		'blockus:zigzagged_diorite',
		'blockus:diorite_circle_pavement',
		'create:diorite_pillar',
		'create:cut_diorite',
		'create:polished_cut_diorite',
		'create:cut_diorite_bricks',
		'create:small_diorite_bricks',
		'create:layered_diorite',
		'consistency_plus:carved_diorite',
		'consistency_plus:chiseled_diorite',
		'consistency_plus:cut_diorite',
		'consistency_plus:smooth_diorite',
		'consistency_plus:diorite_corner_pillar',
		'consistency_plus:diorite_pillar',
		'consistency_plus:diorite_tiles',
		'consistency_plus:diorite_bricks',
		'chisel:array/diorite',
		'chisel:braid/diorite',
		'chisel:raw/diorite',
		'chisel:prism/diorite',
		'chisel:pillar/diorite',
		'chisel:panel/diorite',
		'chisel:encased_bricks/diorite',
		'chisel:french/diorite',
		'chisel:dent/diorite',
		'chisel:cut/diorite',
		'chisel:cracked_bricks/diorite',
		'chisel:mosaic/diorite',
		'chisel:solid_bricks/diorite',
		'chisel:ornate/diorite',
		'chisel:soft_bricks/diorite',
		'chisel:small_bricks/diorite',
		'chisel:chaotic_small/diorite',
		'chisel:slant/diorite',
		'chisel:large_tile/diorite',
		'chisel:road/diorite',
		'chisel:jellybean/diorite',
		'chisel:chaotic_bricks/diorite',
		'chisel:chaotic_medium/diorite',
		'chisel:layer/diorite',
		'chisel:cracked/diorite',
		'chisel:tiles_medium/diorite',
		'chisel:zag/diorite',
		'chisel:weaver/diorite',
		'chisel:twist/diorite',
		'chisel:triple_bricks/diorite',
		'chisel:tiles_small/diorite'
	])

	//Andesite
	event.add('chipped:andesite', [
		'graveyard:tg_andesite',
		'minecraft:polished_andesite',
		'blockus:polished_andesite_pillar',
		'blockus:andesite_bricks',
		'blockus:cracked_andesite_bricks',
		'blockus:chiseled_andesite_bricks',
		'blockus:zigzagged_andesite',
		'blockus:andesite_circle_pavement',
		'create:andesite_pillar',
		'create:cut_andesite',
		'create:polished_cut_andesite',
		'create:cut_andesite_bricks',
		'create:small_andesite_bricks',
		'create:layered_andesite',
		'consistency_plus:carved_andesite',
		'consistency_plus:chiseled_andesite',
		'consistency_plus:cut_andesite',
		'consistency_plus:smooth_andesite',
		'consistency_plus:andesite_corner_pillar',
		'consistency_plus:andesite_pillar',
		'consistency_plus:andesite_tiles',
		'consistency_plus:andesite_bricks',
		'consistency_plus:cracked_carved_andesite',
		'consistency_plus:cracked_andesite_bricks',
		'consistency_plus:cracked_andesite_tiles',
		'consistency_plus:cracked_andesite_pillar',
		'consistency_plus:cracked_cut_andesite',
		'consistency_plus:cracked_andesite_corner_pillar',
		'consistency_plus:cracked_smooth_andesite',
		'consistency_plus:cracked_polished_andesite',
		'consistency_plus:cracked_chiseled_andesite',
		'chisel:array/andesite',
		'chisel:braid/andesite',
		'chisel:raw/andesite',
		'chisel:prism/andesite',
		'chisel:pillar/andesite',
		'chisel:panel/andesite',
		'chisel:encased_bricks/andesite',
		'chisel:french/andesite',
		'chisel:dent/andesite',
		'chisel:cut/andesite',
		'chisel:cracked_bricks/andesite',
		'chisel:mosaic/andesite',
		'chisel:solid_bricks/andesite',
		'chisel:ornate/andesite',
		'chisel:soft_bricks/andesite',
		'chisel:small_bricks/andesite',
		'chisel:chaotic_small/andesite',
		'chisel:slant/andesite',
		'chisel:large_tile/andesite',
		'chisel:road/andesite',
		'chisel:jellybean/andesite',
		'chisel:chaotic_bricks/andesite',
		'chisel:chaotic_medium/andesite',
		'chisel:layer/andesite',
		'chisel:cracked/andesite',
		'chisel:tiles_medium/andesite',
		'chisel:zag/andesite',
		'chisel:weaver/andesite',
		'chisel:twist/andesite',
		'chisel:triple_bricks/andesite',
		'chisel:tiles_small/andesite',
		'chisel:circular/andesite'
	])

	//Cobblestone
	event.add('chipped:cobblestone', [
		'chisel:ornate/cobblestone',
		'chisel:cut/cobblestone',
		'chisel:soft_bricks/cobblestone',
		'chisel:small_bricks/cobblestone',
		'chisel:zag/cobblestone',
		'chisel:mosaic/cobblestone',
		'chisel:road/cobblestone',
		'chisel:slant/cobblestone',
		'chisel:weaver/cobblestone',
		'chisel:layer/cobblestone',
		'chisel:cracked/cobblestone',
		'chisel:circular/cobblestone',
		'chisel:cracked_bricks/cobblestone',
		'chisel:twist/cobblestone',
		'chisel:triple_bricks/cobblestone',
		'chisel:chaotic_small/cobblestone',
		'chisel:tiles_small/cobblestone',
		'chisel:chaotic_bricks/cobblestone',
		'chisel:tiles_medium/cobblestone',
		'chisel:chaotic_medium/cobblestone',
		'chisel:braid/cobblestone',
		'chisel:array/cobblestone',
		'chisel:solid_bricks/cobblestone',
		'chisel:dent/cobblestone',
		'chisel:encased_bricks/cobblestone',
		'chisel:panel/cobblestone',
		'chisel:pillar/cobblestone',
		'chisel:french/cobblestone',
		'chisel:prism/cobblestone',
		'chisel:large_tile/cobblestone',
		'chisel:jellybean/cobblestone',
		'chisel:raw/cobblestone'
	])

	//Obsidian
	event.add('chipped:obsidian', [
		'betternether:obsidian_bricks',
		'betternether:obsidian_tile',
		'betternether:obsidian_tile_small',
		'betternether:obsidian_rod_tiles',
		'blockus:obsidian_bricks',
		'blockus:small_obsidian_bricks',
		'blockus:cracked_obsidian_bricks',
		'blockus:obsidian_pillar',
		'blockus:obsidian_circle_pavement',
		'consistency_plus:obsidian_bricks',
		'consistency_plus:obsidian_tiles',
		'consistency_plus:obsidian_pillar',
		'consistency_plus:obsidian_corner_pillar',
		'consistency_plus:carved_obsidian',
		'consistency_plus:chiseled_obsidian',
		'consistency_plus:polished_obsidian',
		'consistency_plus:cut_obsidian',
		'consistency_plus:smooth_obsidian'
	])

	//Crying Obsidian
	event.add('chipped:crying_obsidian', [
		'consistency_plus:crying_obsidian_bricks',
		'consistency_plus:crying_obsidian_tiles',
		'consistency_plus:crying_obsidian_pillar',
		'consistency_plus:crying_obsidian_corner_pillar',
		'consistency_plus:carved_crying_obsidian',
		'consistency_plus:chiseled_crying_obsidian',
		'consistency_plus:polished_crying_obsidian',
		'consistency_plus:cut_crying_obsidian',
		'consistency_plus:smooth_crying_obsidian'
	])

	//End Stone
	event.add('chipped:end_stone', [
		'blockus:cracked_end_stone_bricks',
		'blockus:chiseled_end_stone_bricks',
		'blockus:polished_end_stone',
		'blockus:small_end_stone_bricks',
		'blockus:zigzagged_end_stone_bricks',
		'blockus:end_stone_pillar',
		'consistency_plus:end_stone_pillar',
		'consistency_plus:smooth_end_stone',
		'consistency_plus:chiseled_end_stone',
		'consistency_plus:cut_end_stone',
		'consistency_plus:carved_end_stone',
		'consistency_plus:end_stone_tiles',
		'consistency_plus:end_stone_corner_pillar',
		'chisel:weaver/end_stone',
		'chisel:layer/end_stone',
		'chisel:encased_bricks/end_stone',
		'chisel:braid/end_stone',
		'chisel:french/end_stone',
		'chisel:circular/end_stone',
		'chisel:twist/end_stone',
		'chisel:chaotic_small/end_stone',
		'chisel:chaotic_bricks/end_stone',
		'chisel:prism/end_stone',
		'chisel:dent/end_stone',
		'chisel:triple_bricks/end_stone',
		'chisel:tiles_medium/end_stone',
		'chisel:tiles_small/end_stone',
		'chisel:large_tile/end_stone',
		'chisel:raw/end_stone',
		'chisel:cut/end_stone',
		'chisel:jellybean/end_stone',
		'chisel:cracked_bricks/end_stone',
		'chisel:slant/end_stone',
		'chisel:cracked/end_stone',
		'chisel:mosaic/end_stone',
		'chisel:chaotic_medium/end_stone',
		'chisel:zag/end_stone',
		'chisel:soft_bricks/end_stone',
		'chisel:road/end_stone',
		'chisel:small_bricks/end_stone',
		'chisel:pillar/end_stone',
		'chisel:array/end_stone',
		'chisel:solid_bricks/end_stone',
		'chisel:panel/end_stone',
		'chisel:ornate/end_stone',
		'betterend:endstone_dust',
		'consistency_plus:cobbled_end_stone',
		'consistency_plus:polished_end_stone',
		'architects_palette:chiseled_end_stone_bricks',
		'architects_palette:cracked_end_stone_bricks'
	])

	//Quartz
	event.add('chipped:quartz_block', [
		'chisel:weaver/quartz',
		'chisel:layer/quartz',
		'chisel:encased_bricks/quartz',
		'chisel:braid/quartz',
		'chisel:french/quartz',
		'chisel:circular/quartz',
		'chisel:twist/quartz',
		'chisel:chaotic_small/quartz',
		'chisel:chaotic_bricks/quartz',
		'chisel:prism/quartz',
		'chisel:dent/quartz',
		'chisel:triple_bricks/quartz',
		'chisel:tiles_medium/quartz',
		'chisel:tiles_small/quartz',
		'chisel:large_tile/quartz',
		'chisel:raw/quartz',
		'chisel:cut/quartz',
		'chisel:jellybean/quartz',
		'chisel:cracked_bricks/quartz',
		'chisel:slant/quartz',
		'chisel:cracked/quartz',
		'chisel:mosaic/quartz',
		'chisel:chaotic_medium/quartz',
		'chisel:zag/quartz',
		'chisel:soft_bricks/quartz',
		'chisel:road/quartz',
		'chisel:small_bricks/quartz',
		'chisel:pillar/quartz',
		'chisel:array/quartz',
		'chisel:solid_bricks/quartz',
		'chisel:panel/quartz',
		'chisel:ornate/quartz',
		'consistency_plus:quartz_tiles',
		'consistency_plus:quartz_corner_pillar',
		'consistency_plus:carved_quartz',
		'consistency_plus:polished_quartz',
		'consistency_plus:cut_quartz',
		'minecraft:smooth_quartz',
		'minecraft:quartz_bricks',
		'minecraft:quartz_pillar',
		'minecraft:chiseled_quartz_block',
		'blockus:quartz_tiles',
		'blockus:quartz_circle_pavement'
	])

	//Nether Bricks
	event.add('chipped:nether_bricks', [
		'minecraft:cracked_nether_bricks',
		'minecraft:chiseled_nether_bricks',
		'chisel:mosaic/nether_brick',
		'chisel:pillar/nether_brick',
		'chisel:slant/nether_brick',
		'consistency_plus:smooth_netherrack',
		'consistency_plus:netherrack_tiles',
		'consistency_plus:netherrack_pillar',
		'consistency_plus:netherrack_corner_pillar',
		'consistency_plus:chiseled_netherrack',
		'consistency_plus:polished_netherrack',
		'consistency_plus:cut_netherrack'
	])

	//Netherrack
	event.add('chipped:netherrack', [
		'consistency_plus:cobbled_netherrack',
		'blockus:polished_netherrack',
		'blockus:netherrack_bricks',
		'blockus:netherrack_circle_pavement'
	])

		//Purpur
	event.add('chipped:purpur_block', [
		'minecraft:purpur_pillar',
		'chisel:weaver/purpur',
		'chisel:layer/purpur',
		'chisel:encased_bricks/purpur',
		'chisel:braid/purpur',
		'chisel:french/purpur',
		'chisel:circular/purpur',
		'chisel:twist/purpur',
		'chisel:chaotic_small/purpur',
		'chisel:chaotic_bricks/purpur',
		'chisel:prism/purpur',
		'chisel:dent/purpur',
		'chisel:triple_bricks/purpur',
		'chisel:tiles_medium/purpur',
		'chisel:tiles_small/purpur',
		'chisel:large_tile/purpur',
		'chisel:raw/purpur',
		'chisel:cut/purpur',
		'chisel:jellybean/purpur',
		'chisel:cracked_bricks/purpur',
		'chisel:slant/purpur',
		'chisel:cracked/purpur',
		'chisel:mosaic/purpur',
		'chisel:chaotic_medium/purpur',
		'chisel:zag/purpur',
		'chisel:soft_bricks/purpur',
		'chisel:road/purpur',
		'chisel:small_bricks/purpur',
		'chisel:pillar/purpur',
		'chisel:array/purpur',
		'chisel:solid_bricks/purpur',
		'chisel:panel/purpur',
		'chisel:ornate/purpur',
		'consistency_plus:cracked_purpur_bricks',
		'consistency_plus:smooth_purpur',
		'consistency_plus:cut_purpur',
		'consistency_plus:polished_purpur',
		'consistency_plus:chiseled_purpur',
		'consistency_plus:carved_purpur',
		'consistency_plus:purpur_corner_pillar',
		'consistency_plus:purpur_block',
		'consistency_plus:purpur_bricks',
		'blockus:purpur_lines',
		'blockus:purpur_squares',
		'blockus:purpur_bricks',
		'blockus:small_purpur_bricks',
		'blockus:polished_purpur',
		'blockus:chiseled_purpur'
	])

//Ingredients
	//Functions
	let removeMaterial = (tagMod, material, type, ingredientMod) => {
		event.remove(tagMod + ':' + material + '_' + type + 's', ingredientMod + ':' + material + '_' + type)
	}
	let removeMaterials = (tagFormat, tagNameSpace, material, ingredientNameSpace, type) => {
		var seperator = '_'
		if (tagFormat = 'forge') {
			seperator = '/'
		}
		event.remove(
			tagNameSpace + ':' + prefix + seperator + material + seperator + type + suffix + 's', 
			ingredientNameSpace + ':' + prefix + seperator + material + "_" + type + suffix
		)
	}

  //Adding
	//Unnamed
	event.add('c:sulfurs', 'betterend:crystalline_sulphur')
	event.add('atb:carmot_input', ['mythicmetals:carmot_ingot', 'mythicmetals:carmot_dust'])
    event.add('atb:kyber_input', ['mythicmetals:kyber_ingot', 'mythicmetals:kyber_dust'])
    event.add('atb:star_platinum_input', ['mythicmetals:star_platinum', 'mythicmetals:star_platinum_dust'])
    event.add('c:unobtainium_ores', '#mythicmetals:unobtainium_ores')
    event.add('c:starrite_ores', '#mythicmetals:starrite_ores')
    event.add('c:kyber_ores', '#mythicmetals:kyber_ores')
    event.add('c:carmot_ores', '#mythicmetals:carmot_ores')
    event.add('c:quadrillum_ores', '#mythicmetals:quadrillum_ores')
    event.add('atb:hallowed_input', ['mythicmetals:hallowed_ingot', 'mythicmetals:hallowed_dust'])
	event.add('c:silicon_ingots', 'ae2:silicon')

	//Raw
	event.add('minecraft:beacon_payment_items',[
		'modern_industrialization:iridium_ingot',
		'modern_industrialization:tin_ingot',
		'modern_industrialization:steel_ingot',
		'modern_industrialization:bronze_ingot',
		'modern_industrialization:invar_ingot',
		'modern_industrialization:titanium_ingot',
		'modern_industrialization:electrum_ingot',
		'modern_industrialization:tungsten_ingot',
		'modern_industrialization:lead_ingot',
		'modern_industrialization:nickel_ingot',
		'modern_industrialization:platinum_ingot',
		'modern_industrialization:chromium_ingot',
		'modern_industrialization:aluminum_ingot',
		'create:brass_ingot',
		'create:zinc_ingot'
	])
	event.add('minecraft:piglin_loved', [
		'indrev:electrum_block',
		'modern_industrialization:electrum_block',
		'modern_industrialization:electrum_plate',
		'modern_industrialization:electrum_ingot'
	])

  //Removing
	//Raw
 	 event.remove('c:raw_tin_ores', ['modern_industrialization:raw_tin', 'indrev:raw_tin'])
 	 event.remove('c:raw_silver_ores', ['modern_industrialization:raw_silver', 'indrev:raw_silver'])
	 event.remove('c:brass_plates', 'create:brass_sheet')

	//Automatic
	const removedMaterials = [
		[
			'vanilla', 
			[ 
				'c', 
				[
					'manganese',
					[
						'techreborn', 
						['dust', 'small_dust']
					],
					[
						'modern_industrialization', 
						['dust', 'ingot', 'nugget']
					]
				],
				[
					'iridium',
					[
						'techreborn',
						['plate']
					]
				],
				[
					'zinc',
					[
						'techreborn'
						['ingot', 'nugget']
					],
					[
						'createplus'
						['dust']
					]
				],
				[
					'tin',
					[
						'indrev'
						['dust', 'ingot', 'nugget', 'plate']
					],
					[
						'techreborn'
						['ingot', 'nugget', 'plate']
					],
					[
						'mythicmetals'
						['nugget']
					]
				],
				[
					'steel',
					[
						'enriched',
						['ingot']
					],
					[
						'techreborn'
						['ingot', 'nugget', 'dust', 'small_dust', 'plate']
					],
					[
						'mythicmetals',
						['nugget']
					],
					[
						'indrev',
						['ingot', 'nugget', 'dust', 'plate']
					],
					[
						'ad_astra',
						['ingot']
					]
				],
				[
					'silver',
					[
						'indrev',
						['ingot', 'nugget', 'plate', 'dust']
					],
					[
						'mythicmetals',
						['nugget']
					],
					[
						'techreborn',
						['ingot', 'nugget', 'plate']
					]
				],
				[
					'bronze',
					[
						'mythicmetals',
						['nugget']
					],
					[
						'indrev',
						['ingot', 'nugget', 'dust', 'plate']
					],
					[
						'techreborn',
						['ingot', 'nugget', 'dust', 'plate']
					]
				],
				[
					'brass',
					[
						'techreborn',
						['ingot', 'dust', 'nugget', 'plate']
					]
				],
				[
					'invar',
					[
						'techreborn',
						['ingot', 'dust', 'nuggets', 'small_dust', 'plate']
					]
				]
			]
		],
		[
			'forge',
			[
				'c',
				[
					'zinc'
					[
						'createplus'
						['dust']
					]
				]
			]
		]
	]

	removeMaterial.forEach(element => {
		for (i = 1; i < element.length; i++) {
			for (j = 1; j < element[i].length; j++) {
				for (k = 1; k < element[i][j].length; k++) {
					for (l = 0; l < element[i][j][k][1].length; l++) {
						removeMaterial(element[0], element[i][0], element[i][j][0], element[i][j][k][0], 
							element[i][j][k][1][l], '')
					}
					for (m = 0; m < element[i][j][k][2].length; m++) {
						removeMaterial(element[0], element[i][0], element[i][j][0], element[i][j][k][0], 
							'', element[i][j][k][2][m][0])
					}
				}
			}
		}
	})
})
