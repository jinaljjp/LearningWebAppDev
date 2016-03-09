function display(divnm, result) {
	"use strict";
    var ans = document.getElementById(divnm);
    ans.innerHTML = ans.innerHTML + result;
}

/* average of numbers */
var exercise_1 = function (nums) {
	"use strict";
    var sum = 0;
    nums.forEach(function (val) {
        sum = sum + val;
    });
    sum = sum / (nums.length);
    return sum;
};

/* largest number in the array.*/
var exercise_2 = function (nums) {
	"use strict";
    var largest = nums[0], i;
    for (i = 1; i < nums.length; i += 1) {
        if (largest < nums[i]) {
            largest = nums[i];
        }
    }
    return largest;
};

/*true for least one even number, false otherwise.*/
var exercise_3 = function (nums) {
	"use strict";
    var i;
    for (i = 0; i < nums.length; i += 1) {
        if (nums[i] % 2 === 0) {
            return true;
        }
    }
    return false;
};

/* true if every number is even, false otherwise.*/
var exercise_4 = function (nums) {
	"use strict";
    var i;
    for (i = 0; i < nums.length; i += 1) {
        if (nums[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
};

/*function that accepts two arguments—an array of strings and a string—and returns true if the string is contained in the array, false otherwise.*/
var arrayContains = function (strings, match) {
	"use strict";
    var i;
    for (i = 0; i < strings.length; i += 1) {
        if (strings[i] === match) {
            return true;
        }
    }
    return false;
};

/* function that is similar to the previous one, but returns true only if the array contains the given string at least twice.*/
var arrayContains2 = function (strings, match) {
	"use strict";
    var res = 0, i;
    for (i = 0; i < strings.length; i += 1) {
        if (strings[i] === match) {
            res += 1;
            if (res === 2) {
                return true;
            }
        }
    }
    return false;
};

/* function that is similar to the previous one, but returns true only if the array contains the given string at least thrice.*/
var arrayContains3 = function (strings, match) {
	"use strict";
    var res = 0, i;
    for (i = 0; i < strings.length; i += 1) {
        if (strings[i] === match) {
            res += 1;
            if (res === 3) {
                return true;
            }
        }
    }
    return false;
};

/* function that accepts three arguments and returns true if the array contains the element n times, where n is the third argument.*/
var arrayContainsNTimes = function (strings, match, n) {
	"use strict";
    var res = 0, i;
    for (i = 0; i < strings.length; i += 1) {
        if (strings[i] === match) {
            res += 1;
            if (res === n) {
                return true;
            }
        }
    }
    return false;
};


/* using underscore.js*/

/* function that accepts an array of numbers as an argument and returns the largest number in the array*/
var Max = function (nums) {
    return (_.max(nums));
	
};

/* function that accepts an array of numbers and returns true if it contains at least one even number,false otherwise*/
var Even = function (nums) {
	"use strict";
    var even;
    even = _.some(nums, function (num) {
        return num % 2 === 0;
    });
    return even;
};

/* function that accepts an array of numbers and returns true if every number is even, false otherwise*/
var AllEven = function (nums) {
	"use strict";
    var even;
    even = _.every(nums, function (num) {
        return num % 2 === 0;
    });
    return even;
};

/*Main Function*/
function homework3(){
	"use strict";
    display("exercise_1", exercise_1([6,9,66,20,5]));
    display("exercise_2", exercise_2([6,9,66,20,5]));
    display("exercise_3", exercise_3([11,7,3,20,5]));
    display("exercise_4", exercise_4([6,8,66,20,2]));
    display("arrayContains", arrayContains(["hello", "world"], "hello"));
    display("arrayContains2", arrayContains2(["hello", "welcome", "world", "hello"], "hello"));
    display("arrayContains3", arrayContains3(["learn", "web", "app", "web", "web"], "web"));
    display("arrayContainsNTimes", arrayContainsNTimes(["learn", "css", "html", "js", "learn","jquery", "learn", "WebApp", "learn"], "learn", 4));
    display("Max", Max([6,9,99,20]));
    display("Even", Even([6,9,66,20,5]));
    display("AllEven", AllEven([6,8,66,20,2]));
}
document.onload(homework3());