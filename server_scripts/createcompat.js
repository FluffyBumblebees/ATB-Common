//Made by Fluffy Bumblebee
onEvent('recipes', event => {

	
	//Fix unsupported ores in create
	event.recipes.createCrushing([
            'betternether:nether_ruby',
            Item.of('betternether:nether_ruby').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
		    'minecraft:netherrack'],
            'betternether:nether_ruby_ore')
	event.recipes.createCrushing([
            'betterend:amber_gem',
            Item.of('betterend:amber_gem').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
		    'minecraft:end_stone'],
            'betterend:amber_ore')
	event.recipes.createCrushing([
            'betterend:thallasium_raw',
            Item.of('betterend:thallasium_raw').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
		    'minecraft:end_stone'],
            'betterend:thallasium_ore')
	event.recipes.createCrushing([
            '6x betterend:ender_dust',
            Item.of('betterend:ender_dust').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
		    'minecraft:end_stone'],
            'betterend:ender_ore')
	event.recipes.createCrushing([
            'enderscape:shadow_quartz',
            Item.of('enderscape:shadow_quartz').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
		    'minecraft:end_stone'],
            'enderscape:shadow_quartz_ore')
	event.recipes.createCrushing([
            'enderscape:nebulite',
            Item.of('enderscape:nebulite').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
		    'minecraft:end_stone'],
            'enderscape:nebulite_ore')
	event.recipes.createCrushing([
			'byg:anthracite',
            Item.of('byg:anthracite').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
		    'minecraft:netherrack'],
            'byg:anthracite_ore')
	event.recipes.createCrushing([
			'6x minecraft:redstone',
            Item.of('minecraft:redstone').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
		    'minecraft:netherrack'],
            'betternether:nether_redstone_ore')
	event.recipes.createCrushing([
			'6x minecraft:lapis_lazuli',
            Item.of('minecraft:lapis_lazuli').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
		    'minecraft:netherrack'],
            'betternether:nether_lapis_ore')
})
