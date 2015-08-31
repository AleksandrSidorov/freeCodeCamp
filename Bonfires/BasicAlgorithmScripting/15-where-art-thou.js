/*
Make a function that looks through an array (first argument) and returns an
array of all objects that have equivalent property values (second argument).

Here are some helpful links:
Global Object
Object.hasOwnProperty()
Object.keys()
*/

function where(collection, source) {
  var sourceProp = Object.keys(source)[0];
  var arr = collection.filter(function(collObj) {
    return collObj.hasOwnProperty(sourceProp)
        && collObj[sourceProp] === source[sourceProp];
  });
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null },
       { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], { 'a': 1 });
