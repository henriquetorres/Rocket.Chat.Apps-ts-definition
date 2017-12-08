export enum RocketletStatus {
    /** The status is known, aka not been constructed the proper way. */
    UNKNOWN = 'unknown',
    /** The Rocketlet has been constructed but that's it. */
    CONSTRUCTED = 'constructed',
    /** The Rocketlet's `initialize()` was called and returned true. */
    INITIALIZED = 'initialized',
    /** The Rocketlet's `onEnable()` was called, returned true, and this was done automatically (system start up). */
    AUTO_ENABLED = 'auto_enabled',
    /** The Rocketlet's `onEnable()` was called, returned true, and this was done by the user such as installing a new one. */
    MANUALLY_ENABLED = 'manually_enabled',
    /** The Rocketlet was disabled due to an unrecoverable error being thrown. */
    ERROR_DISABLED = 'error_disabled',
    /** The Rocketlet was manually disabled by a user. */
    MANUALLY_DISABLED = 'manually_disabled',
    /** The Rocketlet was disabled due to other circumstances. */
    DISABLED = 'disabled',
}
