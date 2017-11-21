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
