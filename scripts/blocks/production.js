const { extend } = require("blocks");

//Gelatinizer
extend(GenericCrafter,
    "heavy-armaments-gelatinizer",{
        drawer: new DrawMixer()
    });
//Plast
extend(GenericCrafter,
    "heavy-armaments-combustion-compressor",{
        drawer: new DrawMixer()
    });