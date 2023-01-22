module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "citations",
      mongoose.Schema(
        {
          auteur: String,
          libelle: String,
          num:String,
        },
        { timestamps: true }
      )
    );
    
  
    return Tutorial;
  };
  