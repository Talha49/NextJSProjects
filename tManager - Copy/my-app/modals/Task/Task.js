// models/Task.js
import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    icon: {
        type: String, // Store the icon name or URL
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
});

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
