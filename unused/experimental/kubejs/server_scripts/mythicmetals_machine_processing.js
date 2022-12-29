//Made by Fluffy Bumblebee
onEvent('recipes', event => {
    event.smelting('mythicmetals:stormyx_ingot', 'mythicmetals:raw_stormyx').xp(0.2)
    event.smelting('mythicmetals:orichalcum_ingot', 'mythicmetals:raw_orichalcum').xp(0.2)
    event.smelting('mythicmetals:midas_gold_ingot', 'mythicmetals:raw_midas_gold').xp(0.2)
    event.smelting('mythicmetals:palladium_ingot', 'mythicmetals:raw_palladium').xp(0.2)
    event.smelting('mythicmetals:runite_ingot', 'mythicmetals:raw_runite').xp(0.2)
    event.smelting('mythicmetals:mythril_ingot', 'mythicmetals:raw_mythril').xp(0.2)
    event.smelting('byg:pendorite_scraps', 'byg:raw_pendorite').xp(0.2).xp(300)
    //Seperator
    event.smelting('mythicmetals:midas_gold_block', 'mythicmetals:raw_midas_gold_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:aquarium_block', 'mythicmetals:raw_aquarium_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:osmium_block', 'mythicmetals:raw_osmium_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:mythril_block', 'mythicmetals:raw_mythril_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:palladium_block', 'mythicmetals:raw_palladium_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:orichalcum_block', 'mythicmetals:raw_orichalcum_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:runite_block', 'mythicmetals:raw_runite_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:quadrillum_block', 'mythicmetals:raw_quadrillum_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:prometheum_block', 'mythicmetals:raw_prometheum_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:stormyx_block', 'mythicmetals:raw_stormyx_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:banglum_block', 'mythicmetals:raw_banglum_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:kyber_block', 'mythicmetals:raw_kyber_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:carmot_block', 'mythicmetals:raw_carmot_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:adamantite_block', 'mythicmetals:raw_adamantite_block').xp(0.9).cookingTime(1500)
    event.smelting('mythicmetals:adamantite_block', 'mythicmetals:raw_adamantite_block').xp(0.9).cookingTime(1500)
    event.smelting('modern_industrialization:antimony_block', 'modern_industrialization:raw_antimony_block').xp(5.2).cookingTime(1500)
    event.smelting('modern_industrialization:nickel_block', 'modern_industrialization:raw_nickel_block').xp(5.2).cookingTime(1500)
    event.blasting('mythicmetals:midas_gold_block', 'mythicmetals:raw_midas_gold_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:aquarium_block', 'mythicmetals:raw_aquarium_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:osmium_block', 'mythicmetals:raw_osmium_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:mythril_block', 'mythicmetals:raw_mythril_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:palladium_block', 'mythicmetals:raw_palladium_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:orichalcum_block', 'mythicmetals:raw_orichalcum_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:runite_block', 'mythicmetals:raw_runite_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:quadrillum_block', 'mythicmetals:raw_quadrillum_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:prometheum_block', 'mythicmetals:raw_prometheum_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:stormyx_block', 'mythicmetals:raw_stormyx_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:banglum_block', 'mythicmetals:raw_banglum_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:kyber_block', 'mythicmetals:raw_kyber_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:carmot_block', 'mythicmetals:raw_carmot_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:adamantite_block', 'mythicmetals:raw_adamantite_block').xp(0.9).cookingTime(750)
    event.blasting('mythicmetals:adamantite_block', 'mythicmetals:raw_adamantite_block').xp(0.9).cookingTime(750)
    event.blasting('modern_industrialization:antimony_block', 'modern_industrialization:raw_antimony_block').xp(5.2).cookingTime(750)
    event.blasting('modern_industrialization:nickel_block', 'modern_industrialization:raw_nickel_block').xp(5.2).cookingTime(750)
    //Prometheum
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "mythicmetals:prometheum_ores"
		},
	"output": {
		"item": "mythicmetals:prometheum_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "mythicmetals:prometheum_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:prometheum_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "mythicmetals:prometheum_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:prometheum_dust",
		"count": 3
		}]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:prometheum_ores"
		},
	"output": {
		"item": "mythicmetals:prometheum_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:prometheum_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:prometheum_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:prometheum_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:prometheum_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_prometheum",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:prometheum_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_prometheum",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:prometheum_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_prometheum",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:prometheum_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:prometheum_dust','mythicmetals:prometheum_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:prometheum_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:prometheum_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:prometheum_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:prometheum_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:prometheum_ingot"
        },
    "output": {
        "item": "mythicmetals:prometheum_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:prometheum_ingot', 'mythicmetals:prometheum_dust').xp(0.2)
    event.blasting('mythicmetals:prometheum_ingot', 'mythicmetals:prometheum_dust').xp(0.1)
    event.smelting('mythicmetals:prometheum_ingot', '#c:prometheum_ores').xp(0.2)
    event.blasting('mythicmetals:prometheum_ingot', '#c:prometheum_ores').xp(0.1)
    //stormyx
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "mythicmetals:stormyx_ores"
		},
	"output": {
		"item": "mythicmetals:stormyx_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "mythicmetals:stormyx_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:stormyx_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "mythicmetals:stormyx_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:stormyx_dust",
		"count": 3
		}]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:stormyx_ores"
		},
	"output": {
		"item": "mythicmetals:stormyx_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:stormyx_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:stormyx_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:stormyx_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:stormyx_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_stormyx",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:stormyx_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_stormyx",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:stormyx_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_stormyx",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:stormyx_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:stormyx_dust','mythicmetals:stormyx_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:stormyx_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:stormyx_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:stormyx_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:stormyx_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:stormyx_ingot"
        },
    "output": {
        "item": "mythicmetals:stormyx_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:stormyx_ingot', 'mythicmetals:stormyx_dust').xp(0.2)
    event.blasting('mythicmetals:stormyx_ingot', 'mythicmetals:stormyx_dust').xp(0.1)
    event.smelting('mythicmetals:stormyx_ingot', '#mythicmetals:stormyx_ores').xp(0.2)
    event.smelting('mythicmetals:stormyx_ingot', '#c:stormyx_ores').xp(0.2)
    event.blasting('mythicmetals:stormyx_ingot', '#c:stormyx_ores').xp(0.1)
    //quadrillum
    event.remove({id: 'mythicmetals:smelting/quadrillum_ingot_from_ores'})
    event.remove({id: 'mythicmetals:blasting/blast_quadrillum_ingot_from_ores'})
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:quadrillum_ores"
		},
	"output": {
		"item": "mythicmetals:quadrillum_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:quadrillum_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:quadrillum_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:quadrillum_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:quadrillum_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_quadrillum",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:quadrillum_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_quadrillum",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:quadrillum_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_quadrillum",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:quadrillum_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:quadrillum_dust','mythicmetals:quadrillum_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:quadrillum_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:quadrillum_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:quadrillum_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:quadrillum_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:quadrillum_ingot"
        },
    "output": {
        "item": "mythicmetals:quadrillum_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:quadrillum_ingot', 'mythicmetals:quadrillum_dust').xp(0.2)
    event.blasting('mythicmetals:quadrillum_ingot', 'mythicmetals:quadrillum_dust').xp(0.1)
    event.smelting('mythicmetals:quadrillum_ingot', '#mythicmetals:quadrillum_ores').xp(0.2)
    event.blasting('mythicmetals:quadrillum_ingot', '#mythicmetals:quadrillum_ores').xp(0.1)
    //runite
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "mythicmetals:runite_ores"
		},
	"output": {
		"item": "mythicmetals:runite_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "mythicmetals:runite_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:runite_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "mythicmetals:runite_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:runite_dust",
		"count": 3
		}]
    })
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:runite_ores"
		},
	"output": {
		"item": "mythicmetals:runite_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:runite_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:runite_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:runite_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:runite_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_runite",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:runite_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_runite",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:runite_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_runite",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:runite_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:runite_dust','mythicmetals:runite_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:runite_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:runite_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:runite_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:runite_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:runite_ingot"
        },
    "output": {
        "item": "mythicmetals:runite_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:runite_ingot', 'mythicmetals:runite_dust').xp(0.2)
    event.blasting('mythicmetals:runite_ingot', 'mythicmetals:runite_dust').xp(0.1)
    event.smelting('mythicmetals:runite_ingot', '#mythicmetals:runite_ores').xp(0.2)
    event.smelting('mythicmetals:runite_ingot', '#c:runite_ores').xp(0.2)
    event.blasting('mythicmetals:runite_ingot', '#c:runite_ores').xp(0.1)
    //star_platinum
    event.custom({
	"type": "techreborn:alloy_smelter",
	"power": 6,
	"time": 200,
	"ingredients": [
		{
		"item": "modern_industrialization:raw_platinum"
		},
		{
		"item": "mythicmetals:starrite"
		}],
	"results": [
		{
		"item": "mythicmetals:star_platinum"
		}]
	})

    event.custom({
	"type": "techreborn:alloy_smelter",
	"power": 6,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:platinum_ores"
		},
		{
		"tag": "c:starrite_ores"
		}],
	"results": [
		{
		"item": "mythicmetals:star_platinum"
		}]
	})
    event.recipes.createCrushing('mythicmetals:star_platinum_dust','mythicmetals:star_platinum')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:star_platinum"
        }],
    "results": [
        {
        "item": "mythicmetals:star_platinum_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:star_platinum"
        },
    "item_outputs": [{
        "item": "mythicmetals:star_platinum_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:star_platinum"
        },
    "output": {
        "item": "mythicmetals:star_platinum_dust"
        },
    "processTime": 200,
    })
    event.custom({
    "type": "techreborn:alloy_smelter",
    "power": 6,
    "time": 200,
    "ingredients": [
        {
        "item": "modern_industrialization:platinum_ingot",
        "count": 2
        },
        {
        "item": "mythicmetals:starrite"
        }],
    "results": [
        {
        "item": "mythicmetals:star_platinum"
        }]
    })
    event.custom({
    "type": "techreborn:alloy_smelter",
    "power": 6,
    "time": 200,
    "ingredients": [
        {
        "item": "modern_industrialization:platinum_dust"
        },
        {
        "item": "mythicmetals:starrite"
        }],
    "results": [
        {
        "item": "mythicmetals:star_platinum_dust"
        }]
    })
    event.custom({
    "type": "indrev:infuse",
    "ingredients":  [{
        "item": "mythicmetals:starrite"
        },
        {
        "item": "modern_industrialization:platinum_dust"
        }],
    "output": {
        "item": "mythicmetals:star_platinum_dust"
        },
        "processTime": 600
    })
    event.custom({
    "type": "indrev:infuse",
    "ingredients":  [{
        "item": "mythicmetals:starrite"
        },
        {
        "item": "modern_industrialization:platinum_ingot",
        "count": 2
         }],
    "output": {
        "item": "mythicmetals:star_platinum"
        },
        "processTime": 600
    })
    event.custom({
    "type": "indrev:infuse",
    "ingredients":  [{
        "item": "mythicmetals:starrite"
        },
        {
        "item": "modern_industrialization:raw_platinum"
        }],
    "output": {
        "item": "mythicmetals:star_platinum"
        },
        "processTime": 1000
    })

    event.custom({
    "type": "indrev:infuse",
    "ingredients":  [{
        "tag": "c:starrite_ores"
        },
        {
        "tag": "c:platinum_ores"
        }],
    "output": {
        "item": "mythicmetals:star_platinum"
        },
        "processTime": 1000
    })
    event.recipes.createMixing('mythicmetals:star_platinum', ['#c:platinum_ores', '#c:starrite_ores']).heated()
    event.recipes.createMixing('mythicmetals:star_platinum_dust', ['mythicmetals:starrite', 'modern_industrialization:platinum_dust', 'mythicmetals:carmot_dust'])
    event.recipes.createMixing('mythicmetals:star_platinum_dust', ['mythicmetals:starrite', '2x modern_industrialization:platinum_dust'])
    event.recipes.createMixing( 'mythicmetals:star_platinum', ['mythicmetals:starrite', '2x modern_industrialization:platinum_ingot']).heated()
    event.smelting('mythicmetals:star_platinum', 'mythicmetals:star_platinum_dust').xp(0.2)
    event.blasting('mythicmetals:star_platinum', 'mythicmetals:star_platinum_dust').xp(0.1)
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 8,
    "duration": 200,
    "item_inputs": [
        {
        "item": "modern_industrialization:raw_platinum"
        },
        {
        "item": "mythicmetals:starrite"
        }],
    "item_outputs": [
        {
        "item": "mythicmetals:star_platinum"
        }]
    })
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 8,
    "duration": 200,
    "item_inputs": [
        {
        "item": "modern_industrialization:platinum_ingot",
        "amount": 2
        },
        {
        "item": "mythicmetals:starrite"
        }],
    "item_outputs": [
        {
        "item": "mythicmetals:star_platinum"
        }]
    })
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 8,
    "duration": 200,
    "item_inputs": [
        {
        "tag": "c:starrite_ores"
        },
        {
        "tag": "c:platinum_ores"
        }],
    "item_outputs": [
        {
        "item": "mythicmetals:star_platinum",
        "amount": 2
        }]
    })
    //carmot
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:carmot_ores"
		},
	"output": {
		"item": "mythicmetals:carmot_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:carmot_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:carmot_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:carmot_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:carmot_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_carmot",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:carmot_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_carmot",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:carmot_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_carmot",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:carmot_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:carmot_dust','mythicmetals:carmot_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:carmot_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:carmot_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:carmot_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:carmot_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:carmot_ingot"
        },
    "output": {
        "item": "mythicmetals:carmot_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:carmot_ingot', 'mythicmetals:carmot_dust').xp(0.2)
    event.blasting('mythicmetals:carmot_ingot', 'mythicmetals:carmot_dust').xp(0.1)
    event.smelting('mythicmetals:carmot_ingot', '#c:carmot_ores').xp(0.2)
    event.blasting('mythicmetals:carmot_ingot', '#c:carmot_ores').xp(0.1)
    event.remove({id: 'mythicmetals:smelting/carmot_ingot_from_ores'})
    event.remove({id: 'mythicmetals:blasting/blast_carmot_ingot_from_ores'})
    //Kyber
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:kyber_ores"
		},
	"output": {
		"item": "mythicmetals:kyber_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:kyber_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:kyber_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:kyber_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:kyber_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_kyber",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:kyber_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_kyber",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:kyber_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_kyber",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:kyber_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:kyber_dust','mythicmetals:kyber_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:kyber_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:kyber_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:kyber_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:kyber_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:kyber_ingot"
        },
    "output": {
        "item": "mythicmetals:kyber_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:kyber_ingot', 'mythicmetals:kyber_dust').xp(0.2)
    event.blasting('mythicmetals:kyber_ingot', 'mythicmetals:kyber_dust').xp(0.1)
    event.smelting('mythicmetals:kyber_ingot', '#c:kyber_ores').xp(0.2)
    event.blasting('mythicmetals:kyber_ingot', '#c:kyber_ores').xp(0.1)
    event.remove({id: 'mythicmetals:smelting/kyber_ingot_from_ores'})
    event.remove({id: 'mythicmetals:blasting/blast_kyber_ingot_from_ores'})
    //banglum
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "mythicmetals:banglum_ores"
		},
	"output": {
		"item": "mythicmetals:banglum_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "mythicmetals:banglum_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:banglum_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "mythicmetals:banglum_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:banglum_dust",
		"count": 3
		}]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:banglum_ores"
		},
	"output": {
		"item": "mythicmetals:banglum_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:banglum_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:banglum_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:banglum_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:banglum_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_banglum",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:banglum_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_banglum",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:banglum_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_banglum",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:banglum_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:banglum_dust','mythicmetals:banglum_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:banglum_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:banglum_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:banglum_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:banglum_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:banglum_ingot"
        },
    "output": {
        "item": "mythicmetals:banglum_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:banglum_ingot', 'mythicmetals:banglum_dust').xp(0.2)
    event.blasting('mythicmetals:banglum_ingot', 'mythicmetals:banglum_dust').xp(0.1)
    event.smelting('mythicmetals:banglum_ingot', '#c:banglum_ores').xp(0.2)
    event.blasting('mythicmetals:banglum_ingot', '#c:banglum_ores').xp(0.1)
    //palladium
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:palladium_ores"
		},
	"output": {
		"item": "mythicmetals:palladium_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:palladium_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:palladium_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:palladium_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:palladium_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_palladium",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:palladium_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_palladium",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:palladium_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_palladium",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:palladium_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:palladium_dust','mythicmetals:palladium_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:palladium_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:palladium_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:palladium_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:palladium_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:palladium_ingot"
        },
    "output": {
        "item": "mythicmetals:palladium_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:palladium_ingot', 'mythicmetals:palladium_dust').xp(0.2)
    event.blasting('mythicmetals:palladium_ingot', 'mythicmetals:palladium_dust').xp(0.1)
    event.smelting('mythicmetals:palladium_ingot', '#c:palladium_ores').xp(0.2)
    //aquarium
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "mythicmetals:aquarium_ores"
		},
	"output": {
		"item": "mythicmetals:aquarium_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "mythicmetals:aquarium_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:aquarium_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "mythicmetals:aquarium_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:aquarium_dust",
		"count": 3
		}]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:aquarium_ores"
		},
	"output": {
		"item": "mythicmetals:aquarium_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:aquarium_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:aquarium_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:aquarium_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:aquarium_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_aquarium",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:aquarium_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_aquarium",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:aquarium_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_aquarium",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:aquarium_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:aquarium_dust','mythicmetals:aquarium_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:aquarium_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:aquarium_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:aquarium_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:aquarium_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:aquarium_ingot"
        },
    "output": {
        "item": "mythicmetals:aquarium_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:aquarium_ingot', 'mythicmetals:aquarium_dust').xp(0.2)
    event.blasting('mythicmetals:aquarium_ingot', 'mythicmetals:aquarium_dust').xp(0.1)
    event.smelting('mythicmetals:aquarium_ingot', '#c:aquarium_ores').xp(0.2)
    event.blasting('mythicmetals:aquarium_ingot', '#c:aquarium_ores').xp(0.1)
    //osmium
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:osmium_ores"
		},
	"output": {
		"item": "mythicmetals:osmium_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:osmium_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:osmium_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:osmium_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:osmium_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_osmium",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:osmium_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_osmium",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:osmium_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_osmium",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:osmium_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:osmium_dust','mythicmetals:osmium_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:osmium_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:osmium_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:osmium_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:osmium_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:osmium_ingot"
        },
    "output": {
        "item": "mythicmetals:osmium_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:osmium_ingot', 'mythicmetals:osmium_dust').xp(0.2)
    event.blasting('mythicmetals:osmium_ingot', 'mythicmetals:osmium_dust').xp(0.1)
    event.remove({id: 'createplus:createplus/ore_processing/osmium/mythicmetals/smelting'})
    event.remove({id: 'createplus:createplus/ore_processing/osmium/mythicmetals/blasting'})
    //midas_gold
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "mythicmetals:midas_gold_ores"
		},
	"output": {
		"item": "mythicmetals:midas_gold_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "mythicmetals:midas_gold_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:midas_gold_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "mythicmetals:midas_gold_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:midas_gold_dust",
		"count": 3
		}]
    })
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:midas_gold_ores"
		},
	"output": {
		"item": "mythicmetals:midas_gold_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:midas_gold_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:midas_gold_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:midas_gold_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:midas_gold_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_midas_gold",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:midas_gold_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_midas_gold",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:midas_gold_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_midas_gold",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:midas_gold_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:midas_gold_dust','mythicmetals:midas_gold_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:midas_gold_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:midas_gold_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:midas_gold_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:midas_gold_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:midas_gold_ingot"
        },
    "output": {
        "item": "mythicmetals:midas_gold_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:midas_gold_ingot', 'mythicmetals:midas_gold_dust').xp(0.2)
    event.blasting('mythicmetals:midas_gold_ingot', 'mythicmetals:midas_gold_dust').xp(0.1)
    event.smelting('mythicmetals:midas_gold_ingot', '#mythicmetals:midas_gold_ores').xp(0.2)
    event.smelting('mythicmetals:midas_gold_ingot', '#c:midas_gold_ores').xp(0.2)
    event.blasting('mythicmetals:midas_gold_ingot', '#c:midas_gold_ores').xp(0.1)
    //mythril
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:mythril_ores"
		},
	"output": {
		"item": "mythicmetals:mythril_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:mythril_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:mythril_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:mythril_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:mythril_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_mythril",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:mythril_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_mythril",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:mythril_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_mythril",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:mythril_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:mythril_dust','mythicmetals:mythril_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:mythril_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:mythril_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:mythril_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:mythril_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:mythril_ingot"
        },
    "output": {
        "item": "mythicmetals:mythril_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:mythril_ingot', 'mythicmetals:mythril_dust').xp(0.2)
    event.blasting('mythicmetals:mythril_ingot', 'mythicmetals:mythril_dust').xp(0.1)
    event.smelting('mythicmetals:mythril_ingot', '#c:mythril_ores').xp(0.2)
    //adamantite
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:adamantite_ores"
		},
	"output": {
		"item": "mythicmetals:adamantite_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:adamantite_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:adamantite_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:adamantite_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:adamantite_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_adamantite",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:adamantite_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_adamantite",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:adamantite_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_adamantite",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:adamantite_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:adamantite_dust','mythicmetals:adamantite_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:adamantite_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:adamantite_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:adamantite_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:adamantite_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:adamantite_ingot"
        },
    "output": {
        "item": "mythicmetals:adamantite_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:adamantite_ingot', 'mythicmetals:adamantite_dust').xp(0.2)
    event.blasting('mythicmetals:adamantite_ingot', 'mythicmetals:adamantite_dust').xp(0.1)
    event.smelting('mythicmetals:adamantite_ingot', '#c:adamantite_ores').xp(0.2)
    event.smelting('mythicmetals:adamantite_ingot', 'mythicmetals:raw_adamantite').xp(0.2)
    //orichalcum
	event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
		"tag": "c:orichalcum_ores"
		},
	"output": {
		"item": "mythicmetals:orichalcum_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "tag": "c:orichalcum_ores"
        },
    "item_outputs": [{
        "item": "mythicmetals:orichalcum_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "techreborn:grinder",
	"power": 5,
	"time": 200,
	"ingredients": [
		{
		"tag": "c:orichalcum_ores"
		}
		],
	"results": [
		{
		"item": "mythicmetals:orichalcum_dust",
		"count": 3
		}]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:raw_orichalcum",
        "count": 2
        },
    "item_outputs": [{
        "item": "mythicmetals:orichalcum_dust",
        "amount": 3
        }]
    })
    event.custom({
	"type": "indrev:pulverize",
	"ingredients": {
        "item": "mythicmetals:raw_orichalcum",
        "count": 2
	    },
	"output": {
		"item": "mythicmetals:orichalcum_dust",
		"count": 3
		},
	"processTime": 200,
	})
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_orichalcum",
        "count": 2
        }],
    "results": [
        {
        "item": "mythicmetals:orichalcum_dust",
        "count": 3
        }]
    })
    event.recipes.createCrushing('mythicmetals:orichalcum_dust','mythicmetals:orichalcum_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:orichalcum_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:orichalcum_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:orichalcum_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:orichalcum_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:orichalcum_ingot"
        },
    "output": {
        "item": "mythicmetals:orichalcum_dust"
        },
    "processTime": 200,
    })
    event.smelting('mythicmetals:orichalcum_ingot', 'mythicmetals:orichalcum_dust').xp(0.2)
    event.blasting('mythicmetals:orichalcum_ingot', 'mythicmetals:orichalcum_dust').xp(0.1)
    event.smelting('mythicmetals:orichalcum_ingot', '#c:orichalcum_ores').xp(0.2)
    //Durasteel
    event.recipes.createMixing('6x mythicmetals:durasteel_ingot', ['#c:manganese_ores', '#mythicmetals:quadrillum_ores']).heated()
    event.recipes.createMixing('6x mythicmetals:durasteel_ingot', ['#c:manganese_ores', '#c:quadrillum_ores']).heated()
    event.recipes.createMixing('3x mythicmetals:durasteel_ingot', ['mythicmetals:raw_quadrillum', 'mythicmetals:raw_manganese']).heated()
    event.recipes.createMixing('mythicmetals:durasteel_ingot', ['mythicmetals:quadrillum_dust', 'mythicmetals:manganese_dust']).heated()
    event.recipes.createCrushing('mythicmetals:durasteel_dust', 'mythicmetals:durasteel_ingot')
    event.smelting('mythicmetals:durasteel_ingot', 'mythicmetals:durasteel_dust').xp(0.2)
    event.blasting('mythicmetals:durasteel_ingot', 'mythicmetals:durasteel_dust').xp(0.1)
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:durasteel_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:durasteel_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:durasteel_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:durasteel_dust"
        }]
    })
    event.shapeless('2x mythicmetals:durasteel_dust', ['mythicmetals:quadrillum_dust', 'mythicmetals:manganese_dust'])
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "item": "mythicmetals:quadrillum_ingot"
        },
        {
        "item": "mythicmetals:manganese_ingot"
        }],
    "item_outputs": [{
        "item": "mythicmetals:durasteel_ingot"
        }]
    })
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "item": "mythicmetals:raw_quadrillum"
        },
        {
        "item": "mythicmetals:raw_manganese"
        }],
    "item_outputs": [{
        "item": "mythicmetals:durasteel_ingot",
        "amount": 3
        }]
    })
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "tag": "c:quadrillum_ores"
        },
        {
        "tag": "c:manganese_ores"
        }],
    "item_outputs": [{
        "item": "mythicmetals:durasteel_ingot",
        "amount": 6
        }]
    })
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "item": "mythicmetals:quadrillum_dust"
        },
        {
        "item": "mythicmetals:manganese_dust"
        }],
    "item_outputs": [{
        "item": "mythicmetals:durasteel_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:durasteel_ingot"
        },
    "output": {
        "item": "mythicmetals:durasteel_dust"
        },
    "processTime": 200,
    })
    event.custom({
	"type": "techreborn:alloy_smelter",
	"power": 6,
	"time": 200,
	"ingredients": [
		{
		"item": "mythicmetals:quadrillum_ingot"
		},
		{
		"item": "mythicmetals:manganese_ingot"
		}],
	"results": [
		{
		"item": "mythicmetals:durasteel_ingot"
		}]
	})
     event.custom({
	"type": "techreborn:alloy_smelter",
	"power": 6,
	"time": 200,
	"ingredients": [
		{
		"item": "mythicmetals:quadrillum_dust"
		},
		{
		"item": "mythicmetals:manganese_dust"
		}],
	"results": [
		{
		"item": "mythicmetals:durasteel_ingot"
		}]
	})
    event.custom({
    "type": "techreborn:alloy_smelter",
    "power": 6,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:raw_quadrillum"
        },
         {
        "item": "mythicmetals:raw_manganese"
        }],
    "results": [
        {
        "item": "mythicmetals:durasteel_ingot",
        "count": 3
        }]
    })
    event.custom({
    "type": "techreborn:alloy_smelter",
    "power": 6,
    "time": 200,
    "ingredients": [
        {
        "tag": "mythicmetals:quadrillum_ores"
        },
         {
        "tag": "c:manganese_ores"
        }],
    "results": [
        {
        "item": "mythicmetals:durasteel_ingot",
        "count": 6
        }]
    })
    event.custom({
    "type": "techreborn:alloy_smelter",
    "power": 6,
    "time": 200,
    "ingredients": [
        {
        "tag": "c:quadrillum_ores"
        },
        {
        "tag": "c:manganese_ores"
        }],
    "results": [
        {
        "item": "mythicmetals:durasteel_ingot",
        "count": 6
        }]
    })
    event.custom({
    "type": "indrev:infuse",
    "ingredients":  [{
        "item": "mythicmetals:raw_quadrillum"
        },
        {
        "item": "mythicmetals:raw_manganese"
         }],
    "output": {
         "item": "mythicmetals:durasteel_ingot",
        "count": 3
        },
    "processTime": 200
    })
    event.custom({
    "type": "indrev:infuse",
    "ingredients":  [{
        "item": "mythicmetals:quadrillum_ingot"
        },
        {
        "item": "mythicmetals:manganese_ingot"
        }],
    "output": {
        "item": "mythicmetals:durasteel_ingot"
        },
    "processTime": 200
    })
    event.custom({
    "type": "indrev:infuse",
    "ingredients":  [{
        "item": "mythicmetals:quadrillum_dust"
        },
        {
        "item": "mythicmetals:manganese_dust"
         }],
    "output": {
        "item": "mythicmetals:durasteel_ingot"
        },
    "processTime": 200
    })
    event.custom({
    "type": "indrev:infuse",
    "ingredients":  [{
        "tag": "mythicmetals:quadrillum_ores"
        },
        {
        "tag": "c:manganese_ores"
         }],
    "output": {
        "item": "mythicmetals:durasteel_ingot",
        "count": 6
        },
    "processTime": 200
    })
    event.custom({
    "type": "indrev:infuse",
    "ingredients":  [{
        "tag": "c:quadrillum_ores"
        },
        {
        "tag": "c:manganese_ores"
         }],
    "output": {
        "item": "mythicmetals:durasteel_ingot",
        "count": 6
        },
    "processTime": 200
    })
    event.shapeless('2x mythicmetals:durasteel_dust', ['mythicmetals:quadrillum_dust', 'mythicmetals:manganese_dust'])
    event.recipes.createMixing('2x mythicmetals:durasteel_dust', ['mythicmetals:quadrillum_dust', 'mythicmetals:manganese_dust'])
    //Hallowed
    event.recipes.createCrushing('mythicmetals:hallowed_dust', 'mythicmetals:hallowed_ingot')
    event.recipes.createMixing('mythicmetals:hallowed_dust', ['mythicmetals:mythril_dust', 'mythicmetals:adamantite_dust', 'mythicmetals:orichalcum_dust'])
    event.shapeless('mythicmetals:hallowed_dust', ['mythicmetals:mythril_dust', 'mythicmetals:adamantite_dust', 'mythicmetals:orichalcum_dust'])
    event.recipes.createMixing('mythicmetals:hallowed_ingot', ['mythicmetals:mythril_dust', 'mythicmetals:adamantite_dust', 'mythicmetals:orichalcum_dust']).heated()
    event.recipes.createMixing('mythicmetals:hallowed_ingot', ['mythicmetals:raw_mythril', 'mythicmetals:raw_adamantite', 'mythicmetals:raw_orichalcum']).heated()
    event.recipes.createMixing('2x mythicmetals:hallowed_ingot', ['#c:mythril_ores', '#c:adamantite_ores', '#c:orichalcum_ores']).heated()
    event.smelting('mythicmetals:hallowed_ingot', 'mythicmetals:hallowed_dust').xp(0.2)
    event.blasting('mythicmetals:hallowed_ingot', 'mythicmetals:hallowed_dust').xp(0.1)
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:hallowed_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:hallowed_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:hallowed_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:hallowed_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "tag": "c:orichalcum_ores"
        },
        {
        "tag": "c:adamantite_ores"
        },
        {
        "tag": "c:mythril_ores"
        }],
    "item_outputs": [{
        "item": "mythicmetals:hallowed_ingot",
        "amount": 2
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:hallowed_ingot"
        },
    "output": {
        "item": "mythicmetals:hallowed_dust"
        },
    "processTime": 200,
    })
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "item": "mythicmetals:orichalcum_ingot"
        },
        {
        "item": "mythicmetals:adamantite_ingot"
        },
        {
        "item": "mythicmetals:mythril_ingot"
        }],
    "item_outputs": [{
        "item": "mythicmetals:hallowed_ingot"
        }]
    })
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "item": "mythicmetals:orichalcum_dust"
        },
        {
        "item": "mythicmetals:adamantite_dust"
        },
        {
        "item": "mythicmetals:mythril_dust"
        }],
    "item_outputs": [{
        "item": "mythicmetals:hallowed_dust"
        }]
    })
    //celestium
    event.recipes.createCrushing('mythicmetals:celestium_dust', 'mythicmetals:celestium_ingot')
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:celestium_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:celestium_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:celestium_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:celestium_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:celestium_ingot"
        },
    "output": {
        "item": "mythicmetals:celestium_dust"
        },
    "processTime": 200,
    })
    event.recipes.createMixing('mythicmetals:celestium_ingot', [ 
    'mythicmetals:unobtainium', 
    'mythicmetals:carmot_ingot', 
    'mythicmetals:star_platinum', 
    'mythicmetals:kyber_ingot'
    ]).superheated()
    event.recipes.createMixing('mythicmetals:celestium_ingot', [ 
    'mythicmetals:unobtainium', 
    'mythicmetals:carmot_dust', 
    'mythicmetals:starrite', 
    'modern_industrialization:platinum_dust',
    'mythicmetals:kyber_dust'
    ]).heated()
    event.recipes.createMixing('mythicmetals:celestium_ingot', [ 
    'mythicmetals:unobtainium', 
    'mythicmetals:carmot_dust', 
    'mythicmetals:star_platinum_dust', 
    'mythicmetals:kyber_dust'
    ]).heated()
    event.smelting('mythicmetals:celestium_ingot', 'mythicmetals:celestium_dust').xp(0.2)
    event.blasting('mythicmetals:celestium_ingot', 'mythicmetals:celestium_dust').xp(0.1)
    event.recipes.createMixing('mythicmetals:celestium_dust', [ 
    'mythicmetals:unobtainium', 
    'mythicmetals:carmot_dust', 
    'mythicmetals:starrite', 
    'modern_industrialization:platinum_dust',
    'mythicmetals:kyber_dust'
    ])
    event.recipes.createMixing('mythicmetals:celestium_dust', [ 
    'mythicmetals:unobtainium', 
    'mythicmetals:carmot_dust', 
    'mythicmetals:star_platinum_dust', 
    'mythicmetals:kyber_dust'
    ])
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "item": "mythicmetals:unobtainium"
        },
        {
        "tag": "atb:carmot_input"
        },
        {
        "tag": "atb:kyber_input"
        },
        {
        "tag": "atb:star_platinum_input"
        }],
    "item_outputs": [{
        "item": "mythicmetals:celestium_ingot"
        }]
    })
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "tag": "c:unobtainium_ores"
        },
        {
        "tag": "c:carmot_ores"
        },
        {
        "tag": "c:kyber_ores"
        },
        {
        "tag": "atb:star_platinum_input",
        "amount": 2
        }],
    "item_outputs": [{
        "item": "mythicmetals:celestium_ingot",
        "amount": 2
        }]
    })
    event.recipes.createMixing('2x mythicmetals:celestium_ingot', [
    '#c:unobtainium_ores',
    '#c:platinum_ores',
    '#c:starrite_ores',
    '#c:carmot_ores',
    '#c:kyber_ores'
    ]).superheated()
    event.recipes.createMixing('2x mythicmetals:celestium_ingot', [
    '#c:unobtainium_ores',
    '2x #c:platinum_ores',
    '#c:starrite_ores',
    '#c:kyber_ores'
    ]).superheated()
    //Metallurgium
    event.smelting('mythicmetals:metallurgium_ingot', 'mythicmetals:metallurgium_dust').xp(0.2)
    event.blasting('mythicmetals:metallurgium_ingot', 'mythicmetals:metallurgium_dust').xp(0.1)
    event.recipes.createCrushing('mythicmetals:metallurgium_dust', 'mythicmetals:metallurgium_ingot')
    event.recipes.createMixing('mythicmetals:metallurgium_ingot', [
    'mythicmetals:unobtainium',
    'mythicmetals:orichalcum_dust',
    'mythicmetals:adamantite_dust',
    'mythicmetals:mythril_dust',
    'mythicmetals:palladium_dust'
    ]).heated()
    event.recipes.createMixing('mythicmetals:metallurgium_dust', [
    'mythicmetals:unobtainium',
    'mythicmetals:orichalcum_dust',
    'mythicmetals:adamantite_dust',
    'mythicmetals:mythril_dust',
    'mythicmetals:palladium_dust'
    ])
    event.recipes.createMixing('mythicmetals:metallurgium_ingot', [
    'mythicmetals:unobtainium',
    'mythicmetals:hallowed_dust',
    'mythicmetals:palladium_dust'
    ]).heated()
    event.recipes.createMixing('mythicmetals:metallurgium_ingot', [
    'mythicmetals:unobtainium',
    'mythicmetals:hallowed_ingot',
    'mythicmetals:palladium_ingot'
    ]).superheated()
    event.recipes.createMixing('mythicmetals:metallurgium_dust', [
    'mythicmetals:unobtainium',
    'mythicmetals:hallowed_dust',
    'mythicmetals:palladium_dust'
    ])
    event.recipes.createMixing('2x mythicmetals:metallurgium_ingot', [
    '#c:unobtainium_ores',
    '#c:palladium_ores',
    '#c:orichalcum_ores',
    '#c:mythril_ores',
    '#c:adamantite_ores'
    ]).superheated()
    event.recipes.createMixing('2x mythicmetals:metallurgium_ingot', [
    '#c:unobtainium_ores',
    '#c:palladium_ores',
    '2x #atb:hallowed_input'
    ]).superheated()
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "tag": "c:unobtainium_ores"
        },
        {
        "tag": "c:palladium_ores"
        },
        {
        "item": "mythicmetals:hallowed_ingot",
        "amount": 2
        }],
    "item_outputs": [{
        "item": "mythicmetals:metallurgium_ingot",
        "amount": 2
        }]
    })
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "tag": "mythicmetals:unobtainium"
        },
        {
        "item": "mythicmetals:palladium_dust"
        },
        {
        "item": "mythicmetals:hallowed_dust"
        }],
    "item_outputs": [{
        "item": "mythicmetals:metallurgium_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": [{
        "tag": "mythicmetals:unobtainium"
        },
        {
        "item": "mythicmetals:palladium_ingot"
        },
        {
        "item": "mythicmetals:hallowed_ingot"
        }],
    "item_outputs": [{
        "item": "mythicmetals:metallurgium_ingot"
        }]
    })
    event.custom({
    "type": "techreborn:grinder",
    "power": 5,
    "time": 200,
    "ingredients": [
        {
        "item": "mythicmetals:metallurgium_ingot"
        }],
    "results": [
        {
        "item": "mythicmetals:metallurgium_dust"
        }]
    })
    event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
        "item": "mythicmetals:metallurgium_ingot"
        },
    "item_outputs": [{
        "item": "mythicmetals:metallurgium_dust"
        }]
    })
    event.custom({
    "type": "indrev:pulverize",
    "ingredients": {
        "item": "mythicmetals:metallurgium_ingot"
        },
    "output": {
        "item": "mythicmetals:metallurgium_dust"
        },
    "processTime": 200,
    })
})