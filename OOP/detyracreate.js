const veturaPrototype = {
    shfaqInfo() {
        console.log(`${this.marke} është prodhuar në vitin ${this.viti}.`);
    }
};

const krijoVeture = function(marke, viti) {
    const vetura = Object.create(veturaPrototype);
    vetura.marke = marke;
    vetura.viti = viti;
    return vetura;
};

const vetura1 = krijoVeture('Toyota', 2020);
vetura1.shfaqInfo(); 
