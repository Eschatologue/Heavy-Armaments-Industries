
fromArray = [content("heavy-armaments-t3_copter"),content("heavy-armaments-t4_copter"),]
toArray = [content("heavy-armaments-t4_copter"),content("heavy-armaments-t5_copter"),]

var upgrade1 = new Seq([fromArray[0], toArray[0]]);
var upgrade2 = new Seq([fromArray[1], toArray[1]]);

Blocks.exponentialReconstructor.upgrades.add(upgrade1.toArray(UnitType));
Blocks.tetrativeReconstructor.upgrades.add(upgrade2.toArray(UnitType));
