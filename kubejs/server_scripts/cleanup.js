//Made by Fluffy Bumblebee
onEvent('recipes', event => {
	event.remove({output: 'charm:sugar_block'})
	event.recipes.createMixing('charm:sugar_block', 'blockus:sugar_block').heated()
	event.remove({output: 'charm:gunpowder_block'})
	event.recipes.createCompacting('charm:gunpowder_block', ['3x blast:gunpowder_block', 'minecraft:copper_ingot'])
	event.remove({input: 'charm:gunpowder_block'})
	event.shapeless('27x minecraft:gunpowder', 'charm:gunpowder_block')
	event.remove({output: 'minecraft:gunpowder', input: 'betterend:crystalline_sulphur'})
	event.recipes.createCrushing('betterend:crystalline_sulphur', 'betterend:sulphur_crystal')
	event.custom({
  	"type": "modern_industrialization:macerator",
 	   "eu": 2,
 	   "duration": 100,
	"item_inputs": {
		"item": "betterend:sulphur_crystal"
 	   },
  	"item_outputs": [{
  	    "item": "betterend:crystalline_sulphur"
  	  }]
	})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"item": "betterend:sulphur_crystal"
	},
	"output": {
		"item": "betterend:crystalline_sulphur"
	},
	"processTime": 200,
	})
	event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"item": "betterend:sulphur_crystal"
		}],
	"results": [
		{
		"item": "betterend:crystalline_sulphur"
		}]
	})
	event.recipes.createCrushing('techreborn:sulfur_dust', '2x #c:sulfurs')
	event.custom({
  	"type": "modern_industrialization:macerator",
 	"eu": 2,
 	"duration": 100,
	"item_inputs": {
		"tag": "c:sulfurs"
 	   },
  	"item_outputs": {
  	    "item": "2x techreborn:sulfur_dust"
  	  }
	})
})

onEvent('tags.items', event => {
	event.add('c:sulfurs', 'betterend:crystalline_sulphur')
})