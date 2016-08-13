var ajax = {
	get: function(e, t) {
		var s = new XMLHttpRequest;
		s.addEventListener("readystatechange", function() {
		if(4 == this.readyState && 200 == this.status){
				t(!1, this.response, !1);
			}
			else if(422 == this.status){
				t(!0, this.response, !1);
			}else if(404 == this.status){
				t({"code":"1","message":"page not found","status":"404"}, !1, !1);
			}
		}), s.addEventListener("progress", function(e) {
			e.lengthComputable ? t(!1, !1, {
				loaded: e.loaded,
				fileSize: e.total
			}) : t(!1, !1, !1)
		}), s.open("GET", e, !0), s.send()
	},
	getSync:function(address){
        var s=new XMLHttpRequest;
        s.open("GET",address,!1);
        s.send();
        return s.response;
	},
	post: function(e, t, s) {
		var n = new XMLHttpRequest;
		n.addEventListener("readystatechange", function() {
		if(4 == this.readyState && 200 == this.status){
				s(!1, this.response, !1);
			}else if(422 == this.status){
				s(!0, this.response, !1);
			}else if(404 == this.status){
				s({"code":"1","message":"page not found","status":"404"}, !1, !1);
			} 
		}), n.addEventListener("progress", function(e) {
			e.lengthComputable ? s(!1, !1, {
				loaded: e.loaded,
				fileSize: e.total
			}) : s(!1, !1, !1)
		}), n.open("POST", e, !0), n.setRequestHeader('Accept', 'application/json'), n.send(t)
	},
	postSync:function(ad,dt){
        var a=new XMLHttpRequest;
        a.open("POST",ad,!1);
        a.send(dt);
        return a.response;
	}
	,
	exists: function(e) {
		var t = new XMLHttpRequest;
		return t.open("GET", e, !1), t.send(), 404 != t.status
	}
};
