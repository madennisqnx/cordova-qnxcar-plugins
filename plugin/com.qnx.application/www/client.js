/*
 * Copyright 2013-2014.
 * QNX Software Systems Limited. All rights reserved.
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
 * @module qnx.application
 * @static
 * @description Manage applications created using Cordova.
 */

var _ID = "com.qnx.application";

/*
 * Exports are the publicly accessible functions.
 */
module.exports = {
	/**
	 * @description Create a request to start an application.
	 * @param {String} id The ID of the application to start.
	 * @param {Object} data The startup data for the application.
	 */
	start: function (id, data) {
		if (!data || data === undefined) {
			data = "";
		}

		try {
			var value = null,
				args = {
					id: id,
					data: data
				},
				success = function (data, response) {
					value = true;
				},
				fail = function (data, response) {
					value = false;
				};

			window.cordova.exec(success, fail, _ID, 'start', args);
		} catch (e) {
			console.error(e);
		}
		return value;
	},
	/**
	 * @description Retrieve a list of applications installed on the device.
	 * @returns {Object} A collection of installed application objects (Qt, native, and Cordova).
	 * @example
	 * {
	 *    key: {String}{
	 *    name: {String},
	 *    group: {String},
	 *    id: {String},
	 *    uri: {String},
	 *    icon: {String},
	 },
	 * [...]
	 * }
	 */
	getList: function () {
		var value = null,
			success = function (data, response) {
				value = data;
			},
			fail = function (data, response) {
				throw data;
			};

		try {
			window.cordova.exec(success, fail, _ID, 'getList', null);
			return value;
		} catch (e) {
			console.error(e);
		}
	},
};