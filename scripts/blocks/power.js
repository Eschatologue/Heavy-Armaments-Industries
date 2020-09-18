//Combustion Turbine Generator
 const combustionTurbineGenerator = extendContent(ItemLiquidGenerator, "combustion-turbine-generator", {
	getItemEfficiency: function(item){
		return 0;
	},
	getLiquidEfficiency: function(liquid){
		return liquid.flammability;
	},
	init(){
		this.consumes.add(new ConsumeLiquidFilter(boolf(liquid => this.getLiquidEfficiency(liquid) >= this.minLiquidEfficiency), this.maxLiquidGenerate)).update(false).optional(true, false);
		this.super$init();
	},
	load(){
		this.region = Core.atlas.find(this.name);
		this.liquidRegion = Core.atlas.find(this.name + "-liquid");
		this.topRegion = Core.atlas.find(this.name + "-top");
	},
	draw(tile){
		var entity = tile.ent();
		const f = Vars.tilesize;
		Draw.rect(this.region, tile.drawx(), tile.drawy());
		
		Draw.color(entity.liquids.current().color);
		Draw.alpha(entity.liquids.currentAmount() / this.liquidCapacity);
		Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
		
		Draw.color(this.heatColor);
		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
		Draw.color();
	},
});