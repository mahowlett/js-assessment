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
        //return arr1.concat(arr2);
        return arr;
    },
    
    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
        return arr.push(item);
    },

    truncate : function(arr) {
        return null;
    },

    concat : function(arr1, arr2) {
        for (var i=0;i<arr2.length;i++) {
            arr1 = arr1.push(arr2[i]);
        }
        return arr1;
;    },

    insert : function(arr, item, index) {

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
