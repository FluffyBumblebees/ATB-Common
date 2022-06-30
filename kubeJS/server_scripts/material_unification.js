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
	event.shapeless('enriched:ruby_block', '9x techreborn:ruby_gem')
	event.shapeless('enriched:ruby_block', 'techreborn:ruby_storage_block')
	event.shapeless('techreborn:ruby_storage_block', 'enriched:ruby_block')
	//Sapphire = techreborn
	event.shapeless('enriched:sapphire_block', '9x techreborn:sapphire_gem')
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
	//Iridium = modern_industrialization
	event.smelting('techreborn:iridium_storage_block', '#c:raw_iridium_blocks').xp(4.5).cookingTime(1500.0)
	event.smelting('techreborn:iridium_storage_block_wall', 'techreborn:raw_iridium_storage_block_wall').xp(0.7)
	event.smelting('techreborn:iridium_storage_block_slab', 'techreborn:raw_iridium_storage_block_slab').xp(0.7)
	event.smelting('techreborn:iridium_storage_block_stairs', 'techreborn:raw_iridium_storage_block_stairs').xp(0.7)
	event.blasting('techreborn:iridium_storage_block', '#c:raw_iridium_blocks').xp(4.5).cookingTime(750.0)
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
	"type": "indrev:selfremainder",
	"ingredients": [
	{
 	"item": "modern_industrialization:tin_ingot"
	},
	{
  	"item": "indrev:hammer"
 	}],
	"result": {
		"item": "modern_industrialization:tin_plate"
	}
	})
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
	//Steel = modern_industrialization
	event.shapeless('techreborn:steel_storage_block', 'modern_industrialization:steel_block')
	event.shapeless('modern_industrialization:steel_block', 'indrev:steel_block')
	event.shapeless('indrev:steel_block', 'mythicmetals:steel_block')
	event.shapeless('mythicmetals:steel_block', 'enriched:steel_block')
	event.shapeless('enriched:steel_block', 'techreborn:steel_storage_block')
	event.remove({output: 'mythicmetals:steel_ingot', type: 'alloy_forgery_forging'})
	event.shapeless('enriched:steel_block', '9x modern_industrialization:steel_ingot')
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
	event.remove({input: '9x techreborn:steel_nugget'})
	event.remove({output: '9x indrev:steel_ingot'})
	event.shapeless('9x modern_industrialization:steel_ingot', 'indrev:steel_block')
	event.shapeless('9x modern_industrialization:steel_ingot', 'enriched:steel_block')
	event.shapeless('9x modern_industrialization:steel_ingot', 'mythicmetals:steel_block')
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
	//Silver = modern_industrialization, raw = techreborn
	event.shapeless('techreborn:raw_silver_storage_block', 'indrev:raw_silver_block')
	event.shapeless('indrev:raw_silver_block', 'mythicmetals:raw_silver_block')
	event.shapeless('mythicmetals:raw_silver_block', 'modern_industrialization:raw_silver_block')
	event.shapeless('modern_industrialization:raw_silver_block', 'bewitchment:raw_silver_block')
	event.shapeless('bewitchment:raw_silver_block', 'techreborn:raw_silver_storage_block')
	event.remove({input: '9x bewitchment:raw_silver', output: 'bewitchment:raw_silver_block'})
	event.shapeless('bewitchment:raw_silver_block', '9x techreborn:raw_silver')
	event.remove({input: '9x modern_industrialization:raw_silver', output: 'modern_industrialization:raw_silver_block'})
	event.shapeless('modern_industrialization:raw_silver_block', '9x techreborn:raw_silver')
	event.remove({input: '9x mythicmetals:raw_silver', output: 'mythicmetals:raw_silver_block'})
	event.shapeless('mythicmetals:raw_silver_block', '9x techreborn:raw_silver')
	event.replaceOutput('modern_industrialization:raw_silver', 'techreborn:raw_silver')
	event.replaceOutput('mythicmetals:raw_silver', 'techreborn:raw_silver')
	event.replaceOutput('bewitchment:raw_silver', 'techreborn:raw_silver')
	event.shapeless('9x techreborn:raw_silver', 'indrev:raw_silver_block')
	event.remove({output: 'indrev:raw_silver'})
	event.remove({output: 'techreborn:silver_storage_block', type: 'minecraft:smelting'})
	event.remove({output: 'techreborn:silver_storage_block', type: 'minecraft:blasting'})
	event.smelting('techreborn:silver_storage_block', 'techreborn:raw_silver_storage_block').xp(5.2).cookingTime(1500.0)
	event.smelting('indrev:silver_block', 'indrev:raw_silver_block').xp(5.2).cookingTime(1500.0)
	event.smelting('mythicmetals:silver_block', 'mythicmetals:raw_silver_block').xp(5.2).cookingTime(1500.0)
	event.smelting('bewitchment:silver_block', 'bewitchment:raw_silver_block').xp(5.2).cookingTime(1500.0)
	event.smelting('modern_industrialization:silver_block', 'modern_industrialization:raw_silver_block').xp(5.2).cookingTime(1500.0)
	event.blasting('techreborn:silver_storage_block', 'techreborn:raw_silver_storage_block').xp(5.2).cookingTime(750.0)
	event.blasting('indrev:silver_block', 'indrev:raw_silver_block').xp(5.2).cookingTime(750.0)
	event.blasting('mythicmetals:silver_block', 'mythicmetals:raw_silver_block').xp(5.2).cookingTime(750.0)
	event.blasting('bewitchment:silver_block', 'bewitchment:raw_silver_block').xp(5.2).cookingTime(750.0)
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
	event.replaceInput('bewitchment:silver_ingot', 'modern_industrialization:silver_ingot')
	event.remove({output: '9x bewitchment:silver_nugget'})
	event.remove({output: 'indrev:silver_ingot'})
   	event.replaceInput('modern_industrialization:raw_silver', 'techreborn:raw_silver')
	event.remove({output: 'bewitchment:silver_ingot'})
	event.shapeless('9x modern_industrialization:silver_ingot', 'techreborn:silver_storage_block')
	event.shapeless('9x modern_industrialization:silver_ingot', 'mythicmetals:silver_block')
	event.shapeless('9x modern_industrialization:silver_ingot', 'bewitchment:silver_block')
	event.shapeless('9x modern_industrialization:silver_ingot', 'indrev:silver_block')
	event.remove({output: 'techreborn:silver_plate', type: 'create:pressing'})
	event.remove({output: '9x mythicmetals:silver_nugget'})
	event.replaceInput('mythicmetals:silver_ingot', 'modern_industrialization:silver_ingot')
	event.remove({output: 'mythicmetals:silver_ingot'})
	event.shapeless('techreborn:silver_storage_block', 'indrev:silver_block')
	event.shapeless('indrev:silver_block', 'mythicmetals:silver_block')
	event.shapeless('mythicmetals:silver_block', 'bewitchment:silver_block')
	event.shapeless('bewitchment:silver_block', 'modern_industrialization:silver_block')
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
	event.shapeless('techreborn:bronze_storage_block', '9x modern_industrialization:bronze_ingot')
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
	event.shapeless('techreborn:brass_storage_block', '9x create:brass_ingot')
	event.stonecutting('2x architects_palette:nether_brass_block', 'createdeco:brass_sheet_metal')
	event.remove({input: 'techreborn:brass_ingot', output: 'techreborn:brass_storage_block'})
	event.remove({input: 'techreborn:brass_ingot', output: '9x techreborn:brass_nugget'})
  	event.shapeless('create:brass_block', 'techreborn:brass_storage_block')
 	event.shapeless('techreborn:brass_storage_block', 'create:brass_block')
    }
)
