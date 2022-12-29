////////////////////////////
//Made by Fluffy Bumblebee//
////////////////////////////

onEvent('tags.fluids', event => {
//Liquid Blaze Burner Fuels
	let registertoLBBF = (time, ids) => {
		event.add('createaddition:burnable_fuel_' + time, ids)
	}
	registertoLBBF('1800', 'techreborn:biofuel')
	registertoLBBF('3000', [
		'techreborn:oil',
		'modern_industrialization:synthetic_oil',
		'modern_industrialization:crude_oil',
		'ad_astra:oil',
	])
	registertoLBBF('3600' [
		'techreborn:nitrofuel',
		'modern_industrialization:light_fuel'
	])
	registertoLBBF('4800', 'ad_astra:fuel')

	registertoLBBF('5600', 'modern_industrialization:heavy_fuel')
})
