/* 
 	A very simple event emitter
*/
;(function(severino) {
	"use strict";
	
	var bind = function(emitter, event, callback, once) {
		return (function() {
			if(once) {
				emitter.off(event);
			}

			return callback.apply(undefined, arguments);
		})
	}
	
	var _severino = function() {
		var _events = {};
		
		var Severino = function() {};
		
		Severino.prototype.on = function(event, callback, once) {
			if (!_events[event]) {
				_events[event] = null;
			};

			_events[event] = bind(this, event, callback, once);
			return this;
		}
		
		Severino.prototype.off = function(event) {
			return delete(_events[event]);
		}
		
		Severino.prototype.emit = function() {
			var args = [].slice.call(arguments, 0)
				,	event = args.shift()
			;
			
			_events[event].apply(undefined, args);
			return this;
		}
		
		Severino.prototype.once = function(event, callback) {
			this.on(event, callback, true);
		}
		
		Severino.prototype.events = function(event) {
			return (_events[event] || _events);
		}
		
		return new Severino();
	}
	
	severino.wake = _severino;
})(this.Severino = {});