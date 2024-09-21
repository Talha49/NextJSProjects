import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    name: String,
    website: String,
    technologies: String,
    github: String,
},

{timestamps: true}
);



const Project = mongoose.models.Projects || mongoose.model("Projects", ProjectSchema);

export default Project;