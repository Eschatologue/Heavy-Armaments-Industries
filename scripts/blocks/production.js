//Gelatinizer
const gelatinizer = extendContent(GenericCrafter, "gelatinizer", {
	load() {
		this.super$load();
		this.regions = [];
		this.regions[0] = Core.atlas.find(this.name);
		this.regions[1] = Core.atlas.find(this.name + "-liquid");
		this.regions[2] = Core.atlas.find(this.name + "-top");
	}
});
gelatinizer.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, gelatinizer, {
	draw() {
	    Draw.rect(gelatinizer.regions[0], this.x, this.y);
	    var liquid = gelatinizer.consumes.get(ConsumeType.liquid).liquid;
	    Drawf.liquid(gelatinizer.regions[1], this.x, this.y, this.liquids.get(liquid) / gelatinizer.liquidCapacity, Liquids.cryofluid.color);
		Draw.rect(gelatinizer.regions[2], this.x, this.y);
	}
});