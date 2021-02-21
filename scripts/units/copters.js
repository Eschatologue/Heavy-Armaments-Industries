//Berdivere
const t3A_copter = extend(UnitType, "t3A_copter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"heavy-armaments-t3A_copter-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
		Draw.rect(
			"heavy-armaments-t3A_copter-rotor-outline",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
	}
});

//Galahad
const t4A_copter = extend(UnitType, "t4A_copter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"heavy-armaments-t4A_copter-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 5),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 5),
			Time.time * -15
		);
		Draw.rect(
			"heavy-armaments-t4A_copter-rotor-outline",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 5),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 5),
			Time.time * -15);
	}
});

//Lancelot
const t5A_copter = extend(UnitType, "t5A_copter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"heavy-armaments-t5A_copter-rotor-1-1",
			unit.x + Angles.trnsx(unit.rotation - 90, 4, 5),
			unit.y + Angles.trnsy(unit.rotation - 90, 4, 5),
			Time.time * 18
		);
		Draw.rect(
			"heavy-armaments-t5A_copter-rotor-1-2",
			unit.x + Angles.trnsx(unit.rotation - 90, 4, 5),
			unit.y + Angles.trnsy(unit.rotation - 90, 4, 5),
			Time.time * 18
		);
		Draw.rect(
			"heavy-armaments-t5A_copter-rotor-2-1",
			unit.x + Angles.trnsx(unit.rotation - 90, -4, 5),
			unit.y + Angles.trnsy(unit.rotation - 90, -4, 5),
			Time.time * -18
		);
		Draw.rect(
			"heavy-armaments-t5A_copter-rotor-2-2",
			unit.x + Angles.trnsx(unit.rotation - 90, -4, 5),
			unit.y + Angles.trnsy(unit.rotation - 90, -4, 5),
			Time.time * -18
		);
	}
});
//Thanks to evl#8935 for helping me with these!!
//Need to figure out how to make this modular

//constructor
t3A_copter.constructor = () => extend(UnitEntity, {});
t4A_copter.constructor = () => extend(UnitEntity, {});
t5A_copter.constructor = () => extend(UnitEntity, {});