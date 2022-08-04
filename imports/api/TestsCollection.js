import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const TestsCollection = new Mongo.Collection('tests');

Meteor.methods({
    fetchTests() {
        return TestsCollection.find({}).fetch()
    },
    insertTest({ essai, id }) {
        TestsCollection.insert({
            essai,
            _id: id
        })
    },
    removeTest({ id }) {
        TestsCollection.remove(id)
    }
})

Meteor.publish('tests', function (id) {
    return TestsCollection.find()
});