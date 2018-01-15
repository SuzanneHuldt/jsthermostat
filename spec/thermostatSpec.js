
describe("Thermostat", function(){

  beforeEach(function(){
    thermostat = new Thermostat()
  });

  describe("#temperature", function(){
    it("haves a temperature of 20 degrees", function(){
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe("#up", function(){
    it("increases the temperature by arg", function(){
      thermostat.up(2);
      expect(thermostat.temp).toEqual(22);
    });
  });

  describe("#down", function(){
    it("decrease the temperature by arg", function(){
      thermostat.down(2);
      expect(thermostat.temp).toEqual(18);
    });
  });

  describe("#minimum", function(){
    it("wont go below 10", function(){
        thermostat.down(11)
        expect(thermostat.temp).toEqual(10);
    });
  });

  describe("#maximum", function(){
    it("wont go over 25", function(){
        thermostat.up(10)
        expect(thermostat.temp).toEqual(25);
    });
  });

  describe("#powersave on", function(){
    it("won't got over 25 with powersave on", function(){
        thermostat.up(10)
        expect(thermostat.temp).toEqual(25)
    });
  });

  describe("#powersave off", function(){
    it("won't got over 32 with powersave off", function(){
      thermostat.powerSaveSwitch();
      thermostat.up(30)
      expect(thermostat.temp).toEqual(32)
    });
  });

  describe("#reset", function(){
    it("resets temperature to 20", function(){
      thermostat.up();
      thermostat.resetTemp();
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe("#energyUsage", function(){

    it("returns low usage when temperature is below 18", function(){
        thermostat.down(5);
      expect(thermostat.energyUsage()).toEqual('low');
    });
    it("returns medium usage when temperature is below 25", function(){
      expect(thermostat.energyUsage()).toEqual('medium');
    });
    it("returns high usage when temperature is above 25", function(){
        thermostat.up(6)
      expect(thermostat.energyUsage()).toEqual('high');
    });
  });
});
