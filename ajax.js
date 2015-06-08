var ajax = {
	get: function(e, t) {
		var s = new XMLHttpRequest;
		s.addEventListener("readystatechange", function() {
			4 == this.readyState && 200 == this.status ? t(!1, this.response, !1) : 404 == this.status && t(!0, !1, !1)
		}), s.addEventListener("progress", function(e) {
			e.lengthComputable ? t(!1, !1, {
				loaded: e.loaded,
				fileSize: e.total
			}) : t(!1, !1, !1)
		}), s.open("GET", e, !0), s.send()
	},
	post: function(e, t, s) {
		var n = new XMLHttpRequest;
		n.addEventListener("readystatechange", function() {
			4 == this.readyState && 200 == this.status ? s(!1, this.response, !1) : 404 == this.status && s(!0, !1, !1)
		}), n.addEventListener("progress", function(e) {
			e.lengthComputable ? s(!1, !1, {
				loaded: e.loaded,
				fileSize: e.total
			}) : s(!1, !1, !1)
		}), n.open("POST", e, !0), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(t)
	},
	exists: function(e) {
		var t = new XMLHttpRequest;
		return t.open("GET", e, !1), t.send(), 404 != t.status
	}
};