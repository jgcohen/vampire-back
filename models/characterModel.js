import mongoose from 'mongoose'
// const SkillSchema = new mongoose.Schema({
//     value:{
//         type:Number,
//         //required: true,
//         min: 0,
//         max: 5,
//         default:0
        
//     },
//     specialities:{
//         type:String
//     }
// })

const CharacterSchema = new mongoose.Schema({
    owner:{
        type:String
    },
    name: {
        type: String,
        // required: true,
        trim: true,
    },
    sire: {
        type: String,
        trim: true,
    },
    concept: {
        type: String,
        trim: true,
    },
    ambition: {
        type: String,
        trim: true,
    },
    chronicle: {
        type: String,
        trim: true,
    },
    desire: {
        type: String,
        trim: true,
    },
    predator: {
        type: String,
        trim: true,
        //required:true
    },
    clan:{
        type: String,
        trim: true,
        lowercase: true,
        //required:true
    },
    generation: {
        type: Number,
        //required:true
    },
    strength: {
        type: Number,
        //required:true
    },
    dexterity: {
        type: Number,
        //required:true,
        min: 0,
        max: 5,
        default:0
    },
    stamina: {
        type: Number,
        //required:true,
        min: 0,
        max: 5,
        default:0
    },
    charisma: {
        type: Number,
        //required:true,
        min: 0,
        max: 5,
        default:0
    },
    manipulation: {
        type: Number,
        //required:true,
        min: 0,
        max: 5,
        default:0
    },
    composure: {
        type: Number,
        //required:true,
        min: 0,
        max: 5,
        default:0
    },
    intelligence: {
        type: Number,
        //required:true,
        min: 0,
        max: 5,
        default:0
    },
    wits: {
        type: Number,
        //required:true,
        min: 0,
        max: 5,
        default:0
    },
    resolve: {
        type: Number,
        //required:true,
        min: 0,
        max: 5,
        default:0    },
    health: {
        type: Number,
        //required:true,
        min: 0,
        max: 10,
       
    },
    willpower: {
        type: Number,
        //required:true,
        min: 0,
        max: 10,
  
    },
    athletics:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    athleticsspe:{
        type: String
    },
    brawl:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    brawlspe:{
        type: String
    },
    craft:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    craftspe:{
        type: String
    },
    drive:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    drivespe:{
        type: String
    },
    firearms:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    firearmsspe:{
        type: String
    },
    larceny:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    larcenyspe:{
        type: String
    },
    melee:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    meleespe:{
        type: String
    },
    stealth:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    stealthspe:{
        type: String
    },
    survival:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    survivalspe:{
        type: String
    },
    animalken:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    animalkenspe:{
        type: String
    },
    etiquette:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    etiquettespe:{
        type: String
    },
    insight:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    insightspe:{
        type: String
    },
    intimidation:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    intimidationspe:{
        type: String
    },
    leadership:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    leadershipspe:{
        type: String
    },
    performance:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    performancespe:{
        type: String
    },
    persuasion:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    persuasionspe:{
        type: String
    },
    streetwise:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    streetwisespe:{
        type: String
    },
    subterfuge:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    subterfugespe:{
        type: String
    },
    academics:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    academicsspe:{
        type: String
    },
    awareness:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    awarenessspe:{
        type: String
    },
    finance:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    financespe:{
        type: String
    },
    investigation:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    investigationspe:{
        type: String
    },
    medicine:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    medicinespe:{
        type: String
    },
    occult:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    occultspe:{
        type: String
    },
    politics:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    politicsspe:{
        type: String
    },
    science:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    sciencespe:{
        type: String
    },
    technology:{
        type: Number,
        //required: true,
        min: 0,
        max:5,
        default:0
    },
    technologyspe:{
        type: String
    },
    // athletics: {
    //     type: SkillSchema
    // },
    // brawl:{
    //     type: SkillSchema
    // },
    // craft:{
    //     type: SkillSchema
    // },
    // drive:{
    //     type: SkillSchema
    // },
    // firearms:{
    //     type: SkillSchema
    // },
    // larceny:{
    //     type: SkillSchema
    // },
    // melee:{
    //     type: SkillSchema
    // },
    // stealth:{
    //     type: SkillSchema
    // },
    // survival:{
    //     type: SkillSchema
    // },
    // animalken:{
    //     type: SkillSchema
    // },
    // etiquette:{
    //     type: SkillSchema
    // },
    // insight:{
    //     type: SkillSchema
    // },
    // intimidation:{
    //     type: SkillSchema
    // },
    // leadership:{
    //     type: SkillSchema
    // },
    // performance:{
    //     type: SkillSchema
    // },
    // persuasion:{
    //     type: SkillSchema
    // },
    // streetwise:{
    //     type: SkillSchema
    // },
    // subterfuge:{
    //     type: SkillSchema
    // },
    // academics:{
    //     type: SkillSchema
    // },
    // awarness:{
    //     type: SkillSchema
    // },
    // finance:{
    //     type: SkillSchema
    // },
    // investigation:{
    //     type: SkillSchema
    // },
    // medicine:{
    //     type: SkillSchema
    // },
    // occult:{
    //     type: SkillSchema
    // },
    // politics:{
    //     type: SkillSchema
    // },
    // science:{
    //     type: SkillSchema
    // },
    // technology:{
    //     type: SkillSchema
    // },
    resonance:{
        type: String
    },
    hunger:{
        type: Number,
        min: 0,
        max: 5,
        default: 1
    },
    humanity:{
        type:Number,
        min:0,
        max:10,
        default:7
    },

    discipline1:{
        type: String
    },
    
    discipline2:{
        type: String
    },
    discipline3:{
        type: String
    },
    superficialdamage:{
        type:Number,
        min:0,
        max:10,
        default: 0
    },
    aggravateddamage:{
        type:Number,
        min:0,
        max:10,
        default: 0
    },
    damagewillpower:{
        type:Number,
        min:0,
        max:10,
        default: 0
    },
    taintedhumanity:{
        type:Number,
        min:0,
        max:10,
        default: 0
    },
    discipline1value:{
        type:Number,
        min:0,
        max:5,
       
    },
    discipline2value:{
        type:Number,
        min:0,
        max:5,
      
    },
    discipline3value:{
        type:Number,
        min:0,
        max:5,
      
    },

    advantages:{
        type:String
    },
    flaws:{
        type:String
    },
    notes:{
        type:String
    }

})

const Character = mongoose.model('Character', CharacterSchema)

export default Character