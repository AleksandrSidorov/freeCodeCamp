/*
Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).
For this, check to see if the property defined in the second argument is present on every element of the collection.
Remember, you can access object properties through either dot notation or [] notation.

Here are some helpful links:

Object.hasOwnProperty()
Object.getOwnPropertyNames()
*/

function every(collection, pre) {

}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
