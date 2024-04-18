// Leetcode Medium Probem resolved

// Given an array nums with n objects colored red, white,
// or blue, sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent
//  the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort
// write function with Function sortColors(nums).

function sortColors(nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let ind = i;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[ind]) {
        ind = j;
      }
    }
    [nums[i], nums[ind]] = [nums[ind], nums[i]];
  }
  return nums;
}
