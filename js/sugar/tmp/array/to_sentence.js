Array.extend({toSentence:function(b){var a="";if(this.length===0)return a;if(typeof b!=="string")b="and";a=" "+b+" ";b=" "+b+" ";switch(this.length){case 1:a=this[0];break;case 2:a=this.join(a);break;default:a=this.first(this.length-1).join(", ")+b+this.last()}return a}});