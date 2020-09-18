// Rotary Compressor
const rotaryCompressor = extendContent(GenericCrafter, "rotary-compressor", {
    load(){
      this.bottomRegion = Core.atlas.find(this.name + "-bottom");
      this.rotatorRegion = Core.atlas.find(this.name + "-rotator");
      this.topRegion = Core.atlas.find(this.name + "-top");
    },
    generateIcons: function(){
      return [
        Core.atlas.find(this.name)
      ];
    },
    draw(tile){
      const entity = tile.ent();
      const f = Vars.tilesize;
      Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());
      Draw.rect(this.rotatorRegion, tile.drawx() + 0 / f, tile.drawy() - 0 / f, entity.totalProgress * -2);
      Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
    },
  });