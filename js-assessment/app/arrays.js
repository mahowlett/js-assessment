if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for (var i=0;i<arr.length;i++) {
            sum= sum+arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        for (var i=0;i<arr.length;i++) {
            if (item===arr[i]){
                var arr1 = arr.slice(0,i-2);
                var arr2 = arr.slice(i+1);
                arr = arr1.concat(arr2);
            }
        }
        return arr;
    },
    
    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        var newArray = arr1.concat(arr2);
        return newArray;
;    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
