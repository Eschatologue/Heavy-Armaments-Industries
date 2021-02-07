//Percival
const t3_copter = extend(UnitType, "t3_copter", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect(
			"heavy-armaments-t3_copter-rotor", 		
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 
			Time.time * -14);
		Draw.rect(
			"heavy-armaments-t3_copter-rotor-outline", 		
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 
			Time.time * -14);
	}
});

//Galahad
const t4_copter = extend(UnitType, "t4_copter", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect(
			"heavy-armaments-t4_copter-rotor", 
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 5), 
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 5), 
			Time.time * -13
		);
		Draw.rect(
			"heavy-armaments-t4_copter-rotor-outline", 		
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 5), 
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 5), 
			Time.time * -13);
	}
});

//Lancelot
const t5_copter = extend(UnitType, "t5_copter", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect(
			"heavy-armaments-t5_copter-rotor", 
			unit.x + Angles.trnsx(unit.rotation - 90, 5, 0), 
			unit.y + Angles.trnsy(unit.rotation - 90, 5, 0), 
			Time.time * -13
		);
		Draw.rect(
			"heavy-armaments-t5_copter-rotor", 
			unit.x + Angles.trnsx(unit.rotation - 90, -5, 0), 
			unit.y + Angles.trnsy(unit.rotation - 90, -5, 0), 
			Time.time * -13
		);
		Draw.rect(
			"heavy-armaments-t5_copter-rotor-outline", 		
			unit.x + Angles.trnsx(unit.rotation - 90, 5, 0), 
			unit.y + Angles.trnsy(unit.rotation - 90, 5, 0), 
			Time.time * -13
		);
		Draw.rect(
			"heavy-armaments-t5_copter-rotor-outline", 		
			unit.x + Angles.trnsx(unit.rotation - 90, -5, 0), 
			unit.y + Angles.trnsy(unit.rotation - 90, -5, 0), 
			Time.time * -13
		);
	}
});
//Thanks to evl#8935 for helping me with these!!
//Need to figure out how to make this modular

//constructor
t3_copter.constructor = () => extend(UnitEntity, {});
t4_copter.constructor = () => extend(UnitEntity, {});
t5_copter.constructor = () => extend(UnitEntity, {});


