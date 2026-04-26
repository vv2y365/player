(function() {
	function Ne(y) {
		return y instanceof Error ? y : new Error(String(y));
	}
	async function nt(y = {}) {
		var m, f = y, b = !!globalThis.window, E = !!globalThis.WorkerGlobalScope;
		globalThis.process?.versions?.node && globalThis.process?.type;
		var T = "./this.program", M = (e, r) => {
			throw r;
		}, D = self.location.href, N = "";
		function Z(e) {
			return f.locateFile ? f.locateFile(e, N) : N + e;
		}
		var x, V;
		if (b || E) {
			try {
				N = new URL(".", D).href;
			} catch {}
			E && (V = (e) => {
				var r = new XMLHttpRequest();
				return r.open("GET", e, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
			}), x = async (e) => {
				var r = await fetch(e, { credentials: "same-origin" });
				if (r.ok) return r.arrayBuffer();
				throw new Error(r.status + " : " + r.url);
			};
		}
		var L = console.log.bind(console), z = console.error.bind(console), Q, Se = !1, $e;
		function ur(e, r) {
			e || j(r);
		}
		var fr, dr, I, K, Y, ae, k, w, cr, vr, U, hr, mr = !1;
		function pr() {
			var e = We.buffer;
			I = new Int8Array(e), Y = new Int16Array(e), f.HEAPU8 = K = new Uint8Array(e), ae = new Uint16Array(e), k = new Int32Array(e), w = new Uint32Array(e), cr = new Float32Array(e), vr = new Float64Array(e), U = new BigInt64Array(e), hr = new BigUint64Array(e);
		}
		function lt() {
			if (f.preRun) for (typeof f.preRun == "function" && (f.preRun = [f.preRun]); f.preRun.length;) wt(f.preRun.shift());
			gr(_r);
		}
		function ut() {
			mr = !0, !f.noFSInit && !o.initialized && o.init(), ee.init(), Be.ca(), o.ignorePermissions = !1;
		}
		function ft() {
			if (f.postRun) for (typeof f.postRun == "function" && (f.postRun = [f.postRun]); f.postRun.length;) gt(f.postRun.shift());
			gr(wr);
		}
		function j(e) {
			f.onAbort?.(e), e = "Aborted(" + e + ")", z(e), Se = !0, e += ". Build with -sASSERTIONS for more info.";
			var r = new WebAssembly.RuntimeError(e);
			throw dr?.(r), r;
		}
		var He;
		function dt() {
			return f.locateFile ? Z("ffmpeg.wasm") : new URL("ffmpeg.wasm", "" + self.location.href).href;
		}
		function ct(e) {
			if (e == He && Q) return new Uint8Array(Q);
			if (V) return V(e);
			throw "both async and sync fetching of the wasm failed";
		}
		async function vt(e) {
			if (!Q) try {
				var r = await x(e);
				return new Uint8Array(r);
			} catch {}
			return ct(e);
		}
		async function ht(e, r) {
			try {
				var t = await vt(e);
				return await WebAssembly.instantiate(t, r);
			} catch (n) {
				z(`failed to asynchronously prepare wasm: ${n}`), j(n);
			}
		}
		async function mt(e, r, t) {
			if (!e) try {
				var n = fetch(r, { credentials: "same-origin" });
				return await WebAssembly.instantiateStreaming(n, t);
			} catch (i) {
				z(`wasm streaming compile failed: ${i}`), z("falling back to ArrayBuffer instantiation");
			}
			return ht(r, t);
		}
		function pt() {
			return { a: Mo };
		}
		async function yt() {
			function e(n, i) {
				return Be = n.exports, Ro(Be), pr(), Be;
			}
			function r(n) {
				return e(n.instance);
			}
			var t = pt();
			return f.instantiateWasm ? new Promise((n, i) => {
				f.instantiateWasm(t, (s, a) => {
					n(e(s, a));
				});
			}) : (He ??= dt(), r(await mt(Q, He, t)));
		}
		class yr {
			name = "ExitStatus";
			constructor(r) {
				this.message = `Program terminated with exit(${r})`, this.status = r;
			}
		}
		var gr = (e) => {
			for (; e.length > 0;) e.shift()(f);
		}, wr = [], gt = (e) => wr.push(e), _r = [], wt = (e) => _r.push(e), xe = !0, Er = globalThis.TextDecoder && new TextDecoder(), br = (e, r, t, n) => {
			var i = r + t;
			if (n) return i;
			for (; e[r] && !(r >= i);) ++r;
			return r;
		}, le = (e, r = 0, t, n) => {
			var i = br(e, r, t, n);
			if (i - r > 16 && e.buffer && Er) return Er.decode(e.subarray(r, i));
			for (var s = ""; r < i;) {
				var a = e[r++];
				if (!(a & 128)) {
					s += String.fromCharCode(a);
					continue;
				}
				var l = e[r++] & 63;
				if ((a & 224) == 192) {
					s += String.fromCharCode((a & 31) << 6 | l);
					continue;
				}
				var u = e[r++] & 63;
				if ((a & 240) == 224 ? a = (a & 15) << 12 | l << 6 | u : a = (a & 7) << 18 | l << 12 | u << 6 | e[r++] & 63, a < 65536) s += String.fromCharCode(a);
				else {
					var c = a - 65536;
					s += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
				}
			}
			return s;
		}, pe = (e, r, t) => e ? le(K, e, r, t) : "", _t = (e, r, t, n) => j(`Assertion failed: ${pe(e)}, at: ` + [
			r ? pe(r) : "unknown filename",
			t,
			n ? pe(n) : "unknown function"
		]);
		class Et {
			constructor(r) {
				this.excPtr = r, this.ptr = r - 24;
			}
			set_type(r) {
				w[this.ptr + 4 >> 2] = r;
			}
			get_type() {
				return w[this.ptr + 4 >> 2];
			}
			set_destructor(r) {
				w[this.ptr + 8 >> 2] = r;
			}
			get_destructor() {
				return w[this.ptr + 8 >> 2];
			}
			set_caught(r) {
				r = r ? 1 : 0, I[this.ptr + 12] = r;
			}
			get_caught() {
				return I[this.ptr + 12] != 0;
			}
			set_rethrown(r) {
				r = r ? 1 : 0, I[this.ptr + 13] = r;
			}
			get_rethrown() {
				return I[this.ptr + 13] != 0;
			}
			init(r, t) {
				this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(t);
			}
			set_adjusted_ptr(r) {
				w[this.ptr + 16 >> 2] = r;
			}
			get_adjusted_ptr() {
				return w[this.ptr + 16 >> 2];
			}
		}
		var kr = 0, bt = 0, kt = (e, r, t) => {
			throw new Et(e).init(r, t), kr = e, bt++, kr;
		}, P = {
			isAbs: (e) => e.charAt(0) === "/",
			splitPath: (e) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
			normalizeArray: (e, r) => {
				for (var t = 0, n = e.length - 1; n >= 0; n--) {
					var i = e[n];
					i === "." ? e.splice(n, 1) : i === ".." ? (e.splice(n, 1), t++) : t && (e.splice(n, 1), t--);
				}
				if (r) for (; t; t--) e.unshift("..");
				return e;
			},
			normalize: (e) => {
				var r = P.isAbs(e), t = e.slice(-1) === "/";
				return e = P.normalizeArray(e.split("/").filter((n) => !!n), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
			},
			dirname: (e) => {
				var r = P.splitPath(e), t = r[0], n = r[1];
				return !t && !n ? "." : (n && (n = n.slice(0, -1)), t + n);
			},
			basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
			join: (...e) => P.normalize(e.join("/")),
			join2: (e, r) => P.normalize(e + "/" + r)
		}, Tt = () => (e) => crypto.getRandomValues(e), Tr = (e) => {
			(Tr = Tt())(e);
		}, ue = {
			resolve: (...e) => {
				for (var r = "", t = !1, n = e.length - 1; n >= -1 && !t; n--) {
					var i = n >= 0 ? e[n] : o.cwd();
					if (typeof i != "string") throw new TypeError("Arguments to path.resolve must be strings");
					if (!i) return "";
					r = i + "/" + r, t = P.isAbs(i);
				}
				return r = P.normalizeArray(r.split("/").filter((s) => !!s), !t).join("/"), (t ? "/" : "") + r || ".";
			},
			relative: (e, r) => {
				e = ue.resolve(e).slice(1), r = ue.resolve(r).slice(1);
				function t(c) {
					for (var v = 0; v < c.length && c[v] === ""; v++);
					for (var d = c.length - 1; d >= 0 && c[d] === ""; d--);
					return v > d ? [] : c.slice(v, d - v + 1);
				}
				for (var n = t(e.split("/")), i = t(r.split("/")), s = Math.min(n.length, i.length), a = s, l = 0; l < s; l++) if (n[l] !== i[l]) {
					a = l;
					break;
				}
				for (var u = [], l = a; l < n.length; l++) u.push("..");
				return u = u.concat(i.slice(a)), u.join("/");
			}
		}, Ve = [], Ke = (e) => {
			for (var r = 0, t = 0; t < e.length; ++t) {
				var n = e.charCodeAt(t);
				n <= 127 ? r++ : n <= 2047 ? r += 2 : n >= 55296 && n <= 57343 ? (r += 4, ++t) : r += 3;
			}
			return r;
		}, Sr = (e, r, t, n) => {
			if (!(n > 0)) return 0;
			for (var i = t, s = t + n - 1, a = 0; a < e.length; ++a) {
				var l = e.codePointAt(a);
				if (l <= 127) {
					if (t >= s) break;
					r[t++] = l;
				} else if (l <= 2047) {
					if (t + 1 >= s) break;
					r[t++] = 192 | l >> 6, r[t++] = 128 | l & 63;
				} else if (l <= 65535) {
					if (t + 2 >= s) break;
					r[t++] = 224 | l >> 12, r[t++] = 128 | l >> 6 & 63, r[t++] = 128 | l & 63;
				} else {
					if (t + 3 >= s) break;
					r[t++] = 240 | l >> 18, r[t++] = 128 | l >> 12 & 63, r[t++] = 128 | l >> 6 & 63, r[t++] = 128 | l & 63, a++;
				}
			}
			return r[t] = 0, t - i;
		}, Ge = (e, r, t) => {
			var n = t > 0 ? t : Ke(e) + 1, i = new Array(n), s = Sr(e, i, 0, i.length);
			return r && (i.length = s), i;
		}, St = () => {
			if (!Ve.length) {
				var e = null;
				if (globalThis.window?.prompt && (e = window.prompt("Input: "), e !== null && (e += `
`)), !e) return null;
				Ve = Ge(e, !0);
			}
			return Ve.shift();
		}, ee = {
			ttys: [],
			init() {},
			shutdown() {},
			register(e, r) {
				ee.ttys[e] = {
					input: [],
					output: [],
					ops: r
				}, o.registerDevice(e, ee.stream_ops);
			},
			stream_ops: {
				open(e) {
					var r = ee.ttys[e.node.rdev];
					if (!r) throw new o.ErrnoError(43);
					e.tty = r, e.seekable = !1;
				},
				close(e) {
					e.tty.ops.fsync(e.tty);
				},
				fsync(e) {
					e.tty.ops.fsync(e.tty);
				},
				read(e, r, t, n, i) {
					if (!e.tty || !e.tty.ops.get_char) throw new o.ErrnoError(60);
					for (var s = 0, a = 0; a < n; a++) {
						var l;
						try {
							l = e.tty.ops.get_char(e.tty);
						} catch {
							throw new o.ErrnoError(29);
						}
						if (l === void 0 && s === 0) throw new o.ErrnoError(6);
						if (l == null) break;
						s++, r[t + a] = l;
					}
					return s && (e.node.atime = Date.now()), s;
				},
				write(e, r, t, n, i) {
					if (!e.tty || !e.tty.ops.put_char) throw new o.ErrnoError(60);
					try {
						for (var s = 0; s < n; s++) e.tty.ops.put_char(e.tty, r[t + s]);
					} catch {
						throw new o.ErrnoError(29);
					}
					return n && (e.node.mtime = e.node.ctime = Date.now()), s;
				}
			},
			default_tty_ops: {
				get_char(e) {
					return St();
				},
				put_char(e, r) {
					r === null || r === 10 ? (L(le(e.output)), e.output = []) : r != 0 && e.output.push(r);
				},
				fsync(e) {
					e.output?.length > 0 && (L(le(e.output)), e.output = []);
				},
				ioctl_tcgets(e) {
					return {
						c_iflag: 25856,
						c_oflag: 5,
						c_cflag: 191,
						c_lflag: 35387,
						c_cc: [
							3,
							28,
							127,
							21,
							4,
							0,
							1,
							0,
							17,
							19,
							26,
							0,
							18,
							15,
							23,
							22,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0
						]
					};
				},
				ioctl_tcsets(e, r, t) {
					return 0;
				},
				ioctl_tiocgwinsz(e) {
					return [24, 80];
				}
			},
			default_tty1_ops: {
				put_char(e, r) {
					r === null || r === 10 ? (z(le(e.output)), e.output = []) : r != 0 && e.output.push(r);
				},
				fsync(e) {
					e.output?.length > 0 && (z(le(e.output)), e.output = []);
				}
			}
		}, $r = (e) => {
			j();
		}, _ = {
			ops_table: null,
			mount(e) {
				return _.createNode(null, "/", 16895, 0);
			},
			createNode(e, r, t, n) {
				if (o.isBlkdev(t) || o.isFIFO(t)) throw new o.ErrnoError(63);
				_.ops_table ||= {
					dir: {
						node: {
							getattr: _.node_ops.getattr,
							setattr: _.node_ops.setattr,
							lookup: _.node_ops.lookup,
							mknod: _.node_ops.mknod,
							rename: _.node_ops.rename,
							unlink: _.node_ops.unlink,
							rmdir: _.node_ops.rmdir,
							readdir: _.node_ops.readdir,
							symlink: _.node_ops.symlink
						},
						stream: { llseek: _.stream_ops.llseek }
					},
					file: {
						node: {
							getattr: _.node_ops.getattr,
							setattr: _.node_ops.setattr
						},
						stream: {
							llseek: _.stream_ops.llseek,
							read: _.stream_ops.read,
							write: _.stream_ops.write,
							mmap: _.stream_ops.mmap,
							msync: _.stream_ops.msync
						}
					},
					link: {
						node: {
							getattr: _.node_ops.getattr,
							setattr: _.node_ops.setattr,
							readlink: _.node_ops.readlink
						},
						stream: {}
					},
					chrdev: {
						node: {
							getattr: _.node_ops.getattr,
							setattr: _.node_ops.setattr
						},
						stream: o.chrdev_stream_ops
					}
				};
				var i = o.createNode(e, r, t, n);
				return o.isDir(i.mode) ? (i.node_ops = _.ops_table.dir.node, i.stream_ops = _.ops_table.dir.stream, i.contents = {}) : o.isFile(i.mode) ? (i.node_ops = _.ops_table.file.node, i.stream_ops = _.ops_table.file.stream, i.usedBytes = 0, i.contents = null) : o.isLink(i.mode) ? (i.node_ops = _.ops_table.link.node, i.stream_ops = _.ops_table.link.stream) : o.isChrdev(i.mode) && (i.node_ops = _.ops_table.chrdev.node, i.stream_ops = _.ops_table.chrdev.stream), i.atime = i.mtime = i.ctime = Date.now(), e && (e.contents[r] = i, e.atime = e.mtime = e.ctime = i.atime), i;
			},
			getFileDataAsTypedArray(e) {
				return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
			},
			expandFileStorage(e, r) {
				var t = e.contents ? e.contents.length : 0;
				if (!(t >= r)) {
					r = Math.max(r, t * (t < 1024 * 1024 ? 2 : 1.125) >>> 0), t != 0 && (r = Math.max(r, 256));
					var n = e.contents;
					e.contents = new Uint8Array(r), e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0);
				}
			},
			resizeFileStorage(e, r) {
				if (e.usedBytes != r) if (r == 0) e.contents = null, e.usedBytes = 0;
				else {
					var t = e.contents;
					e.contents = new Uint8Array(r), t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))), e.usedBytes = r;
				}
			},
			node_ops: {
				getattr(e) {
					var r = {};
					return r.dev = o.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, o.isDir(e.mode) ? r.size = 4096 : o.isFile(e.mode) ? r.size = e.usedBytes : o.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.atime), r.mtime = new Date(e.mtime), r.ctime = new Date(e.ctime), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
				},
				setattr(e, r) {
					for (const t of [
						"mode",
						"atime",
						"mtime",
						"ctime"
					]) r[t] != null && (e[t] = r[t]);
					r.size !== void 0 && _.resizeFileStorage(e, r.size);
				},
				lookup(e, r) {
					throw _.doesNotExistError || (_.doesNotExistError = new o.ErrnoError(44), _.doesNotExistError.stack = "<generic error, no stack>"), _.doesNotExistError;
				},
				mknod(e, r, t, n) {
					return _.createNode(e, r, t, n);
				},
				rename(e, r, t) {
					var n;
					try {
						n = o.lookupNode(r, t);
					} catch {}
					if (n) {
						if (o.isDir(e.mode)) for (var i in n.contents) throw new o.ErrnoError(55);
						o.hashRemoveNode(n);
					}
					delete e.parent.contents[e.name], r.contents[t] = e, e.name = t, r.ctime = r.mtime = e.parent.ctime = e.parent.mtime = Date.now();
				},
				unlink(e, r) {
					delete e.contents[r], e.ctime = e.mtime = Date.now();
				},
				rmdir(e, r) {
					for (var t in o.lookupNode(e, r).contents) throw new o.ErrnoError(55);
					delete e.contents[r], e.ctime = e.mtime = Date.now();
				},
				readdir(e) {
					return [
						".",
						"..",
						...Object.keys(e.contents)
					];
				},
				symlink(e, r, t) {
					var n = _.createNode(e, r, 41471, 0);
					return n.link = t, n;
				},
				readlink(e) {
					if (!o.isLink(e.mode)) throw new o.ErrnoError(28);
					return e.link;
				}
			},
			stream_ops: {
				read(e, r, t, n, i) {
					var s = e.node.contents;
					if (i >= e.node.usedBytes) return 0;
					var a = Math.min(e.node.usedBytes - i, n);
					if (a > 8 && s.subarray) r.set(s.subarray(i, i + a), t);
					else for (var l = 0; l < a; l++) r[t + l] = s[i + l];
					return a;
				},
				write(e, r, t, n, i, s) {
					if (r.buffer === I.buffer && (s = !1), !n) return 0;
					var a = e.node;
					if (a.mtime = a.ctime = Date.now(), r.subarray && (!a.contents || a.contents.subarray)) {
						if (s) return a.contents = r.subarray(t, t + n), a.usedBytes = n, n;
						if (a.usedBytes === 0 && i === 0) return a.contents = r.slice(t, t + n), a.usedBytes = n, n;
						if (i + n <= a.usedBytes) return a.contents.set(r.subarray(t, t + n), i), n;
					}
					if (_.expandFileStorage(a, i + n), a.contents.subarray && r.subarray) a.contents.set(r.subarray(t, t + n), i);
					else for (var l = 0; l < n; l++) a.contents[i + l] = r[t + l];
					return a.usedBytes = Math.max(a.usedBytes, i + n), n;
				},
				llseek(e, r, t) {
					var n = r;
					if (t === 1 ? n += e.position : t === 2 && o.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0) throw new o.ErrnoError(28);
					return n;
				},
				mmap(e, r, t, n, i) {
					if (!o.isFile(e.node.mode)) throw new o.ErrnoError(43);
					var s, a, l = e.node.contents;
					if (!(i & 2) && l && l.buffer === I.buffer) a = !1, s = l.byteOffset;
					else {
						if (a = !0, s = $r(r), !s) throw new o.ErrnoError(48);
						l && ((t > 0 || t + r < l.length) && (l.subarray ? l = l.subarray(t, t + r) : l = Array.prototype.slice.call(l, t, t + r)), I.set(l, s));
					}
					return {
						ptr: s,
						allocated: a
					};
				},
				msync(e, r, t, n, i) {
					return _.stream_ops.write(e, r, 0, n, t, !1), 0;
				}
			}
		}, $t = (e) => {
			var r = {
				r: 0,
				"r+": 2,
				w: 577,
				"w+": 578,
				a: 1089,
				"a+": 1090
			}[e];
			if (typeof r > "u") throw new Error(`Unknown file open mode: ${e}`);
			return r;
		}, Xe = (e, r) => {
			var t = 0;
			return e && (t |= 365), r && (t |= 146), t;
		}, W = {
			DIR_MODE: 16895,
			FILE_MODE: 33279,
			reader: null,
			mount(e) {
				ur(E), W.reader ??= new FileReaderSync();
				var r = W.createNode(null, "/", W.DIR_MODE, 0), t = {};
				function n(c) {
					for (var v = c.split("/"), d = r, h = 0; h < v.length - 1; h++) {
						var p = v.slice(0, h + 1).join("/");
						t[p] ||= W.createNode(d, v[h], W.DIR_MODE, 0), d = t[p];
					}
					return d;
				}
				function i(c) {
					var v = c.split("/");
					return v[v.length - 1];
				}
				for (var s of e.opts.files || []) W.createNode(n(s.name), i(s.name), W.FILE_MODE, 0, s, s.lastModifiedDate);
				for (var a of e.opts.blobs || []) W.createNode(n(a.name), i(a.name), W.FILE_MODE, 0, a.data);
				for (var l of e.opts.packages || []) for (var s of l.metadata.files) {
					var u = s.filename.slice(1);
					W.createNode(n(u), i(u), W.FILE_MODE, 0, l.blob.slice(s.start, s.end));
				}
				return r;
			},
			createNode(e, r, t, n, i, s) {
				var a = o.createNode(e, r, t);
				return a.mode = t, a.node_ops = W.node_ops, a.stream_ops = W.stream_ops, a.atime = a.mtime = a.ctime = (s || /* @__PURE__ */ new Date()).getTime(), ur(W.FILE_MODE !== W.DIR_MODE), t === W.FILE_MODE ? (a.size = i.size, a.contents = i) : (a.size = 4096, a.contents = {}), e && (e.contents[r] = a), a;
			},
			node_ops: {
				getattr(e) {
					return {
						dev: 1,
						ino: e.id,
						mode: e.mode,
						nlink: 1,
						uid: 0,
						gid: 0,
						rdev: 0,
						size: e.size,
						atime: new Date(e.atime),
						mtime: new Date(e.mtime),
						ctime: new Date(e.ctime),
						blksize: 4096,
						blocks: Math.ceil(e.size / 4096)
					};
				},
				setattr(e, r) {
					for (const t of [
						"mode",
						"atime",
						"mtime",
						"ctime"
					]) r[t] != null && (e[t] = r[t]);
				},
				lookup(e, r) {
					throw new o.ErrnoError(44);
				},
				mknod(e, r, t, n) {
					throw new o.ErrnoError(63);
				},
				rename(e, r, t) {
					throw new o.ErrnoError(63);
				},
				unlink(e, r) {
					throw new o.ErrnoError(63);
				},
				rmdir(e, r) {
					throw new o.ErrnoError(63);
				},
				readdir(e) {
					var r = [".", ".."];
					for (var t of Object.keys(e.contents)) r.push(t);
					return r;
				},
				symlink(e, r, t) {
					throw new o.ErrnoError(63);
				}
			},
			stream_ops: {
				read(e, r, t, n, i) {
					if (i >= e.node.size) return 0;
					var s = e.node.contents.slice(i, i + n), a = W.reader.readAsArrayBuffer(s);
					return r.set(new Uint8Array(a), t), s.size;
				},
				write(e, r, t, n, i) {
					throw new o.ErrnoError(29);
				},
				llseek(e, r, t) {
					var n = r;
					if (t === 1 ? n += e.position : t === 2 && o.isFile(e.node.mode) && (n += e.node.size), n < 0) throw new o.ErrnoError(28);
					return n;
				}
			}
		}, Pt = async (e) => {
			var r = await x(e);
			return new Uint8Array(r);
		}, Ft = (...e) => o.createDataFile(...e), Dt = (e) => e, ne = 0, ye = null, At = (e) => {
			if (ne--, f.monitorRunDependencies?.(ne), ne == 0 && ye) {
				var r = ye;
				ye = null, r();
			}
		}, Ct = (e) => {
			ne++, f.monitorRunDependencies?.(ne);
		}, Pr = [], Rt = async (e, r) => {
			typeof Browser < "u" && Browser.init();
			for (var t of Pr) if (t.canHandle(r)) return t.handle(e, r);
			return e;
		}, Fr = async (e, r, t, n, i, s, a, l) => {
			var u = r ? ue.resolve(P.join2(e, r)) : e, c = Dt(`cp ${u}`);
			Ct(c);
			try {
				var v = t;
				typeof t == "string" && (v = await Pt(t)), v = await Rt(v, u), l?.(), s || Ft(e, r, v, n, i, a);
			} finally {
				At(c);
			}
		}, Mt = (e, r, t, n, i, s, a, l, u, c) => {
			Fr(e, r, t, n, i, l, u, c).then(s).catch(a);
		}, o = {
			root: null,
			mounts: [],
			devices: {},
			streams: [],
			nextInode: 1,
			nameTable: null,
			currentPath: "/",
			initialized: !1,
			ignorePermissions: !0,
			filesystems: null,
			syncFSRequests: 0,
			readFiles: {},
			ErrnoError: class {
				name = "ErrnoError";
				constructor(e) {
					this.errno = e;
				}
			},
			FSStream: class {
				shared = {};
				get object() {
					return this.node;
				}
				set object(e) {
					this.node = e;
				}
				get isRead() {
					return (this.flags & 2097155) !== 1;
				}
				get isWrite() {
					return (this.flags & 2097155) !== 0;
				}
				get isAppend() {
					return this.flags & 1024;
				}
				get flags() {
					return this.shared.flags;
				}
				set flags(e) {
					this.shared.flags = e;
				}
				get position() {
					return this.shared.position;
				}
				set position(e) {
					this.shared.position = e;
				}
			},
			FSNode: class {
				node_ops = {};
				stream_ops = {};
				readMode = 365;
				writeMode = 146;
				mounted = null;
				constructor(e, r, t, n) {
					e || (e = this), this.parent = e, this.mount = e.mount, this.id = o.nextInode++, this.name = r, this.mode = t, this.rdev = n, this.atime = this.mtime = this.ctime = Date.now();
				}
				get read() {
					return (this.mode & this.readMode) === this.readMode;
				}
				set read(e) {
					e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
				}
				get write() {
					return (this.mode & this.writeMode) === this.writeMode;
				}
				set write(e) {
					e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
				}
				get isFolder() {
					return o.isDir(this.mode);
				}
				get isDevice() {
					return o.isChrdev(this.mode);
				}
			},
			lookupPath(e, r = {}) {
				if (!e) throw new o.ErrnoError(44);
				r.follow_mount ??= !0, P.isAbs(e) || (e = o.cwd() + "/" + e);
				e: for (var t = 0; t < 40; t++) {
					for (var n = e.split("/").filter((c) => !!c), i = o.root, s = "/", a = 0; a < n.length; a++) {
						var l = a === n.length - 1;
						if (l && r.parent) break;
						if (n[a] !== ".") {
							if (n[a] === "..") {
								if (s = P.dirname(s), o.isRoot(i)) {
									e = s + "/" + n.slice(a + 1).join("/"), t--;
									continue e;
								} else i = i.parent;
								continue;
							}
							s = P.join2(s, n[a]);
							try {
								i = o.lookupNode(i, n[a]);
							} catch (c) {
								if (c?.errno === 44 && l && r.noent_okay) return { path: s };
								throw c;
							}
							if (o.isMountpoint(i) && (!l || r.follow_mount) && (i = i.mounted.root), o.isLink(i.mode) && (!l || r.follow)) {
								if (!i.node_ops.readlink) throw new o.ErrnoError(52);
								var u = i.node_ops.readlink(i);
								P.isAbs(u) || (u = P.dirname(s) + "/" + u), e = u + "/" + n.slice(a + 1).join("/");
								continue e;
							}
						}
					}
					return {
						path: s,
						node: i
					};
				}
				throw new o.ErrnoError(32);
			},
			getPath(e) {
				for (var r;;) {
					if (o.isRoot(e)) {
						var t = e.mount.mountpoint;
						return r ? t[t.length - 1] !== "/" ? `${t}/${r}` : t + r : t;
					}
					r = r ? `${e.name}/${r}` : e.name, e = e.parent;
				}
			},
			hashName(e, r) {
				for (var t = 0, n = 0; n < r.length; n++) t = (t << 5) - t + r.charCodeAt(n) | 0;
				return (e + t >>> 0) % o.nameTable.length;
			},
			hashAddNode(e) {
				var r = o.hashName(e.parent.id, e.name);
				e.name_next = o.nameTable[r], o.nameTable[r] = e;
			},
			hashRemoveNode(e) {
				var r = o.hashName(e.parent.id, e.name);
				if (o.nameTable[r] === e) o.nameTable[r] = e.name_next;
				else for (var t = o.nameTable[r]; t;) {
					if (t.name_next === e) {
						t.name_next = e.name_next;
						break;
					}
					t = t.name_next;
				}
			},
			lookupNode(e, r) {
				var t = o.mayLookup(e);
				if (t) throw new o.ErrnoError(t);
				for (var n = o.hashName(e.id, r), i = o.nameTable[n]; i; i = i.name_next) {
					var s = i.name;
					if (i.parent.id === e.id && s === r) return i;
				}
				return o.lookup(e, r);
			},
			createNode(e, r, t, n) {
				var i = new o.FSNode(e, r, t, n);
				return o.hashAddNode(i), i;
			},
			destroyNode(e) {
				o.hashRemoveNode(e);
			},
			isRoot(e) {
				return e === e.parent;
			},
			isMountpoint(e) {
				return !!e.mounted;
			},
			isFile(e) {
				return (e & 61440) === 32768;
			},
			isDir(e) {
				return (e & 61440) === 16384;
			},
			isLink(e) {
				return (e & 61440) === 40960;
			},
			isChrdev(e) {
				return (e & 61440) === 8192;
			},
			isBlkdev(e) {
				return (e & 61440) === 24576;
			},
			isFIFO(e) {
				return (e & 61440) === 4096;
			},
			isSocket(e) {
				return (e & 49152) === 49152;
			},
			flagsToPermissionString(e) {
				var r = [
					"r",
					"w",
					"rw"
				][e & 3];
				return e & 512 && (r += "w"), r;
			},
			nodePermissions(e, r) {
				return o.ignorePermissions ? 0 : r.includes("r") && !(e.mode & 292) || r.includes("w") && !(e.mode & 146) || r.includes("x") && !(e.mode & 73) ? 2 : 0;
			},
			mayLookup(e) {
				if (!o.isDir(e.mode)) return 54;
				return o.nodePermissions(e, "x") || (e.node_ops.lookup ? 0 : 2);
			},
			mayCreate(e, r) {
				if (!o.isDir(e.mode)) return 54;
				try {
					return o.lookupNode(e, r), 20;
				} catch {}
				return o.nodePermissions(e, "wx");
			},
			mayDelete(e, r, t) {
				var n;
				try {
					n = o.lookupNode(e, r);
				} catch (s) {
					return s.errno;
				}
				var i = o.nodePermissions(e, "wx");
				if (i) return i;
				if (t) {
					if (!o.isDir(n.mode)) return 54;
					if (o.isRoot(n) || o.getPath(n) === o.cwd()) return 10;
				} else if (o.isDir(n.mode)) return 31;
				return 0;
			},
			mayOpen(e, r) {
				return e ? o.isLink(e.mode) ? 32 : o.isDir(e.mode) && (o.flagsToPermissionString(r) !== "r" || r & 576) ? 31 : o.nodePermissions(e, o.flagsToPermissionString(r)) : 44;
			},
			checkOpExists(e, r) {
				if (!e) throw new o.ErrnoError(r);
				return e;
			},
			MAX_OPEN_FDS: 4096,
			nextfd() {
				for (var e = 0; e <= o.MAX_OPEN_FDS; e++) if (!o.streams[e]) return e;
				throw new o.ErrnoError(33);
			},
			getStreamChecked(e) {
				var r = o.getStream(e);
				if (!r) throw new o.ErrnoError(8);
				return r;
			},
			getStream: (e) => o.streams[e],
			createStream(e, r = -1) {
				return e = Object.assign(new o.FSStream(), e), r == -1 && (r = o.nextfd()), e.fd = r, o.streams[r] = e, e;
			},
			closeStream(e) {
				o.streams[e] = null;
			},
			dupStream(e, r = -1) {
				var t = o.createStream(e, r);
				return t.stream_ops?.dup?.(t), t;
			},
			doSetAttr(e, r, t) {
				var n = e?.stream_ops.setattr, i = n ? e : r;
				n ??= r.node_ops.setattr, o.checkOpExists(n, 63), n(i, t);
			},
			chrdev_stream_ops: {
				open(e) {
					e.stream_ops = o.getDevice(e.node.rdev).stream_ops, e.stream_ops.open?.(e);
				},
				llseek() {
					throw new o.ErrnoError(70);
				}
			},
			major: (e) => e >> 8,
			minor: (e) => e & 255,
			makedev: (e, r) => e << 8 | r,
			registerDevice(e, r) {
				o.devices[e] = { stream_ops: r };
			},
			getDevice: (e) => o.devices[e],
			getMounts(e) {
				for (var r = [], t = [e]; t.length;) {
					var n = t.pop();
					r.push(n), t.push(...n.mounts);
				}
				return r;
			},
			syncfs(e, r) {
				typeof e == "function" && (r = e, e = !1), o.syncFSRequests++, o.syncFSRequests > 1 && z(`warning: ${o.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
				var t = o.getMounts(o.root.mount), n = 0;
				function i(l) {
					return o.syncFSRequests--, r(l);
				}
				function s(l) {
					if (l) return s.errored ? void 0 : (s.errored = !0, i(l));
					++n >= t.length && i(null);
				}
				for (var a of t) a.type.syncfs ? a.type.syncfs(a, e, s) : s(null);
			},
			mount(e, r, t) {
				var n = t === "/", i = !t, s;
				if (n && o.root) throw new o.ErrnoError(10);
				if (!n && !i) {
					var a = o.lookupPath(t, { follow_mount: !1 });
					if (t = a.path, s = a.node, o.isMountpoint(s)) throw new o.ErrnoError(10);
					if (!o.isDir(s.mode)) throw new o.ErrnoError(54);
				}
				var l = {
					type: e,
					opts: r,
					mountpoint: t,
					mounts: []
				}, u = e.mount(l);
				return u.mount = l, l.root = u, n ? o.root = u : s && (s.mounted = l, s.mount && s.mount.mounts.push(l)), u;
			},
			unmount(e) {
				var r = o.lookupPath(e, { follow_mount: !1 });
				if (!o.isMountpoint(r.node)) throw new o.ErrnoError(28);
				var t = r.node, n = t.mounted, i = o.getMounts(n);
				for (var [s, a] of Object.entries(o.nameTable)) for (; a;) {
					var l = a.name_next;
					i.includes(a.mount) && o.destroyNode(a), a = l;
				}
				t.mounted = null;
				var u = t.mount.mounts.indexOf(n);
				t.mount.mounts.splice(u, 1);
			},
			lookup(e, r) {
				return e.node_ops.lookup(e, r);
			},
			mknod(e, r, t) {
				var n = o.lookupPath(e, { parent: !0 }).node, i = P.basename(e);
				if (!i) throw new o.ErrnoError(28);
				if (i === "." || i === "..") throw new o.ErrnoError(20);
				var s = o.mayCreate(n, i);
				if (s) throw new o.ErrnoError(s);
				if (!n.node_ops.mknod) throw new o.ErrnoError(63);
				return n.node_ops.mknod(n, i, r, t);
			},
			statfs(e) {
				return o.statfsNode(o.lookupPath(e, { follow: !0 }).node);
			},
			statfsStream(e) {
				return o.statfsNode(e.node);
			},
			statfsNode(e) {
				var r = {
					bsize: 4096,
					frsize: 4096,
					blocks: 1e6,
					bfree: 5e5,
					bavail: 5e5,
					files: o.nextInode,
					ffree: o.nextInode - 1,
					fsid: 42,
					flags: 2,
					namelen: 255
				};
				return e.node_ops.statfs && Object.assign(r, e.node_ops.statfs(e.mount.opts.root)), r;
			},
			create(e, r = 438) {
				return r &= 4095, r |= 32768, o.mknod(e, r, 0);
			},
			mkdir(e, r = 511) {
				return r &= 1023, r |= 16384, o.mknod(e, r, 0);
			},
			mkdirTree(e, r) {
				var t = e.split("/"), n = "";
				for (var i of t) if (i) {
					(n || P.isAbs(e)) && (n += "/"), n += i;
					try {
						o.mkdir(n, r);
					} catch (s) {
						if (s.errno != 20) throw s;
					}
				}
			},
			mkdev(e, r, t) {
				return typeof t > "u" && (t = r, r = 438), r |= 8192, o.mknod(e, r, t);
			},
			symlink(e, r) {
				if (!ue.resolve(e)) throw new o.ErrnoError(44);
				var t = o.lookupPath(r, { parent: !0 }).node;
				if (!t) throw new o.ErrnoError(44);
				var n = P.basename(r), i = o.mayCreate(t, n);
				if (i) throw new o.ErrnoError(i);
				if (!t.node_ops.symlink) throw new o.ErrnoError(63);
				return t.node_ops.symlink(t, n, e);
			},
			rename(e, r) {
				var t = P.dirname(e), n = P.dirname(r), i = P.basename(e), s = P.basename(r), a = o.lookupPath(e, { parent: !0 }), l = a.node, u;
				if (a = o.lookupPath(r, { parent: !0 }), u = a.node, !l || !u) throw new o.ErrnoError(44);
				if (l.mount !== u.mount) throw new o.ErrnoError(75);
				var c = o.lookupNode(l, i), v = ue.relative(e, n);
				if (v.charAt(0) !== ".") throw new o.ErrnoError(28);
				if (v = ue.relative(r, t), v.charAt(0) !== ".") throw new o.ErrnoError(55);
				var d;
				try {
					d = o.lookupNode(u, s);
				} catch {}
				if (c !== d) {
					var h = o.isDir(c.mode), p = o.mayDelete(l, i, h);
					if (p) throw new o.ErrnoError(p);
					if (p = d ? o.mayDelete(u, s, h) : o.mayCreate(u, s), p) throw new o.ErrnoError(p);
					if (!l.node_ops.rename) throw new o.ErrnoError(63);
					if (o.isMountpoint(c) || d && o.isMountpoint(d)) throw new o.ErrnoError(10);
					if (u !== l && (p = o.nodePermissions(l, "w"), p)) throw new o.ErrnoError(p);
					o.hashRemoveNode(c);
					try {
						l.node_ops.rename(c, u, s), c.parent = u;
					} catch (g) {
						throw g;
					} finally {
						o.hashAddNode(c);
					}
				}
			},
			rmdir(e) {
				var r = o.lookupPath(e, { parent: !0 }).node, t = P.basename(e), n = o.lookupNode(r, t), i = o.mayDelete(r, t, !0);
				if (i) throw new o.ErrnoError(i);
				if (!r.node_ops.rmdir) throw new o.ErrnoError(63);
				if (o.isMountpoint(n)) throw new o.ErrnoError(10);
				r.node_ops.rmdir(r, t), o.destroyNode(n);
			},
			readdir(e) {
				var r = o.lookupPath(e, { follow: !0 }).node;
				return o.checkOpExists(r.node_ops.readdir, 54)(r);
			},
			unlink(e) {
				var r = o.lookupPath(e, { parent: !0 }).node;
				if (!r) throw new o.ErrnoError(44);
				var t = P.basename(e), n = o.lookupNode(r, t), i = o.mayDelete(r, t, !1);
				if (i) throw new o.ErrnoError(i);
				if (!r.node_ops.unlink) throw new o.ErrnoError(63);
				if (o.isMountpoint(n)) throw new o.ErrnoError(10);
				r.node_ops.unlink(r, t), o.destroyNode(n);
			},
			readlink(e) {
				var r = o.lookupPath(e).node;
				if (!r) throw new o.ErrnoError(44);
				if (!r.node_ops.readlink) throw new o.ErrnoError(28);
				return r.node_ops.readlink(r);
			},
			stat(e, r) {
				var t = o.lookupPath(e, { follow: !r }).node;
				return o.checkOpExists(t.node_ops.getattr, 63)(t);
			},
			fstat(e) {
				var r = o.getStreamChecked(e), t = r.node, n = r.stream_ops.getattr, i = n ? r : t;
				return n ??= t.node_ops.getattr, o.checkOpExists(n, 63), n(i);
			},
			lstat(e) {
				return o.stat(e, !0);
			},
			doChmod(e, r, t, n) {
				o.doSetAttr(e, r, {
					mode: t & 4095 | r.mode & -4096,
					ctime: Date.now(),
					dontFollow: n
				});
			},
			chmod(e, r, t) {
				var n;
				typeof e == "string" ? n = o.lookupPath(e, { follow: !t }).node : n = e, o.doChmod(null, n, r, t);
			},
			lchmod(e, r) {
				o.chmod(e, r, !0);
			},
			fchmod(e, r) {
				var t = o.getStreamChecked(e);
				o.doChmod(t, t.node, r, !1);
			},
			doChown(e, r, t) {
				o.doSetAttr(e, r, {
					timestamp: Date.now(),
					dontFollow: t
				});
			},
			chown(e, r, t, n) {
				var i;
				typeof e == "string" ? i = o.lookupPath(e, { follow: !n }).node : i = e, o.doChown(null, i, n);
			},
			lchown(e, r, t) {
				o.chown(e, r, t, !0);
			},
			fchown(e, r, t) {
				var n = o.getStreamChecked(e);
				o.doChown(n, n.node, !1);
			},
			doTruncate(e, r, t) {
				if (o.isDir(r.mode)) throw new o.ErrnoError(31);
				if (!o.isFile(r.mode)) throw new o.ErrnoError(28);
				var n = o.nodePermissions(r, "w");
				if (n) throw new o.ErrnoError(n);
				o.doSetAttr(e, r, {
					size: t,
					timestamp: Date.now()
				});
			},
			truncate(e, r) {
				if (r < 0) throw new o.ErrnoError(28);
				var t;
				typeof e == "string" ? t = o.lookupPath(e, { follow: !0 }).node : t = e, o.doTruncate(null, t, r);
			},
			ftruncate(e, r) {
				var t = o.getStreamChecked(e);
				if (r < 0 || (t.flags & 2097155) === 0) throw new o.ErrnoError(28);
				o.doTruncate(t, t.node, r);
			},
			utime(e, r, t) {
				var n = o.lookupPath(e, { follow: !0 }).node;
				o.checkOpExists(n.node_ops.setattr, 63)(n, {
					atime: r,
					mtime: t
				});
			},
			open(e, r, t = 438) {
				if (e === "") throw new o.ErrnoError(44);
				r = typeof r == "string" ? $t(r) : r, r & 64 ? t = t & 4095 | 32768 : t = 0;
				var n, i;
				if (typeof e == "object") n = e;
				else {
					i = e.endsWith("/");
					var s = o.lookupPath(e, {
						follow: !(r & 131072),
						noent_okay: !0
					});
					n = s.node, e = s.path;
				}
				var a = !1;
				if (r & 64) if (n) {
					if (r & 128) throw new o.ErrnoError(20);
				} else {
					if (i) throw new o.ErrnoError(31);
					n = o.mknod(e, t | 511, 0), a = !0;
				}
				if (!n) throw new o.ErrnoError(44);
				if (o.isChrdev(n.mode) && (r &= -513), r & 65536 && !o.isDir(n.mode)) throw new o.ErrnoError(54);
				if (!a) {
					var l = o.mayOpen(n, r);
					if (l) throw new o.ErrnoError(l);
				}
				r & 512 && !a && o.truncate(n, 0), r &= -131713;
				var u = o.createStream({
					node: n,
					path: o.getPath(n),
					flags: r,
					seekable: !0,
					position: 0,
					stream_ops: n.stream_ops,
					ungotten: [],
					error: !1
				});
				return u.stream_ops.open && u.stream_ops.open(u), a && o.chmod(n, t & 511), f.logReadFiles && !(r & 1) && (e in o.readFiles || (o.readFiles[e] = 1)), u;
			},
			close(e) {
				if (o.isClosed(e)) throw new o.ErrnoError(8);
				e.getdents && (e.getdents = null);
				try {
					e.stream_ops.close && e.stream_ops.close(e);
				} catch (r) {
					throw r;
				} finally {
					o.closeStream(e.fd);
				}
				e.fd = null;
			},
			isClosed(e) {
				return e.fd === null;
			},
			llseek(e, r, t) {
				if (o.isClosed(e)) throw new o.ErrnoError(8);
				if (!e.seekable || !e.stream_ops.llseek) throw new o.ErrnoError(70);
				if (t != 0 && t != 1 && t != 2) throw new o.ErrnoError(28);
				return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position;
			},
			read(e, r, t, n, i) {
				if (n < 0 || i < 0) throw new o.ErrnoError(28);
				if (o.isClosed(e)) throw new o.ErrnoError(8);
				if ((e.flags & 2097155) === 1) throw new o.ErrnoError(8);
				if (o.isDir(e.node.mode)) throw new o.ErrnoError(31);
				if (!e.stream_ops.read) throw new o.ErrnoError(28);
				var s = typeof i < "u";
				if (!s) i = e.position;
				else if (!e.seekable) throw new o.ErrnoError(70);
				var a = e.stream_ops.read(e, r, t, n, i);
				return s || (e.position += a), a;
			},
			write(e, r, t, n, i, s) {
				if (n < 0 || i < 0) throw new o.ErrnoError(28);
				if (o.isClosed(e)) throw new o.ErrnoError(8);
				if ((e.flags & 2097155) === 0) throw new o.ErrnoError(8);
				if (o.isDir(e.node.mode)) throw new o.ErrnoError(31);
				if (!e.stream_ops.write) throw new o.ErrnoError(28);
				e.seekable && e.flags & 1024 && o.llseek(e, 0, 2);
				var a = typeof i < "u";
				if (!a) i = e.position;
				else if (!e.seekable) throw new o.ErrnoError(70);
				var l = e.stream_ops.write(e, r, t, n, i, s);
				return a || (e.position += l), l;
			},
			mmap(e, r, t, n, i) {
				if ((n & 2) !== 0 && (i & 2) === 0 && (e.flags & 2097155) !== 2) throw new o.ErrnoError(2);
				if ((e.flags & 2097155) === 1) throw new o.ErrnoError(2);
				if (!e.stream_ops.mmap) throw new o.ErrnoError(43);
				if (!r) throw new o.ErrnoError(28);
				return e.stream_ops.mmap(e, r, t, n, i);
			},
			msync(e, r, t, n, i) {
				return e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, i) : 0;
			},
			ioctl(e, r, t) {
				if (!e.stream_ops.ioctl) throw new o.ErrnoError(59);
				return e.stream_ops.ioctl(e, r, t);
			},
			readFile(e, r = {}) {
				r.flags = r.flags || 0, r.encoding = r.encoding || "binary", r.encoding !== "utf8" && r.encoding !== "binary" && j(`Invalid encoding type "${r.encoding}"`);
				var t = o.open(e, r.flags), n = o.stat(e).size, i = new Uint8Array(n);
				return o.read(t, i, 0, n, 0), r.encoding === "utf8" && (i = le(i)), o.close(t), i;
			},
			writeFile(e, r, t = {}) {
				t.flags = t.flags || 577;
				var n = o.open(e, t.flags, t.mode);
				typeof r == "string" && (r = new Uint8Array(Ge(r, !0))), ArrayBuffer.isView(r) ? o.write(n, r, 0, r.byteLength, void 0, t.canOwn) : j("Unsupported data type"), o.close(n);
			},
			cwd: () => o.currentPath,
			chdir(e) {
				var r = o.lookupPath(e, { follow: !0 });
				if (r.node === null) throw new o.ErrnoError(44);
				if (!o.isDir(r.node.mode)) throw new o.ErrnoError(54);
				var t = o.nodePermissions(r.node, "x");
				if (t) throw new o.ErrnoError(t);
				o.currentPath = r.path;
			},
			createDefaultDirectories() {
				o.mkdir("/tmp"), o.mkdir("/home"), o.mkdir("/home/web_user");
			},
			createDefaultDevices() {
				o.mkdir("/dev"), o.registerDevice(o.makedev(1, 3), {
					read: () => 0,
					write: (n, i, s, a, l) => a,
					llseek: () => 0
				}), o.mkdev("/dev/null", o.makedev(1, 3)), ee.register(o.makedev(5, 0), ee.default_tty_ops), ee.register(o.makedev(6, 0), ee.default_tty1_ops), o.mkdev("/dev/tty", o.makedev(5, 0)), o.mkdev("/dev/tty1", o.makedev(6, 0));
				var e = new Uint8Array(1024), r = 0, t = () => (r === 0 && (Tr(e), r = e.byteLength), e[--r]);
				o.createDevice("/dev", "random", t), o.createDevice("/dev", "urandom", t), o.mkdir("/dev/shm"), o.mkdir("/dev/shm/tmp");
			},
			createSpecialDirectories() {
				o.mkdir("/proc");
				var e = o.mkdir("/proc/self");
				o.mkdir("/proc/self/fd"), o.mount({ mount() {
					var r = o.createNode(e, "fd", 16895, 73);
					return r.stream_ops = { llseek: _.stream_ops.llseek }, r.node_ops = {
						lookup(t, n) {
							var i = +n, s = o.getStreamChecked(i), a = {
								parent: null,
								mount: { mountpoint: "fake" },
								node_ops: { readlink: () => s.path },
								id: i + 1
							};
							return a.parent = a, a;
						},
						readdir() {
							return Array.from(o.streams.entries()).filter(([t, n]) => n).map(([t, n]) => t.toString());
						}
					}, r;
				} }, {}, "/proc/self/fd");
			},
			createStandardStreams(e, r, t) {
				e ? o.createDevice("/dev", "stdin", e) : o.symlink("/dev/tty", "/dev/stdin"), r ? o.createDevice("/dev", "stdout", null, r) : o.symlink("/dev/tty", "/dev/stdout"), t ? o.createDevice("/dev", "stderr", null, t) : o.symlink("/dev/tty1", "/dev/stderr"), o.open("/dev/stdin", 0), o.open("/dev/stdout", 1), o.open("/dev/stderr", 1);
			},
			staticInit() {
				o.nameTable = new Array(4096), o.mount(_, {}, "/"), o.createDefaultDirectories(), o.createDefaultDevices(), o.createSpecialDirectories(), o.filesystems = {
					MEMFS: _,
					WORKERFS: W
				};
			},
			init(e, r, t) {
				o.initialized = !0, e ??= f.stdin, r ??= f.stdout, t ??= f.stderr, o.createStandardStreams(e, r, t);
			},
			quit() {
				o.initialized = !1;
				for (var e of o.streams) e && o.close(e);
			},
			findObject(e, r) {
				var t = o.analyzePath(e, r);
				return t.exists ? t.object : null;
			},
			analyzePath(e, r) {
				try {
					var t = o.lookupPath(e, { follow: !r });
					e = t.path;
				} catch {}
				var n = {
					isRoot: !1,
					exists: !1,
					error: 0,
					name: null,
					path: null,
					object: null,
					parentExists: !1,
					parentPath: null,
					parentObject: null
				};
				try {
					var t = o.lookupPath(e, { parent: !0 });
					n.parentExists = !0, n.parentPath = t.path, n.parentObject = t.node, n.name = P.basename(e), t = o.lookupPath(e, { follow: !r }), n.exists = !0, n.path = t.path, n.object = t.node, n.name = t.node.name, n.isRoot = t.path === "/";
				} catch (i) {
					n.error = i.errno;
				}
				return n;
			},
			createPath(e, r, t, n) {
				e = typeof e == "string" ? e : o.getPath(e);
				for (var i = r.split("/").reverse(); i.length;) {
					var s = i.pop();
					if (s) {
						var a = P.join2(e, s);
						try {
							o.mkdir(a);
						} catch (l) {
							if (l.errno != 20) throw l;
						}
						e = a;
					}
				}
				return a;
			},
			createFile(e, r, t, n, i) {
				var s = P.join2(typeof e == "string" ? e : o.getPath(e), r), a = Xe(n, i);
				return o.create(s, a);
			},
			createDataFile(e, r, t, n, i, s) {
				var a = r;
				e && (e = typeof e == "string" ? e : o.getPath(e), a = r ? P.join2(e, r) : e);
				var l = Xe(n, i), u = o.create(a, l);
				if (t) {
					if (typeof t == "string") {
						for (var c = new Array(t.length), v = 0, d = t.length; v < d; ++v) c[v] = t.charCodeAt(v);
						t = c;
					}
					o.chmod(u, l | 146);
					var h = o.open(u, 577);
					o.write(h, t, 0, t.length, 0, s), o.close(h), o.chmod(u, l);
				}
			},
			createDevice(e, r, t, n) {
				var i = P.join2(typeof e == "string" ? e : o.getPath(e), r), s = Xe(!!t, !!n);
				o.createDevice.major ??= 64;
				var a = o.makedev(o.createDevice.major++, 0);
				return o.registerDevice(a, {
					open(l) {
						l.seekable = !1;
					},
					close(l) {
						n?.buffer?.length && n(10);
					},
					read(l, u, c, v, d) {
						for (var h = 0, p = 0; p < v; p++) {
							var g;
							try {
								g = t();
							} catch {
								throw new o.ErrnoError(29);
							}
							if (g === void 0 && h === 0) throw new o.ErrnoError(6);
							if (g == null) break;
							h++, u[c + p] = g;
						}
						return h && (l.node.atime = Date.now()), h;
					},
					write(l, u, c, v, d) {
						for (var h = 0; h < v; h++) try {
							n(u[c + h]);
						} catch {
							throw new o.ErrnoError(29);
						}
						return v && (l.node.mtime = l.node.ctime = Date.now()), h;
					}
				}), o.mkdev(i, s, a);
			},
			forceLoadFile(e) {
				if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
				if (globalThis.XMLHttpRequest) j("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
				else try {
					e.contents = V(e.url);
				} catch {
					throw new o.ErrnoError(29);
				}
			},
			createLazyFile(e, r, t, n, i) {
				class s {
					lengthKnown = !1;
					chunks = [];
					get(d) {
						if (!(d > this.length - 1 || d < 0)) {
							var h = d % this.chunkSize, p = d / this.chunkSize | 0;
							return this.getter(p)[h];
						}
					}
					setDataGetter(d) {
						this.getter = d;
					}
					cacheLength() {
						var d = new XMLHttpRequest();
						d.open("HEAD", t, !1), d.send(null), d.status >= 200 && d.status < 300 || d.status === 304 || j("Couldn't load " + t + ". Status: " + d.status);
						var h = Number(d.getResponseHeader("Content-length")), p, g = (p = d.getResponseHeader("Accept-Ranges")) && p === "bytes", F = (p = d.getResponseHeader("Content-Encoding")) && p === "gzip", C = 1024 * 1024;
						g || (C = h);
						var A = (R, re) => {
							R > re && j("invalid range (" + R + ", " + re + ") or no bytes requested!"), re > h - 1 && j("only " + h + " bytes available! programmer error!");
							var O = new XMLHttpRequest();
							return O.open("GET", t, !1), h !== C && O.setRequestHeader("Range", "bytes=" + R + "-" + re), O.responseType = "arraybuffer", O.overrideMimeType && O.overrideMimeType("text/plain; charset=x-user-defined"), O.send(null), O.status >= 200 && O.status < 300 || O.status === 304 || j("Couldn't load " + t + ". Status: " + O.status), O.response !== void 0 ? new Uint8Array(O.response || []) : Ge(O.responseText || "", !0);
						}, X = this;
						X.setDataGetter((R) => {
							var re = R * C, O = (R + 1) * C - 1;
							return O = Math.min(O, h - 1), typeof X.chunks[R] > "u" && (X.chunks[R] = A(re, O)), typeof X.chunks[R] > "u" && j("doXHR failed!"), X.chunks[R];
						}), (F || !h) && (C = h = 1, h = this.getter(0).length, C = h, L("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = h, this._chunkSize = C, this.lengthKnown = !0;
					}
					get length() {
						return this.lengthKnown || this.cacheLength(), this._length;
					}
					get chunkSize() {
						return this.lengthKnown || this.cacheLength(), this._chunkSize;
					}
				}
				if (globalThis.XMLHttpRequest) {
					E || j("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
					var a = {
						isDevice: !1,
						contents: new s()
					};
				} else var a = {
					isDevice: !1,
					url: t
				};
				var l = o.createFile(e, r, a, n, i);
				a.contents ? l.contents = a.contents : a.url && (l.contents = null, l.url = a.url), Object.defineProperties(l, { usedBytes: { get: function() {
					return this.contents.length;
				} } });
				var u = {};
				for (const [v, d] of Object.entries(l.stream_ops)) u[v] = (...h) => (o.forceLoadFile(l), d(...h));
				function c(v, d, h, p, g) {
					var F = v.node.contents;
					if (g >= F.length) return 0;
					var C = Math.min(F.length - g, p);
					if (F.slice) for (var A = 0; A < C; A++) d[h + A] = F[g + A];
					else for (var A = 0; A < C; A++) d[h + A] = F.get(g + A);
					return C;
				}
				return u.read = (v, d, h, p, g) => (o.forceLoadFile(l), c(v, d, h, p, g)), u.mmap = (v, d, h, p, g) => {
					o.forceLoadFile(l);
					var F = $r(d);
					if (!F) throw new o.ErrnoError(48);
					return c(v, I, F, d, h), {
						ptr: F,
						allocated: !0
					};
				}, l.stream_ops = u, l;
			}
		}, S = {
			DEFAULT_POLLMASK: 5,
			calculateAt(e, r, t) {
				if (P.isAbs(r)) return r;
				var n;
				if (e === -100 ? n = o.cwd() : n = S.getStreamFromFD(e).path, r.length == 0) {
					if (!t) throw new o.ErrnoError(44);
					return n;
				}
				return n + "/" + r;
			},
			writeStat(e, r) {
				w[e >> 2] = r.dev, w[e + 4 >> 2] = r.mode, w[e + 8 >> 2] = r.nlink, w[e + 12 >> 2] = r.uid, w[e + 16 >> 2] = r.gid, w[e + 20 >> 2] = r.rdev, U[e + 24 >> 3] = BigInt(r.size), k[e + 32 >> 2] = 4096, k[e + 36 >> 2] = r.blocks;
				var t = r.atime.getTime(), n = r.mtime.getTime(), i = r.ctime.getTime();
				return U[e + 40 >> 3] = BigInt(Math.floor(t / 1e3)), w[e + 48 >> 2] = t % 1e3 * 1e3 * 1e3, U[e + 56 >> 3] = BigInt(Math.floor(n / 1e3)), w[e + 64 >> 2] = n % 1e3 * 1e3 * 1e3, U[e + 72 >> 3] = BigInt(Math.floor(i / 1e3)), w[e + 80 >> 2] = i % 1e3 * 1e3 * 1e3, U[e + 88 >> 3] = BigInt(r.ino), 0;
			},
			writeStatFs(e, r) {
				w[e + 4 >> 2] = r.bsize, w[e + 60 >> 2] = r.bsize, U[e + 8 >> 3] = BigInt(r.blocks), U[e + 16 >> 3] = BigInt(r.bfree), U[e + 24 >> 3] = BigInt(r.bavail), U[e + 32 >> 3] = BigInt(r.files), U[e + 40 >> 3] = BigInt(r.ffree), w[e + 48 >> 2] = r.fsid, w[e + 64 >> 2] = r.flags, w[e + 56 >> 2] = r.namelen;
			},
			doMsync(e, r, t, n, i) {
				if (!o.isFile(r.node.mode)) throw new o.ErrnoError(43);
				if (n & 2) return 0;
				var s = K.slice(e, e + t);
				o.msync(r, s, i, t, n);
			},
			getStreamFromFD(e) {
				return o.getStreamChecked(e);
			},
			varargs: void 0,
			getStr(e) {
				return pe(e);
			}
		};
		function Ot(e, r, t, n) {
			try {
				if (r = S.getStr(r), r = S.calculateAt(e, r), t & -8) return -28;
				var i = o.lookupPath(r, { follow: !0 }).node;
				if (!i) return -44;
				var s = "";
				return t & 4 && (s += "r"), t & 2 && (s += "w"), t & 1 && (s += "x"), s && o.nodePermissions(i, s) ? -2 : 0;
			} catch (a) {
				if (typeof o > "u" || a.name !== "ErrnoError") throw a;
				return -a.errno;
			}
		}
		var Pe = () => {
			var e = k[+S.varargs >> 2];
			return S.varargs += 4, e;
		}, fe = Pe;
		function It(e, r, t) {
			S.varargs = t;
			try {
				var n = S.getStreamFromFD(e);
				switch (r) {
					case 0:
						var i = Pe();
						if (i < 0) return -28;
						for (; o.streams[i];) i++;
						return o.dupStream(n, i).fd;
					case 1:
					case 2: return 0;
					case 3: return n.flags;
					case 4:
						var i = Pe();
						return n.flags |= i, 0;
					case 12:
						var i = fe(), s = 0;
						return Y[i + s >> 1] = 2, 0;
					case 13:
					case 14: return 0;
				}
				return -28;
			} catch (a) {
				if (typeof o > "u" || a.name !== "ErrnoError") throw a;
				return -a.errno;
			}
		}
		function Ut(e, r) {
			try {
				return S.writeStat(r, o.fstat(e));
			} catch (t) {
				if (typeof o > "u" || t.name !== "ErrnoError") throw t;
				return -t.errno;
			}
		}
		var oe = (e, r, t) => Sr(e, K, r, t);
		function Wt(e, r, t) {
			try {
				var n = S.getStreamFromFD(e);
				n.getdents ||= o.readdir(n.path);
				for (var i = 280, s = 0, a = o.llseek(n, 0, 1), l = Math.floor(a / i), u = Math.min(n.getdents.length, l + Math.floor(t / i)), c = l; c < u; c++) {
					var v, d, h = n.getdents[c];
					if (h === ".") v = n.node.id, d = 4;
					else if (h === "..") v = o.lookupPath(n.path, { parent: !0 }).node.id, d = 4;
					else {
						var p;
						try {
							p = o.lookupNode(n.node, h);
						} catch (g) {
							if (g?.errno === 28) continue;
							throw g;
						}
						v = p.id, d = o.isChrdev(p.mode) ? 2 : o.isDir(p.mode) ? 4 : o.isLink(p.mode) ? 10 : 8;
					}
					U[r + s >> 3] = BigInt(v), U[r + s + 8 >> 3] = BigInt((c + 1) * i), Y[r + s + 16 >> 1] = 280, I[r + s + 18] = d, oe(h, r + s + 19, 256), s += i;
				}
				return o.llseek(n, c * i, 0), s;
			} catch (g) {
				if (typeof o > "u" || g.name !== "ErrnoError") throw g;
				return -g.errno;
			}
		}
		function Bt(e, r, t) {
			S.varargs = t;
			try {
				var n = S.getStreamFromFD(e);
				switch (r) {
					case 21509: return n.tty ? 0 : -59;
					case 21505:
						if (!n.tty) return -59;
						if (n.tty.ops.ioctl_tcgets) {
							var i = n.tty.ops.ioctl_tcgets(n), d = fe();
							k[d >> 2] = i.c_iflag || 0, k[d + 4 >> 2] = i.c_oflag || 0, k[d + 8 >> 2] = i.c_cflag || 0, k[d + 12 >> 2] = i.c_lflag || 0;
							for (var s = 0; s < 32; s++) I[d + s + 17] = i.c_cc[s] || 0;
							return 0;
						}
						return 0;
					case 21510:
					case 21511:
					case 21512: return n.tty ? 0 : -59;
					case 21506:
					case 21507:
					case 21508:
						if (!n.tty) return -59;
						if (n.tty.ops.ioctl_tcsets) {
							for (var d = fe(), a = k[d >> 2], l = k[d + 4 >> 2], u = k[d + 8 >> 2], c = k[d + 12 >> 2], v = [], s = 0; s < 32; s++) v.push(I[d + s + 17]);
							return n.tty.ops.ioctl_tcsets(n.tty, r, {
								c_iflag: a,
								c_oflag: l,
								c_cflag: u,
								c_lflag: c,
								c_cc: v
							});
						}
						return 0;
					case 21519:
						if (!n.tty) return -59;
						var d = fe();
						return k[d >> 2] = 0, 0;
					case 21520: return n.tty ? -28 : -59;
					case 21537:
					case 21531:
						var d = fe();
						return o.ioctl(n, r, d);
					case 21523:
						if (!n.tty) return -59;
						if (n.tty.ops.ioctl_tiocgwinsz) {
							var h = n.tty.ops.ioctl_tiocgwinsz(n.tty), d = fe();
							Y[d >> 1] = h[0], Y[d + 2 >> 1] = h[1];
						}
						return 0;
					case 21524: return n.tty ? 0 : -59;
					case 21515: return n.tty ? 0 : -59;
					default: return -28;
				}
			} catch (p) {
				if (typeof o > "u" || p.name !== "ErrnoError") throw p;
				return -p.errno;
			}
		}
		function Nt(e, r) {
			try {
				return e = S.getStr(e), S.writeStat(r, o.lstat(e));
			} catch (t) {
				if (typeof o > "u" || t.name !== "ErrnoError") throw t;
				return -t.errno;
			}
		}
		function zt(e, r, t, n) {
			try {
				r = S.getStr(r);
				var i = n & 256, s = n & 4096;
				return n = n & -6401, r = S.calculateAt(e, r, s), S.writeStat(t, i ? o.lstat(r) : o.stat(r));
			} catch (a) {
				if (typeof o > "u" || a.name !== "ErrnoError") throw a;
				return -a.errno;
			}
		}
		function Lt(e, r, t, n) {
			S.varargs = n;
			try {
				r = S.getStr(r), r = S.calculateAt(e, r);
				var i = n ? Pe() : 0;
				return o.open(r, t, i).fd;
			} catch (s) {
				if (typeof o > "u" || s.name !== "ErrnoError") throw s;
				return -s.errno;
			}
		}
		function jt(e, r, t, n) {
			try {
				return r = S.getStr(r), n = S.getStr(n), r = S.calculateAt(e, r), n = S.calculateAt(t, n), o.rename(r, n), 0;
			} catch (i) {
				if (typeof o > "u" || i.name !== "ErrnoError") throw i;
				return -i.errno;
			}
		}
		function Ht(e) {
			try {
				return e = S.getStr(e), o.rmdir(e), 0;
			} catch (r) {
				if (typeof o > "u" || r.name !== "ErrnoError") throw r;
				return -r.errno;
			}
		}
		function xt(e, r) {
			try {
				return e = S.getStr(e), S.writeStat(r, o.stat(e));
			} catch (t) {
				if (typeof o > "u" || t.name !== "ErrnoError") throw t;
				return -t.errno;
			}
		}
		function Vt(e, r, t) {
			try {
				if (r = S.getStr(r), r = S.calculateAt(e, r), !t) o.unlink(r);
				else if (t === 512) o.rmdir(r);
				else return -28;
				return 0;
			} catch (n) {
				if (typeof o > "u" || n.name !== "ErrnoError") throw n;
				return -n.errno;
			}
		}
		var Kt = () => j(""), Fe = {}, Ye = (e) => {
			for (; e.length;) {
				var r = e.pop();
				e.pop()(r);
			}
		};
		function ge(e) {
			return this.fromWireType(w[e >> 2]);
		}
		var de = {}, ie = {}, De = {}, Gt = class extends Error {
			constructor(r) {
				super(r), this.name = "InternalError";
			}
		}, Ae = (e) => {
			throw new Gt(e);
		}, ce = (e, r, t) => {
			e.forEach((l) => De[l] = r);
			function n(l) {
				var u = t(l);
				u.length !== e.length && Ae("Mismatched type converter count");
				for (var c = 0; c < e.length; ++c) G(e[c], u[c]);
			}
			var i = new Array(r.length), s = [], a = 0;
			for (let [l, u] of r.entries()) ie.hasOwnProperty(u) ? i[l] = ie[u] : (s.push(u), de.hasOwnProperty(u) || (de[u] = []), de[u].push(() => {
				i[l] = ie[u], ++a, a === s.length && n(i);
			}));
			s.length === 0 && n(i);
		}, Xt = (e) => {
			var r = Fe[e];
			delete Fe[e];
			var t = r.rawConstructor, n = r.rawDestructor, i = r.fields, s = i.map((a) => a.getterReturnType).concat(i.map((a) => a.setterArgumentType));
			ce([e], s, (a) => {
				var l = {};
				for (var [u, c] of i.entries()) {
					const v = a[u], d = c.getter, h = c.getterContext, p = a[u + i.length], g = c.setter, F = c.setterContext;
					l[c.fieldName] = {
						read: (C) => v.fromWireType(d(h, C)),
						write: (C, A) => {
							var X = [];
							g(F, C, p.toWireType(X, A)), Ye(X);
						},
						optional: v.optional
					};
				}
				return [{
					name: r.name,
					fromWireType: (v) => {
						var d = {};
						for (var h in l) d[h] = l[h].read(v);
						return n(v), d;
					},
					toWireType: (v, d) => {
						for (var h in l) if (!(h in d) && !l[h].optional) throw new TypeError(`Missing field: "${h}"`);
						var p = t();
						for (h in l) l[h].write(p, d[h]);
						return v !== null && v.push(n, p), p;
					},
					readValueFromPointer: ge,
					destructorFunction: n
				}];
			});
		}, B = (e) => {
			for (var r = "";;) {
				var t = K[e++];
				if (!t) return r;
				r += String.fromCharCode(t);
			}
		}, we = class extends Error {
			constructor(r) {
				super(r), this.name = "BindingError";
			}
		}, $ = (e) => {
			throw new we(e);
		};
		function Yt(e, r, t = {}) {
			var n = r.name;
			if (e || $(`type "${n}" must have a positive integer typeid pointer`), ie.hasOwnProperty(e)) {
				if (t.ignoreDuplicateRegistrations) return;
				$(`Cannot register type '${n}' twice`);
			}
			if (ie[e] = r, delete De[e], de.hasOwnProperty(e)) {
				var i = de[e];
				delete de[e], i.forEach((s) => s());
			}
		}
		function G(e, r, t = {}) {
			return Yt(e, r, t);
		}
		var Dr = (e, r, t) => {
			switch (r) {
				case 1: return t ? (n) => I[n] : (n) => K[n];
				case 2: return t ? (n) => Y[n >> 1] : (n) => ae[n >> 1];
				case 4: return t ? (n) => k[n >> 2] : (n) => w[n >> 2];
				case 8: return t ? (n) => U[n >> 3] : (n) => hr[n >> 3];
				default: throw new TypeError(`invalid integer width (${r}): ${e}`);
			}
		}, qt = (e, r, t, n, i) => {
			r = B(r);
			const s = n === 0n;
			let a = (l) => l;
			if (s) {
				const l = t * 8;
				a = (u) => BigInt.asUintN(l, u), i = a(i);
			}
			G(e, {
				name: r,
				fromWireType: a,
				toWireType: (l, u) => (typeof u == "number" && (u = BigInt(u)), u),
				readValueFromPointer: Dr(r, t, !s),
				destructorFunction: null
			});
		}, Zt = (e, r, t, n) => {
			r = B(r), G(e, {
				name: r,
				fromWireType: function(i) {
					return !!i;
				},
				toWireType: function(i, s) {
					return s ? t : n;
				},
				readValueFromPointer: function(i) {
					return this.fromWireType(K[i]);
				},
				destructorFunction: null
			});
		}, Jt = (e) => ({
			count: e.count,
			deleteScheduled: e.deleteScheduled,
			preservePointerOnDelete: e.preservePointerOnDelete,
			ptr: e.ptr,
			ptrType: e.ptrType,
			smartPtr: e.smartPtr,
			smartPtrType: e.smartPtrType
		}), qe = (e) => {
			function r(t) {
				return t.$$.ptrType.registeredClass.name;
			}
			$(r(e) + " instance already deleted");
		}, Ze = !1, Ar = (e) => {}, Qt = (e) => {
			e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
		}, Cr = (e) => {
			e.count.value -= 1, e.count.value === 0 && Qt(e);
		}, _e = (e) => globalThis.FinalizationRegistry ? (Ze = new FinalizationRegistry((r) => {
			Cr(r.$$);
		}), _e = (r) => {
			var t = r.$$;
			if (t.smartPtr) {
				var n = { $$: t };
				Ze.register(r, n, r);
			}
			return r;
		}, Ar = (r) => Ze.unregister(r), _e(e)) : (_e = (r) => r, e), Ce = [], en = () => {
			for (; Ce.length;) {
				var e = Ce.pop();
				e.$$.deleteScheduled = !1, e.delete();
			}
		}, Rr, rn = () => {
			let e = Re.prototype;
			Object.assign(e, {
				isAliasOf(t) {
					if (!(this instanceof Re) || !(t instanceof Re)) return !1;
					var n = this.$$.ptrType.registeredClass, i = this.$$.ptr;
					t.$$ = t.$$;
					for (var s = t.$$.ptrType.registeredClass, a = t.$$.ptr; n.baseClass;) i = n.upcast(i), n = n.baseClass;
					for (; s.baseClass;) a = s.upcast(a), s = s.baseClass;
					return n === s && i === a;
				},
				clone() {
					if (this.$$.ptr || qe(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
					var t = _e(Object.create(Object.getPrototypeOf(this), { $$: { value: Jt(this.$$) } }));
					return t.$$.count.value += 1, t.$$.deleteScheduled = !1, t;
				},
				delete() {
					this.$$.ptr || qe(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $("Object already scheduled for deletion"), Ar(this), Cr(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
				},
				isDeleted() {
					return !this.$$.ptr;
				},
				deleteLater() {
					return this.$$.ptr || qe(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $("Object already scheduled for deletion"), Ce.push(this), Ce.length === 1 && Rr && Rr(en), this.$$.deleteScheduled = !0, this;
				}
			});
			const r = Symbol.dispose;
			r && (e[r] = e.delete);
		};
		function Re() {}
		var Me = (e, r) => Object.defineProperty(r, "name", { value: e }), Mr = {}, Or = (e, r, t) => {
			if (e[r].overloadTable === void 0) {
				var n = e[r];
				e[r] = function(...i) {
					return e[r].overloadTable.hasOwnProperty(i.length) || $(`Function '${t}' called with an invalid number of arguments (${i.length}) - expects one of (${e[r].overloadTable})!`), e[r].overloadTable[i.length].apply(this, i);
				}, e[r].overloadTable = [], e[r].overloadTable[n.argCount] = n;
			}
		}, Ir = (e, r, t) => {
			f.hasOwnProperty(e) ? ((t === void 0 || f[e].overloadTable !== void 0 && f[e].overloadTable[t] !== void 0) && $(`Cannot register public name '${e}' twice`), Or(f, e, e), f[e].overloadTable.hasOwnProperty(t) && $(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`), f[e].overloadTable[t] = r) : (f[e] = r, f[e].argCount = t);
		}, tn = 48, nn = 57, on = (e) => {
			e = e.replace(/[^a-zA-Z0-9_]/g, "$");
			var r = e.charCodeAt(0);
			return r >= tn && r <= nn ? `_${e}` : e;
		};
		function sn(e, r, t, n, i, s, a, l) {
			this.name = e, this.constructor = r, this.instancePrototype = t, this.rawDestructor = n, this.baseClass = i, this.getActualType = s, this.upcast = a, this.downcast = l, this.pureVirtualFunctions = [];
		}
		var Je = (e, r, t) => {
			for (; r !== t;) r.upcast || $(`Expected null or instance of ${t.name}, got an instance of ${r.name}`), e = r.upcast(e), r = r.baseClass;
			return e;
		}, Qe = (e) => {
			if (e === null) return "null";
			var r = typeof e;
			return r === "object" || r === "array" || r === "function" ? e.toString() : "" + e;
		};
		function an(e, r) {
			if (r === null) return this.isReference && $(`null is not a valid ${this.name}`), 0;
			r.$$ || $(`Cannot pass "${Qe(r)}" as a ${this.name}`), r.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`);
			var t = r.$$.ptrType.registeredClass;
			return Je(r.$$.ptr, t, this.registeredClass);
		}
		function ln(e, r) {
			var t;
			if (r === null) return this.isReference && $(`null is not a valid ${this.name}`), this.isSmartPointer ? (t = this.rawConstructor(), e !== null && e.push(this.rawDestructor, t), t) : 0;
			(!r || !r.$$) && $(`Cannot pass "${Qe(r)}" as a ${this.name}`), r.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && r.$$.ptrType.isConst && $(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
			var n = r.$$.ptrType.registeredClass;
			if (t = Je(r.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch (r.$$.smartPtr === void 0 && $("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
				case 0:
					r.$$.smartPtrType === this ? t = r.$$.smartPtr : $(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
					break;
				case 1:
					t = r.$$.smartPtr;
					break;
				case 2:
					if (r.$$.smartPtrType === this) t = r.$$.smartPtr;
					else {
						var i = r.clone();
						t = this.rawShare(t, ve.toHandle(() => i.delete())), e !== null && e.push(this.rawDestructor, t);
					}
					break;
				default: $("Unsupporting sharing policy");
			}
			return t;
		}
		function un(e, r) {
			if (r === null) return this.isReference && $(`null is not a valid ${this.name}`), 0;
			r.$$ || $(`Cannot pass "${Qe(r)}" as a ${this.name}`), r.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`), r.$$.ptrType.isConst && $(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`);
			var t = r.$$.ptrType.registeredClass;
			return Je(r.$$.ptr, t, this.registeredClass);
		}
		var Ur = (e, r, t) => {
			if (r === t) return e;
			if (t.baseClass === void 0) return null;
			var n = Ur(e, r, t.baseClass);
			return n === null ? null : t.downcast(n);
		}, fn = {}, dn = (e, r) => {
			for (r === void 0 && $("ptr should not be undefined"); e.baseClass;) r = e.upcast(r), e = e.baseClass;
			return r;
		}, cn = (e, r) => (r = dn(e, r), fn[r]), Oe = (e, r) => ((!r.ptrType || !r.ptr) && Ae("makeClassHandle requires ptr and ptrType"), !!r.smartPtrType != !!r.smartPtr && Ae("Both smartPtrType and smartPtr must be specified"), r.count = { value: 1 }, _e(Object.create(e, { $$: {
			value: r,
			writable: !0
		} })));
		function vn(e) {
			var r = this.getPointee(e);
			if (!r) return this.destructor(e), null;
			var t = cn(this.registeredClass, r);
			if (t !== void 0) {
				if (t.$$.count.value === 0) return t.$$.ptr = r, t.$$.smartPtr = e, t.clone();
				var n = t.clone();
				return this.destructor(e), n;
			}
			function i() {
				return this.isSmartPointer ? Oe(this.registeredClass.instancePrototype, {
					ptrType: this.pointeeType,
					ptr: r,
					smartPtrType: this,
					smartPtr: e
				}) : Oe(this.registeredClass.instancePrototype, {
					ptrType: this,
					ptr: e
				});
			}
			var s = Mr[this.registeredClass.getActualType(r)];
			if (!s) return i.call(this);
			var a;
			this.isConst ? a = s.constPointerType : a = s.pointerType;
			var l = Ur(r, this.registeredClass, a.registeredClass);
			return l === null ? i.call(this) : this.isSmartPointer ? Oe(a.registeredClass.instancePrototype, {
				ptrType: a,
				ptr: l,
				smartPtrType: this,
				smartPtr: e
			}) : Oe(a.registeredClass.instancePrototype, {
				ptrType: a,
				ptr: l
			});
		}
		var hn = () => {
			Object.assign(Ie.prototype, {
				getPointee(e) {
					return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
				},
				destructor(e) {
					this.rawDestructor?.(e);
				},
				readValueFromPointer: ge,
				fromWireType: vn
			});
		};
		function Ie(e, r, t, n, i, s, a, l, u, c, v) {
			this.name = e, this.registeredClass = r, this.isReference = t, this.isConst = n, this.isSmartPointer = i, this.pointeeType = s, this.sharingPolicy = a, this.rawGetPointee = l, this.rawConstructor = u, this.rawShare = c, this.rawDestructor = v, !i && r.baseClass === void 0 ? n ? (this.toWireType = an, this.destructorFunction = null) : (this.toWireType = un, this.destructorFunction = null) : this.toWireType = ln;
		}
		var mn = (e, r, t) => {
			f.hasOwnProperty(e) || Ae("Replacing nonexistent public symbol"), f[e].overloadTable !== void 0 && t !== void 0 ? f[e].overloadTable[t] = r : (f[e] = r, f[e].argCount = t);
		}, Wr = [], pn = (e) => {
			var r = Wr[e];
			return r || (Wr[e] = r = Qr.get(e)), r;
		}, q = (e, r, t = !1) => {
			e = B(e);
			function n() {
				return pn(r);
			}
			var i = n();
			return typeof i != "function" && $(`unknown function pointer with signature ${e}: ${r}`), i;
		};
		class yn extends Error {}
		var Br = (e) => {
			var r = Zr(e), t = B(r);
			return J(r), t;
		}, er = (e, r) => {
			var t = [], n = {};
			function i(s) {
				if (!n[s] && !ie[s]) {
					if (De[s]) {
						De[s].forEach(i);
						return;
					}
					t.push(s), n[s] = !0;
				}
			}
			throw r.forEach(i), new yn(`${e}: ` + t.map(Br).join([", "]));
		}, gn = (e, r, t, n, i, s, a, l, u, c, v, d, h) => {
			v = B(v), s = q(i, s), l &&= q(a, l), c &&= q(u, c), h = q(d, h);
			var p = on(v);
			Ir(p, function() {
				er(`Cannot construct ${v} due to unbound types`, [n]);
			}), ce([
				e,
				r,
				t
			], n ? [n] : [], (g) => {
				g = g[0];
				var F, C;
				n ? (F = g.registeredClass, C = F.instancePrototype) : C = Re.prototype;
				var A = Me(v, function(...ar) {
					if (Object.getPrototypeOf(this) !== X) throw new we(`Use 'new' to construct ${v}`);
					if (R.constructor_body === void 0) throw new we(`${v} has no accessible constructor`);
					var rt = R.constructor_body[ar.length];
					if (rt === void 0) throw new we(`Tried to invoke ctor of ${v} with invalid number of parameters (${ar.length}) - expected (${Object.keys(R.constructor_body).toString()}) parameters instead!`);
					return rt.apply(this, ar);
				}), X = Object.create(C, { constructor: { value: A } });
				A.prototype = X;
				var R = new sn(v, A, X, h, F, s, l, c);
				R.baseClass && (R.baseClass.__derivedClasses ??= [], R.baseClass.__derivedClasses.push(R));
				var re = new Ie(v, R, !0, !1, !1), O = new Ie(v + "*", R, !1, !1, !1), et = new Ie(v + " const*", R, !1, !0, !1);
				return Mr[e] = {
					pointerType: O,
					constPointerType: et
				}, mn(p, A), [
					re,
					O,
					et
				];
			});
		}, Nr = (e, r) => {
			for (var t = [], n = 0; n < e; n++) t.push(w[r + n * 4 >> 2]);
			return t;
		};
		function zr(e) {
			for (var r = 1; r < e.length; ++r) if (e[r] !== null && e[r].destructorFunction === void 0) return !0;
			return !1;
		}
		function wn(e, r, t, n) {
			var i = zr(e), s = e.length - 2, a = [], l = ["fn"];
			r && l.push("thisWired");
			for (var u = 0; u < s; ++u) a.push(`arg${u}`), l.push(`arg${u}Wired`);
			a = a.join(","), l = l.join(",");
			var c = `return function (${a}) {
`;
			i && (c += `var destructors = [];
`);
			var v = i ? "destructors" : "null", d = [
				"humanName",
				"throwBindingError",
				"invoker",
				"fn",
				"runDestructors",
				"fromRetWire",
				"toClassParamWire"
			];
			r && (c += `var thisWired = toClassParamWire(${v}, this);
`);
			for (var u = 0; u < s; ++u) {
				var h = `toArg${u}Wire`;
				c += `var arg${u}Wired = ${h}(${v}, arg${u});
`, d.push(h);
			}
			if (c += (t || n ? "var rv = " : "") + `invoker(${l});
`, i) c += `runDestructors(destructors);
`;
			else for (var u = r ? 1 : 2; u < e.length; ++u) {
				var p = u === 1 ? "thisWired" : "arg" + (u - 2) + "Wired";
				e[u].destructorFunction !== null && (c += `${p}_dtor(${p});
`, d.push(`${p}_dtor`));
			}
			return t && (c += `var ret = fromRetWire(rv);
return ret;
`), c += `}
`, new Function(d, c);
		}
		function Lr(e, r, t, n, i, s) {
			var a = r.length;
			a < 2 && $("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var l = r[1] !== null && t !== null, u = zr(r), c = !r[0].isVoid, v = r[0], d = r[1], h = [
				e,
				$,
				n,
				i,
				Ye,
				v.fromWireType.bind(v),
				d?.toWireType.bind(d)
			], p = 2; p < a; ++p) {
				var g = r[p];
				h.push(g.toWireType.bind(g));
			}
			if (!u) for (var p = l ? 1 : 2; p < r.length; ++p) r[p].destructorFunction !== null && h.push(r[p].destructorFunction);
			return Me(e, wn(r, l, c, s)(...h));
		}
		var _n = (e, r, t, n, i, s) => {
			var a = Nr(r, t);
			i = q(n, i), ce([], [e], (l) => {
				l = l[0];
				var u = `constructor ${l.name}`;
				if (l.registeredClass.constructor_body === void 0 && (l.registeredClass.constructor_body = []), l.registeredClass.constructor_body[r - 1] !== void 0) throw new we(`Cannot register multiple constructors with identical number of parameters (${r - 1}) for class '${l.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
				return l.registeredClass.constructor_body[r - 1] = () => {
					er(`Cannot construct ${l.name} due to unbound types`, a);
				}, ce([], a, (c) => (c.splice(1, 0, null), l.registeredClass.constructor_body[r - 1] = Lr(u, c, null, i, s), [])), [];
			});
		}, En = (e) => {
			e = e.trim();
			const r = e.indexOf("(");
			return r === -1 ? e : e.slice(0, r);
		}, bn = (e, r, t, n, i, s, a, l, u, c) => {
			var v = Nr(t, n);
			r = B(r), r = En(r), s = q(i, s, u), ce([], [e], (d) => {
				d = d[0];
				var h = `${d.name}.${r}`;
				r.startsWith("@@") && (r = Symbol[r.substring(2)]), l && d.registeredClass.pureVirtualFunctions.push(r);
				function p() {
					er(`Cannot call ${h} due to unbound types`, v);
				}
				var g = d.registeredClass.instancePrototype, F = g[r];
				return F === void 0 || F.overloadTable === void 0 && F.className !== d.name && F.argCount === t - 2 ? (p.argCount = t - 2, p.className = d.name, g[r] = p) : (Or(g, r, h), g[r].overloadTable[t - 2] = p), ce([], v, (C) => {
					var A = Lr(h, C, d, s, a, u);
					return g[r].overloadTable === void 0 ? (A.argCount = t - 2, g[r] = A) : g[r].overloadTable[t - 2] = A, [];
				}), [];
			});
		}, jr = [], se = [
			0,
			1,
			,
			1,
			null,
			1,
			!0,
			1,
			!1,
			1
		], rr = (e) => {
			e > 9 && --se[e + 1] === 0 && (se[e] = void 0, jr.push(e));
		}, ve = {
			toValue: (e) => (e || $(`Cannot use deleted val. handle = ${e}`), se[e]),
			toHandle: (e) => {
				switch (e) {
					case void 0: return 2;
					case null: return 4;
					case !0: return 6;
					case !1: return 8;
					default: {
						const r = jr.pop() || se.length;
						return se[r] = e, se[r + 1] = 1, r;
					}
				}
			}
		}, Hr = {
			name: "emscripten::val",
			fromWireType: (e) => {
				var r = ve.toValue(e);
				return rr(e), r;
			},
			toWireType: (e, r) => ve.toHandle(r),
			readValueFromPointer: ge,
			destructorFunction: null
		}, kn = (e) => G(e, Hr), Tn = (e, r, t) => {
			switch (r) {
				case 1: return t ? function(n) {
					return this.fromWireType(I[n]);
				} : function(n) {
					return this.fromWireType(K[n]);
				};
				case 2: return t ? function(n) {
					return this.fromWireType(Y[n >> 1]);
				} : function(n) {
					return this.fromWireType(ae[n >> 1]);
				};
				case 4: return t ? function(n) {
					return this.fromWireType(k[n >> 2]);
				} : function(n) {
					return this.fromWireType(w[n >> 2]);
				};
				default: throw new TypeError(`invalid integer width (${r}): ${e}`);
			}
		}, Sn = (e, r, t, n) => {
			r = B(r);
			function i() {}
			i.values = {}, G(e, {
				name: r,
				constructor: i,
				fromWireType: function(s) {
					return this.constructor.values[s];
				},
				toWireType: (s, a) => a.value,
				readValueFromPointer: Tn(r, t, n),
				destructorFunction: null
			}), Ir(r, i);
		}, xr = (e, r) => {
			var t = ie[e];
			return t === void 0 && $(`${r} has unknown type ${Br(e)}`), t;
		}, $n = (e, r, t) => {
			var n = xr(e, "enum");
			r = B(r);
			var i = n.constructor, s = Object.create(n.constructor.prototype, {
				value: { value: t },
				constructor: { value: Me(`${n.name}_${r}`, function() {}) }
			});
			i.values[t] = s, i[r] = s;
		}, Pn = (e, r) => {
			switch (r) {
				case 4: return function(t) {
					return this.fromWireType(cr[t >> 2]);
				};
				case 8: return function(t) {
					return this.fromWireType(vr[t >> 3]);
				};
				default: throw new TypeError(`invalid float width (${r}): ${e}`);
			}
		}, Fn = (e, r, t) => {
			r = B(r), G(e, {
				name: r,
				fromWireType: (n) => n,
				toWireType: (n, i) => i,
				readValueFromPointer: Pn(r, t),
				destructorFunction: null
			});
		}, Dn = (e, r, t, n, i) => {
			r = B(r);
			const s = n === 0;
			let a = (u) => u;
			if (s) {
				var l = 32 - 8 * t;
				a = (u) => u << l >>> l, i = a(i);
			}
			G(e, {
				name: r,
				fromWireType: a,
				toWireType: (u, c) => c,
				readValueFromPointer: Dr(r, t, n !== 0),
				destructorFunction: null
			});
		}, An = (e, r, t) => {
			var n = [
				Int8Array,
				Uint8Array,
				Int16Array,
				Uint16Array,
				Int32Array,
				Uint32Array,
				Float32Array,
				Float64Array,
				BigInt64Array,
				BigUint64Array
			][r];
			function i(s) {
				var a = w[s >> 2], l = w[s + 4 >> 2];
				return new n(I.buffer, l, a);
			}
			t = B(t), G(e, {
				name: t,
				fromWireType: i,
				readValueFromPointer: i
			}, { ignoreDuplicateRegistrations: !0 });
		}, Cn = Object.assign({ optional: !0 }, Hr), Rn = (e, r) => {
			G(e, Cn);
		}, Mn = (e, r) => {
			r = B(r);
			var t = !0;
			G(e, {
				name: r,
				fromWireType(n) {
					var i = w[n >> 2], s = n + 4, a;
					if (t) a = pe(s, i, !0);
					else {
						a = "";
						for (var l = 0; l < i; ++l) a += String.fromCharCode(K[s + l]);
					}
					return J(n), a;
				},
				toWireType(n, i) {
					i instanceof ArrayBuffer && (i = new Uint8Array(i));
					var s, a = typeof i == "string";
					a || ArrayBuffer.isView(i) && i.BYTES_PER_ELEMENT == 1 || $("Cannot pass non-string to std::string"), t && a ? s = Ke(i) : s = i.length;
					var l = ir(4 + s + 1), u = l + 4;
					if (w[l >> 2] = s, a) if (t) oe(i, u, s + 1);
					else for (var c = 0; c < s; ++c) {
						var v = i.charCodeAt(c);
						v > 255 && (J(l), $("String has UTF-16 code units that do not fit in 8 bits")), K[u + c] = v;
					}
					else K.set(i, u);
					return n !== null && n.push(J, l), l;
				},
				readValueFromPointer: ge,
				destructorFunction(n) {
					J(n);
				}
			});
		}, Vr = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, On = (e, r, t) => {
			var n = e >> 1, i = br(ae, n, r / 2, t);
			if (i - n > 16 && Vr) return Vr.decode(ae.subarray(n, i));
			for (var s = "", a = n; a < i; ++a) {
				var l = ae[a];
				s += String.fromCharCode(l);
			}
			return s;
		}, In = (e, r, t) => {
			if (t ??= 2147483647, t < 2) return 0;
			t -= 2;
			for (var n = r, i = t < e.length * 2 ? t / 2 : e.length, s = 0; s < i; ++s) {
				var a = e.charCodeAt(s);
				Y[r >> 1] = a, r += 2;
			}
			return Y[r >> 1] = 0, r - n;
		}, Un = (e) => e.length * 2, Wn = (e, r, t) => {
			for (var n = "", i = e >> 2, s = 0; !(s >= r / 4); s++) {
				var a = w[i + s];
				if (!a && !t) break;
				n += String.fromCodePoint(a);
			}
			return n;
		}, Bn = (e, r, t) => {
			if (t ??= 2147483647, t < 4) return 0;
			for (var n = r, i = n + t - 4, s = 0; s < e.length; ++s) {
				var a = e.codePointAt(s);
				if (a > 65535 && s++, k[r >> 2] = a, r += 4, r + 4 > i) break;
			}
			return k[r >> 2] = 0, r - n;
		}, Nn = (e) => {
			for (var r = 0, t = 0; t < e.length; ++t) e.codePointAt(t) > 65535 && t++, r += 4;
			return r;
		}, zn = (e, r, t) => {
			t = B(t);
			var n, i, s;
			r === 2 ? (n = On, i = In, s = Un) : (n = Wn, i = Bn, s = Nn), G(e, {
				name: t,
				fromWireType: (a) => {
					var l = w[a >> 2], u = n(a + 4, l * r, !0);
					return J(a), u;
				},
				toWireType: (a, l) => {
					typeof l != "string" && $(`Cannot pass non-string to C++ string type ${t}`);
					var u = s(l), c = ir(4 + u + r);
					return w[c >> 2] = u / r, i(l, c + 4, u + r), a !== null && a.push(J, c), c;
				},
				readValueFromPointer: ge,
				destructorFunction(a) {
					J(a);
				}
			});
		}, Ln = (e, r, t, n, i, s) => {
			Fe[e] = {
				name: B(r),
				rawConstructor: q(t, n),
				rawDestructor: q(i, s),
				fields: []
			};
		}, jn = (e, r, t, n, i, s, a, l, u, c) => {
			Fe[e].fields.push({
				fieldName: B(r),
				getterReturnType: t,
				getter: q(n, i),
				getterContext: s,
				setterArgumentType: a,
				setter: q(l, u),
				setterContext: c
			});
		}, Hn = (e, r) => {
			r = B(r), G(e, {
				isVoid: !0,
				name: r,
				fromWireType: () => {},
				toWireType: (t, n) => {}
			});
		}, Kr = 0, xn = () => {
			xe = !1, Kr = 0;
		}, tr = [], Vn = (e) => {
			var r = tr.length;
			return tr.push(e), r;
		}, Kn = (e, r) => {
			for (var t = new Array(e), n = 0; n < e; ++n) t[n] = xr(w[r + n * 4 >> 2], `parameter ${n}`);
			return t;
		}, Gn = (e, r, t) => {
			var n = [], i = e(n, t);
			return n.length && (w[r >> 2] = ve.toHandle(n)), i;
		}, Xn = {}, Yn = (e) => {
			var r = Xn[e];
			return r === void 0 ? B(e) : r;
		}, qn = (e, r, t) => {
			var n = 8, [i, ...s] = Kn(e, r), a = i.toWireType.bind(i), l = s.map((h) => h.readValueFromPointer.bind(h));
			e--;
			var u = { toValue: ve.toValue }, c = l.map((h, p) => {
				var g = `argFromPtr${p}`;
				return u[g] = h, `${g}(args${p ? "+" + p * n : ""})`;
			}), v;
			switch (t) {
				case 0:
					v = "toValue(handle)";
					break;
				case 2:
					v = "new (toValue(handle))";
					break;
				case 3:
					v = "";
					break;
				case 1:
					u.getStringOrSymbol = Yn, v = "toValue(handle)[getStringOrSymbol(methodName)]";
					break;
			}
			v += `(${c})`, i.isVoid || (u.toReturnWire = a, u.emval_returnValue = Gn, v = `return emval_returnValue(toReturnWire, destructorsRef, ${v})`), v = `return function (handle, methodName, destructorsRef, args) {
  ${v}
  }`;
			var d = new Function(Object.keys(u), v)(...Object.values(u));
			return Vn(Me(`methodCaller<(${s.map((h) => h.name)}) => ${i.name}>`, d));
		}, Zn = (e) => {
			e > 9 && (se[e + 1] += 1);
		}, Jn = (e, r, t, n, i) => tr[e](r, t, n, i), Qn = (e) => {
			Ye(ve.toValue(e)), rr(e);
		}, eo = 9007199254740992, ro = -9007199254740992, Ue = (e) => e < ro || e > eo ? NaN : Number(e);
		function to(e, r) {
			e = Ue(e);
			var t = /* @__PURE__ */ new Date(e * 1e3);
			k[r >> 2] = t.getUTCSeconds(), k[r + 4 >> 2] = t.getUTCMinutes(), k[r + 8 >> 2] = t.getUTCHours(), k[r + 12 >> 2] = t.getUTCDate(), k[r + 16 >> 2] = t.getUTCMonth(), k[r + 20 >> 2] = t.getUTCFullYear() - 1900, k[r + 24 >> 2] = t.getUTCDay();
			var n = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0), i = (t.getTime() - n) / (1e3 * 60 * 60 * 24) | 0;
			k[r + 28 >> 2] = i;
		}
		var no = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), oo = [
			0,
			31,
			60,
			91,
			121,
			152,
			182,
			213,
			244,
			274,
			305,
			335
		], io = [
			0,
			31,
			59,
			90,
			120,
			151,
			181,
			212,
			243,
			273,
			304,
			334
		], so = (e) => (no(e.getFullYear()) ? oo : io)[e.getMonth()] + e.getDate() - 1;
		function ao(e, r) {
			e = Ue(e);
			var t = /* @__PURE__ */ new Date(e * 1e3);
			k[r >> 2] = t.getSeconds(), k[r + 4 >> 2] = t.getMinutes(), k[r + 8 >> 2] = t.getHours(), k[r + 12 >> 2] = t.getDate(), k[r + 16 >> 2] = t.getMonth(), k[r + 20 >> 2] = t.getFullYear() - 1900, k[r + 24 >> 2] = t.getDay();
			var n = so(t) | 0;
			k[r + 28 >> 2] = n, k[r + 36 >> 2] = -(t.getTimezoneOffset() * 60);
			var i = new Date(t.getFullYear(), 0, 1), s = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(), a = i.getTimezoneOffset(), l = (s != a && t.getTimezoneOffset() == Math.min(a, s)) | 0;
			k[r + 32 >> 2] = l;
		}
		var Ee = {}, Gr = (e) => {
			if (e instanceof yr || e == "unwind") return $e;
			M(1, e);
		}, Xr = () => xe || Kr > 0, Yr = (e) => {
			$e = e, Xr() || (f.onExit?.(e), Se = !0), M(e, new yr(e));
		}, lo = (e, r) => {
			$e = e, Yr(e);
		}, uo = lo, fo = () => {
			if (!Xr()) try {
				uo($e);
			} catch (e) {
				Gr(e);
			}
		}, co = (e) => {
			if (!Se) try {
				e(), fo();
			} catch (r) {
				Gr(r);
			}
		}, nr = () => performance.now(), vo = (e, r) => (Ee[e] && (clearTimeout(Ee[e].id), delete Ee[e]), r && (Ee[e] = {
			id: setTimeout(() => {
				delete Ee[e], co(() => Jr(e, nr()));
			}, r),
			timeout_ms: r
		}), 0), ho = (e, r, t, n) => {
			var i = (/* @__PURE__ */ new Date()).getFullYear(), s = new Date(i, 0, 1), a = new Date(i, 6, 1), l = s.getTimezoneOffset(), u = a.getTimezoneOffset(), c = Math.max(l, u);
			w[e >> 2] = c * 60, k[r >> 2] = +(l != u);
			var v = (p) => {
				var g = p >= 0 ? "-" : "+", F = Math.abs(p);
				return `UTC${g}${String(Math.floor(F / 60)).padStart(2, "0")}${String(F % 60).padStart(2, "0")}`;
			}, d = v(l), h = v(u);
			u < l ? (oe(d, t, 17), oe(h, n, 17)) : (oe(d, n, 17), oe(h, t, 17));
		}, qr = () => Date.now(), mo = 1, po = (e) => e >= 0 && e <= 3;
		function yo(e, r, t) {
			if (r = Ue(r), !po(e)) return 28;
			var n;
			if (e === 0) n = qr();
			else if (mo) n = nr();
			else return 52;
			var i = Math.round(n * 1e3 * 1e3);
			return U[t >> 3] = BigInt(i), 0;
		}
		var go = () => 2147483648, wo = (e, r) => Math.ceil(e / r) * r, _o = (e) => {
			var r = (e - We.buffer.byteLength + 65535) / 65536 | 0;
			try {
				return We.grow(r), pr(), 1;
			} catch {}
		}, Eo = (e) => {
			var r = K.length;
			e >>>= 0;
			var t = go();
			if (e > t) return !1;
			for (var n = 1; n <= 4; n *= 2) {
				var i = r * (1 + .2 / n);
				if (i = Math.min(i, e + 100663296), _o(Math.min(t, wo(Math.max(e, i), 65536)))) return !0;
			}
			return !1;
		}, or = {}, bo = () => T || "./this.program", be = () => {
			if (!be.strings) {
				var r = {
					USER: "web_user",
					LOGNAME: "web_user",
					PATH: "/",
					PWD: "/",
					HOME: "/home/web_user",
					LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
					_: bo()
				};
				for (var t in or) or[t] === void 0 ? delete r[t] : r[t] = or[t];
				var n = [];
				for (var t in r) n.push(`${t}=${r[t]}`);
				be.strings = n;
			}
			return be.strings;
		}, ko = (e, r) => {
			var t = 0, n = 0;
			for (var i of be()) {
				var s = r + t;
				w[e + n >> 2] = s, t += oe(i, s, Infinity) + 1, n += 4;
			}
			return 0;
		}, To = (e, r) => {
			var t = be();
			w[e >> 2] = t.length;
			var n = 0;
			for (var i of t) n += Ke(i) + 1;
			return w[r >> 2] = n, 0;
		};
		function So(e) {
			try {
				var r = S.getStreamFromFD(e);
				return o.close(r), 0;
			} catch (t) {
				if (typeof o > "u" || t.name !== "ErrnoError") throw t;
				return t.errno;
			}
		}
		function $o(e, r) {
			try {
				var t = 0, n = 0, i = 0, s = S.getStreamFromFD(e), a = s.tty ? 2 : o.isDir(s.mode) ? 3 : o.isLink(s.mode) ? 7 : 4;
				return I[r] = a, Y[r + 2 >> 1] = i, U[r + 8 >> 3] = BigInt(t), U[r + 16 >> 3] = BigInt(n), 0;
			} catch (l) {
				if (typeof o > "u" || l.name !== "ErrnoError") throw l;
				return l.errno;
			}
		}
		var Po = (e, r, t, n) => {
			for (var i = 0, s = 0; s < t; s++) {
				var a = w[r >> 2], l = w[r + 4 >> 2];
				r += 8;
				var u = o.read(e, I, a, l, n);
				if (u < 0) return -1;
				if (i += u, u < l) break;
				typeof n < "u" && (n += u);
			}
			return i;
		};
		function Fo(e, r, t, n) {
			try {
				var i = Po(S.getStreamFromFD(e), r, t);
				return w[n >> 2] = i, 0;
			} catch (s) {
				if (typeof o > "u" || s.name !== "ErrnoError") throw s;
				return s.errno;
			}
		}
		function Do(e, r, t, n) {
			r = Ue(r);
			try {
				if (isNaN(r)) return 61;
				var i = S.getStreamFromFD(e);
				return o.llseek(i, r, t), U[n >> 3] = BigInt(i.position), i.getdents && r === 0 && t === 0 && (i.getdents = null), 0;
			} catch (s) {
				if (typeof o > "u" || s.name !== "ErrnoError") throw s;
				return s.errno;
			}
		}
		var Ao = (e, r, t, n) => {
			for (var i = 0, s = 0; s < t; s++) {
				var a = w[r >> 2], l = w[r + 4 >> 2];
				r += 8;
				var u = o.write(e, I, a, l, n);
				if (u < 0) return -1;
				if (i += u, u < l) break;
				typeof n < "u" && (n += u);
			}
			return i;
		};
		function Co(e, r, t, n) {
			try {
				var i = Ao(S.getStreamFromFD(e), r, t);
				return w[n >> 2] = i, 0;
			} catch (s) {
				if (typeof o > "u" || s.name !== "ErrnoError") throw s;
				return s.errno;
			}
		}
		if (o.createPreloadedFile = Mt, o.preloadFile = Fr, o.staticInit(), rn(), hn(), f.noExitRuntime && (xe = f.noExitRuntime), f.preloadPlugins && (Pr = f.preloadPlugins), f.print && (L = f.print), f.printErr && (z = f.printErr), f.wasmBinary && (Q = f.wasmBinary), f.arguments && f.arguments, f.thisProgram && (T = f.thisProgram), f.preInit) for (typeof f.preInit == "function" && (f.preInit = [f.preInit]); f.preInit.length > 0;) f.preInit.shift()();
		f.FS = o;
		var ir, J, Zr, Jr, We, Qr;
		function Ro(e) {
			ir = e.da, J = e.fa, Zr = e.ga, Jr = e.ha, We = e.ba, Qr = e.ea;
		}
		var Mo = {
			m: _t,
			g: kt,
			V: Ot,
			r: It,
			S: Ut,
			G: Wt,
			X: Bt,
			Q: Nt,
			P: zt,
			H: Lt,
			F: jt,
			E: Ht,
			R: xt,
			D: Vt,
			W: Kt,
			p: Xt,
			x: qt,
			_: Zt,
			l: gn,
			k: _n,
			a: bn,
			Y: kn,
			aa: Sn,
			y: $n,
			w: Fn,
			e: Dn,
			b: An,
			o: Rn,
			Z: Mn,
			s: zn,
			t: Ln,
			d: jn,
			$: Hn,
			A: xn,
			f: qn,
			c: rr,
			j: Zn,
			h: Jn,
			i: Qn,
			I: to,
			J: ao,
			B: vo,
			K: ho,
			U: yo,
			T: qr,
			n: nr,
			C: Eo,
			N: ko,
			O: To,
			q: So,
			M: $o,
			v: Fo,
			L: Do,
			u: Co,
			z: Yr
		};
		function sr() {
			if (ne > 0) {
				ye = sr;
				return;
			}
			if (lt(), ne > 0) {
				ye = sr;
				return;
			}
			function e() {
				f.calledRun = !0, !Se && (ut(), fr?.(f), f.onRuntimeInitialized?.(), ft());
			}
			f.setStatus ? (f.setStatus("Running..."), setTimeout(() => {
				setTimeout(() => f.setStatus(""), 1), e();
			}, 1)) : e();
		}
		var Be = await yt();
		return sr(), mr ? m = f : m = new Promise((e, r) => {
			fr = e, dr = r;
		}), m;
	}
	const ke = 16, he = 0, me = 1, ze = 2, te = 3;
	var ot = class tt {
		header;
		buffer;
		capacity;
		sab;
		writeGen = 0;
		constructor(m) {
			this.sab = m, this.capacity = m.byteLength - ke, this.header = new Int32Array(m, 0, ke / 4), this.buffer = new Uint8Array(m, ke, this.capacity);
		}
		static create(m) {
			return new tt(new SharedArrayBuffer(m + ke));
		}
		get sharedArrayBuffer() {
			return this.sab;
		}
		async write(m) {
			const f = this.writeGen;
			let b = 0, E = m.length;
			for (; E > 0;) {
				if (this.writeGen !== f) return;
				const T = Atomics.load(this.header, he), M = Atomics.load(this.header, me);
				let D = 0;
				if (T >= M ? D = this.capacity - T + M - 1 : D = M - T - 1, D === 0) {
					await new Promise((V) => setTimeout(V, 10));
					continue;
				}
				const N = Math.min(E, D), Z = this.capacity - T, x = Math.min(N, Z);
				this.buffer.set(m.subarray(b, b + x), T), x < N ? (this.buffer.set(m.subarray(b + x, b + N), 0), Atomics.store(this.header, he, N - x)) : Atomics.store(this.header, he, T + x), b += N, E -= N, Atomics.add(this.header, te, 1), Atomics.notify(this.header, te, 1);
			}
		}
		setEOF() {
			Atomics.store(this.header, ze, 1), Atomics.add(this.header, te, 1), Atomics.notify(this.header, te, 1);
		}
		reset() {
			this.writeGen++, Atomics.store(this.header, he, 0), Atomics.store(this.header, me, 0), Atomics.store(this.header, ze, 0), Atomics.store(this.header, te, 0);
		}
		blockingRead(m, f, b) {
			if (b === 0) return 0;
			let E = 0;
			for (; E < b;) {
				const T = Atomics.load(this.header, te), M = Atomics.load(this.header, he), D = Atomics.load(this.header, me), N = Atomics.load(this.header, ze);
				if (D === M) {
					if (N) return E;
					Atomics.wait(this.header, te, T, 500);
					continue;
				}
				let Z = 0;
				M > D ? Z = M - D : Z = this.capacity - D + M;
				const x = b - E, V = Math.min(Z, x), L = this.capacity - D, z = Math.min(V, L);
				if (m.set(this.buffer.subarray(D, D + z), f + E), z < V) {
					const Q = V - z;
					m.set(this.buffer.subarray(0, Q), f + E + z), Atomics.store(this.header, me, Q);
				} else Atomics.store(this.header, me, D + z);
				E += V;
			}
			return E;
		}
	};
	const Le = 4;
	let je = null;
	function lr() {
		return je || (je = nt({
			locateFile: (y) => y.endsWith(".wasm") ? "/ffmpeg.wasm" : y,
			print: (y) => console.log("[WASM]", y),
			printErr: (y) => console.error("[WASM Error]", y)
		})), je;
	}
	var it = class {
		sessionId = 0;
		decoder = null;
		mountDir = null;
		isRunning = !0;
		isPaused = !1;
		ringBuffer = null;
		sabHeader = null;
		constructor(y, m) {
			this.module = y, this.req = m, this.sessionId = m.sessionId, m.type === "INIT" ? (this.mountDir = `/session_${m.id}`, this.initFile(m.file)) : this.initStream(m.sab, m.fileSize);
		}
		initFile(y) {
			if (!this.mountDir) return;
			try {
				this.module.FS.mkdir(this.mountDir), this.module.FS.mount(this.module.FS.filesystems.WORKERFS, { files: [y] }, this.mountDir);
			} catch (b) {
				console.warn(`[DecoderSession] Mount error: ${b}`);
			}
			const m = `${this.mountDir}/${y.name}`;
			this.decoder = new this.module.AudioStreamDecoder();
			const f = this.decoder.init(m);
			this.handleInitResult(f), this.decodeLoop();
		}
		initStream(y, m) {
			this.ringBuffer = new ot(y), this.sabHeader = new Int32Array(y, 0, Le + 1), this.decoder = new this.module.AudioStreamDecoder();
			const f = (T, M) => this.ringBuffer ? this.ringBuffer.blockingRead(this.module.HEAPU8, T, M) : -1, b = (T, M) => {
				if (M === 65536) return m;
				if (!this.sabHeader) return -1;
				let D = T;
				M === 2 && (D = m + T), D >= m && (D = Math.max(0, m - 128 * 1024));
				const N = Atomics.load(this.sabHeader, Le);
				return this.post({
					type: "SEEK_NET",
					id: this.req.id,
					seekOffset: D
				}), Atomics.wait(this.sabHeader, Le, N), D;
			}, E = this.decoder.initStream(f, b);
			this.handleInitResult(E), this.decodeLoop();
		}
		handleInitResult(y) {
			if (y.status.status < 0) throw new Error(`Decoder init failed: ${y.status.error}`);
			const m = {}, f = y.metadata.keys();
			for (let E = 0; E < f.size(); E++) {
				const T = f.get(E);
				m[T] = y.metadata.get(T);
			}
			f.delete();
			let b;
			if (y.coverArt.size() > 0) {
				const E = new Uint8Array(y.coverArt.size());
				for (let T = 0; T < y.coverArt.size(); T++) E[T] = y.coverArt.get(T);
				b = URL.createObjectURL(new Blob([E]));
			}
			this.post({
				type: "METADATA",
				id: this.req.id,
				sampleRate: y.sampleRate,
				channels: y.channelCount,
				duration: y.duration,
				metadata: m,
				encoding: y.encoding,
				coverUrl: b,
				bitsPerSample: y.bitsPerSample
			}), y.metadata.delete(), y.coverArt.delete();
		}
		decodeLoop = () => {
			if (!(!this.isRunning || this.isPaused || !this.decoder)) try {
				const y = this.module.SampleFormat.PlanarF32, m = this.decoder.readChunk(this.req.chunkSize, y);
				if (m.status.status < 0 && m.status.status !== -541478725) throw new Error(`Decode error: ${m.status.error}`);
				if (m.samples.length > 0) {
					const f = m.samples.slice();
					this.post({
						type: "CHUNK",
						id: this.req.id,
						data: f,
						startTime: m.startTime,
						sessionId: this.sessionId
					}, [f.buffer]);
				}
				m.isEOF ? (this.post({
					type: "EOF",
					id: this.req.id
				}), this.isRunning = !1) : setTimeout(this.decodeLoop, 0);
			} catch (y) {
				this.handleError(y);
			}
		};
		pause() {
			this.isPaused = !0;
		}
		resume() {
			this.isPaused && (this.isPaused = !1, this.decodeLoop());
		}
		seek(y, m, f) {
			if (this.decoder) try {
				const b = this.decoder.seek(y);
				if (b.status < 0) throw new Error(b.error);
				this.req.id = m, this.sessionId = f, this.post({
					type: "SEEK_DONE",
					id: m,
					time: y
				}), this.isRunning = !0, this.isPaused = !1, this.decodeLoop();
			} catch (b) {
				this.handleError(b);
			}
		}
		setTempo(y) {
			this.decoder?.setTempo(y);
		}
		setPitch(y) {
			this.decoder?.setPitch(y);
		}
		destroy() {
			if (this.isRunning = !1, this.decoder && (this.decoder.close(), this.decoder.delete(), this.decoder = null), this.module && this.mountDir) try {
				this.module.FS.unmount(this.mountDir), this.module.FS.rmdir(this.mountDir);
			} catch {}
			this.ringBuffer = null, this.sabHeader = null;
		}
		handleError(y) {
			const m = Ne(y);
			console.error("[Worker] DecoderSession error:", m), this.post({
				type: "ERROR",
				id: this.req.id,
				error: m.message
			}), this.destroy();
		}
		post(y, m = []) {
			self.postMessage(y, m);
		}
	};
	async function st(y, m) {
		const f = `/export_${m.id}`;
		let b = null;
		try {
			try {
				y.FS.mkdir(f), y.FS.mount(y.FS.filesystems.WORKERFS, { files: [m.file] }, f);
			} catch {}
			b = new y.AudioStreamDecoder();
			const E = `${f}/${m.file.name}`, T = b.init(E);
			if (T.status.status < 0) throw new Error(`Export init failed: ${T.status.error}`);
			const M = [], D = 4096 * 16, N = y.SampleFormat.InterleavedS16;
			for (;;) {
				const L = b.readChunk(D, N);
				if (L.status.status < 0) throw new Error(`Export decode error: ${L.status.error}`);
				if (L.samples.length > 0 && M.push(L.samples), L.isEOF) break;
			}
			const Z = M.reduce((L, z) => L + z.length, 0) * 2, x = at(T.sampleRate, T.channelCount, Z);
			T.metadata.delete(), T.coverArt.delete();
			const V = new Blob([x, ...M], { type: "audio/wav" });
			self.postMessage({
				type: "EXPORT_WAV_DONE",
				id: m.id,
				blob: V
			});
		} catch (E) {
			const T = Ne(E);
			console.error("[Worker] Export WAV error:", T), self.postMessage({
				type: "ERROR",
				id: m.id,
				error: T.message
			});
		} finally {
			b && (b.close(), b.delete());
			try {
				y.FS.unmount(f), y.FS.rmdir(f);
			} catch {}
		}
	}
	function at(y, m, f) {
		const b = /* @__PURE__ */ new ArrayBuffer(44), E = new DataView(b);
		return Te(E, 0, "RIFF"), E.setUint32(4, 36 + f, !0), Te(E, 8, "WAVE"), Te(E, 12, "fmt "), E.setUint32(16, 16, !0), E.setUint16(20, 1, !0), E.setUint16(22, m, !0), E.setUint32(24, y, !0), E.setUint32(28, y * m * 2, !0), E.setUint16(32, m * 2, !0), E.setUint16(34, 16, !0), Te(E, 36, "data"), E.setUint32(40, f, !0), new Uint8Array(b);
	}
	function Te(y, m, f) {
		for (let b = 0; b < f.length; b++) y.setUint8(m + b, f.charCodeAt(b));
	}
	let H = null;
	self.onmessage = async (y) => {
		const m = y.data;
		switch (m.type) {
			case "INIT":
			case "INIT_STREAM":
				H?.destroy(), H = null;
				try {
					H = new it(await lr(), m), self.postMessage({
						type: "ACK",
						id: m.id
					});
				} catch (f) {
					const b = Ne(f);
					console.error("[Worker] Init error:", b), self.postMessage({
						type: "ERROR",
						id: m.id,
						error: `Module load failed: ${b.message}`
					});
				}
				break;
			case "PAUSE":
				H && (H.pause(), self.postMessage({
					type: "ACK",
					id: m.id
				}));
				break;
			case "RESUME":
				H && (H.resume(), self.postMessage({
					type: "ACK",
					id: m.id
				}));
				break;
			case "SEEK":
				H && H.seek(m.seekTime, m.id, m.sessionId);
				break;
			case "SET_TEMPO":
				H && (H.setTempo(m.value), self.postMessage({
					type: "ACK",
					id: m.id
				}));
				break;
			case "SET_PITCH":
				H && (H.setPitch(m.value), self.postMessage({
					type: "ACK",
					id: m.id
				}));
				break;
			case "EXPORT_WAV":
				st(await lr(), m);
				break;
		}
	};
})();

//# sourceMappingURL=ffmpeg.worker-BrZGawX_.js.map