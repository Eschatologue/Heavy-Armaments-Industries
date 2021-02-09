//Gelatinizer
const gelatinizer = extendContent(GenericCrafter, "gelatinizer", {
	load() {
		this.super$load();
		this.regions = [];
		this.regions[0] = Core.atlas.find(this.name);
		this.regions[1] = Core.atlas.find(this.name + "-bottom");
		this.regions[2] = Core.atlas.find(this.name + "-liquid");
        this.regions[3] = Core.atlas.find(this.name + "-top");
	}
});
gelatinizer.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, gelatinizer, {
	draw() {
	    Draw.rect(gelatinizer.regions[1], this.x, this.y);
	    var liquid = gelatinizer.consumes.get(ConsumeType.liquid).liquid;
	    Drawf.liquid(gelatinizer.regions[2], this.x, this.y, this.liquids.get(liquid) / gelatinizer.liquidCapacity, Liquids.cryofluid.color);
		Draw.rect(gelatinizer.regions[3], this.x, this.y);
	}
});

//Plast
const combustionComp = extendContent(GenericCrafter, "combustion-compressor", {
	load() {
		this.super$load();
		this.regions = [];
		this.regions[0] = Core.atlas.find(this.name);
		this.regions[1] = Core.atlas.find(this.name + "-bottom");        
		this.regions[2] = Core.atlas.find(this.name + "-liquid");
    //  this.regions[3] = Core.atlas.find(this.name + "-rotator");       
		this.regions[4] = Core.atlas.find(this.name + "-top");
	}
});
combustionComp.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, combustionComp, {
	draw() {
	     Draw.rect(combustionComp.regions[1], this.x, this.y);
        var liquid = combustionComp.consumes.get(ConsumeType.liquid).liquid;
	    Drawf.liquid(combustionComp.regions[2], this.x, this.y, this.liquids.get(liquid) / combustionComp.liquidCapacity, Liquids.oil.color);
    //  Draw.rect(combustionComp.regions[3],this.x, this.y, this.totalProgress * 2)
		Draw.rect(combustionComp.regions[4], this.x, this.y);
	}
});

//Probably there's a better code for these