/*
 * Copyright 2013  QNX Software Systems Limited
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not reproduce, modify or distribute this software except in
 * compliance with the License. You may obtain a copy of the License
 * at: http://www.apache.org/licenses/LICENSE-2.0.
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OF ANY KIND, either express or implied.
 * This file may contain contributions from others, either as
 * contributors under the License or as licensors under other terms.
 * Please review this entire file for other proprietary rights or license
 * notices, as well as the applicable QNX License Guide at
 * http://www.qnx.com/legal/licensing/document_archive/current_matrix.pdf
 * for other information.
 */

/**
 * The event context for application events
 */

var _application = require("./application");

/**
 * Exports are the publicly accessible functions
 */
module.exports = {
    /**
     * Method called when the first listener is added for an event
     * @param event {String} The event name
     * @param trigger {Function} The trigger function to call when the event is fired
     */
    addEventListener: function (event, trigger) {
        if (event && trigger) {
            switch (event) {
                case "pause":
                    _application.setPauseTrigger(trigger);
                    break;
                case "resume":
                    _application.setResumeTrigger(trigger);
                    break;
                case "reselect":
                    _application.setReselectTrigger(trigger);
                    break;
                case "appdata":
                    _application.setAppDataTrigger(trigger);
                    break;
            }
        }
    },

    /**
     * Method called when the last listener is removed for an event
     * @param event {String} The event name
     */
    removeEventListener: function (event) {
        if (event) {
            switch (event) {
                case "pause":
                    _application.setPauseTrigger(null);
                    break;
                case "resume":
                    _application.setResumeTrigger(null);
                    break;
                case "reselect":
                    _application.setReselectTrigger(null);
                    break;
                case "appdata":
                    _application.setAppDataTrigger(null);
                    break;
            }
        }
    }
};
