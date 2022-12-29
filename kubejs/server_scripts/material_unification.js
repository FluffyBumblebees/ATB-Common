//Made by Fluffy Bumblebee

//References
//////////////////////////////////////////////
//event.replaceInput('', '')
//event.replaceOutput('', '')
//event.recipes.createCrushing('', '')
//event.add('', '')
//event.remove('', '')
//event.remove({output: ''})
//event.remove({input: ''})
//event.smelting('', '')
//event.shapeless('', '')
//////////////////////////////////////////////
onEvent('recipes', event => {
	//Ruby = techreborn
	event.replaceInput('enriched:ruby', 'techreborn:ruby_gem')
	event.replaceOutput('enriched:ruby', 'techreborn:ruby_gem')
   	event.replaceInput('modern_industrialization:ruby_dust', 'techreborn:ruby_dust')
  	event.replaceOutput('modern_industrialization:ruby_dust', 'techreborn:ruby_dust')
  	event.replaceInput('modern_industrialization:ruby_tiny_dust', 'techreborn:ruby_small_dust')
   	event.replaceOutput('modern_industrialization:ruby_tiny_dust', 'techreborn:ruby_small_dust')
	event.shapeless('enriched:ruby_block', 'techreborn:ruby_storage_block')
	event.shapeless('techreborn:ruby_storage_block', 'enriched:ruby_block')
	//Sapphire = techreborn
	event.shapeless('enriched:sapphire_block', 'techreborn:sapphire_storage_block')
	event.shapeless('techreborn:sapphire_storage_block', 'enriched:sapphire_block')
	//Silicon = AE2
	event.replaceInput('modern_industrialization:silicon_ingot', 'ae2:silicon')
	event.replaceOutput('modern_industrialization:silicon_ingot', 'ae2:silicon')
	//Manganese = MythicMetals
	event.shapeless('modern_industrialization:manganese_block', 'mythicmetals:manganese_block')
	event.shapeless('mythicmetals:manganese_block', 'modern_industrialization:manganese_block')
	event.recipes.createCrushing('mythicmetals:manganese_dust', 'mythicmetals:manganese_ingot')
	event.recipes.createCrushing('modern_industrialization:manganese_crushed_dust', 'mythicmetals:manganese_dust')
	event.replaceInput('modern_industrialization:manganese_ingot', 'mythicmetals:manganese_ingot')
	event.replaceInput('modern_industrialization:manganese_dust', 'mythicmetals:manganese_dust')
	event.replaceOutput('modern_industrialization:manganese_dust', 'mythicmetals:manganese_dust')
	event.replaceOutput('modern_industrialization:manganese_nugget', 'mythicmetals:manganese_nugget')
	event.replaceInput('modern_industrialization:manganese_nugget', 'mythicmetals:manganese_nugget')
	event.remove({input: 'techreborn:manganese_small_dust'})
	event.replaceOutput('techreborn:manganese_dust', 'mythicmetals:manganese_dust')
	event.replaceInput('techreborn:manganese_dust', 'mythicmetals:manganese_dust')
	event.replaceOutput('techreborn:manganese_small_dust', 'modern_industrialization:manganese_tiny_dust')
	event.smelting('mythicmetals:manganese_ingot', 'modern_industrialization:manganese_crushed_dust').xp(0.2)
	event.smelting('mythicmetals:manganese_ingot', 'mythicmetals:manganese_dust').xp(0.2)
	event.blasting('mythicmetals:manganese_ingot', 'modern_industrialization:manganese_crushed_dust').xp(0.2)
	event.blasting('mythicmetals:manganese_ingot', 'mythicmetals:manganese_dust').xp(0.2)
	event.remove({output: '4x modern_industrialization:manganese_tiny_dust'})
	event.shapeless('9x modern_industrialization:manganese_tiny_dust', 'mythicmetals:manganese_dust')
	event.smelting('mythicmetals:manganese_nugget', 'modern_industrialization:manganese_tiny_dust').xp(0.2)
	event.smelting('mythicmetals:manganese_block', 'mythicmetals:raw_manganese_block').xp(1.5).cookingTime(1500.0)
	event.blasting('mythicmetals:manganese_nugget', 'modern_industrialization:manganese_tiny_dust').xp(0.2)
	event.blasting('mythicmetals:manganese_block', 'mythicmetals:raw_manganese_block').xp(1.5).cookingTime(750.0)
	event.remove({output: '9x modern_industrialization:manganese_ingot'})
	event.shapeless('9x mythicmetals:manganese_ingot', 'modern_industrialization:manganese_block')
	event.recipes.createCrushing('modern_industrialization:iridium_tiny_dust', 'mythicmetals:manganese_nugget')
	event.custom({
  	"type": "modern_industrialization:macerator",
 	   "eu": 2,
 	   "duration": 100,
	"item_inputs": {
 	   "item": "mythicmetals:manganese_dust",
    	"amount": 1
 	   },
  	"item_outputs": [{
  	    "item": "modern_industrialization:manganese_crushed_dust",
    	  "amount": 1
  	  }]
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "mythicmetals:manganese_dust"
	},
	"output": {
		"item": "modern_industrialization:manganese_crushed_dust"
	},
	"processTime": 200,
	})
	event.custom({
  	"type": "indrev:pulverize",
	"ingredients": {
		"item": "mythicmetals:manganese_ingot"
	},
	"output": {
		"item": "mythicmetals:manganese_dust"
	},
	"processTime": 200,
	})
	event.remove({output: 'modern_industrialization:manganese_block', input: '9x mythicmetals:manganese_ingot'})
	//Iridium = modern_industrialization
	event.smelting('techreborn:iridium_storage_block', 'techreborn:raw_iridium_storage_block').xp(4.5).cookingTime(1500.0)
	event.smelting('techreborn:iridium_storage_block_wall', 'techreborn:raw_iridium_storage_block_wall').xp(0.7)
	event.smelting('techreborn:iridium_storage_block_slab', 'techreborn:raw_iridium_storage_block_slab').xp(0.7)
	event.smelting('techreborn:iridium_storage_block_stairs', 'techreborn:raw_iridium_storage_block_stairs').xp(0.7)
	event.blasting('techreborn:iridium_storage_block', 'techreborn:raw_iridium_storage_block').xp(4.5).cookingTime(750.0)
	event.blasting('techreborn:iridium_storage_block_wall', 'techreborn:raw_iridium_storage_block_wall').xp(0.7)
	event.blasting('techreborn:iridium_storage_block_slab', 'techreborn:raw_iridium_storage_block_slab').xp(0.7)
	event.blasting('techreborn:iridium_storage_block_stairs', 'techreborn:raw_iridium_storage_block_stairs').xp(0.7)
	event.replaceInput('techreborn:iridium_ingot', 'modern_industrialization:iridium_ingot')
	event.replaceOutput('techreborn:iridium_ingot', 'modern_industrialization:iridium_ingot')
	event.replaceInput('techreborn:iridium_nugget', 'modern_industrialization:iridium_nugget')
	event.replaceOutput('techreborn:iridium_nugget', 'modern_industrialization:iridium_nugget')
	event.replaceInput('modern_industrialization:raw_iridium', 'techreborn:raw_iridium')
	event.replaceOutput('modern_industrialization:raw_iridium', 'techreborn:raw_iridium')
	event.shapeless('modern_industrialization:iridium_block', 'techreborn:iridium_storage_block')
	event.shapeless('techreborn:iridium_storage_block', 'modern_industrialization:iridium_block')
	event.shapeless('modern_industrialization:raw_iridium_block', 'techreborn:raw_iridium_storage_block')
	event.shapeless('techreborn:raw_iridium_storage_block', 'modern_industrialization:raw_iridium_block')
	event.replaceOutput('techreborn:iridium_plate', 'modern_industrialization:iridium_plate')
	event.recipes.createCrushing('modern_industrialization:iridium_tiny_dust', 'modern_industrialization:iridium_nugget')
	event.remove({output: 'techreborn:iridium_storage_block', input: '9x modern_industrialization:iridium_ingot'})
	event.remove({output: 'modern_industrialization:raw_iridium_block', input: '9x techreborn:raw_iridium'})
	event.smelting('modern_industrialization:iridium_block', 'modern_industrialization:raw_iridium_block').xp(4.5).cookingTime(1500.0)
	event.blasting('modern_industrialization:iridium_block', 'modern_industrialization:raw_iridium_block').xp(4.5).cookingTime(750.0)
	//Zinc = Create
	event.smelting('create:zinc_block', 'create:raw_zinc_block').xp(4.5).cookingTime(1500.0)
	event.blasting('create:zinc_block', 'create:raw_zinc_block').xp(4.5).cookingTime(750.0)
	event.replaceInput('techreborn:zinc_ingot', 'create:zinc_ingot')
	event.replaceOutput('techreborn:zinc_ingot', 'create:zinc_ingot')
	event.shapeless('create:zinc_block', 'techreborn:zinc_storage_block')
	event.shapeless('techreborn:zinc_storage_block', 'create:zinc_block')
	event.stonecutting('4x createdeco:zinc_sheet_metal', 'techreborn:zinc_storage_block')
	event.replaceInput('techreborn:zinc_nugget', 'create:zinc_nugget')
	event.replaceOutput('techreborn:zinc_nugget', 'create:zinc_nugget')
	event.replaceInput('createplus:zinc_dust', 'techreborn:zinc_dust')
	event.replaceOutput('createplus:zinc_dust', 'techreborn:zinc_dust')
	event.replaceInput('createdeco:zinc_sheet', 'techreborn:zinc_plate')
	event.replaceOutput('createdeco:zinc_sheet', 'techreborn:zinc_plate')
	event.replaceInput('createaddition:zinc_sheet', 'techreborn:zinc_plate')
	event.replaceOutput('createaddition:zinc_sheet', 'techreborn:zinc_plate')
	event.remove({input: '#c:zinc_dusts', type: 'minecraft:smelting'})
	event.smelting('create:zinc_ingot', 'techreborn:zinc_dust').xp(0.7)
	event.remove({input: '#c:zinc_dusts', type: 'minecraft:blasting'})
	event.blasting('create:zinc_ingot', 'techreborn:zinc_dust').xp(0.7)
	event.remove({input: 'techreborn:zinc_storage_block', output: '9x create:zinc_ingot'})
	event.shapeless('9x create:zinc_ingot', 'techreborn:zinc_storage_block')
	event.remove({input: 'create:zinc_ingot', type: 'modern_industrialization:macerator'})
	event.custom({
   	 "type": "modern_industrialization:macerator",
   	 "eu": 2,
   	 "duration": 100,
   	 "item_inputs": {
   	   "item": "create:zinc_ingot",
  	   "amount": 1
 	},
  	"item_outputs": [{
	    "item": "techreborn:zinc_dust",
 	    "amount": 1
	      }]
	 })
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "create:zinc_ingot"
	},
	"output": {
		"item": "techreborn:zinc_dust"
	},
	"processTime": 200,
	})
	event.remove({input: 'create:zinc_ingot', type: 'create:crushing'})
	event.recipes.createCrushing('techreborn:zinc_dust', 'create:zinc_ingot')
	event.remove({output: 'create:zinc_ingot', input: '9x create:zinc_nugget'})
	event.shapeless('create:zinc_ingot', '9x create:zinc_nugget')
	event.remove({input: 'create:zinc_ingot', type: 'create:pressing'})
	event.recipes.createPressing('techreborn:zinc_plate', 'create:zinc_ingot')
	event.remove({input: 'create:zinc_ingot', output: '9x create:zinc_nugget'})
	event.shapeless('9x create:zinc_nugget', 'create:zinc_ingot')
	event.remove({output: 'techreborn:zinc_storage_block', input: '9x create:zinc_ingot'})
	//tin = modern_industrialization
	event.replaceInput('indrev:tin_dust', '#c:tin_dusts')
	event.replaceOutput('indrev:tin_dust', '#c:tin_dusts')
	event.remove({output: '3x indrev:tin_dust', type: 'indrev:pulverize'})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "techreborn:raw_tin",
		"count": 2
	},
	"output": {
		"item": "modern_industrialization:tin_dust",
		"count": 3
	},
	"processTime": 200,
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "indrev:tin_purified_ore"
	},
	"output": {
		"item": "modern_industrialization:tin_dust",
		"count": 3
	},
	"processTime": 200,
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "modern_industrialization:tin_ore"
	},
	"output": {
		"item": "modern_industrialization:tin_dust",
		"count": 3
	},
	"processTime": 200,
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "modern_industrialization:deepslate_tin_ore"
	},
	"output": {
		"item": "modern_industrialization:tin_dust",
		"count": 3
	},
	"processTime": 200,
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "modern_industrialization:tin_ingot"
	},
	"output": {
		"item": "modern_industrialization:tin_dust"
	},
	"processTime": 200,
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "indrev:tin_chunk"
	},
	"output": {
		"item": "modern_industrialization:tin_dust"
	},
	"processTime": 200,
	})
	event.remove({output: 'indrev:tin_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'indrev:tin_ingot', type: 'minecraft:blasting'})
	event.remove({output: 'indrev:tin_ingot', type: 'modern_industrialization:macerator'})
	event.remove({output: 'indrev:tin_ingot', type: 'create:fan_blasting'})
	event.remove({input: 'create:crushed_tin_ore', type: 'minecraft:smelting'})
	event.smelting('modern_industrialization:tin_ingot', 'create:crushed_tin_ore').xp(0.7)
	event.blasting('modern_industrialization:tin_ingot', 'create:crushed_tin_ore').xp(0.7)
	event.remove({output: 'indrev:tin_ingot'})
	event.replaceOutput('mythicmetals:tin_ingot', 'modern_industrialization:tin_ingot')
	event.remove({input: '9x #c:tin_nuggets'})
	event.shapeless('modern_industrialization:tin_ingot', '9x modern_industrialization:tin_nugget')
	event.remove({input: '9x #c:tin_nuggets', output: 'indrev:tin_ingot'})
	event.remove({input: '9x #c:tin_nuggets', output: 'mythicmetals:tin_ingot'})
	event.remove({input: 'mythicmetals:raw_tin', type: 'minecraft:smelting'})
	event.remove({input: 'modern_industrialization:tin_ore', type: 'minecraft:smelting'})
	event.remove({input: 'modern_industrialization:deepslate_tin_ore', type: 'minecraft:smelting'})
	event.remove({input: 'mythicmetals:raw_tin', type: 'minecraft:blasting'})
	event.remove({input: 'modern_industrialization:tin_ore', type: 'minecraft:blasting'})
	event.remove({input: 'modern_industrialization:deepslate_tin_ore', type: 'minecraft:blasting'})
	event.remove({input: 'create:crushed_tin_ore', type: 'minecraft:blasting'})
	event.replaceInput('indrev:tin_ingot', 'modern_industrialization:tin_ingot')
	event.replaceOutput('indrev:tin_ingot', 'modern_industrialization:tin_ingot')
	event.shapeless('9x modern_industrialization:tin_ingot', 'indrev:tin_block')
	event.replaceInput('techreborn:tin_ingot', 'modern_industrialization:tin_ingot')
	event.replaceOutput('techreborn:tin_ingot', 'modern_industrialization:tin_ingot')
	event.remove({input: 'modern_industrialization:raw_tin', type: 'minecraft:smelting'})
	event.smelting('modern_industrialization:tin_ingot', 'techreborn:raw_tin').xp(0.7)
	event.remove({input: 'modern_industrialization:raw_tin', type: 'minecraft:blasting'})
	event.blasting('modern_industrialization:tin_ingot', 'techreborn:raw_tin').xp(0.7)
	event.remove({input: 'techreborn:tin_nugget'})
	event.remove({output: 'techreborn:tin_nugget'})
	event.remove({output: 'mythicmetals:tin_ingot'})
	event.remove({output: 'indrev:tin_nugget'})
	event.remove({output: 'techreborn:tin_nugget'})
	event.replaceOutput('mythicmetals:raw_tin', 'techreborn:raw_tin')
	event.replaceOutput('modern_industrialization:raw_tin', 'techreborn:raw_tin')
	event.replaceOutput('indrev:raw_tin', 'techreborn:raw_tin')
	event.replaceInput('mythicmetals:raw_tin', 'techreborn:raw_tin')
	event.replaceInput('modern_industrialization:raw_tin', 'techreborn:raw_tin')
	event.replaceInput('indrev:raw_tin', 'techreborn:raw_tin')
	event.shapeless('techreborn:tin_storage_block', 'indrev:tin_block')
	event.shapeless('indrev:tin_block', 'modern_industrialization:tin_block')
	event.shapeless('modern_industrialization:tin_block', 'mythicmetals:tin_block')
	event.shapeless('mythicmetals:tin_block', 'techreborn:tin_storage_block')
	event.shapeless('techreborn:raw_tin_storage_block', 'indrev:raw_tin_block')
	event.shapeless('indrev:raw_tin_block', 'modern_industrialization:raw_tin_block')
	event.shapeless('modern_industrialization:raw_tin_block', 'mythicmetals:raw_tin_block')
	event.shapeless('mythicmetals:raw_tin_block', 'techreborn:raw_tin_storage_block')
	event.smelting('modern_industrialization:tin_block', 'modern_industrialization:raw_tin_block').xp(5.2).cookingTime(1500.0)
	event.smelting('indrev:tin_block', 'indrev:raw_tin_block').xp(5.2).cookingTime(1500.0)
	event.smelting('techreborn:tin_storage_block', 'techreborn:raw_tin_storage_block').xp(5.2).cookingTime(1500.0)
	event.smelting('mythicmetals:tin_block', 'mythicmetals:raw_tin_block').xp(5.2).cookingTime(1500.0)
	event.blasting('modern_industrialization:tin_block', 'modern_industrialization:raw_tin_block').xp(5.2).cookingTime(750.0)
	event.blasting('indrev:tin_block', 'indrev:raw_tin_block').xp(5.2).cookingTime(750.0)
	event.blasting('techreborn:tin_storage_block', 'techreborn:raw_tin_storage_block').xp(5.2).cookingTime(750.0)
	event.blasting('mythicmetals:tin_block', 'mythicmetals:raw_tin_block').xp(5.2).cookingTime(750.0)
	event.replaceInput('techreborn:tin_plate', 'modern_industrialization:tin_plate')
	event.replaceOutput('techreborn:tin_plate', 'modern_industrialization:tin_plate')
	event.replaceInput('techreborn:tin_plate', 'indrev:tin_plate')
	event.replaceOutput('techreborn:tin_plate', 'indrev:tin_plate')
	event.remove({output: 'indrev:tin_plate'})
	event.custom({
	"type": "indrev:compress",
	"ingredients": {
		"item": "modern_industrialization:tin_ingot"
	},
	"output": {
		"item": "modern_industrialization:tin_plate",
		"count": 1
	},
	"processTime": 400
	})
	event.remove({input: 'modern_industrialization:tin_ingot', type: 'create:pressing'})
	event.recipes.createPressing('modern_industrialization:tin_plate', 'modern_industrialization:tin_ingot')
	event.remove({input: 'create:crushed_tin_ore', type: 'create:splashing'})
	event.custom({
	"type":"create:splashing",
	"ingredients": [
		{
			"item":"create:crushed_tin_ore"
		}],
	"results": [
		{
		"item":"modern_industrialization:tin_nugget",
		"count": 9
		}]
	})
	event.remove({input: '9x modern_industrialization:tin_ingot', output: 'techreborn:tin_storage_block'})
	event.remove({input: '9x modern_industrialization:tin_ingot', output: 'indrev:tin_block'})
	event.remove({input: '9x modern_industrialization:tin_ingot', output: 'mythicmetals:tin_block'})
	event.remove({input: '9x techreborn:raw_tin', output: 'modern_industrialization:raw_tin_block'})
	event.remove({input: '9x techreborn:raw_tin', output: 'indrev:raw_tin_block'})
	event.remove({input: '9x techreborn:raw_tin', output: 'mythicmetals:raw_tin_block'})
	//Steel = modern_industrialization
	event.shapeless('techreborn:steel_storage_block', 'modern_industrialization:steel_block')
	event.shapeless('modern_industrialization:steel_block', 'indrev:steel_block')
	event.shapeless('indrev:steel_block', 'mythicmetals:steel_block')
	event.shapeless('mythicmetals:steel_block', 'enriched:steel_block')
	event.shapeless('enriched:steel_block', 'ad_astra:steel_block')
	event.shapeless('ad_astra:steel_block', 'techreborn:steel_storage_block')
	event.remove({output: 'mythicmetals:steel_ingot', type: 'alloy_forgery_forging'})
	event.replaceInput('techreborn:steel_ingot', '#c:steel_ingots')
	event.remove({input: 'indrev:steel_ingot'})
	event.remove({input: 'mythicmetals:steel_ingot'})
	event.remove({input: 'techreborn:steel_ingot'})
	event.shaped('mythicmetals_decorations:steel_chain', [
		' A ',
		' B ',
		' A '
		], {
		B: 'modern_industrialization:steel_ingot',
		A: 'modern_industrialization:steel_nugget'
	})
	event.custom({
	"type":"create:mixing",
	"ingredients":[
		{
			"item":"minecraft:iron_ingot"
		},
		{
			"item":"mythicmetals:manganese_ingot"
		}],
	"heatRequirement":"heated",
	"results":[
		{
		"item":"modern_industrialization:steel_ingot"
		}
	]})
	event.remove({output: 'mythicmetals:steel_ingot'})
	event.remove({output: 'indrev:steel_dust'})
	event.custom({
	"type": "indrev:infuse",
	"ingredients": [{
	    "tag": "c:coal_dusts"
  	},
	{
	    "tag": "c:iron_dusts"
  	}],
	"output": {
	    "item": "modern_industrialization:steel_dust",
	    "count": 2
	},
	"processTime": 600
	})
	event.replaceOutput('modern_industrialization:steel_ingot', 'techreborn:steel_ingot')
	event.replaceOutput('amethyst_imbuement:steel_ingot', 'modern_industrialization:steel_ingot')
	event.replaceInput('amethyst_imbuement:steel_ingot', 'modern_industrialization:steel_ingot')
	event.remove({output: 'amethyst_imbuement:steel_ingot'})
	event.custom({
		"type": "amethyst_imbuement:imbuing",
		"imbueA": {
			"item": "minecraft:magma_block"
		},
		"imbueB": {
			"item": "minecraft:magma_block"
		},
		"imbueC": {
			"item": "minecraft:magma_block"
		},
		"imbueD": {
			"item": "minecraft:magma_block"
		},
		"craftA": {
			"item": "minecraft:raw_iron"
		},
		"craftB": {
			"item": "minecraft:raw_iron"
		},
		"craftC": {
			"item": "minecraft:raw_iron"
		},
		"craftD": {
			"item": "minecraft:raw_iron"
		},
		"craftE": {
			"tag": "minecraft:coals"
		},
		"craftF": {
			"item": "minecraft:raw_iron"
		},
		"craftG": {
			"item": "minecraft:raw_iron"
		},
		"craftH": {
			"item": "minecraft:raw_iron"
		},
		"craftI": {
			"item": "minecraft:raw_iron"
		},
		"title": "Steel Ingot",
		"cost": 1,
		"resultA": "modern_industrialization:steel_ingot",
		"countA": 4
	})
	event.remove({input: '9x techreborn:steel_nugget'})
	event.remove({output: '9x indrev:steel_ingot'})
	event.shapeless('9x modern_industrialization:steel_ingot', 'indrev:steel_block')
	event.shapeless('9x modern_industrialization:steel_ingot', 'enriched:steel_block')
	event.shapeless('9x modern_industrialization:steel_ingot', 'mythicmetals:steel_block')
	event.shapeless('9x modern_industrialization:steel_ingot', 'ad_astra:steel_block')
	event.remove({input: '4x techreborn:steel_small_dust'})
	event.remove({output: 'techreborn:steel_dust', type: 'create:crushing'})
	event.replaceOutput('techreborn:steel_dust', 'modern_industrialization:steel_dust')
	event.custom({
	"type":"create:mixing",
	"ingredients":[
		{
			"item":"minecraft:iron_ingot"
		},
		{
		    "item":"minecraft:coal",
			"count": 2
		}],
	"heatRequirement":"heated",
	"results":[
		{
		"item":"modern_industrialization:steel_ingot"
		}
	]})
	event.replaceOutput('techreborn:steel_ingot', 'modern_industrialization:steel_ingot')
	event.remove({input: 'techreborn:steel_dust', output: '4x techreborn:steel_small_dust'})
	event.replaceOutput('techreborn:steel_small_dust', 'modern_industrialization:steel_tiny_dust')
	event.remove({input: 'modern_industrialization:steel_ingot', output: '9x indrev:steel_nugget'})
	event.remove({input: 'modern_industrialization:steel_ingot', output: '9x techreborn:steel_nugget'})
	event.replaceOutput('techreborn:steel_nugget', 'modern_industrialization:steel_nugget')
	event.remove({input: 'modern_industrialization:steel_ingot', output: 'techreborn:steel_plate', type: 'create:pressing'})
	event.replaceOutput('techreborn:steel_plate', 'modern_industrialization:steel_plate')
	event.custom({
	"type": "indrev:compress",
	"ingredients": {
 	   "item": "modern_industrialization:steel_ingot"
	},
	"output": {
 	   "item": "modern_industrialization:steel_plate",
 	   "count": 1
	},
	"processTime": 600
	})
	event.remove({output: 'indrev:steel_plate', type: 'indrev:compress'})
	event.remove({input: '9x modern_industrialization:steel_ingot', output: 'techreborn:steel_storage_block'})
	event.remove({input: '9x modern_industrialization:steel_ingot', output: 'indrev:steel_block'})
	event.remove({input: '9x modern_industrialization:steel_ingot', output: 'mythicmetals:steel_block'})
	event.remove({output: 'ad_astra:steel_ingot'})
	event.remove({output: 'ad_astra:steel_block'})
	//Silver = modern_industrialization, raw = techreborn
	event.shapeless('techreborn:raw_silver_storage_block', 'indrev:raw_silver_block')
	event.shapeless('indrev:raw_silver_block', 'mythicmetals:raw_silver_block')
	event.shapeless('mythicmetals:raw_silver_block', 'modern_industrialization:raw_silver_block')
	event.shapeless('modern_industrialization:raw_silver_block', 'techreborn:raw_silver_storage_block')
	event.remove({input: '9x modern_industrialization:raw_silver', output: 'modern_industrialization:raw_silver_block'})
	event.remove({input: '9x mythicmetals:raw_silver', output: 'mythicmetals:raw_silver_block'})
	event.replaceOutput('modern_industrialization:raw_silver', 'techreborn:raw_silver')
	event.replaceOutput('mythicmetals:raw_silver', 'techreborn:raw_silver')
	event.shapeless('9x techreborn:raw_silver', 'indrev:raw_silver_block')
	event.remove({output: 'indrev:raw_silver'})
	event.remove({output: 'techreborn:silver_storage_block', type: 'minecraft:smelting'})
	event.remove({output: 'techreborn:silver_storage_block', type: 'minecraft:blasting'})
	event.smelting('techreborn:silver_storage_block', 'techreborn:raw_silver_storage_block').xp(5.2).cookingTime(1500.0)
	event.smelting('indrev:silver_block', 'indrev:raw_silver_block').xp(5.2).cookingTime(1500.0)
	event.smelting('mythicmetals:silver_block', 'mythicmetals:raw_silver_block').xp(5.2).cookingTime(1500.0)
	event.smelting('modern_industrialization:silver_block', 'modern_industrialization:raw_silver_block').xp(5.2).cookingTime(1500.0)
	event.blasting('techreborn:silver_storage_block', 'techreborn:raw_silver_storage_block').xp(5.2).cookingTime(750.0)
	event.blasting('indrev:silver_block', 'indrev:raw_silver_block').xp(5.2).cookingTime(750.0)
	event.blasting('mythicmetals:silver_block', 'mythicmetals:raw_silver_block').xp(5.2).cookingTime(750.0)
	event.blasting('modern_industrialization:silver_block', 'modern_industrialization:raw_silver_block').xp(5.2).cookingTime(750.0)
	event.smelting('techreborn:silver_storage_block_stairs', 'techreborn:raw_silver_storage_block_stairs').xp(0.7)
	event.smelting('techreborn:silver_storage_block_slab', 'techreborn:raw_silver_storage_block_slab').xp(0.7)
	event.smelting('techreborn:silver_storage_block_wall', 'techreborn:raw_silver_storage_block_wall').xp(0.7)
	event.blasting('techreborn:silver_storage_block_stairs', 'techreborn:raw_silver_storage_block_stairs').xp(0.7)
	event.blasting('techreborn:silver_storage_block_slab', 'techreborn:raw_silver_storage_block_slab').xp(0.7)
	event.blasting('techreborn:silver_storage_block_wall', 'techreborn:raw_silver_storage_block_wall').xp(0.7)
	event.remove({input: 'create:crushed_silver_ore'})
	event.smelting('modern_industrialization:silver_ingot', 'create:crushed_silver_ore').xp(0.1)
	event.blasting('modern_industrialization:silver_ingot', 'create:crushed_silver_ore').xp(0.1)
	event.recipes.createSplashing('9x modern_industrialization:silver_nugget', 'create:crushed_silver_ore')
	event.remove({output: '9x indrev:silver_ingot', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'techreborn:silver_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'techreborn:silver_ingot', type: 'minecraft:blasting'})
	event.remove({output: 'techreborn:silver_ingot', type: 'minecraft:crafting_shapeless'})
	event.remove({output: '9x techreborn:silver_nugget', type: 'minecraft:crafting_shapeless'})
	event.replaceOutput('techreborn:silver_ingot', 'modern_industrialization:silver_ingot')
	event.replaceInput('techreborn:silver_ingot', 'modern_industrialization:silver_ingot')
	event.remove({output: '9x indrev:silver_nugget', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'indrev:silver_ingot'})
   	event.replaceInput('modern_industrialization:raw_silver', 'techreborn:raw_silver')
	event.shapeless('9x modern_industrialization:silver_ingot', 'techreborn:silver_storage_block')
	event.shapeless('9x modern_industrialization:silver_ingot', 'mythicmetals:silver_block')
	event.shapeless('9x modern_industrialization:silver_ingot', 'indrev:silver_block')
	event.remove({output: 'techreborn:silver_plate', type: 'create:pressing'})
	event.remove({output: '9x mythicmetals:silver_nugget'})
	event.replaceInput('mythicmetals:silver_ingot', 'modern_industrialization:silver_ingot')
	event.remove({output: 'mythicmetals:silver_ingot'})
	event.shapeless('techreborn:silver_storage_block', 'indrev:silver_block')
	event.shapeless('indrev:silver_block', 'mythicmetals:silver_block')
	event.shapeless('mythicmetals:silver_block', 'modern_industrialization:silver_block')
	event.shapeless('modern_industrialization:silver_block', 'techreborn:silver_storage_block')
	event.replaceOutput('techreborn:silver_nugget', 'modern_industrialization:silver_nugget')
	event.replaceInput('mythicmetals:silver_nugget', 'modern_industrialization:silver_nugget')
	event.replaceOutput('techreborn:silver_plate', 'modern_industrialization:silver_plate')
	event.remove({output: 'indrev:silver_plate'})
	event.custom({
	"type": "indrev:compress",
	"ingredients": {
 	   "item": "modern_industrialization:silver_ingot"
	},
	"output": {
	    "item": "modern_industrialization:silver_plate",
 	   "count": 1
	},
	"processTime": 600
 	})
	event.remove({output: 'indrev:silver_dusts'})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "techreborn:raw_silver",
		"count": 2
	},
	"output": {
		"item": "modern_industrialization:silver_dust",
		"count": 3
	},
	"processTime": 200
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "indrev:silver_purified_ore",
		"count": 1
	},
	"output": {
		"item": "modern_industrialization:silver_dust",
		"count": 3
	},
	"processTime": 200
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:silver_ores",
		"count": 1
	},
	"output": {
		"item": "modern_industrialization:silver_dust",
		"count": 3
	},
	"processTime": 200
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "modern_industrialization:silver_ingot",
		"count": 1
	},
	"output": {
		"item": "modern_industrialization:silver_dust",
		"count": 1
	},
	"processTime": 200
 	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "indrev:silver_chunk",
		"count": 1
	},
	"output": {
		"item": "modern_industrialization:silver_dust",
		"count": 1
	},
	"processTime": 200
 	})
	event.remove({output: 'indrev:silver_dust'})
	event.remove({input: '9x techreborn:raw_silver', output: 'indrev:raw_silver_block'})
	event.remove({input: '9x modern_industrialization:silver_ingot', output: 'techreborn:silver_storage_block'})
	event.remove({input: '9x modern_industrialization:silver_ingot', output: 'indrev:silver_block'})
	event.remove({input: '9x modern_industrialization:silver_ingot', output: 'mythicmetals:silver_block'})
	//Bronze = modern_industrialization
	event.remove({output: 'techreborn:bronze_ingot', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'techreborn:bronze_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'techreborn:bronze_ingot', type: 'minecraft:blasting'})
	event.replaceOutput('techreborn:bronze_ingot', 'modern_industrialization:bronze_ingot')
	event.remove({output: 'indrev:bronze_ingot'})
	event.remove({output: 'mythicmetals:bronze_ingot', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'mythicmetals:bronze_ingot', type: 'minecraft:crafting_shaped'})
	event.replaceOutput('mythicmetals:bronze_ingot', 'modern_industrialization:bronze_ingot')
	event.remove({output: 'mythicmetals:bronze_ingot'})
	event.remove({input: 'mythicmetals:bronze_ingot'})
	event.remove({input: 'techreborn:bronze_ingot'})
	event.shapeless('9x modern_industrialization:bronze_ingot', 'techreborn:bronze_storage_block')
	event.shapeless('9x modern_industrialization:bronze_ingot', 'indrev:bronze_block')
	event.shapeless('9x modern_industrialization:bronze_ingot', 'mythicmetals:bronze_block')
	event.shapeless('techreborn:bronze_storage_block', 'mythicmetals:bronze_block')
	event.shapeless('mythicmetals:bronze_block', 'indrev:bronze_block')
	event.shapeless('indrev:bronze_block', 'modern_industrialization:bronze_block')
	event.shapeless('modern_industrialization:bronze_block', 'techreborn:bronze_storage_block')
	event.shaped('mythicmetals_decorations:bronze_chain', [
		' A ',
		' B ',
		' A '
		], {
		B: 'modern_industrialization:bronze_ingot',
		A: 'modern_industrialization:bronze_nugget'
	})
	event.remove({output: 'indrev:bronze_nugget'})
	event.replaceOutput('techreborn:bronze_nugget', 'modern_industrialization:bronze_nugget')
	event.remove({output: 'techreborn:bronze_dust', type: 'create:crushing'})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "modern_industrialization:bronze_ingot",
		"count": 1
	},
	"output": {
		"item": "modern_industrialization:bronze_ingot",
		"count": 1
	},
	"processTime": 200
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": [
		{
			"item": "modern_industrialization:copper_dust"
		},
		{
			"item": "modern_industrialization:tin_dust"
		}
	],
	"output": {
		"item": "modern_industrialization:bronze_dust",
		"count": 2
	},
	"processTime": 200
	})
	event.remove({output: 'indrev:bronze_dust'})
	event.replaceOutput('techreborn:bronze_dust', 'modern_industrialization:bronze_dust')
	event.remove({output: 'techreborn:bronze_plate', type: 'create:pressing'})
	event.replaceOutput('techreborn:bronze_plate', 'modern_industrialization:bronze_plate')
	event.custom({
	"type": "indrev:compress",
	"ingredients": {
		"item": "modern_industrialization:bronze_ingot"
	},
	"output": {
		"item": "modern_industrialization:bronze_plate",
		"count": 1
	},
	"processTime": 600
 	})
	event.remove({output: 'indrev:bronze_plate'})
	event.remove({input: 'modern_industrialization:bronze_ingot', output: 'indrev:bronze_block'})
	event.remove({input: 'modern_industrialization:bronze_ingot', output: 'mythicmetals:bronze_block'})
	//Brass = Create
	event.remove({output: 'techreborn:brass_ingot', input: '9x techreborn:brass_nugget'})
	event.remove({output: 'techreborn:brass_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'techreborn:brass_ingot', type: 'minecraft:blasting'})
	event.remove({output: 'architects_palette:nether_brass_ingot', input: '9x architects_palette:nether_brass_nugget'})
	event.remove({output: 'architects_palette:nether_brass_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'architects_palette:nether_brass_ingot', type: 'minecraft:blasting'})
	event.replaceOutput('techreborn:brass_ingot', 'create:brass_ingot')
	event.remove({output: '9x create:brass_ingot', input: 'techreborn:brass_storage_block', type: 'minecraft:crafting_shapeless'})
	event.shapeless('9x create:brass_ingot', '#c:brass_blocks')
	event.remove({input: 'architects_palette:nether_brass_ingot'})
	event.shaped('architects_palette:nether_brass_chain', [
		' A ',
		' B ',
		' A '
		], {
		B: 'create:brass_ingot',
		A: 'create:brass_nugget'
	})
	event.remove({input: 'techreborn:brass_ingot', output: 'techreborn:brass_storage_block'})
	event.remove({input: 'techreborn:brass_ingot', output: '9x techreborn:brass_nugget'})
  	event.shapeless('create:brass_block', 'techreborn:brass_storage_block')
 	event.shapeless('techreborn:brass_storage_block', 'create:brass_block')
	event.remove({output: 'techreborn:brass_dust', type: 'modern_industrialization:macerator'})
	event.remove({output: 'techreborn:brass_dust', type: 'create:crushing'})
	event.remove({output: 'architects_palette:nether_brass_blend'})
	event.remove({output: 'techreborn:brass_dust'})
	event.custom({
		"power": 10,
		"time": 20,
		"ingredients": [
		  {
			"item": "techreborn:scrap_box"
		  }
		],
		"results": [
		  {
			"item": "createplus:brass_dust"
		  }
		],
		"type": "techreborn:scrapbox"
	})
	event.custom({
		"type": "techreborn:grinder",
		"power": 5,
		"time": 200,
		"ingredients": [
		  {
			"tag": "c:brass_blocks"
		  }
		],
		"results": [
		  {
			"item": "createplus:brass_dust",
			"count": 9
		  }
		]
	})
	event.custom({
		"type": "techreborn:grinder",
		"power": 5,
		"time": 200,
		"ingredients": [
		  {
			"item": "create:brass_ingot"
		  }
		],
		"results": [
		  {
			"item": "createplus:brass_dust"
		  }
		]
	})
	event.replaceOutput('techreborn:brass_nugget', 'create:brass_nugget')
	event.remove({output: 'techreborn:brass_plate', type: 'modern_industrialization:macerator'})
	event.replaceOutput('techreborn:brass_plate', 'create:brass_sheet')
	event.replaceInput('architects_palette:nether_brass_nugget', 'create:brass_nugget')
	event.custom({"type": "indrev:infuse",
	"ingredients": [{
	    "tag": "c:brass_blocks",
  	},
	{
	    "item": "minecraft:soul_sand",
		"count": 2
  	}],
	"output": {
	    "item": "architects_palette:nether_brass_block",
	    "count": 1
	},
	"processTime": 600
	})
	event.recipes.createMixing('architects_palette:nether_brass_block', [
		'#c:brass_blocks',
		'2x minecraft:soul_sand'
	  ]).heated()
	  event.custom({
		"type": "modern_industrialization:mixer",
		"eu": 2,
		"duration": 100,
		"item_inputs": [
			{
			  "tag": "c:brass_blocks",
			  "amount": 1},
			{
			  "item": "minecraft:soul_sand",
			  "amount": 2}
			]
		,
		"item_outputs":{
		  "item": "architects_palette:nether_brass_block",
		  "amount": 1
		}
	})
	event.custom({
		"type": "techreborn:alloy_smelter",
		"power": 6,
		"time": 200,
		"ingredients": [
		  {
			"count": 2,
			"item": "minecraft:soul_sand"
		  },
		  {
			"tag": "c:brass_blocks"
		  }
		],
		"results": [
		  {
			"item": "architects_palette:nether_brass_block",
			"count": 1
		  }
		]
	})
	//invar = modern_industrialization
	event.remove({output: 'techreborn:invar_ingot'})
	event.remove({input: 'techreborn:invar_ingot'})
	event.custom({
		"type": "techreborn:alloy_smelter",
		"power": 6,
		"time": 200,
		"ingredients": [
		  {
			"item": "modern_industrialization:nickel_ingot"
		  },
		  {
			"item": "minecraft:iron_ingot",
			"count": 2
		  }
		],
		"results": [
		  {
			"item": "modern_industrialization:invar_ingot",
			"count": 3
		  }
		]
	})
	event.recipes.createMixing('2x modern_industrialization:invar_ingot', [
		'modern_industrialization:nickel_ingot',
		'2x minecraft:iron_ingot'
	]).heated()
	event.shapeless('9x modern_industrialization:invar_ingot', 'techreborn:invar_storage_block')
	event.shapeless('techreborn:invar_storage_block', '9x modern_industrialization:invar_ingot')
	event.remove({output: 'techreborn:invar_plate', type: 'create:pressing'})
	event.replaceOutput('techreborn:invar_nugget', 'modern_industrialization:invar_nugget')
	event.remove({output: '4x techreborn:invar_small_dust', type: 'minecraft:crafting_shapeless'})
	event.remove({input: '4x techreborn:invar_small_dust', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'techreborn:invar_dust', type: 'create:crushing'})
	event.replaceOutput('techreborn:invar_dust', 'modern_industrialization:invar_dust')
	event.replaceOutput('techreborn:invar_small_dust', 'modern_industrialization:invar_tiny_dust')
	event.replaceOutput('techreborn:invar_plate', 'modern_industrialization:invar_plate')
	event.replaceInput('techreborn:invar_plate', '#c:invar_plates')
	//TItanium = modern_industrialization
	event.remove({output: 'techreborn:titanium_ingot'})
	event.custom({
		"type": "techreborn:blast_furnace",
		"power": 128,
		"time": 200,
		"heat": 1700,
		"ingredients": [
		  {
			"item": "modern_industrialization:titanium_dust"
		  }
		],
		"results": [
		  {
			"item": "modern_industrialization:titanium_ingot"
		  }
		]
	})
	event.custom({
		"type": "techreborn:blast_furnace",
		"power": 128,
		"time": 200,
		"heat": 1700,
		"ingredients": [
		  {
			"item": "modern_industrialization:titanium_tiny_dust",
			"count": 9
		  }
		],
		"results": [
		  {
			"item": "modern_industrialization:titanium_ingot"
		  }
		]
	})
	event.remove({input: 'techreborn:titanium_ingot'})
	event.remove({output: 'techreborn:titanium_nugget'})
	event.custom({
		"power": 10,
		"time": 20,
		"ingredients": [
		  {
			"item": "techreborn:scrap_box"
		  }
		],
		"results": [
		  {
			"item": "modern_industrialization:titanium_nugget"
		  }
		],
		"type": "techreborn:scrapbox"
	})
	event.remove({output: 'techreborn:titanium_plate', type: 'create:pressing'})
	event.replaceOutput('techreborn:titanium_plate', 'modern_industrialization:titanium_plate')
	event.shapeless('9x modern_industrialization:titanium_ingot', 'techreborn:titanium_storage_block')
	event.shapeless('techreborn:titanium_storage_block', 'modern_industrialization:titanium_block')
	event.shapeless('modern_industrialization:titanium_block', 'techreborn:titanium_storage_block')
	event.remove({output: 'techreborn:titanium_small_dust', type: 'minecraft:crafting_shapeless'})
	event.remove({input: 'techreborn:titanium_small_dust', type: 'minecraft:crafting_shapeless'})
	event.replaceOutput('techreborn:titanium_small_dust', 'modern_industrialization:titanium_tiny_dust')
	event.remove({output: 'techreborn:titanium_dust', type: 'create:crushing'})
	event.replaceOutput('techreborn:titanium_dust', 'modern_industrialization:titanium_dust')
	event.smelting('modern_industrialization:titanium_block', 'modern_industrialization:raw_titanium_block').xp(5.2).cookingTime(1500)
	event.blasting('modern_industrialization:titanium_block', 'modern_industrialization:raw_titanium_block').xp(5.2).cookingTime(750)
	//Electrum = modern_industrialization
	event.remove({output: 'techreborn:electrum_ingot', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'techreborn:electrum_ingot', type: 'minecraft:blasting'})
	event.remove({output: 'techreborn:electrum_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'indrev:electrum_ingot'})
	event.replaceOutput('techreborn:electrum_ingot', 'modern_industrialization:electrum_ingot')
	event.remove({output: 'techreborn:electrum_nugget'})
	event.remove({output: 'indrev:electrum_nugget'})
	event.custom({
		"power": 10,
		"time": 20,
		"ingredients": [
		  {
			"item": "techreborn:scrap_box"
		  }
		],
		"results": [
		  {
			"item": "modern_industrialization:electrum_nugget"
		  }
		],
		"type": "techreborn:scrapbox"
	})
	event.remove({output: 'indrev:electrum_dust'})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "modern_industrialization:electrum_ingot"
		},
		"output": {
			"item": "modern_industrialization:electrum_dust"
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:infuse",
		"ingredients": [
		{
			"item": "modern_industrialization:silver_dust"
		},
		{
			"item": "modern_industrialization:gold_dust"
		}],
		"output": {
			"item": "modern_industrialization:electrum_dust",
			"count": 2
		},
		"processTime": 600
	})
	event.remove({output: 'techreborn:electrum_dust', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'techreborn:electrum_dust', type: 'create:crushing'})
	event.replaceOutput('techreborn:electrum_dust', 'modern_industrialization:electrum_dust')
	event.remove({output: 'techreborn:electrum_storage_block'})
	event.remove({output: 'indrev:electrum_block'})
	event.shapeless('techreborn:electrum_storage_block', 'indrev:electrum_block')
	event.shapeless('indrev:electrum_block', 'modern_industrialization:electrum_block')
	event.shapeless('modern_industrialization:electrum_block', 'techreborn:electrum_storage_block')
	event.remove({output: 'techreborn:electrum_plate', type: 'create:pressing'})
	event.replaceOutput('techreborn:electrum_plate', 'modern_industrialization:electrum_plate')
	event.remove({output: 'indrev:electrum_plate'})
	event.custom({
		"type": "indrev:compress",
		"ingredients": {
			"item": "modern_industrialization:electrum_ingot"
		},
		"output": {
			"item": "modern_industrialization:electrum_plate",
			"count": 1
		},
		"processTime": 400
	})
	event.remove({output: 'techreborn:electrum_small_dust'})
	event.custom({
		"power": 10,
		"time": 20,
		"ingredients": [
		  {
			"item": "techreborn:scrap_box"
		  }
		],
		"results": [
		  {
			"item": "modern_industrialization:electrum_tiny_dust"
		  }
		],
		"type": "techreborn:scrapbox"
	})
	//Tungsten = modern_industrialization
	event.remove({output: 'techreborn:tungsten_ingot', type: 'minecraft:crafting_shapeless'})
	event.replaceOutput('techreborn:tungsten_ingot', 'modern_industrialization:tungsten_ingot')
	event.remove({output: 'indrev:tungsten_ingot'})
	event.remove({input: 'indrev:tungsten_ingot'})
	event.remove({input: 'techreborn:tungsten_ingot'})
	event.shapeless('techreborn:tungsten_storage_block', 'indrev:tungsten_block')
	event.shapeless('indrev:tungsten_block', 'modern_industrialization:tungsten_block')
	event.shapeless('modern_industrialization:tungsten_block', 'techreborn:tungsten_storage_block')
	event.remove({input: '9x modern_industrialization:tungsten_ingot', output: 'indrev:tungsten_block'})
	event.shapeless('techreborn:raw_tungsten_storage_block', 'indrev:raw_tungsten_block')
	event.shapeless('indrev:raw_tungsten_block', 'modern_industrialization:raw_tungsten_block')
	event.shapeless('modern_industrialization:raw_tungsten_block', 'techreborn:raw_tungsten_storage_block')
	event.remove({output: 'indrev:raw_tungsten_block'})
	event.remove({output: 'techreborn:raw_tungsten_storage_block'})
	event.replaceOutput('indrev:raw_tungsten', 'modern_industrialization:raw_tungsten')
	event.remove({output: 'techreborn:raw_tungsten', input: 'techreborn:tungsten_small_dust'})
	event.replaceOutput('techreborn:raw_tungsten', 'modern_industrialization:raw_tungsten')
	event.remove({input: 'techreborn:raw_tungsten'})
	event.shapeless('modern_industrialization:raw_tungsten', 'techreborn:raw_tungsten')
	event.replaceInput('techreborn:tungsten_small_dust', 'modern_industrialization:tungsten_tiny_dust')
	event.replaceOutput('techreborn:tungsten_small_dust', 'modern_industrialization:tungsten_tiny_dust')
	event.remove({output: 'modern_industrialization:tungsten_ingot', type: 'techreborn:blast_furnace'})
	event.custom({
		"type": "techreborn:blast_furnace",
		"power": 128,
		"time": 200,
		"heat": 1700,
		"ingredients": [
		  {
			"item": "modern_industrialization:tungsten_tiny_dust",
			"count": 9
		  }
		],
		"results": [
		  {
			"item": "modern_industrialization:tungsten_ingot"
		  }
		]
	})
	event.remove({output: 'indrev:tungsten_dust'})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "indrev:tungsten_purified_ore"
		},
		"output": {
			"item": "modern_industrialization:tungsten_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"tag": "c:tungsten_ores"
		},
		"output": {
			"item": "modern_industrialization:tungsten_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "modern_industrialization:tungsten_ingot"
		},
		"output": {
			"item": "modern_industrialization:tungsten_dust"
		},
		"processTime": 200,
	})
	event.remove({output: 'indrev:tungsten_nugget'})
	event.replaceOutput('techreborn:tungsten_nugget', 'modern_industrialization:tungsten_nugget')
	event.remove({output: 'indrev:tungsten_plate'})
	event.custom({
		"type": "indrev:compress",
		"ingredients": {
			"item": "modern_industrialization:tungsten_ingot"
		},
		"output": {
			"item": "modern_industrialization:tungsten_plate",
			"count": 1
		},
		"processTime": 400
	})
	event.replaceOutput('techreborn:tungsten_plate', 'modern_industrialization:tungsten_plate')
	event.smelting('modern_industrialization:tungsten_ingot', 'modern_industrialization:tungsten_dust').xp(0.7)
	event.smelting('modern_industrialization:tungsten_ingot', 'modern_industrialization:raw_tungsten').xp(0.7)
	event.blasting('modern_industrialization:tungsten_ingot', 'modern_industrialization:tungsten_dust').xp(0.7)
	event.blasting('modern_industrialization:tungsten_ingot', 'modern_industrialization:raw_tungsten').xp(0.7)
	event.smelting('modern_industrialization:tungsten_block', 'modern_industrialization:raw_tungsten_block').xp(5.2).cookingTime(1500)
	event.smelting('indrev:tungsten_block', 'indrev:raw_tungsten_block').xp(5.2).cookingTime(1500)
	event.smelting('techreborn:tungsten_storage_block', 'techreborn:raw_tungsten_storage_block').xp(5.2).cookingTime(1500)
	event.blasting('modern_industrialization:tungsten_block', 'modern_industrialization:raw_tungsten_block').xp(5.2).cookingTime(750)
	event.blasting('indrev:tungsten_block', 'indrev:raw_tungsten_block').xp(5.2).cookingTime(750)
	event.blasting('techreborn:tungsten_storage_block', 'techreborn:raw_tungsten_storage_block').xp(5.2).cookingTime(750)
	//Lead = techreborn for RAW, modern_industrialization for else
	event.remove({output: 'modern_industrialization:raw_lead_block', type: 'minecraft:crafting_shaped'})
	event.remove({output: 'indrev:raw_lead_block', type: 'minecraft:crafting_shaped'})
	event.replaceOutput('modern_industrialization:raw_lead', 'techreborn:raw_lead')
	event.replaceOutput('indrev:raw_lead', 'techreborn:raw_lead')
	event.remove({input: 'techreborn:raw_lead', type: 'minecraft:smelting'})
	event.remove({input: 'techreborn:raw_lead', type: 'minecraft:blasting'})
	event.replaceInput('modern_industrialization:raw_lead', 'techreborn:raw_lead')
	event.smelting('indrev:lead_block', 'indrev:raw_lead_block').xp(5.2).cookingTime(1500)
	event.smelting('modern_industrialization:lead_block', 'modern_industrialization:raw_lead_block').xp(5.2).cookingTime(1500)
	event.blasting('indrev:lead_block', 'indrev:raw_lead_block').xp(5.2).cookingTime(750)
	event.blasting('modern_industrialization:lead_block', 'modern_industrialization:raw_lead_block').xp(5.2).cookingTime(750)
	event.remove({output: 'techreborn:lead_storage_block', type: 'minecraft:smelting'})
	event.remove({output: 'techreborn:lead_storage_block', type: 'minecraft:blasting'})
	event.smelting('techreborn:lead_storage_block', 'techreborn:raw_lead_storage_block').xp(5.2).cookingTime(1500)
	event.blasting('techreborn:lead_storage_block', 'techreborn:raw_lead_storage_block').xp(5.2).cookingTime(750)
	event.remove({output: 'modern_industrialization:lead_ingot', input: 'create:crushed_lead_ore', type: 'minecraft:smelting'})
	event.remove({output: 'modern_industrialization:lead_ingot', input: 'create:crushed_lead_ore', type: 'minecraft:blasting'})
	event.smelting('modern_industrialization:lead_ingot','create:crushed_lead_ore').xp(0.1)
	event.blasting('modern_industrialization:lead_ingot','create:crushed_lead_ore').xp(0.1)
	event.remove({input: 'modern_industrialization:lead_ore', type: 'minecraft:smelting'})
	event.remove({input: 'modern_industrialization:lead_ore', type: 'minecraft:blasting'})
	event.remove({input: 'modern_industrialization:deepslate_lead_ore', type: 'minecraft:smelting'})
	event.remove({input: 'modern_industrialization:deepslate_lead_ore', type: 'minecraft:blasting'})
	event.remove({output: 'techreborn:lead_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'techreborn:lead_ingot', type: 'minecraft:blasting'})
	event.replaceOutput('techreborn:lead_ingot', 'modern_industrialization:lead_ingot')
	event.remove({input: '#c:lead_nuggets', output: 'modern_industrialization:lead_ingot'})
	event.smelting('modern_industrialization:lead_ingot', '#c:lead_ores').xp(0.7)
	event.blasting('modern_industrialization:lead_ingot', '#c:lead_ores').xp(0.7)
	event.shapeless('modern_industrialization:lead_ingot', '9x modern_industrialization:lead_nugget')
	event.remove({output: 'indrev:lead_ingot'})
	event.remove({input: 'techreborn:lead_ingot'})
	event.shapeless('9x modern_industrialization:lead_ingot', 'indrev:lead_block')
	event.remove({output: 'indrev:lead_block', type: 'minecraft:crafting_shaped'})
	event.shapeless('techreborn:lead_storage_block', 'modern_industrialization:lead_block')
	event.shapeless('modern_industrialization:lead_block', 'indrev:lead_block')
	event.shapeless('indrev:lead_block', 'techreborn:lead_storage_block')
	event.remove({input: 'indrev:lead_chunk'})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "indrev:lead_chunk"
		},
		"output": {
			"item": "modern_industrialization:lead_dust"
		},
		"processTime": 200,
	})
	event.remove({output: '3x indrev:lead_dust', type: 'indrev:pulverize'})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "indrev:lead_purified_ore"
		},
		"output": {
			"item": "modern_industrialization:lead_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.remove({output: '9x techreborn:lead_nugget', type: 'create:splashing'})
	event.remove({output: 'indrev:lead_nugget'})
	event.replaceOutput('techreborn:lead_nugget', 'modern_industrialization:lead_nugget')
	event.remove({input: 'techreborn:lead_nugget'})
	event.remove({output: 'techreborn:lead_plate', type: 'create:pressing'})
	event.remove({output: 'indrev:lead_plate'})
	event.custom({
		"type": "indrev:compress",
		"ingredients": {
			"item": "modern_industrialization:lead_ingot"
		},
		"output": {
			"item": "modern_industrialization:lead_plate",
			"count": 1
		},
		"processTime": 400
	})
	event.replaceOutput('techreborn:lead_plate', 'modern_industrialization:lead_plate')
	// Nickel = modern_industrialization
	event.remove({output: 'techreborn:nickel_ingot'})
	event.remove({input: 'techreborn:nickel_ingot'})
	event.remove({output: 'techreborn:nickel_plate', type: 'create:pressing'})
	event.replaceOutput('techreborn:nickel_plate', 'modern_industrialization:nickel_plate')
	event.remove({input: 'create:crushed_nickel_ore'})
	event.remove({input: 'create:crushed_nickel_ore'})
	event.smelting('modern_industrialization:nickel_ingot', 'create:crushed_nickel_ore').xp(0.1)
	event.blasting('modern_industrialization:nickel_ingot', 'create:crushed_nickel_ore').xp(0.1)
	event.remove({input: 'modern_industrialization:nickel_ore', type: 'minecraft:smelting'})
	event.remove({input: 'modern_industrialization:deepslate_nickel_ore', type: 'minecraft:smelting'})
	event.remove({input: 'modern_industrialization:nickel_ore', type: 'minecraft:blasting'})
	event.remove({input: 'modern_industrialization:deepslate_nickel_ore', type: 'minecraft:blasting'})
	event.smelting('modern_industrialization:nickel_ingot', '#c:nickel_ores')
	event.blasting('modern_industrialization:nickel_ingot', '#c:nickel_ores')
	event.shapeless('techreborn:nickel_storage_block', 'modern_industrialization:nickel_block')
	event.shapeless('modern_industrialization:nickel_block', 'techreborn:nickel_storage_block')
	event.replaceOutput('techreborn:nickel_nugget', 'modern_industrialization:nickel_nugget')
	event.remove({input: 'techreborn:nickel_small_dust', type: 'crafting_shapeless'})
	event.remove({output: 'techreborn:nickel_small_dust', type: 'crafting_shapeless'})
	event.replaceOutput('techreborn:nickel_small_dust', 'modern_industrialization:nickel_tiny_dust')
	event.remove({output: 'techreborn:nickel_dust', type: 'create:crushing'})
	event.replaceOutput('techreborn:nickel_dust', 'modern_industrialization:nickel_dust')
	event.replaceInput('techreborn:nickel_dust', 'modern_industrialization:nickel_dust')
	//Platinum = modern_industrialization
	event.shapeless('9x modern_industrialization:raw_platinum', 'mythicmetals:raw_platinum_block')
	event.shapeless('mythicmetals:raw_platinum_block', 'modern_industrialization:raw_platinum_block')
	event.shapeless('modern_industrialization:raw_platinum_block', 'mythicmetals:raw_platinum_block')
	event.remove({input: 'create:crushed_platinum_ore', output: 'techreborn:platinum_ingot', type: 'minecraft:smelting'})
	event.remove({input: 'create:crushed_platinum_ore', output: 'mythicmetals:platinum_ingot', type: 'minecraft:smelting'})
	event.remove({input: 'create:crushed_platinum_ore', output: 'techreborn:platinum_ingot', type: 'minecraft:blasting'})
	event.remove({input: 'create:crushed_platinum_ore', output: 'mythicmetals:platinum_ingot', type: 'minecraft:blasting'})
	event.smelting('modern_industrialization:platinum_ingot', 'modern_industrialization:raw_platinum').xp(0.7)
	event.blasting('modern_industrialization:platinum_ingot', 'modern_industrialization:raw_platinum').xp(0.7)
	event.remove({output: 'mythicmetals:raw_platinum'})
	event.remove({input: 'mythicmetals:raw_platinum'})
	event.recipes.createCrushing('2x modern_industrialization:raw_platinum', '#c:platinum_ores')
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "modern_industrialization:raw_platinum"
		},
		"output": {
			"item": "modern_industrialization:platinum_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"tag": "c:platinum_ores"
		},
		"output": {
			"item": "modern_industrialization:raw_platinum",
			"count": 2
		},
		"processTime": 200,
	})
	event.smelting('modern_industrialization:platinum_block', 'modern_industrialization:raw_platinum_block').xp(5.2).cookingTime(1500)
	event.smelting('mythicmetals:platinum_block', 'mythicmetals:raw_platinum_block').xp(5.2).cookingTime(1500)
	event.blasting('modern_industrialization:platinum_block', 'modern_industrialization:raw_platinum_block').xp(5.2).cookingTime(750)
	event.blasting('mythicmetals:platinum_block', 'mythicmetals:raw_platinum_block').xp(5.2).cookingTime(750)
	event.remove({input: '9x techreborn:platinum_nugget', output: 'techreborn:platinum_ingot', type: 'minecraft:crafting_shapeless'})
	event.replaceOutput('techreborn:platinum_ingot', 'modern_industrialization:platinum_ingot')
	event.smelting('modern_industrialization:platinum_ingot', '#c:platinum_ores').xp(0.7)
	event.blasting('modern_industrialization:platinum_ingot', '#c:platinum_ores').xp(0.7)
	event.remove({input: 'techreborn:platinum_ingot'})
	event.remove({output: 'mythicmetals:platinum_ingot'})
	event.remove({input: 'mythicmetals:platinum_ingot'})
	event.shaped('mythicmetals_decorations:platinum_chain', [
		' A ',
		' B ',
		' A '
		], {
		B: 'modern_industrialization:platinum_ingot',
		A: 'modern_industrialization:platinum_nugget'
	})
	event.remove({output: 'mythicmetals:platinum_block', type: 'minecraft:crafting_shaped'})
	event.shapeless('9x modern_industrialization:platinum_ingot', 'mythicmetals:platinum_block')
	event.shapeless('modern_industrialization:platinum_block', 'mythicmetals:platinum_block')
	event.shapeless('mythicmetals:platinum_block', 'techreborn:platinum_storage_block')
	event.shapeless('techreborn:platinum_storage_block', 'modern_industrialization:platinum_block')
	event.remove({output: 'techreborn:platinum_plate', type: 'create:pressing'})
	event.replaceOutput('techreborn:platinum_plate', 'modern_industrialization:platinum_plate')
	event.remove({output: 'techreborn:platinum_small_dust', type: 'crafting_shapeless'})
	event.remove({input: 'techreborn:platinum_small_dust', type: 'crafting_shapeless'})
	event.replaceOutput('techreborn:platinum_small_dust', 'modern_industrialization:platinum_tiny_dust')
	event.remove({output: 'mythicmetals:platinum_nugget'})
	event.remove({output: 'techreborn:platinum_nugget'})
	event.custom({
		"power": 10,
		"time": 20,
		"ingredients": [
		  {
			"item": "techreborn:scrap_box"
		  }
		],
		"results": [
		  {
			"item": "modern_industrialization:platinum_nugget"
		  }
		],
		"type": "techreborn:scrapbox"
	})
	event.replaceOutput('techreborn:platinum_dust', 'modern_industrialization:platinum_dust')
	//Chromium = modern_industrialization
	event.remove({output: 'techreborn:chrome_ingot', type: 'minecraft:crafting_shapeless'})
	event.remove({input: '4x techreborn:chrome_small_dust', type: 'techreborn:blast_furnace'})
	event.custom({
		"type": "techreborn:blast_furnace",
		"power": 128,
		"time": 200,
		"heat": 1700,
		"ingredients": [
		  {
			"item": "modern_industrialization:chromium_tiny_dust",
			"count": 9
		  }
		],
		"results": [
		  {
			"item": "modern_industrialization:chromium_ingot"
		  }
		]
	})
	event.replaceOutput('techreborn:chrome_ingot', 'modern_industrialization:chromium_ingot')
	event.remove({input: 'techreborn:chrome_ingot'})
	event.shapeless('techreborn:chrome_storage_block', 'modern_industrialization:chromium_block')
	event.shapeless('modern_industrialization:chromium_block', 'techreborn:chrome_storage_block')
	event.replaceOutput('techreborn:chrome_nugget', 'modern_industrialization:chromium_nugget')
	event.remove({input: '4x techreborn:chrome_small_dust', type: 'minecraft:crafting_shapeless'})
	event.remove({output: '4x techreborn:chrome_small_dust', type: 'minecraft:crafting_shapeless'})
	event.replaceOutput('techreborn:chrome_small_dust', 'modern_industrialization:chromium_tiny_dust')
	event.remove({output: 'techreborn:chrome_plate', type: 'create:pressing'})
	event.replaceOutput('techreborn:chrome_plate', 'modern_industrialization:chromium_plate')
	event.remove({output: 'techreborn:chrome_dust', type: 'create:crushing'})
	event.replaceOutput('techreborn:chrome_dust', 'modern_industrialization:chromium_dust')
	event.replaceInput('techreborn:chrome_dust', 'modern_industrialization:chromium_dust')
	//bauxite = modern_industrialization
	event.remove({input: '4x techreborn:bauxite_small_dust', type: 'minecraft:crafting_shapeless'})
	event.remove({output: '4x techreborn:bauxite_small_dust', type: 'minecraft:crafting_shapeless'})
	event.replaceOutput('techreborn:bauxite_small_dust', 'modern_industrialization:bauxite_tiny_dust')
	event.replaceOutput('techreborn:bauxite_dust', 'modern_industrialization:bauxite_dust')
	event.remove({output: 'modern_industrialization:bauxite_dust', type: 'create:crushing'})
	event.recipes.createCrushing([
		'2x modern_industrialization:bauxite_dust',
        Item.of('modern_industrialization:bauxite_dust').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.75),
		'minecraft:cobblestone'],
        '#c:bauxite_ores')
	event.replaceInput('techreborn:bauxite_dust', 'modern_industrialization:bauxite_dust')
	//Aluminium = modern_industrialization
	event.remove({input: '9x techreborn:aluminum_nugget', output: 'techreborn:aluminum_ingot', type: 'minecraft:crafting_shapeless'})
	event.replaceOutput('techreborn:aluminum_ingot', 'modern_industrialization:aluminum_ingot')
	event.remove({input: 'techreborn:aluminum_ingot', type: 'minecraft:crafting_shapeless'})
	event.shapeless('techreborn:aluminum_storage_block', 'modern_industrialization:aluminum_block')
	event.shapeless('modern_industrialization:aluminum_block', 'techreborn:aluminum_storage_block')
	event.remove({output: 'techreborn:aluminum_dust', type: 'create:crushing'})
	event.replaceOutput('techreborn:aluminum_dust', 'modern_industrialization:aluminum_dust')
	event.remove({output: 'techreborn:aluminum_plate', type: 'create:pressing'})
	event.replaceOutput('techreborn:aluminum_plate', 'modern_industrialization:aluminum_plate')
	event.replaceOutput('techreborn:aluminum_nugget', 'modern_industrialization:aluminum_nugget')
	//Salt = modern_industrialization
	event.remove({output: 'modern_industrialization:salt_dust', type: 'minecraft:smelting'})
	event.remove({output: 'modern_industrialization:salt_dust', type: 'minecraft:blasting'})
	event.remove({output: 'modern_industrialization:salt_dust', type: 'create:crushing'})
	event.recipes.createCrushing([
		'3x modern_industrialization:salt_dust',
        Item.of('modern_industrialization:salt_dust').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.25),
		'minecraft:cobblestone'],
        '#c:salt_ores')
	event.smelting('2x modern_industrialization:salt_dust', '#c:salt_ores').xp(0.2)
	event.blasting('2x modern_industrialization:salt_dust', '#c:salt_ores').xp(0.2)
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"tag": "c:salt_ores"
		},
		"output": {
			"item": "modern_industrialization:salt_dust",
			"count": 3
		},
		"processTime": 200,
	})
	//Iron = modern_industrialization
	event.replaceInput('indrev:iron_dust', 'modern_industrialization:iron_dust')
	event.replaceOutput('indrev:iron_dust', 'modern_industrialization:iron_dust')
	event.remove({output: 'indrev:iron_dust'})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "minecraft:raw_iron",
			"count": 2
		},
		"output": {
			"item": "modern_industrialization:iron_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "indrev:iron_purified_ore"
		},
		"output": {
			"item": "modern_industrialization:iron_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"tag": "c:iron_ores"
		},
		"output": {
			"item": "modern_industrialization:iron_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"tag": "c:iron_ingots"
		},
		"output": {
			"item": "modern_industrialization:iron_dust"
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "indrev:iron_chunk"
		},
		"output": {
			"item": "modern_industrialization:iron_dust"
		},
		"processTime": 200,
	})
	//Iron rod = createaddition
	event.replaceInput('modern_industrialization:iron_rod', 'createaddition:iron_rod')
	event.replaceOutput('modern_industrialization:iron_rod', 'createaddition:iron_rod')
	event.replaceOutput('techreborn:iron_plate', 'modern_industrialization:iron_plate')
	event.replaceOutput('indrev:iron_plate', 'modern_industrialization:iron_plate')
	event.replaceOutput('create:iron_sheet', 'modern_industrialization:iron_plate')
	event.remove({output: 'indrev:iron_plate'})
	event.custom({
		"type": "indrev:compress",
		"ingredients": {
			"item": "minecraft:iron_ingot"
		},
		"output": {
			"item": "modern_industrialization:iron_plate",
			"count": 1
		},
		"processTime": 400
	})
	event.remove({output: 'ad_astra:iron_plate'})
	//Emerald  = techreborn
	event.remove({input: 'modern_industrialization:emerald_tiny_dust', type: 'minecraft:crafting_shaped'})
	event.remove({output: 'modern_industrialization:emerald_tiny_dust', type: 'minecraft:crafting_shaped'})
	event.remove({output: 'modern_industrialization:emerald_dust', type: 'create:crushing'})
	event.replaceOutput('modern_industrialization:emerald_dust', 'techreborn:emerald_dust')
	event.remove({input: 'modern_industrialization:emerald_tiny_dust'})
	event.remove({output: 'modern_industrialization:emerald_tiny_dust'})
	event.remove({output: 'modern_industrialization:emerald_plate', type: 'create:pressing'})
	event.replaceOutput('modern_industrialization:emerald_plate', 'techreborn:emerald_plate')
	//diamond = modern_industrialization
	event.remove({output: 'techreborn:diamond_small_dust', type: 'minecraft:crafting_shapeless'})
	event.remove({input: 'techreborn:diamond_small_dust', type: 'minecraft:crafting_shapeless'})
	event.replaceOutput('techreborn:diamond_small_dust', 'modern_industrialization:diamond_tiny_dust')
	event.remove({output: 'techreborn:diamond_dust', type: 'create:crushing'})
	event.replaceOutput('techreborn:diamond_dust', 'modern_industrialization:diamond_dust')
	event.remove({output: 'indrev:diamond_dust'})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "minecraft:diamond"
		},
		"output": {
			"item": "modern_industrialization:diamond_dust"
		},
		"processTime": 200,
	})
	event.replaceOutput('techreborn:diamond_plate', 'modern_industrialization:diamond_plate')
	event.remove({output: 'createaddition:diamond_grit', type: 'create:crushing'})
	event.replaceInput('createaddition:diamond_grit', 'modern_industrialization:diamond_dust')
	//Coal = modern_industrialization
	event.remove({output: 'techreborn:coal_small_dust', type: 'minecraft:crafting_shapeless'})
	event.remove({input: 'techreborn:coal_small_dust', type: 'minecraft:crafting_shapeless'})
	event.replaceOutput('techreborn:coal_small_dust', 'modern_industrialization:coal_tiny_dust')
	event.remove({output: 'indrev:coal_dust'})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "minecraft:coal"
		},
		"output": {
			"item": "modern_industrialization:coal_dust"
		},
		"processTime": 200,
	})
	event.remove({output: 'techreborn:coal_dust', type: 'create:crushing'})
	event.remove({output: 'techreborn:coal_dust', type: 'create:milling'})
	event.replaceOutput('techreborn:coal_dust', 'modern_industrialization:coal_dust')
	event.replaceInput('techreborn:coal_dust', 'modern_industrialization:coal_dust')
	//gold = modern_industrialization
	event.remove({output: 'createaddition:gold_rod'})
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			  "tag": "c:ingots/gold"
		},
		"result": {
			"item": "modern_industrialization:gold_rod",
			"count": 2
		}
	})
	event.remove({output: 'indrev:gold_dust'})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "minecraft:raw_gold",
			"count": 2
		},
		"output": {
			"item": "modern_industrialization:gold_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"tag": "c:gold_ores"
		},
		"output": {
			"item": "modern_industrialization:gold_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "minecraft:gold_ingot"
		},
		"output": {
			"item": "modern_industrialization:gold_dust"
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "indrev:gold_chunk"
		},
		"output": {
			"item": "modern_industrialization:gold_dust"
		},
		"processTime": 200,
	})
	event.remove({input: 'modern_industrialization:gold_dust', type: 'minecraft:smelting'})
	event.remove({input: 'modern_industrialization:gold_dust', type: 'minecraft:blasting'})
	event.smelting('minecraft:gold_ingot', 'modern_industrialization:gold_dust').xp(0.7)
	event.blasting('minecraft:gold_ingot', 'modern_industrialization:gold_dust').xp(0.7)
	event.replaceOutput('indrev:gold_plate', 'modern_industrialization:gold_plate')
	event.replaceOutput('create:golden_sheet', 'modern_industrialization:gold_plate')
	event.remove({output: 'indrev:gold_plate', type: 'indrev:compress'})
	event.custom({
		"type": "indrev:compress",
		"ingredients": {
			"item": "minecraft:gold_ingot"
		},
		"output": {
			"item": "modern_industrialization:gold_plate",
			"count": 1
		},
		"processTime": 400
	})
	//Copper = modern_industrialization
	event.replaceOutput('indrev:copper_plate', 'modern_industrialization:copper_plate')
	event.remove({output: 'indrev:copper_plate'})
	event.custom({
		"type": "indrev:compress",
		"ingredients": {
			"item": "minecraft:copper_ingot"
		},
		"output": {
			"item": "modern_industrialization:copper_plate",
			"count": 1
		},
		"processTime": 400
	})
	event.replaceOutput('techreborn:copper_plate', 'modern_industrialization:copper_plate')
	event.remove({output: 'indrev:copper_dust'})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "indrev:copper_chunk"
		},
		"output": {
			"item": "modern_industrialization:copper_dust"
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "minecraft:copper_ingot"
		},
		"output": {
			"item": "modern_industrialization:copper_dust"
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "minecraft:raw_copper",
			"count": 2
		},
		"output": {
			"item": "modern_industrialization:copper_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"item": "indrev:copper_purified_ore"
		},
		"output": {
			"item": "modern_industrialization:copper_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.custom({
		"type": "indrev:pulverize",
		"ingredients": {
			"tag": "c:copper_ores"
		},
		"output": {
			"item": "modern_industrialization:copper_dust",
			"count": 3
		},
		"processTime": 200,
	})
	event.remove({output: 'createaddition:copper_rod'})
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			  "item": "minecraft:raw_copper"
		},
		"result": {
			"item": "modern_industrialization:copper_rod",
			"count": 2
		}
	})
	event.replaceInput('createaddition:copper_rod', 'modern_industrialization:copper_rod')
	event.remove({output: 'mythicmetals:copper_nugget', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'create:copper_nugget', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'techreborn:copper_nugget', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'indrev:copper_nugget', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'oxidized:copper_nugget', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'consistency_plus:copper_nugget', type: 'minecraft:crafting_shapeless'})
	event.replaceOutput('techreborn:copper_nugget', 'modern_industrialization:copper_nugget')
	event.replaceOutput('consistency_plus:copper_nugget', 'modern_industrialization:copper_nugget')
	event.replaceOutput('create:copper_nugget', 'modern_industrialization:copper_nugget')
	event.replaceInput('create:copper_nugget', 'modern_industrialization:copper_nugget')
	event.remove({output: 'minecraft:copper_ingot', type: 'minecraft:crafting_shapeless'})
	event.remove({output: 'minecraft:copper_ingot', type: 'minecraft:crafting_shaped'})
	event.shapeless('9x minecraft:copper_ingot', 'minecraft:copper_block')
	event.shapeless('minecraft:copper_ingot', '9x modern_industrialization:copper_nugget')
	event.remove({id: 'enriched:copper_block_smelting'})
	event.remove({id: 'enriched:copper_block_blasting'})
	event.remove({id: 'charm:extra_recipes/copper_block_from_blasting_raw_copper_block'})
	event.replaceOutput('techreborn:gold_plate', 'modern_industrialization:gold_plate')
	//Ender Pearls = techreborn
	event.smelting('betterend:ender_dust', 'minecraft:ender_pearl').xp(1.0).cookingTime(400)
	event.replaceOutput('ae2:ender_dust', 'betterend:ender_dust')
	event.replaceOutput('betterend:ender_dust', 'betterend:ender_dust')
	event.recipes.createCrushing([
	'6x betterend:ender_dust',
	Item.of('betterend:ender_dust').withChance(0.75),
	'minecraft:end_stone',
	Item.of('create:experience_nugget').withChance(0.75)],
	'#c:ender_ores')
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:ender_ores"
		},
	"output": {
		"item": "betterend:ender_dust",
		"count": 6
		},
	"processTime": 200,
	})
	event.remove({output: 'ae2:ender_dust'})
	event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:ender_ores"
        },
    "item_outputs": [{
        "item": "betterend:ender_dust",
        "amount": 6
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:ender_ores"
		}
		],
	"results": [
		{
		"item": "betterend:ender_dust",
		"count": 6
		}]
    })
	event.recipes.createMixing('minecraft:ender_pearl', '2x betterend:ender_dust').heated()
	event.remove({input: 'minecraft:ender_pearl', type: 'modern_industrialization:macerator'})
	event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "minecraft:ender_pearl"
        },
    "item_outputs": [{
        "item": "betterend:ender_dust",
        "amount": 2
        }]
    })
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "minecraft:ender_pearl"
		},
	"output": {
		"item": "betterend:ender_dust",
		"count": 2
		},
	"processTime": 200,
	})
	event.remove({input: '9x minecraft:ender_pearl', output: 'blockus:ender_block'})
	event.recipes.createCrushing('2x betterend:ender_dust', 'minecraft:ender_pearl')
	event.shapeless('charm:ender_pearl_block', 'betterend:ender_block')
	event.shapeless('betterend:ender_block', 'blockus:ender_block')
	event.shapeless('blockus:ender_block', 'charm:ender_pearl_block')
	event.replaceInput('techreborn:ender_pearl_dust', 'betterend:ender_dust')
	event.replaceOutput('techreborn:ender_pearl_dust', 'betterend:ender_dust')
	//Sulfur = techreborn
	event.recipes.createCrushing('2x techreborn:sulfur_dust', 'cinderscapes:polypite_sulfur_quartz')
	event.custom({
  	"type": "modern_industrialization:macerator",
 	   "eu": 2,
 	   "duration": 100,
	"item_inputs": {
		"item": "cinderscapes:polypite_sulfur_quartz"
 	   },
  	"item_outputs": [{
  	    "item": "techreborn:sulfur_dust",
		"amount": 2
  	  }]
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "cinderscapes:polypite_sulfur_quartz"
	},
	"output": {
		"item": "techreborn:sulfur_dust",
		"count": 2
	},
	"processTime": 200,
	})
	event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"item": "cinderscapes:polypite_sulfur_quartz"
		}],
	"results": [
		{
		"item": "techreborn:sulfur_dust",
		"count": 2
		}]
	})
	event.recipes.createCrushing('techreborn:sulfur_dust', 'cinderscapes:sulfur_quartz')
	event.custom({
  	"type": "modern_industrialization:macerator",
 	   "eu": 2,
 	   "duration": 100,
	"item_inputs": {
		"item": "cinderscapes:sulfur_quartz"
 	   },
  	"item_outputs": [{
  	    "item": "techreborn:sulfur_dust"
  	  }]
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "cinderscapes:sulfur_quartz"
	},
	"output": {
		"item": "techreborn:sulfur_dust"
	},
	"processTime": 200,
	})
	event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"item": "cinderscapes:sulfur_quartz"
		}],
	"results": [
		{
		"item": "techreborn:sulfur_dust"
		}]
	})
	event.shapeless('minecraft:gunpowder', ['minecraft:bone_meal', '#minecraft:coals', '#c:sulfurs'])
	event.remove({id: 'indrev:pulverizer/sulfur_dust_from_gunpowder'})
	event.remove({id: 'indrev:pulverizer/sulfur_dust'})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:sulfurs"
	},
	"output": {
		"item": "techreborn:sulfur_dust",
		"count": 2
	},
	"processTime": 200,
	})
	event.remove({output: 'modern_industrialization:sulfur_tiny_dust'})
	event.remove({input: 'modern_industrialization:sulfur_tiny_dust'})
	event.remove({output: 'modern_industrialization:sulfur_block'})
	event.replaceOutput('modern_industrialization:sulfur_dust', 'techreborn:sulfur_dust')
	event.shaped('cinderscapes:sulfur_block', [
		'AA',
		'AA'
		], {
		A: '#c:sulfurs'
	})
	event.recipes.createMixing('cinderscapes:crystalline_sulfur_quartz', '2x cinderscapes:sulfur_block').superheated()
	event.shapeless('4x cinderscapes:sulfur', 'cinderscapes:sulfur_block')
	event.recipes.createCrushing('6x techreborn:sulfur_dust', 'cinderscapes:crystalline_sulfur_quartz')
	event.custom({
  	"type": "modern_industrialization:macerator",
 	   "eu": 2,
 	   "duration": 100,
	"item_inputs": {
		"item": "cinderscapes:crystalline_sulfur_quartz"
 	   },
  	"item_outputs": [{
  	    "item": "techreborn:sulfur_dust",
		"amount": 6
  	  }]
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "cinderscapes:crystalline_sulfur_quartz"
	},
	"output": {
		"item": "techreborn:sulfur_dust",
		"count": 6
	},
	"processTime": 200,
	})
	event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"item": "cinderscapes:crystalline_sulfur_quartz"
		}],
	"results": [
		{
		"item": "techreborn:sulfur_dust",
		"count": 6
		}]
	})
	event.shapeless('cinderscapes:sulfur_block', 'modern_industrialization:sulfur_block')
	event.shapeless('modern_industrialization:sulfur_block', 'cinderscapes:sulfur_block')
  }
)