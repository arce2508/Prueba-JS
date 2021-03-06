/*Problem 1
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

/*Constraints:
● 2 <= nums.length <= 103
● -109 <= nums[i] <= 109
● -109 <= target <= 109
● Only one valid answer exists.*/

/*nums = [2, 6, 103], target = 109,

nums[1] + nums[2] = 6 + 203 = 6

return [1, 2]*/

let twoSum = function (nums, target) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};



