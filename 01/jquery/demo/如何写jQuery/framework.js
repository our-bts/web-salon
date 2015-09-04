/**
 * Created by dm55 on 6/11/2015.
 */

(function() {
    window.egg = newEgg = function(selector, root_id, tag) {
        return new newEggObj(selector, root_id, tag);
    };

    newEgg.version = "1.0";

    var newEggObj = function(selector, root_id, tag) {
        // args: the array stores the tags in "root_id".
        // type: id("#"), class(".") or tag("&").
        // eles: temporary!!! store the str after"# . &"
        var agrs, type, eles;
        //var selector_exp = /^(?:#(\w-_)+|\.(\w-_)+|(\w)+)$/;

        // this.elements: store the elements you want and return in the end of function.
        this.elements = [];

        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) {
            return this;
        }

        if (root_id) {
            root_id = typeof root_id == "string" ? document.getElementById(root_id) : root_id;
        } else {
            root_id = document.body;
        }
        tag = tag || "*";
        if (tag !== "*") {
            tag = tag.slice(1);
        }

        // "querySelector" for samrt browser
        if (document.querySelectorAll) {
            // "replace" is for tag
            var node_list = document.querySelectorAll(selector.replace("&", ""))
            for (var i in node_list) {
                // You can "console.log(node_list[i]);" to see, there are some function or non-tag elements
                if (node_list[i].tagName !== undefined) {
                    this.elements.push(node_list[i]);
                }
            }
        }
        else {
            // use lowercase to judge,and delete the space initio,then slpite by one or more space.
            selector = selector.replace(/^\s+/, "").split(/\s+/);

            // if dont point out the "root_id" and "tag", "args" is all the tags in document
            args = root_id.getElementsByTagName(tag);
            type = selector[0].charAt(0);
            eles = selector[0].slice(1);

            if (type === ".") {
                for (var i in args) {
                    if(args[i].className) {

                        // className maybe have more than one class, so split it by spaces
                        var r = args[i].className.split(/\s+/);
                        for (var j in r) {
                            if (r[j] === eles) {
                                this.elements.push(args[i]);
                            }
                        }
                    }
                }
            }
            else if (type === "#") {
                for (var i in args) {
                    if(args[i].id) {
                        var r = args[i].id.split(/\s+/);
                        for (var j in r) {
                            if (r[j] === eles) {
                                this.elements.push(args[i]);
                            }
                        }
                    }
                }
            }
            else if (type === "&") {
                for (var i in args) {
                    // You can "console.log(args[i]);" to see the last one is "length" which has noe "tagName"
                    if (i !== "length" && typeof args[i] !== "function") {

                        // "args[i].tagName" in browswer recognize uppercase, so base on coding habbit, use lowercase to juge.
                        if (args[i].tagName.toLowerCase() === eles.toLowerCase()) {
                            this.elements.push(args[i]);
                        }
                    }
                }

            }
        }

        // be careful!! here return "this",not "this.elememts", so do all the function.
        return this;
    };

    newEggObj.prototype = {
        hide:function(){
            this.css({'display':'none'});
            return this;
        },
        showWarning:function(msg){
            alert("Warning\n\n"+msg+'\n\nversion:'+newEgg.version);
        },
        show:function(){
            this.css({'display':'block'});
            return this;
        },
        css: function(property_list) {
            this.each(function(eles) {
                for (var name in property_list) {
                    var new_name = name;
                    eles.style[new_name] = property_list[name];
                }
            });

            return this;
        },
        addEvent: function(event_type, fn) {
            addEvent = document.addEventListener ? this.each(function(eles) {
                eles.addEventListener(event_type, fn, false);
            }) : this.each(function(eles) {
                eles.attachEvent("on" + event_type, fn);
            });
            return this;
        },
        each: function(fn) {
            /*
             for (var c in this.elements) {
             fn.call(this, this.elements[c]);
             }*/
            // use "this.elements[]" to raplace "this" in the "fn",so it doesn't have to use "this.elements" to call the "fn".
            var i = this.elements.length;
            while (i--) {
                fn.call(this, this.elements[i]);
            }

            // here, "this" is the "newEgg" object,so do all the function.
            return this;
        }
    }
})();
