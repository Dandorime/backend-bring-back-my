import mongoose from "mongoose"
import TestSchema from "@/db/schema/test.schema";

const Test = mongoose.model('Test', TestSchema);

TestSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)
        this.created_at = currentDate;
    var sno = 1;
    var test = this;
    Test.find({}, function(err: any, users: string | any[]) {
        if (err) throw err;
        sno = users.length + 1;
        test.id = sno;
        next();
    });
});

export default Test