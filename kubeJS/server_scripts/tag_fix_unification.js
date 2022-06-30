//Made by Fluffy Bumblebee
onEvent('tags.items', event => {
	//Silicon
	event.add('c:silicon_ingots', 'ae2:silicon')
	//Manganese
	event.add('c:manganese_dusts', 'mythicmetals:manganese_dust')
	event.add('techreborn:dusts', 'mythicmetals:manganese_dust')
	event.remove('c:manganese_dusts', 'modern_industrialization:manganese_dust')
	event.remove('c:manganese_ingots', 'modern_industrialization:manganese_ingot')
	event.remove('c:manganese_nuggets', 'modern_industrialization:manganese_nugget')
	event.remove('c:manganese_dusts', 'techreborn:manganese_dust')
	event.remove('c:manganese_small_dusts', 'techreborn:manganese_small_dust')
	event.add('c:manganese_small_dusts', 'modern_industrialization:manganese_tiny_dust')
	//Iridium = modern_industrialization (Tags)
	event.add('minecraft:beacon_payment_items','modern_industrialization:iridium_ingot')
	event.add('techreborn:ingots', 'modern_industrialization:iridium_ingot')
	//zinc = create
	event.add('minecraft:beacon_payment_items', 'create:zinc_ingot')
	event.remove('c:zinc_ingots', 'techreborn:zinc_ingot')
	event.add('c:dusts/zinc', 'techreborn:zinc_dust')
	event.remove('c:dusts/zinc', 'createplus:zinc_dust')
	event.remove('c:zinc_dusts', 'createplus:zinc_dust')
	event.remove('c:zinc_nuggets', 'techreborn:zinc_nugget')
	event.add('c:plates/zinc', 'techreborn:zinc_plate')
	//tin = modern_industrialization
    event.remove('c:tin_dusts', 'indrev:tin_dust')
	event.remove('c:tin_ingots', 'indrev:tin_ingot')
	event.remove('c:tin_ingots', 'mythicmetals:tin_ingot')
	event.remove('c:tin_ingots', 'techreborn:tin_ingot')
	event.remove('c:tin_nuggets', 'mythicmetals:tin_nugget')
	event.remove('c:tin_nuggets', 'indrev:tin_nugget')
	event.remove('c:tin_nuggets', 'techreborn:tin_nugget')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:tin_ingot')
	event.remove('c:raw_tin_ores', 'modern_industrialization:raw_tin')
	event.remove('c:raw_tin_ores', 'indrev:raw_tin')
	event.add('c:tin_blocks', 'indrev:tin_block')
	event.add('c:tin_blocks', 'mythicmetals:tin_block')
	event.remove('c:tin_plates', 'indrev:tin_plate')
	event.remove('c:tin_plates', 'techreborn:tin_plate')
	//Steel = modern_industrialization
	event.remove('c:steel_ingots', 'techreborn:steel_ingot')
	event.remove('c:steel_ingots', 'mythicmetals:steel_ingot')
	event.remove('c:steel_ingots', 'enriched:steel_ingot')
	event.remove('c:steel_ingots', 'indrev:steel_ingot')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:steel_ingot')
	event.add('c:steel_blocks', 'enriched:steel_block')
	event.remove('c:steel_nuggets', 'techreborn:steel_nugget')
	event.remove('c:steel_nuggets', 'indrev:steel_nugget')
	event.remove('c:steel_nuggets', 'mythicmetals:steel_nugget')
	event.remove('c:steel_dusts', 'indrev:steel_dust')
	event.remove('c:steel_dusts', 'techreborn:steel_dust')
	event.remove('c:steel_small_dusts', 'techreborn:steel_small_dust')
	event.add('c:steel_small_dusts', 'modern_industrialization:steel_tiny_dust')
	event.remove('c:steel_plates', 'indrev:steel_plate')
	event.remove('c:steel_plates', 'techreborn:steel_plate')
	//Silver Tags
	event.remove('c:raw_silver_ores', 'modern_industrialization:raw_silver')
	event.remove('c:raw_silver_ores', 'indrev:raw_silver')
	event.add('c:raw_silver_blocks', 'indrev:raw_silver_block')
	event.add('c:raw_silver_blocks', 'mythicmetals:raw_silver_block')
	event.remove('c:silver_ingots', 'indrev:silver_ingot')
	event.remove('c:silver_ingots', 'bewitchment:silver_ingot')
	event.remove('c:silver_ingots', 'techreborn:silver_ingot')
	event.remove('c:silver_ingots', 'mythicmetals:silver_ingot')
	event.remove('c:silver_nuggets', 'techreborn:silver_nugget')
	event.remove('c:silver_nuggets', 'mythicmetals:silver_nugget')
	event.remove('c:silver_nuggets', 'indrev:silver_nugget')
	event.remove('c:silver_nuggets', 'bewitchment:silver_nugget')
	event.remove('c:silver_plates', 'techreborn:silver_plate')
	event.remove('c:silver_plates', 'indrev:silver_plate')
	event.remove('c:silver_dusts', 'indrev:silver_dust')
	//Bronze tags
	event.remove('c:bronze_ingots', 'techreborn:bronze_ingot')
	event.remove('c:bronze_ingots', 'mythicmetals:bronze_ingot')
	event.remove('c:bronze_ingots', 'indrev:bronze_ingot')
	event.add('minecraft:beacon_payment_items', 'modern_industrialization:bronze_ingot')
	event.remove('c:bronze_nuggets', 'mythicmetals:bronze_nugget')
	event.remove('c:bronze_nuggets', 'indrev:bronze_nugget')
	event.remove('c:bronze_nuggets', 'techreborn:bronze_nugget')
	event.remove('c:bronze_dusts', 'indrev:bronze_dust')
	event.remove('c:bronze_dusts', 'techreborn:bronze_dust')
	event.remove('c:bronze_plates', 'indrev:bronze_plate')
	event.remove('c:bronze_plates', 'techreborn:bronze_plate')
	//Brass = Create
	event.remove('c:brass_ingots', 'techreborn:brass_ingot')
	event.add('minecraft:beacon_payment_items', 'create:brass_ingot')
})