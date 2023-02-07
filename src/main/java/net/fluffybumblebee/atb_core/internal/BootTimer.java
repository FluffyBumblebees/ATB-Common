package net.fluffybumblebee.atb_core.internal;

import net.fluffybumblebee.atb_core.util.SafeStopWatch;
import org.apache.commons.lang3.time.StopWatch;

import java.util.concurrent.TimeUnit;

public class BootTimer {
    public static long BOOTSTRAP_TIME_CACHE = 0;
    public static final StopWatch STOP_WATCH = new SafeStopWatch();

    public static long getTimeInSeconds() {
        return STOP_WATCH.getTime(TimeUnit.SECONDS);
    }
    public static long getTimeInSecondsSinceBoot() {
        return getTimeInSeconds() - BOOTSTRAP_TIME_CACHE;
    }
}
