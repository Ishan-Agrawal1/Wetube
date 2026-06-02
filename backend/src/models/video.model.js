import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema({
    videoFile : {
        type : String, 
        required : [true, "Video is requied"]
    },
    thumbnail: {
        type : String, 
        required : [true, "Thumbnail is requied"]
    },
    title: {
        type : String, 
        required : [true, "Title is requied"]
    },
    description: {
        type : String, 
        required : [true, "Description is requied"]
    },
    duration: {
        type : Number,
        required: true
    },
    views: {
        type: Number,
        default : 0
    },
    isPublished: {
        type : Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
    
}, {timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)