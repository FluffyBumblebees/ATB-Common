onEvent('recipes', event => {
	event.remove({output: 'quarryplus:quarry'})
	event.recipes.createMechanicalCrafting('quarryplus:quarry', [
	'IRXRI',
	'PLQLP',
	'DWZWD',
	'SEFES',
	'IMCMI'
	], {
    I: 'minecraft:iron_block',
	M: 'quarryplus:flex_marker',
	C: 'modern_industrialization:electronic_circuit',
	R: 'minecraft:redstone_block',
	D: 'modern_industrialization:diamond_large_plate',
	X: 'ae2:calculation_processor',
	P: 'minecraft:diamond_pickaxe',
	S: 'create:shaft',
	E: 'expandedstorage:diamond_chest',
	F: 'ae2:engineering_processor',
	W: 'create:cogwheel',
	Z: 'create:mechanical_drill',
	L: 'ae2:logic_processor',
	Q: 'indrev:machine_block'
	})
	
	event.remove({output: 'quarryplus:adv_pump'})
	event.recipes.createMechanicalCrafting('quarryplus:adv_pump', [
	'GWWG',
	'FCMF',
	'IHHI',
	'PQQP'
	], {
	F: 'create:fluid_tank',
	M: 'createaddition:electric_motor',
	P: 'modern_industrialization:large_advanced_pump',
	G: 'minecraft:gold_ingot',
	W: 'create:cogwheel',
	C: 'create:mechanical_pump',
	I: 'minecraft:iron_block',
	Q: 'modern_industrialization:quantum_machine_casing',
	H: 'ae2:calculation_processor'
	})
	
	event.remove({output: 'quarryplus:adv_quarry'})
	event.shaped('quarryplus:adv_quarry', [
	'CPC',
	'SQS',
	'IWI'
	], {
	Q: 'quarryplus:quarry',
	W: 'create:cogwheel',
	P: 'ae2:calculation_processor',
	S: 'create:shaft',
	C: 'modern_industrialization:copper_gear',
	I: 'minecraft:iron_block'
	})
})