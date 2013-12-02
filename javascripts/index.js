var Clock = (function(){  
  var exports = function(element, month, day) {
    this._month = month;
    this._day = day;
    this._element = element;
    var html = '';
    var postfixes = ['d', 'h', 'm', 's'];
    for (var i=0;i<8;i++) {
      html += '<span>&nbsp;</span>';
      if (i % 2 == 1){
        html += postfixes[(i - 1) / 2];
      }
    }
    this._element.innerHTML = html;
    this._slots = this._element.getElementsByTagName('span');
    this._tick();
  };
  exports.prototype = {
    _tick:function() {
      var delta = toBday(this._month, this._day);
      this._update(this._pad(delta.days) + this._pad(delta.hours) + this._pad(delta.minutes) + this._pad(delta.seconds));
      var self = this;
      setTimeout(function(){
        self._tick();
      },1000);
    },
    _pad:function(value) {
      return ('0' + value).slice(-2);
    },
    _update:function(timeString) {
      var i=0,l=this._slots.length,value,slot,now;
      for (;i<l;i++) {
        value = timeString.charAt(i);
        slot = this._slots[i];
        now = slot.dataset.now;
        if (!now) {
          slot.dataset.now = value;
          slot.dataset.old = value;
          continue;
        }
        if (now !== value) {
          this._flip(slot,value);
        }
      }
    },
    _flip:function(slot,value) {
      slot.classList.remove('flip');
      slot.dataset.old = slot.dataset.now;
      slot.dataset.now = value;
      slot.offsetLeft;
      slot.classList.add('flip');
    }
  };
  return exports;
}());
var i=0,clocks = document.querySelectorAll('.clock'),l=clocks.length;
new Clock(clocks[0], 11, 24)
var lapse = toBday(11, 24);
console.log(lapse);
document.title = lapse.days + ' dias para el cumpleaños de Duca Delfin Ares';
//for (;i<l;i++) {
//  new Clock(clocks[i]);
//}
