


describe("#thermostat up", function() {
  thermostat1 = new Thermostat
  it("increases the temperature by argument amount", function() {
    expect(thermostat1.up(3)).toBe(23);
  });
});

describe("#thermostat down", function() {

  thermostat2 = new Thermostat

  it("decreases the temperature by argument amount", function() {

    expect(thermostat2.down(3)).toBe(17);
  });
});

describe("#thermostat minimum", function() {
  thermostat3 = new Thermostat
  it("temp does not go below min", function() {
    expect(thermostat3.down(11)).toBe(10);
  });
});

describe("#thermostat maximum", function() {
  thermostat4 = new Thermostat
  it("temp does not exceed max", function() {
    expect(thermostat4.down(11)).toBe(10);
  });
});

describe("#thermostat powersaveon", function() {
  thermostat4 = new Thermostat
  thermostat4.powerSaveOff()
  thermostat4.powerSaveOn()
  it("stops temp exceeding 25 max", function() {
    expect(thermostat4.up(20)).toBe(25);
  });
});

describe("#thermostat powersaveoff", function() {
  thermostat5 = new Thermostat
  thermostat5.powerSaveOff()
  it("allows temperature to exceed 25 up to 32 max", function() {
    expect(thermostat5.up(40)).toBe(32);
  });
});

describe("#thermostat reset", function() {
  thermostat6 = new Thermostat
  thermostat6.up(10)
  thermostat6.reset()
  it("resets the temperature to 20", function() {
    expect(thermostat6.temp.toBe(20);
  });
});
