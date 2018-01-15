 DEFAULT_MAX = 25;
 DEFAULT_MIN = 10;
 DEFAULT_TEMP = 20;
 DEFAULT_HIGH = 32;


function Thermostat() {
  this.temp = DEFAULT_TEMP;
  this.powerSave = true;
}

Thermostat.prototype.up = function(n){
  if(this.powerSaveStatus == true) {
    if(this.temp + n <= DEFAULT_MAX) {
      this.temp += n
    } else {
      this.temp = DEFAULT_MAX
    }
  } else {
    if(this.temp + n <= DEFAULT_HIGH) {
      this.temp += n
    } else {
      this.temp = DEFAULT_HIGH
    }
  }
}

Thermostat.prototype.down = function(n){
  if(this.temp - n >= DEFAULT_MIN) {
    this.temp -= n
  } else {
    this.temp = DEFAULT_MIN
  }
}

Thermostat.prototype.powerSaveSwitch = function(){
//  if(this.powerSave == false) {
    this.powerSave = true
  } else {
    this.powerSave = false
  }
}

Thermostat.prototype.powerSaveStatus = function(){
  return this.powerSave
}

Thermostat.prototype.resetTemp = function() {
  this.temp = DEFAULT_TEMP
}

Thermostat.prototype.showTemp = function() {
  return this.temp
}

Thermostat.prototype.energyUsage = function() {
  //if(this.showTemp < 18) {
    return 'low'
//  } else if(this.showTemp < 25) {
    return 'medium'
  } else {
    return 'high'
  }
}
