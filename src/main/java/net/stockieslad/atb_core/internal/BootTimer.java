package net.stockieslad.atb_core.internal;

import net.stockieslad.atb_core.util.SafeStopWatch;
import org.apache.commons.lang3.time.StopWatch;

import java.util.concurrent.TimeUnit;

public class BootTimer {
    public static final StopWatch STOP_WATCH = new SafeStopWatch();

    public static long getTimeInSeconds() {
        return STOP_WATCH.getTime(TimeUnit.SECONDS);
    }
}
