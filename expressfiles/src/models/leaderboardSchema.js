const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },    
    score: {
        type: Number,
        required: true,
      },
    category: 
    { type: String,
      required: true
     }

});

const Leader = mongoose.model('Leader', leaderboardSchema);

module.exports = Leader;
