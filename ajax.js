	var ajax = {

		get: function(url, cb) {
			var req = new XMLHttpRequest();
			//cb(error,data,loading);
			req.addEventListener("readystatechange", function() {
				if (this.readyState == 4 && this.status == 200) {
					cb(false, this.response,false);
				} else if (this.status == 404) {
					cb(true, false, false);
				} 
			});
			req.addEventListener('progress', function(e) {
						if (e.lengthComputable) cb(false, false, {
							loaded: e.loaded,
							fileSize: e.total
						});
						else cb(false, false, false);

					});
			req.open("GET", url, true)
			req.send();

		},
		post: function(url, param, cb) {
var req = new XMLHttpRequest();
			//cb(error,data,loading);
			req.addEventListener("readystatechange", function() {
				if (this.readyState == 4 && this.status == 200) {
					cb(false, this.response,false);
				} else if (this.status == 404) {
					cb(true, false, false);
				} 
			});
			req.addEventListener('progress', function(e) {
						if (e.lengthComputable){ cb(false, false, {
													loaded: e.loaded,
													fileSize: e.total
												});}
						else {cb(false, false, false);}

					});
			req.open("POST", url, true);
			req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			req.send(param);
		},
		exists: function(url) {
			var req = new XMLHttpRequest();
			req.open('GET', url, false);
			req.send();
			return req.status != 404;
		}
	}