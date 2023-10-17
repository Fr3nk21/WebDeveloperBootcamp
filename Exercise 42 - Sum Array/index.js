// DEFINE YOUR FUNCTION BELOW:
function sumArray(nums) {

  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;

}

sumArray([1,2,3]);
sumArray([2,2,2,2]);
sumArray([50,50,1]);