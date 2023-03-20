var TestColourEnums;
(function (TestColourEnums) {
    TestColourEnums[TestColourEnums["red"] = 45] = "red";
    TestColourEnums[TestColourEnums["green"] = 24] = "green";
    TestColourEnums["blue"] = "PlayWithBlue";
    TestColourEnums[TestColourEnums["black"] = 878.009] = "black";
    TestColourEnums[TestColourEnums["run"] = -34.44] = "run";
})(TestColourEnums || (TestColourEnums = {}));
for (var enumItems in TestColourEnums) {
    console.log("\nMixed Enums : " + enumItems);
}
console.log("\nGet Individual Item : " + TestColourEnums.run);
