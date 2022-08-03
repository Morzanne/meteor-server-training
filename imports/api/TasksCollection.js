import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const TasksCollection = new Mongo.Collection('tasks');

Meteor.methods({
    fetchTasks() {
        return TasksCollection.find({}).fetch()
    },
    insertTask({ text, id }) {
        TasksCollection.insert({
            text,
            _id: id
        })
    },
    removeTask({ id }) {
        TasksCollection.remove(id)
    }
})

Meteor.publish('tasks', function (id) {
    return TasksCollection.find()
});