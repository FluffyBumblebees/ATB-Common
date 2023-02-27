package net.stockieslad.atb_core.util;

import org.apache.commons.lang3.time.StopWatch;

public class SafeStopWatch extends StopWatch {
    @Override
    public void stop() {
        try {
            super.stop();
        }
        catch (IllegalStateException ignored) {}
    }

    @Override
    public void suspend() {
        try {
            super.suspend();
        }
        catch (IllegalStateException ignored) {}
    }

    @Override
    public void start() {
        try {
            super.start();
        }
        catch (IllegalStateException ignored) {}
    }
}
