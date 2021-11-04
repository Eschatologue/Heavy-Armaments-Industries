let refresh = (unit) => {
	EntityMapping.nameMap.put(unit.name, unit.constructor);

	unit.classId = -1;
	for (var i in EntityMapping.idMap) {
		if (!EntityMapping.idMap[i]) {
			EntityMapping.idMap[i] = unit.constructor;
			unit.classId = i;
			return;
		}
	}
	throw new IllegalArgumentException(unit.name + " has no class ID");
};

//Berdivere
const t3A_copter = extend(UnitType, "t3A_copter", {});

//Galahad
const t4A_copter = extend(UnitType, "t4A_copter", {});

//Lancelot
const t5A_copter = extend(UnitType, "t5A_copter", {});
//Thanks to evl#8935 for helping me with these!!
//Need to figure out how to make this modular

//let p = Vars.content.units().find(u => u.localizedName == "Bedivere"); for(let i = 0; i <24; i++) p.spawn(Vars.player.x, Vars.player.y)

/*
hi Esc, I'm suffering trying to finetune everything and from making this aswel
    -sh1p
    
constructor zone
*/

let rotatSeq = Seq.with();

function rotator(x, y, name, topName, rotators, offset, spinSpeed, rotatoSpeed, rotatoMag, blurInterval, warmupRate, fallWarmupRate, rotate, clockwise){
    rotatSeq.add({
        pos: new Vec2(x, y),
        rotato: name,
        top: topName,
        rotators: rotators,
        offset: offset,
        spinSpeed: spinSpeed,
        rotateSpeed: rotatoSpeed,
        rotateMag: rotatoMag,
        blurInterval: blurInterval,
        warmupRate: warmupRate,
        fallWarmupRate: fallWarmupRate,
        rotate: rotate,
        clockwise: clockwise,
        load(){
            if(!this.rotato instanceof TextureRegion) this.rotato = Core.atlas.find(name);
            if(!this.top instanceof TextureRegion) this.top = Core.atlas.find(topName, Core.atlas.find("clear"));
        }
    });
    return rotatSeq.get(rotatSeq.size - 1);
}

Events.on(EventType.ContentInitEvent, e => {
    rotatSeq.each(s => s.load())
});

function copterUnitConstructor(unit, rotators, rotarBlurCap, fallRotateSpeed){
    unit.constructor = () => extend(UnitEntity, {
    initialisedRotars: false,
          rotators: Seq.with(),
          update(){
            this.super$update();
            if(!this.initialisedRotars){
                this.initialisedRotars = true;
                rotators.each(rotar => {
                    this.rotators.add({
                      type: rotar,
                      lastSpinSpeed: 0,
                      retardation: 0,
                      progress: 0,
                      swing: 0,
                      warmUp: 0
                    });
                });
            }
            this.rotators.each(rotar => {
                rotar.warmUp = Mathf.lerpDelta(rotar.warmUp, (this.dead ? 0 : 1), (this.dead || !this.isFlying() ? rotar.type.fallWarmupRate : rotar.type.warmupRate) * Time.delta);
                rotar.swing += Time.delta * rotar.type.spinSpeed * rotar.warmUp;
                rotar.progress = (rotar.progress + rotar.type.rotateSpeed/360 * rotar.warmUp) % 2;
                let progress = rotar.progress >= 1 ? 2 - rotar.progress : rotar.progress;
                rotar.retardation = (rotar.retardation + progress * progress * rotar.type.rotateMag * rotar.warmUp * Time.delta) % 360;
                rotar.lastSpinSpeed = (progress * progress * rotar.type.rotateMag + rotar.type.spinSpeed)/2.5 * rotar.warmUp;
                if(this.dead){
                    let speed = rotar.lastSpinSpeed * (rotar.type.clockwise ? 1 : -1);
                    this.impulse(Tmp.v1.trns(this.rotation, Math.abs(speed * 8)))
                    this.rotation += speed;
                 }
            });
          },
          draw(){
            this.super$draw();
            let rotation = 0;
            this.rotators.each(rotator => {
                Draw.z(Layer.flyingUnit);
              for(let i = 0; i < rotator.type.rotators; i++){
                for(let r = 0; r < Mathf.clamp(rotator.retardation/rotator.type.blurInterval, -rotarBlurCap, rotarBlurCap); r += 0.45){
                        Draw.alpha(1/(rotator.lastSpinSpeed - r));
                        rotation = (rotator.retardation + r * 10 + rotator.swing + 360/rotator.type.rotators * i) * (rotator.type.clockwise ? -1 : 1);
                        Tmp.v1.trns(rotation, rotator.type.offset);
                        Tmp.v2.set(rotator.type.pos).rotate(this.rotation - 90);
                        Tmp.v3.set(this.x + Tmp.v1.x + Tmp.v2.x, this.y + Tmp.v1.y + Tmp.v2.y);
                        Draw.blend(Blending.additive);
                        Draw.rect(rotator.type.rotato, Tmp.v3.x, Tmp.v3.y, rotator.type.rotate ? rotation : Tmp.v3.angleTo(this.x, this.y) - 90);
                        Draw.blend();
                        Draw.rect(rotator.type.rotato, Tmp.v3.x, Tmp.v3.y, rotator.type.rotate ? rotation : Tmp.v3.angleTo(this.x, this.y) - 90);
                    }
                }
                Draw.alpha(1);
                Draw.blend();
                Draw.rect(rotator.type.top, this.x, this.y, 90);
            });
          },
          classId(){
              return unit.classId;
          }
    });
    refresh(unit);
}

let rotato = "heavy-armaments-t3A_copter-rotor-full";
let rotatoTop = "clear";
let offset = 0;
let spinSpeed = 8, rotatoSpeed = 5, rotatoMagnitude = 15;
let fallRotateSpeed = 9.5;
let rotarBlurCap = 3.5;
let rotators = new Seq();
rotators.add(rotator(0, 0, rotato, rotatoTop, 1, offset, spinSpeed, rotatoSpeed, rotatoMagnitude, 5, 0.005, 0.0025, true, true));
t3A_copter.fallSpeed = 0.00275;
copterUnitConstructor(t3A_copter, rotators, rotarBlurCap, fallRotateSpeed);

rotato = "heavy-armaments-t4A_copter-rotor-full";
rotatoTop = "clear";
offset = 0;
spinSpeed = 6, rotatoSpeed = 5, rotatoMagnitude = 24;
fallRotateSpeed = 9.5;
rotarBlurCap = 3.5;
rotators = new Seq();
rotators.add(rotator(0, 0, rotato, rotatoTop, 1, offset, spinSpeed, rotatoSpeed, rotatoMagnitude, 5, 0.005, 0.0015, true, true));
t4A_copter.fallSpeed = 0.00175;
copterUnitConstructor(t4A_copter, rotators, rotarBlurCap, fallRotateSpeed);

rotato = "heavy-armaments-t5A_copter-rotor-1-full";
rotatoTop = "clear";
let rotato2 = "heavy-armaments-t5A_copter-rotor-2-full";
let rotatoTop2 = "clear";
offset = 0;
spinSpeed = 12, rotatoSpeed = 8, rotatoMagnitude = 26;
fallRotateSpeed = 9.5;
rotarBlurCap = 3.5;
rotators = Seq.with();
rotators.add(
        rotator(-21, 7.5, rotato, rotatoTop, 1, offset, spinSpeed, rotatoSpeed, rotatoMagnitude, 5, 0.005, 0.0035, true, false), 
        rotator(21, 7.5, rotato2, rotatoTop2, 1, offset, spinSpeed, rotatoSpeed, rotatoMagnitude, 5, 0.005, 0.0035, true, true)
);
t5A_copter.fallSpeed = 0.00325;
copterUnitConstructor(t5A_copter, rotators, rotarBlurCap, fallRotateSpeed);