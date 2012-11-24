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
        while (-1 !== arr.indexOf(item)) {
            arr.splice(arr.indexOf(item),1);
        }
        return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
        while (-1 !== arr.indexOf(item)) {
            arr.splice(arr.indexOf(item),1);
        }
        return arr;
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
        var count = 0;
        for (var i=0;i<arr.length;i++) {
            if (arr[i] == item) {
                count++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var foundArr = [];
        var duplicatesArr = [];
        for (var i=0;i<arr.length;i++) {
            if(-1 == foundArr.indexOf(arr[i])){
                foundArr.push(arr[i]);
            } else {
                duplicatesArr.push(arr[i]);
            }
        }
        return duplicatesArr;
    },

    square : function(arr) {
        var squaredArray = [];
        for (var i=0;i<arr.length;i++) {
            squaredArray.push(arr[i] * arr[i]);
        }
        return squaredArray;
    },

    findAllOccurrences : function(arr, target) {
        var occurancesArr = [];
        for (var i=0;i<arr.length;i++) {
            if (arr[i] == target) {
                 occurancesArr.push(i);
            }
        }
        return occurancesArr;
    }
  };
});
