package net.fluffybumblebee.atb_core;

import net.fabricmc.api.ModInitializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ATBCore implements ModInitializer {
	public static final Logger LOGGER = LoggerFactory.getLogger("atb_core");

	@Override
	public void onInitialize() {
		LOGGER.info("Custom utils for ATB");
	}
}
