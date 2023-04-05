const { Schema } = require("mongoose");

// 지역별
// bestPlaceToLive(살기 좋은 지역 찾기)
const GraphSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    locationSatisfaction: {
        type: new Schema({
            GuId: {
                type: Number,
                required: true,
            },
            hospitalCount: {
                type: Number,
                required: true,
            },
            totalHappiness: {
                type: Number,
                required: true,
            },
            cultureSatisfaction: {
                type: Number,
                required: true,
            },
            transitSatisfaction: {
                type: Number,
                required: true,
            },
            GuName: {
                type: String,
                required: true
            }
        }),
    },
});

module.exports = GraphSchema;