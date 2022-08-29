onEvent('recipes', event => {
	event.recipes.createMechanicalCrafting('anim_guns:blueprint_pistol_light', [
    'BB',
    ' B'
	], {
    B: 'anim_guns:blueprint_bundle',
	  }
	)
	event.recipes.createMechanicalCrafting('anim_guns:blueprint_revolver_magnum', [
    'BBB',
    '  B'
	], {
    B: 'anim_guns:blueprint_bundle',
	  }
	)
	event.recipes.createMechanicalCrafting('anim_guns:blueprint_assaultrifle_light', [
    'BBBBB',
    '  B B'
	], {
    B: 'anim_guns:blueprint_bundle',
	  }
	)
	event.recipes.createMechanicalCrafting('anim_guns:blueprint_assaultrifle_heavy', [
    'BBBBB',
    '  BBB'
	], {
    B: 'anim_guns:blueprint_bundle',
	  }
	)
	event.recipes.createMechanicalCrafting('anim_guns:blueprint_shotgun_combat', [
    'BBBBB',
    ' BB B'
	], {
    B: 'anim_guns:blueprint_bundle',
	  }
	)
	event.recipes.createMechanicalCrafting('anim_guns:blueprint_sniper_classic', [
    'BBBBB',
    '    B'
	], {
    B: 'anim_guns:blueprint_bundle',
	  }
	)
	
	event.remove({output: 'anim_guns:pistol_light'})
	event.remove({output: 'anim_guns:revolver_magnum'})
	event.remove({output: 'anim_guns:assaultrifle_light'})
	event.remove({output: 'anim_guns:assaultrifle_heavy'})
	event.remove({output: 'anim_guns:shotgun_combat'})
	event.remove({output: 'anim_guns:sniper_classic'})
	
	event.recipes.createMechanicalCrafting('anim_guns:pistol_light', [
    'ab',
    'cd'
	], {
		a: 'anim_guns:short_barrel',
		b: 'anim_guns:hardened_iron_ingot',
		c: 'anim_guns:blueprint_pistol_light',
		d: 'anim_guns:pistol_grip'
	  }
	)
	event.recipes.createMechanicalCrafting('anim_guns:revolver_magnum', [
    'ab',
    'cd'
	], {
		a: 'anim_guns:long_barrel',
		b: 'anim_guns:hardened_iron_ingot',
		c: 'anim_guns:blueprint_revolver_magnum',
		d: 'anim_guns:pistol_grip'
	  }
	)
	event.recipes.createMechanicalCrafting('anim_guns:assaultrifle_light', [
    'acdf',
    'b e '
	], {
		a: 'anim_guns:long_barrel',
		b: 'anim_guns:modern_handguard',
		c: 'anim_guns:blueprint_assaultrifle_light',
		d: 'anim_guns:hardened_iron_ingot',
		e: 'anim_guns:pistol_grip',
		f: 'anim_guns:modern_stock'
	  }
	)
	event.recipes.createMechanicalCrafting('anim_guns:assaultrifle_heavy', [
    'acddf',
    'b  e '
	], {
		a: 'anim_guns:long_barrel',
		b: 'anim_guns:modern_handguard',
		c: 'anim_guns:blueprint_assaultrifle_heavy',
		d: 'anim_guns:hardened_iron_ingot',
		e: 'anim_guns:pistol_grip',
		f: 'anim_guns:modern_stock'
	  }
	)
	event.recipes.createMechanicalCrafting('anim_guns:shotgun_combat', [
    'acd',
    'b e'
	], {
		a: 'anim_guns:long_barrel',
		b: 'anim_guns:modern_handguard',
		c: 'anim_guns:blueprint_shotgun_combat',
		d: 'anim_guns:hardened_iron_ingot',
		e: 'anim_guns:pistol_grip'
	  }
	)
	event.recipes.createMechanicalCrafting('anim_guns:sniper_classic', [
	'   e ',
    'acddf',
    'b    '
	], {
		a: 'anim_guns:long_barrel',
		b: 'anim_guns:wooden_handguard',
		c: 'anim_guns:blueprint_sniper_classic',
		d: 'anim_guns:hardened_iron_ingot',
		e: 'anim_guns:gun_scope',
		f: 'anim_guns:wooden_stock'
	  }
	)
  }
)