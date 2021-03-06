"use strict";

const spawn = require("child_process").spawn;
const path  = require("path");
const fs    = require("fs");

class Optimizer {

    /**
     * Optimizer Base Constructor
     *
     * @constructor
     */
    constructor() {
    }

    /**
     * Create spawn process
     *
     * @public
     * @return ChildProcess
     */
    spawnProcess() {
        return spawn(this.command, this.args);
    }

    /**
     * Find executable binary path
     *
     * @protected
     * @param String binName
     * @return String
     * @throws Error
     */
    findBin(binName) {
        const binPath = path.resolve(__dirname, "../../bin/", process.platform, binName);

        if ( ! fs.existsSync(binPath) ) {
            throw new Error("Undefined binary: " + binPath);
        }
        return binPath;
    }
}

module.exports= Optimizer;
