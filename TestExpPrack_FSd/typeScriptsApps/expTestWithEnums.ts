enum TestColourEnums
{
    red=45,
    green=24,
    blue='PlayWithBlue',
    black=878.009,
    run=-34.44
}
for(var enumItems in TestColourEnums)
{
console.log("\nMixed Enums : "+enumItems);
}
console.log("\nGet Individual Item : "+TestColourEnums.run);