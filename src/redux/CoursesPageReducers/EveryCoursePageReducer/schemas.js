import { schema } from "normalizr";

const imageHeader = new schema.Entity("images");
const goal = new schema.Entity("goals")
const couch = new schema.Entity('couches');
const question = new schema.Entity('questions');
const course = new schema.Entity('courses', {
    header: {
        headerImages: [imageHeader],
    },
    goalsData: [goal],
    couches: [couch],
    questions: [question]
});

export const courseSchema = course;