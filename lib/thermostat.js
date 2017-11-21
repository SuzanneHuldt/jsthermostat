function Thermostat() {
  this.temp = 20
  this.min = 10
  this.max = 25

}

Thermostat.prototype.up = function(n){
  this.temp += n
  return this.temp <= this.max ? this.temp : this.max
}

Thermostat.prototype.down = function(n){
  this.temp -= n
  return this.temp >= this.min ? this.temp : this.min

}

Thermostat.prototype.powerSaveOn = function(){
  this.max = 25
}

Thermostat.prototype.powerSaveOff = function(){
  this.max = 32
}

Thermostat.prototype.resetTemp = function() {
  this.temp = 20
}

Thermostat.prototype.showTemp = function() {
  return this.temp
}

Thermostat.prototype.myTemp = function() {
  if(this.temp < 18) {
    return 'low-usage'
  } else if(this.temp < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
}
