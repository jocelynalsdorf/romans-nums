describe('factorial', function() {
  it("returns the correct roman version of a single number ", function() {
    expect(roman(5)).to.equal("V");
  });

  it("returns the correct roman version of a number that has multiple roman numerals ", function() {
    expect(roman(55)).to.equal("LV");
  });
 
  it("returns the correct roman version of a number that has multiple roman numerals ", function() {
    expect(roman(19)).to.equal("XIX");
  });

  it("returns false if a number cannot be changed into Roman numeral", function() {
    expect(roman(19)).to.equal("XIX");
  });
});

